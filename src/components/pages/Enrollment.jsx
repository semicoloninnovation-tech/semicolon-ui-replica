import { useState } from "react";
import SEO from '../common/SEO'
import { api } from "../../lib/api";

const eyebrow = "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-[#dce7ff] text-[0.84rem] tracking-[0.12em] uppercase";
const surface = "relative overflow-hidden rounded-[28px] border border-white/8 bg-gradient-to-b from-[rgba(15,18,27,0.94)] to-[rgba(8,10,15,0.98)] shadow-xl";
const inputClass = "w-full min-h-[3.4rem] px-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] text-white placeholder-white/30 focus:outline-none focus:border-white/20";
const btn = "inline-block px-7 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#0055ff] to-[#3a7cff] shadow-[0_18px_38px_rgba(0,85,255,0.28)] hover:scale-[1.03] duration-300";

const tracks = [
  { tag: "Track 01", title: "Programming Courses", text: "Python, Java, C++, JavaScript, live sessions, and practical coding assignments." },
  { tag: "Track 02", title: "Web & App Development", text: "Frontend, backend, mobile, hosting, and deployment techniques across modern tools." },
  { tag: "Track 03", title: "Artificial Intelligence & Machine Learning", text: "Data processing, model building, neural networks, and real-world AI applications." },
  { tag: "Track 04", title: "Robotics & Embedded Systems", text: "Microcontrollers, sensors, embedded C/C++, and hands-on automation exercises." },
  { tag: "Track 05", title: "Data Science & Analytics", text: "Python, Power BI, SQL, dashboards, predictive analytics, and project-based learning." },
  { tag: "Track 06", title: "Cloud Computing & DevOps", text: "AWS, Azure, GCP, CI/CD, Docker, Kubernetes, monitoring, and deployment workflows." },
];

const steps = [
  "Share your background, learning goals, and the track you are considering.",
  "Review fit, pacing, and program expectations in a short guidance step.",
  "Join the right batch with more clarity about the work, outcomes, and next milestones.",
];

function Enrollment() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const data = new FormData(form);
    const payload = {
      name: data.get("student-name"),
      email: data.get("student-email"),
      track: data.get("program"),
      background: data.get("experience"),
      message: data.get("goals")
    };

    setSubmitting(true);
    try {
      await api.submitEnrollment(payload);
      setSent(true);
      form.reset();
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
     <SEO
  title="Enroll in IT Training Programs | Semicolon Innovations Kerala"
  canonical="/enrollment"
  description="Enroll in Semicolon Innovations' industry-focused IT training programs in Kerala. Learn MERN Stack, Python, AI, Data Science, UI/UX, Digital Marketing, and more with expert mentors."
  keywords="IT training Kerala, software training Kerala, enroll IT course, MERN Stack course Kerala, Python training Kerala, AI course Kerala, Data Science training, UI UX course Kerala, Digital Marketing course, Semicolon Innovations"
/>

      <section className="pt-36 pb-16 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 glow-pulse bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,85,255,.14),transparent_45%)]" />
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className={eyebrow}>24/7</p>
            <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
              Enroll Now - Upgrade Your IT Skills.
            </h1>
            <p className="mt-4 text-[#a6aec3] leading-relaxed">
              Secure your spot in our upcoming batches. Whether you're a
              student, job seeker, or working professional, we have
              customized courses designed to help you grow.
            </p>
            <p className="mt-3 text-[#a6aec3] leading-relaxed">
              The current Semicolon tracks cover web development, software,
              mobile apps, AI, robotics, analytics, and cloud-focused
              workflows.
            </p>
          </div>

          <aside className={surface + " p-7"}>
            <h3 className="text-xl text-white">Let's Work Together</h3>
            <p className="mt-3 text-[#a6aec3] leading-relaxed">
              Choose the track that best matches your current stage and
              long-term goal.
            </p>
            <ul className="mt-5 grid gap-2 text-[#a6aec3] list-disc pl-5">
              <li>Project-based learning and mentor support</li>
              <li>Front-to-back technical exposure where relevant</li>
              <li>Career guidance after the learning journey</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="relative overflow-hidden py-16">
        <div className="pointer-events-none absolute inset-0 glow-pulse bg-[radial-gradient(ellipse_at_100%_50%,rgba(0,85,255,.10),transparent_40%)]" />
        <div className="max-w-7xl mx-auto px-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((t) => (
            <article key={t.title} className={surface + " p-6"}>
              <span className="text-sm text-[#8fb3ff] font-medium">{t.tag}</span>
              <strong className="block mt-1 text-lg text-white">{t.title}</strong>
              <p className="mt-3 text-[#a6aec3] leading-relaxed">{t.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-16 pb-28">
        <div className="pointer-events-none absolute inset-0 glow-pulse bg-[radial-gradient(ellipse_at_50%_100%,rgba(0,85,255,.12),transparent_45%)]" />
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-10 items-start">
          <article className={surface + " p-8"}>
            <p className={eyebrow}>Enrollment Flow</p>
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold leading-tight">
              Simple, clear, and built around fit.
            </h2>
            <div className="mt-6 grid gap-4">
              {steps.map((s, i) => (
                <div key={s} className="flex gap-4 items-start">
                  <span
                    className="
                    w-9 h-9 flex-shrink-0 rounded-full flex items-center justify-center
                    bg-gradient-to-br from-[#0055ff] to-[#3a7cff] text-white font-semibold
                    "
                  >
                    {i + 1}
                  </span>
                  <p className="text-[#a6aec3] leading-relaxed">{s}</p>
                </div>
              ))}
            </div>
          </article>

          <article className={surface + " p-8"}>
            <p className={eyebrow}>Fill The Form Out!</p>
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold leading-tight">
              Apply for a program.
            </h2>

            <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="grid gap-2">
                  <label htmlFor="student-name" className="text-white/90">Full Name</label>
                  <input id="student-name" name="student-name" type="text" placeholder="Your name" required className={inputClass} />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="student-email" className="text-white/90">Email</label>
                  <input id="student-email" name="student-email" type="email" placeholder="you@example.com" required className={inputClass} />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="program" className="text-white/90">Program</label>
                  <select id="program" name="program" className={inputClass}>
                    <option>Programming Courses</option>
                    <option>Web & App Development</option>
                    <option>Artificial Intelligence & Machine Learning</option>
                    <option>Robotics & Embedded Systems</option>
                    <option>Data Science & Analytics</option>
                    <option>Cloud Computing & DevOps</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="experience" className="text-white/90">Experience Level</label>
                  <select id="experience" name="experience" className={inputClass}>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Career Switcher</option>
                    <option>Working Professional</option>
                  </select>
                </div>
                <div className="grid gap-2 sm:col-span-2">
                  <label htmlFor="goals" className="text-white/90">Goals</label>
                  <textarea id="goals" name="goals" placeholder="What do you want to achieve through this program?" rows={5} className={inputClass + " min-h-[11rem] resize-vertical"} />
                </div>
              </div>

              <button type="submit" disabled={submitting} className={btn + " w-fit disabled:opacity-60 disabled:hover:scale-100"}>
                {submitting ? "Submitting..." : "Submit Interest"}
              </button>

              {error && <p className="text-rose-300">{error}</p>}

              {sent && (
                <p className="text-[#8fb3ff]">
                  Thanks! We'll reach out about your application shortly.
                </p>
              )}
            </form>
          </article>
        </div>
      </section>
    </>
  );
}

export default Enrollment;