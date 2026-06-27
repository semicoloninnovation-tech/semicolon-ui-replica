import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

export function signToken(admin) {
  return jwt.sign(
    { sub: admin._id.toString(), role: admin.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "7d" }
  );
}

export async function requireAuth(req, res, next) {
  try {
    const header = req.headers.authorization || "";
    const token = header.startsWith("Bearer ") ? header.slice(7) : null;

    if (!token) {
      return res.status(401).json({ error: "Missing or invalid Authorization header." });
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findById(payload.sub);

    if (!admin || !admin.active) {
      return res.status(401).json({ error: "Account not found or deactivated." });
    }

    req.admin = admin;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid or expired token." });
  }
}

export function requireRole(...roles) {
  return (req, res, next) => {
    if (!req.admin || !roles.includes(req.admin.role)) {
      return res.status(403).json({ error: "You do not have permission to do this." });
    }
    next();
  };
}
