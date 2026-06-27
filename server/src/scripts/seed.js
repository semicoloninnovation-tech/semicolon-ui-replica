import "dotenv/config";
import { connectDB } from "../db.js";
import mongoose from "mongoose";
import Admin from "../models/Admin.js";
import Project from "../models/Project.js";

const DEFAULT_PROJECTS = [
  {
    title: "Telemed Healthcare",
    client: "Telemed Healthcare",
    category: "Software Application",
    year: "2025",
    summary: "Healthcare software interface built for streamlined patient-facing workflows and digital operations.",
    description: "A healthcare-focused software experience designed with a clearer digital workflow, approachable UI, and operational ease.",
    tags: ["Healthcare", "Software", "Operations", "UX"],
    outcomes: ["Clean patient and operator interface structure", "Faster internal workflow clarity", "A polished healthcare-oriented product presentation"],
    image: "/assets/media/portfolio-live-exact/telemed-healthcare.jpg",
    featured: true,
    order: 0
  },
  {
    title: "CCP",
    client: "CCP",
    category: "Software Application",
    year: "2025",
    summary: "Software application card using the same animated visual direction as the live Semicolon portfolio.",
    description: "An internal operations and workflow software concept presented with the same live-site portfolio treatment.",
    tags: ["Software", "Enterprise", "Dashboard", "Systems"],
    outcomes: ["Live-style animated media card", "Sharper portfolio presentation for enterprise tooling"],
    image: "/assets/media/portfolio-live-exact/ccp.gif",
    order: 1
  },
  {
    title: "WellOne",
    client: "WellOne",
    category: "Web Application",
    year: "2025",
    summary: "Clean web application dashboard layout with a bright operational interface and dense data views.",
    description: "A web application experience presented through a crisp dashboard UI focused on clarity, productivity, and information density.",
    tags: ["Web App", "Dashboard", "Analytics", "SaaS"],
    outcomes: ["Dashboard-first project presentation", "High-legibility interface composition"],
    image: "/assets/media/portfolio-live-exact/wellone.webp",
    order: 2
  }
];

async function run() {
  await connectDB();

  const name = process.env.SEED_ADMIN_NAME || "Super Admin";
  const email = (process.env.SEED_ADMIN_EMAIL || "admin@semicolon.dev").toLowerCase();
  const password = process.env.SEED_ADMIN_PASSWORD || "ChangeMe123!";

  const existing = await Admin.findOne({ email });

  if (existing) {
    console.log(`[seed] Admin "${email}" already exists, skipping admin creation.`);
  } else {
    const passwordHash = await Admin.hashPassword(password);
    await Admin.create({ name, email, passwordHash, role: "superadmin" });
    console.log(`[seed] Created superadmin: ${email} / ${password}`);
    console.log("[seed] IMPORTANT: log in and change this password right away.");
  }

  const projectCount = await Project.countDocuments();
  if (projectCount === 0) {
    await Project.insertMany(DEFAULT_PROJECTS);
    console.log(`[seed] Inserted ${DEFAULT_PROJECTS.length} default portfolio projects.`);
  } else {
    console.log(`[seed] Projects already exist (${projectCount}), skipping.`);
  }

  await mongoose.disconnect();
  console.log("[seed] Done.");
}

run().catch((err) => {
  console.error("[seed] failed:", err);
  process.exit(1);
});
