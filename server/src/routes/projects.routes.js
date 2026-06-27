import { Router } from "express";
import Project from "../models/Project.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

function parseListField(value) {
  if (Array.isArray(value)) return value.map((v) => String(v).trim()).filter(Boolean);
  return String(value || "")
    .split(/\n|,/)
    .map((v) => v.trim())
    .filter(Boolean);
}

// Public: list projects for the live portfolio page
router.get("/", async (req, res) => {
  const projects = await Project.find().sort({ order: 1, createdAt: -1 });
  res.json({ projects });
});

router.get("/:id", async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) return res.status(404).json({ error: "Project not found." });
  res.json({ project });
});

// Everything below requires an authenticated admin
router.use(requireAuth);

router.post("/", async (req, res) => {
  const body = req.body || {};

  if (!body.title || !body.category || !body.summary || !body.description) {
    return res.status(400).json({
      error: "Title, category, summary, and description are required."
    });
  }

  if (body.featured) {
    await Project.updateMany({}, { featured: false });
  }

  const project = await Project.create({
    title: body.title,
    client: body.client || body.title,
    category: body.category,
    year: body.year || "2025",
    summary: body.summary,
    description: body.description,
    tags: parseListField(body.tags),
    outcomes: parseListField(body.outcomes),
    image: body.image || "",
    ctaLabel: body.ctaLabel || "Discuss Similar Project",
    ctaHref: body.ctaHref || "/contact",
    featured: Boolean(body.featured),
    order: body.order || 0
  });

  res.status(201).json({ project });
});

router.put("/:id", async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) return res.status(404).json({ error: "Project not found." });

  const body = req.body || {};

  if (body.featured) {
    await Project.updateMany({ _id: { $ne: project._id } }, { featured: false });
  }

  project.title = body.title ?? project.title;
  project.client = body.client ?? project.client;
  project.category = body.category ?? project.category;
  project.year = body.year ?? project.year;
  project.summary = body.summary ?? project.summary;
  project.description = body.description ?? project.description;
  if (body.tags !== undefined) project.tags = parseListField(body.tags);
  if (body.outcomes !== undefined) project.outcomes = parseListField(body.outcomes);
  project.image = body.image ?? project.image;
  project.ctaLabel = body.ctaLabel ?? project.ctaLabel;
  project.ctaHref = body.ctaHref ?? project.ctaHref;
  if (body.featured !== undefined) project.featured = Boolean(body.featured);
  if (body.order !== undefined) project.order = body.order;

  await project.save();
  res.json({ project });
});

router.patch("/:id/feature", async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) return res.status(404).json({ error: "Project not found." });

  await Project.updateMany({}, { featured: false });
  project.featured = true;
  await project.save();

  res.json({ project });
});

router.delete("/:id", async (req, res) => {
  const project = await Project.findByIdAndDelete(req.params.id);
  if (!project) return res.status(404).json({ error: "Project not found." });
  res.json({ success: true });
});

export default router;
