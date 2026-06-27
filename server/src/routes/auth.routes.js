import { Router } from "express";
import rateLimit from "express-rate-limit";
import Admin from "../models/Admin.js";
import { signToken, requireAuth } from "../middleware/auth.js";

const router = Router();

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many login attempts. Please try again later." }
});

router.post("/login", loginLimiter, async (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }

  const admin = await Admin.findOne({ email: String(email).toLowerCase().trim() });

  if (!admin || !admin.active) {
    return res.status(401).json({ error: "Invalid email or password." });
  }

  const ok = await admin.verifyPassword(password);
  if (!ok) {
    return res.status(401).json({ error: "Invalid email or password." });
  }

  admin.lastLoginAt = new Date();
  await admin.save();

  const token = signToken(admin);
  res.json({ token, admin: admin.toSafeJSON() });
});

router.get("/me", requireAuth, (req, res) => {
  res.json({ admin: req.admin.toSafeJSON() });
});

router.post("/change-password", requireAuth, async (req, res) => {
  const { currentPassword, newPassword } = req.body || {};

  if (!currentPassword || !newPassword || newPassword.length < 8) {
    return res.status(400).json({
      error: "Current password and a new password (min 8 characters) are required."
    });
  }

  const ok = await req.admin.verifyPassword(currentPassword);
  if (!ok) {
    return res.status(401).json({ error: "Current password is incorrect." });
  }

  req.admin.passwordHash = await Admin.hashPassword(newPassword);
  await req.admin.save();

  res.json({ success: true });
});

export default router;
