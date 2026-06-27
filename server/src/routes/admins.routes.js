import { Router } from "express";
import Admin from "../models/Admin.js";
import { requireAuth, requireRole } from "../middleware/auth.js";

const router = Router();

router.use(requireAuth, requireRole("superadmin"));

// List all admin users
router.get("/", async (req, res) => {
  const admins = await Admin.find().sort({ createdAt: -1 });
  res.json({ admins: admins.map((a) => a.toSafeJSON()) });
});

// Create a new admin user
router.post("/", async (req, res) => {
  const { name, email, password, role } = req.body || {};

  if (!name || !email || !password || password.length < 8) {
    return res.status(400).json({
      error: "Name, email, and a password (min 8 characters) are required."
    });
  }

  const existing = await Admin.findOne({ email: String(email).toLowerCase().trim() });
  if (existing) {
    return res.status(409).json({ error: "An admin with this email already exists." });
  }

  const passwordHash = await Admin.hashPassword(password);
  const admin = await Admin.create({
    name,
    email: String(email).toLowerCase().trim(),
    passwordHash,
    role: role === "superadmin" ? "superadmin" : "admin"
  });

  res.status(201).json({ admin: admin.toSafeJSON() });
});

// Update an admin user (name, role, active, password)
router.patch("/:id", async (req, res) => {
  const admin = await Admin.findById(req.params.id);
  if (!admin) return res.status(404).json({ error: "Admin not found." });

  const { name, role, active, password } = req.body || {};

  if (name !== undefined) admin.name = name;
  if (role !== undefined) admin.role = role === "superadmin" ? "superadmin" : "admin";
  if (active !== undefined) admin.active = Boolean(active);
  if (password) {
    if (password.length < 8) {
      return res.status(400).json({ error: "Password must be at least 8 characters." });
    }
    admin.passwordHash = await Admin.hashPassword(password);
  }

  // Prevent locking out the only superadmin
  if (admin.role !== "superadmin" || admin.active === false) {
    const superAdminCount = await Admin.countDocuments({ role: "superadmin", active: true });
    if (superAdminCount <= 1 && admin._id.equals(req.admin._id)) {
      return res.status(400).json({ error: "You cannot remove the last active superadmin." });
    }
  }

  await admin.save();
  res.json({ admin: admin.toSafeJSON() });
});

// Delete an admin user
router.delete("/:id", async (req, res) => {
  if (req.params.id === req.admin._id.toString()) {
    return res.status(400).json({ error: "You cannot delete your own account." });
  }

  const admin = await Admin.findByIdAndDelete(req.params.id);
  if (!admin) return res.status(404).json({ error: "Admin not found." });

  res.json({ success: true });
});

export default router;
