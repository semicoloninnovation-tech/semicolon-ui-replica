import { Link } from "react-router-dom";
import SEO from '../common/SEO'

import womanLaptop from "../../assets/media/home-woman-laptop.png";

const dev = [
  { tag: "Web", title: "Web Development", text: "Responsive, modern, and secure websites and web applications with backend integration." },
  { tag: "Mobile", title: "Android & iOS Development", text: "Native and cross-platform apps built for performance, visibility, and smoother release support." },
  { tag: "Stack", title: "Full Stack Development", text: "HTML, JavaScript, React, PHP, Laravel, databases, APIs, Git, and deployment workflows." },
  { tag: "Consulting", title: "IT Consulting", text: "Technology strategy, software recommendations, infrastructure planning, and process optimization." },
  { tag: "Automation", title: "Automation Solutions", text: "Workflow automation, bots, API integrations, and business intelligence dashboards." },
  { tag: "Support", title: "Enterprise Support & Maintenance", text: "Continuous system monitoring, performance improvements, and dependable support beyond launch." },
];

const programs = [
  { title: "Programming Courses", text: "Python, Java, C++, JavaScript, projects, live coding sessions, and mentorship." },
  { title: "Web & App Development", text: "Frontend, backend, mobile, hosting, and deployment techniques across modern stacks." },
  { title: "Artificial Intelligence & Machine Learning", text: "Data preprocessing, model building, neural networks, and real-time AI projects." },
  { title: "Robotics & Embedded Systems", text: "Arduino, Raspberry Pi, sensor integration, embedded programming, and automation." },
  { title: "Data Science & Analytics", text: "Python, Power BI, SQL, dashboards, big data thinking, and predictive analytics." },
  { title: "Cloud Computing & DevOps", text: "AWS, Azure, GCP, CI/CD pipelines, Docker, Kubernetes, monitoring, and scalability techniques." },
];

const eyebrow = "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-[#dce7ff] text-[0.84rem] tracking-[0.12em] uppercase";
const surface = "relative overflow-hidden rounded-[28px] border border-white/8 bg-gradient-to-b from-[rgba(15,18,27,0.94)] to-[rgba(8,10,15,0.98)] shadow-xl";
const gradientText = "bg-gradient-to-b from-white via-[#e8efff] to-[#90b0ff] bg-clip-text text-transparent";
const btn = "inline-block px-7 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#0055ff] to-[#3a7cff] shadow-[0_18px_38px_rgba(0,85,255,0.28)] hover:scale-[1.03] duration-300";
const btnGhost = "inline-block px-7 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 duration-300 font-semibold";

