import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../common/Reveal";
import { api } from "../../lib/api";

import telemed from "../../assets/media/portfolio-live-exact/telemed-healthcare.jpg";
import ccp from "../../assets/media/portfolio-live-exact/ccp.gif";
import wellone from "../../assets/media/portfolio-live-exact/wellone.webp";
import chanceapp from "../../assets/media/portfolio-live-exact/chanceapp.webp";
import moca from "../../assets/media/portfolio-live-exact/moca.png";
import deltachase from "../../assets/media/portfolio-live-exact/deltachase.png";
import realtonIt from "../../assets/media/portfolio-live-exact/realton-it.png";

// Bundled fallback images for the original showcase projects, keyed by title.
const LOCAL_IMAGE_MAP = {
  "telemed healthcare": telemed,
  ccp,
  wellone,
  chanceapp,
  moca,
  deltachase,
  "realton it": realtonIt
};

const FALLBACK_PROJECTS = [
  { title: "Telemed Healthcare", year: "2025", image: telemed },
  { title: "CCP", year: "2025", image: ccp, viewNow: true },
  { title: "WellOne", year: "2025", image: wellone },
  { title: "ChanceApp", year: "2025", image: chanceapp },
  { title: "MOCA", year: "2024", image: moca },
  { title: "Deltachase", year: "2024", image: deltachase },
  { title: "Realton IT", year: "2025", image: realtonIt }
];

function resolveImage(project) {
  const key = String(project.title || "").toLowerCase().trim();
  const localMatch = LOCAL_IMAGE_MAP[key];

  // Only trust the DB image if it's a real, fetchable URL (http/https or
  // a data URI) or an uploaded path under /uploads. Internal placeholder
  // paths like "/assets/media/..." from the seed data aren't servable by
  // the frontend, so fall back to the bundled local image in that case.
  const isRealUrl = project.image && /^(https?:\/\/|data:)/.test(project.image);

  if (isRealUrl) return project.image;
  if (localMatch) return localMatch;
  return project.image || telemed;
}

function PortfolioGrid() {
  const [projects, setProjects] = useState(FALLBACK_PROJECTS);

  useEffect(() => {
    api
      .listProjects()
      .then((data) => {
        if (data.projects?.length) {
          setProjects(
            data.projects.map((p) => ({
              id: p._id,
              title: p.title,
              year: p.year,
              image: resolveImage(p),
              ctaHref: p.ctaHref
            }))
          );
        }
      })
      .catch(() => {
        // Backend unavailable - keep showing the static fallback projects.
      });
  }, []);

  return (
    <section className="pb-28 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 glow-pulse bg-[radial-gradient(ellipse_at_0%_50%,rgba(0,85,255,.10),transparent_40%)]" />

      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.id || project.title} type="reveal-scale" delay={String(((index % 2) + 1) * 100)}>
              <Link
                to={project.ctaHref || "/contact"}
                className="
                group relative block overflow-hidden rounded-[28px] border border-white/10
                bg-[linear-gradient(180deg,rgba(15,18,27,0.94),rgba(8,10,15,0.98))]
                duration-300 hover:-translate-y-2
                "
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover duration-500 group-hover:scale-105"
                  />
                </div>

                {project.viewNow && (
                  <span
                    className="
                    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    "
                  >
                    View Now
                  </span>
                )}

                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-6 py-5 bg-gradient-to-t from-black/80 to-transparent">
                  <strong className="text-white text-lg">{project.title}</strong>
                  <span className="text-white/60 text-sm">{project.year}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioGrid;