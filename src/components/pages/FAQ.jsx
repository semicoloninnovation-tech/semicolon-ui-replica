import { Link } from "react-router-dom";

import FAQSection from "../home/FAQ";

const eyebrow = "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-[#dce7ff] text-[0.84rem] tracking-[0.12em] uppercase";
const surface = "relative overflow-hidden rounded-[28px] border border-white/8 bg-gradient-to-b from-[rgba(15,18,27,0.94)] to-[rgba(8,10,15,0.98)] shadow-xl";
const btn = "inline-block px-7 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#0055ff] to-[#3a7cff] shadow-[0_18px_38px_rgba(0,85,255,0.28)] hover:scale-[1.03] duration-300";
const btnGhost = "inline-block px-7 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 duration-300 font-semibold";

function FAQPage() {
  return (
    <>
      <section className="pt-36 pb-16 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 glow-pulse bg-[radial-gradient(ellipse_at_0%_0%,rgba(0,85,255,.14),transparent_45%)]" />
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className={eyebrow}>Frequently Asked Questions</p>
            <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
              Quick answers to the most common inquiries.
            </h1>
            <p className="mt-4 text-[#a6aec3] leading-relaxed">
              This page keeps the current Semicolon question set and
              translates it into a clean local FAQ flow.
            </p>
          </div>

          <aside className={surface + " p-7"}>
            <h3 className="text-xl text-white">What this covers</h3>
            <p className="mt-3 text-[#a6aec3] leading-relaxed">
              Services, project delivery, training tracks, certifications,
              placements, and getting started.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {["Services", "Training", "Careers"].map((c) => (
                <span
                  key={c}
                  className="text-xs uppercase tracking-wider text-[#a6aec3] border border-white/10 rounded-full px-3 py-1"
                >
                  {c}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <FAQSection compact />

      <section className="relative overflow-hidden py-16 pb-28">
        <div className="pointer-events-none absolute inset-0 glow-pulse bg-[radial-gradient(ellipse_at_50%_100%,rgba(0,85,255,.12),transparent_45%)]" />
        <div className="max-w-7xl mx-auto px-5">
          <div className={surface + " p-10 flex flex-col lg:flex-row items-center justify-between gap-8"}>
            <div>
              <p className={eyebrow}>Need More Clarity?</p>
              <h2 className="mt-4 text-2xl md:text-3xl font-semibold leading-tight">
                Talk through your project, training path, or career
                questions with us.
              </h2>
              <p className="mt-3 text-[#a6aec3] leading-relaxed max-w-xl">
                We can help you translate questions into a clear next step
                with a fully independent local build.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className={btn}>Contact Us</Link>
              <Link to="/services" className={btnGhost}>Explore Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQPage;