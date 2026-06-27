import { Router } from "express";
import rateLimit from "express-rate-limit";
import ContactLead from "../models/ContactLead.js";
import { requireAuth } from "../middleware/auth.js";
import { notifyNewContact } from "../mailer.js";

const router = Router();

const submitLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many submissions. Please try again later." }
});

// Public: submit the contact form
router.post("/", submitLimiter, async (req, res) => {
  const { name, email, phone, state, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  const lead = await ContactLead.create({ name, email, phone, state, subject, message });

  notifyNewContact(lead); // fire-and-forget, never blocks the response

  res.status(201).json({ success: true, id: lead._id });
});

// Admin: list / manage leads
router.get("/", requireAuth, async (req, res) => {
  const leads = await ContactLead.find().sort({ createdAt: -1 });
  res.json({ leads });
});

router.patch("/:id", requireAuth, async (req, res) => {
  const lead = await ContactLead.findById(req.params.id);
  if (!lead) return res.status(404).json({ error: "Lead not found." });

  if (req.body?.status) lead.status = req.body.status;
  await lead.save();
  res.json({ lead });
});

router.delete("/:id", requireAuth, async (req, res) => {
  const lead = await ContactLead.findByIdAndDelete(req.params.id);
  if (!lead) return res.status(404).json({ error: "Lead not found." });
  res.json({ success: true });
});

export default router;