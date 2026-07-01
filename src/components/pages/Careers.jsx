import { Link } from "react-router-dom";
import SEO from '../common/SEO'

function Careers() {
  return (
    <>
      <SEO
        title='Careers'
        canonical='/careers'
        description="Join the Semicolon Innovations team. We're looking for passionate developers, designers, and trainers to help us build Kerala's tech future."
        keywords='IT jobs Kerala, developer jobs Kerala, careers Semicolon Innovations, tech jobs'
      />

      {/* Hero */}
      <section className="pt-36 pb-20 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 glow-pulse bg-[radial-gradient(ellipse_at_100%_0%,rgba(0,85,255,.14),transparent_45%)]" />
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-10">

          <div className="space-y-6">
            <p className="uppercase tracking-[4px] text-blue-400 text-sm">
              Join Our Team
            </p>
            <h1 className="text-5xl font-bold leading-tight">
              Build the future of technology and training with us.
            </h1>
            <p className="text-zinc-400 text-lg">
              We are on the lookout for passionate, creative, and driven
              individuals to be part of our growing IT family.
            </p>
            <p className="text-zinc-500">
              Explore career opportunities, internship pathways, and support
              systems built to help you grow with more confidence and stronger
              real-world experience.
            </p>
          </div>

          <aside className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Current focus areas</h3>
              <p className="text-zinc-400">
                Operations, training delivery, project work, and career acceleration.
              </p>
            </div>
            <div className="flex gap-3 mt-8 flex-wrap">
              {["Live Projects", "Mentorship", "Career Support"].map((item) => (
                <span key={item} className="bg-zinc-800 rounded-full px-4 py-2 text-sm">
                  {item}
                </span>
              ))}
            </div>
          </aside>

        </div>
      </section>

      {/* Internship */}
      <section className="py-20 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 glow-pulse bg-[radial-gradient(ellipse_at_0%_50%,rgba(0,85,255,.10),transparent_40%)]" />
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-8">

          <article className="bg-zinc-900 rounded-3xl p-8">
            <p className="text-blue-400 uppercase tracking-[4px] text-sm">Internship Program</p>
            <h2 className="text-3xl font-bold mt-4">
              Gain real-world exposure while building practical confidence.
            </h2>
            <p className="mt-5 text-zinc-400">Work on live projects within our in-house IT team.</p>
            <ul className="mt-5 space-y-3">
              <li>✓ Live Projects</li>
              <li>✓ Mentorship</li>
              <li>✓ Certified Experience</li>
            </ul>
          </article>

          <article className="bg-zinc-900 rounded-3xl p-8">
            <p className="text-blue-400 uppercase tracking-[4px] text-sm">Career Support</p>
            <h2 className="text-3xl font-bold mt-4">Support that continues until hiring.</h2>
            <p className="mt-5 text-zinc-400">Resume, LinkedIn, Interviews and Referrals.</p>
            <ul className="mt-5 space-y-3">
              <li>✓ Resume Building</li>
              <li>✓ Mock Interviews</li>
              <li>✓ Referrals</li>
            </ul>
          </article>

        </div>
      </section>

      {/* Opportunities */}
      <section className="py-20 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 glow-pulse bg-[radial-gradient(ellipse_at_100%_50%,rgba(0,85,255,.10),transparent_40%)]" />
        <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Office Admin", "IT Trainers", "Strong Communication", "Domain Expertise"].map((job) => (
            <div key={job} className="bg-zinc-900 rounded-3xl p-6">
              <span className="text-blue-400">Opportunity</span>
              <h3 className="font-semibold text-2xl mt-4">{job}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Apply */}
      <section className="py-20 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 glow-pulse bg-[radial-gradient(ellipse_at_50%_100%,rgba(0,85,255,.12),transparent_45%)]" />
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-8">

          <article className="bg-zinc-900 rounded-3xl p-8">
            <p className="text-blue-400 uppercase tracking-[4px] text-sm">Apply</p>
            <h2 className="text-4xl font-bold mt-4">Ready to take the next step?</h2>
          </article>

          <article className="bg-zinc-900 rounded-3xl p-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold">Email</h3>
                <p>semicoloninnovation@gmail.com</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Phone</h3>
                <p>+91 7012217612</p>
              </div>
              <div className="flex gap-4">
                <Link to="/contact" className="bg-blue-600 px-6 py-3 rounded-xl">
                  Apply
                </Link>
                <Link to="/contact" className="border border-zinc-700 px-6 py-3 rounded-xl">
                  Contact
                </Link>
              </div>
            </div>
          </article>

        </div>
      </section>

    </>
  );
}

export default Careers;