function Services() {
  return (
    <>
      <SEO
  title="IT Services | Software Development, AI & Web Solutions | Semicolon Innovations"
  canonical="/services"
  description="Explore Semicolon Innovations' professional IT services, including custom software development, web and mobile app development, AI solutions, UI/UX design, digital marketing, cloud services, and IT consulting in Kerala."
  keywords="IT services Kerala, software development company Kerala, web development services, mobile app development Kerala, AI solutions Kerala, UI UX design Kerala, digital marketing services Kerala, cloud solutions Kerala, IT consulting Kerala, Semicolon Innovations"
/>
      <section className="pt-36 pb-20 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 glow-pulse bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,85,255,.14),transparent_45%)]" />
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className={eyebrow}>Our Services</p>
            <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
              Innovate. Educate. Elevate.
            </h1>
            <p className="mt-4 text-[#a6aec3] leading-relaxed">
              We offer end-to-end digital solutions and professional IT
              education designed to drive growth and innovation.
            </p>
            <p className="mt-3 text-[#a6aec3] leading-relaxed">
              From cutting-edge software and app development to
              industry-relevant training programs and certifications, our
              services are built to elevate your business and career.
            </p>
          </div>

          <aside className={surface + " p-7"}>
            <h3 className="text-xl text-white">Built around practical outcomes</h3>
            <p className="mt-3 text-[#a6aec3] leading-relaxed">
              Solutions and programs shaped for maintainability, adoption,
              and long-term growth.
            </p>
            <ul className="mt-5 grid gap-2 text-[#a6aec3] list-disc pl-5">
              <li>Product and delivery support from strategy to launch</li>
              <li>Modern web, mobile, cloud, and automation capabilities</li>
              <li>Career-focused training with project-based learning</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="relative overflow-hidden py-16">
        <div className="pointer-events-none absolute inset-0 glow-pulse bg-[radial-gradient(ellipse_at_0%_50%,rgba(0,85,255,.10),transparent_40%)]" />
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-[1fr_1fr] gap-8 items-start">
            <div>
              <p className={eyebrow}>Development</p>
              <h2 className="mt-4 text-2xl md:text-3xl font-semibold leading-tight">
                Digital solutions for modern products and operations.
              </h2>
            </div>
            <p className="text-[#a6aec3] leading-relaxed">
              We combine strong UI thinking, robust backend planning, and
              delivery discipline to help businesses move from concept to
              working systems.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dev.map((d) => (
              <article key={d.title} className={surface + " p-6"}>
                <span className="text-sm text-[#8fb3ff] font-medium">{d.tag}</span>
                <strong className="block mt-1 text-lg text-white">{d.title}</strong>
                <p className="mt-3 text-[#a6aec3] leading-relaxed">{d.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16">
        <div className="pointer-events-none absolute inset-0 glow-pulse bg-[radial-gradient(ellipse_at_100%_50%,rgba(0,85,255,.10),transparent_40%)]" />
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-10 items-center">
          <article className={surface + " p-8"}>
            <p className={eyebrow}>Training Center</p>
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold leading-tight">
              Programs that build visible skill, not just passive knowledge.
            </h2>
            <p className="mt-4 text-[#a6aec3] leading-relaxed">
              Our training tracks combine instructor-led sessions, practical
              assignments, projects, and career support so learners leave
              with stronger capability and clearer momentum.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link to="/enrollment" className={btn}>Enroll Now</Link>
              <Link to="/careers" className={btnGhost}>Career Pathways</Link>
            </div>
          </article>

          <article className={surface}>
            <img src={womanLaptop} alt="Training and mentorship at Semicolon" className="w-full h-full object-cover" />
          </article>
        </div>
      </section>

      <section className="relative overflow-hidden py-16">
        <div className="pointer-events-none absolute inset-0 glow-pulse bg-[radial-gradient(ellipse_at_0%_50%,rgba(0,85,255,.10),transparent_40%)]" />
        <div className="max-w-7xl mx-auto px-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p) => (
            <article key={p.title} className={surface + " p-6"}>
              <span className="text-sm text-[#8fb3ff] font-medium">Track</span>
              <strong className="block mt-1 text-lg text-white">{p.title}</strong>
              <p className="mt-3 text-[#a6aec3] leading-relaxed">{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-16 pb-28">
        <div className="pointer-events-none absolute inset-0 glow-pulse bg-[radial-gradient(ellipse_at_50%_100%,rgba(0,85,255,.12),transparent_45%)]" />
        <div className="max-w-7xl mx-auto px-5">
          <div className={surface + " p-10 flex flex-col lg:flex-row items-center justify-between gap-8"}>
            <div>
              <p className={eyebrow}>Start a Conversation</p>
              <h2 className="mt-4 text-2xl md:text-3xl font-semibold leading-tight">
                Need a delivery partner, a training plan, or both?
              </h2>
              <p className="mt-3 text-[#a6aec3] leading-relaxed max-w-xl">
                We can help you scope the right software path, the right
                learning track, or a combined roadmap that supports both
                business growth and team capability.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className={btn}>Contact Us</Link>
              <Link to="/portfolio" className={btnGhost}>View Portfolio</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;