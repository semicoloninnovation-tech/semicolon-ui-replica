import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    client: { type: String, trim: true },
    category: { type: String, required: true, trim: true },
    year: { type: String, default: "2025" },
    summary: { type: String, required: true },
    description: { type: String, required: true },
    tags: { type: [String], default: [] },
    outcomes: { type: [String], default: [] },
    image: { type: String, default: "" },
    ctaLabel: { type: String, default: "Discuss Similar Project" },
    ctaHref: { type: String, default: "/contact" },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
