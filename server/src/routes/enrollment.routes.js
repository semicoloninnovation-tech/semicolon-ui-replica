import { Router } from "express";
import rateLimit from "express-rate-limit";
import EnrollmentLead from "../models/EnrollmentLead.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

const submitLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many submissions. Please try again later." }
});

// Public: submit the enrollment form
router.post("/", submitLimiter, async (req, res) => {
  const { name, email, phone, track, background, message } = req.body || {};

  if (!name || !email || !track) {
    return res.status(400).json({ error: "Name, email, and track are required." });
  }

  const lead = await EnrollmentLead.create({ name, email, phone, track, background, message });
  res.status(201).json({ success: true, id: lead._id });
});

// Admin: list / manage leads
router.get("/", requireAuth, async (req, res) => {
  const leads = await EnrollmentLead.find().sort({ createdAt: -1 });
  res.json({ leads });
});

router.patch("/:id", requireAuth, async (req, res) => {
  const lead = await EnrollmentLead.findById(req.params.id);
  if (!lead) return res.status(404).json({ error: "Lead not found." });

  if (req.body?.status) lead.status = req.body.status;
  await lead.save();
  res.json({ lead });
});

router.delete("/:id", requireAuth, async (req, res) => {
  const lead = await EnrollmentLead.findByIdAndDelete(req.params.id);
  if (!lead) return res.status(404).json({ error: "Lead not found." });
  res.json({ success: true });
});

export default router;
