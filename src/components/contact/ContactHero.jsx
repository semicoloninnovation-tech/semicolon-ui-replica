import { useState } from "react";
import HeroGlow from "../common/HeroGlow";

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi",
];

const inputClass = `
w-full min-h-[3.4rem] px-4 rounded-2xl border border-white/[0.06]
bg-white/[0.03] text-white placeholder-white/30
focus:outline-none focus:border-white/20
`;

function ContactIcon({ name }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (name === "mail") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (name === "phone") {
    return (
      <svg {...common}>
        <path d="M6.6 10.8a14 14 0 0 0 6.6 6.6l2.2-2.2a1.5 1.5 0 0 1 1.6-.35c1.2.45 2.5.7 3.8.75a1.5 1.5 0 0 1 1.4 1.5v3.4a1.5 1.5 0 0 1-1.5 1.5C12.6 22.35 1.65 11.4 1.65 1.85A1.5 1.5 0 0 1 3.15.35h3.4a1.5 1.5 0 0 1 1.5 1.4c.05 1.3.3 2.6.75 3.8a1.5 1.5 0 0 1-.35 1.6Z" />
      </svg>
    );
  }

  if (name === "pin") {
    return (
      <svg {...common}>
        <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }

  return null;
}

function ContactHero() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 4000);
  };

  return (
    <section className="pt-36 pb-20 relative overflow-hidden">
      <HeroGlow />

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-[#dce7ff] text-sm uppercase">
            <span>24/7</span>
            <span>Let's Work Together</span>
          </p>

          <h1 className="mt-5 text-4xl md:text-5xl font-bold text-white">
            Have Questions?{" "}
            <span className="text-blue-400">
              We're Here to Help
            </span>
          </h1>

          <p className="mt-5 text-zinc-400">
            Whether you're curious about our services,
            need technical support or want to understand
            how we can help your business.
          </p>

          {/* FIXED */}
          <a
            href="#contact-shell"
            className="inline-block mt-6 px-7 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#0055ff] to-[#3a7cff]"
          >
            Fill The Form Out!
          </a>
        </div>


        {/* Form */}
        <div
          id="contact-shell"
          className="mt-14 grid lg:grid-cols-[1.4fr_1fr] gap-8"
        >

          <article className="rounded-3xl border border-white/10 bg-black/40 p-7">

            <form
              onSubmit={handleSubmit}
              className="grid gap-5"
            >

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  placeholder="First Name"
                  required
                  className={inputClass}
                />

                <input
                  placeholder="Last Name"
                  className={inputClass}
                />

                <input
                  type="email"
                  placeholder="Email"
                  required
                  className={inputClass}
                />

                <input
                  placeholder="Phone"
                  required
                  className={inputClass}
                />

                <select
                  required
                  className={inputClass}
                >
                  <option value="">
                    Select State
                  </option>

                  {states.map((s) => (
                    <option
                      key={s}
                      value={s}
                    >
                      {s}
                    </option>
                  ))}
                </select>

                <input
                  placeholder="Place"
                  required
                  className={inputClass}
                />

              </div>

              <textarea
                rows={5}
                required
                placeholder="Message..."
                className={`${inputClass} min-h-[180px]`}
              />

              <button
                type="submit"
                className="px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 duration-300 text-white w-fit"
              >
                Submit Now
              </button>

              {sent && (
                <p className="text-blue-400">
                  Thanks! We'll get back to you shortly.
                </p>
              )}

            </form>

          </article>

        </div>

      </div>
    </section>
  );
}

export default ContactHero;