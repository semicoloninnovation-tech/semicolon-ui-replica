import { useState } from "react";
import HeroGlow from "../common/HeroGlow";
import { api } from "../../lib/api";

const states = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat",
  "Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh",
  "Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab",
  "Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh",
  "Uttarakhand","West Bengal","Delhi",
];

const inputClass = `
w-full min-h-[3.4rem] px-4 rounded-2xl border border-white/[0.06]
bg-white/[0.03] text-white placeholder-white/30
focus:outline-none focus:border-white/20
`;

function ContactHero() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const data = new FormData(form);
    const payload = {
      name: [data.get("first_name"), data.get("last_name")].filter(Boolean).join(" "),
      email: data.get("email"),
      phone: data.get("phone"),
      state: data.get("state"),
      subject: data.get("place"),
      message: data.get("message")
    };

    setSubmitting(true);
    try {
      await api.submitContact(payload);
      setSent(true);
      form.reset();
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="pt-36 pb-20 relative overflow-hidden" id="contact-form">
      <HeroGlow/>
      <div className="pointer-events-none absolute inset-0 glow-pulse bg-[radial-gradient(ellipse_at_100%_0%,rgba(0,85,255,.14),transparent_45%)]" />
      <div className="max-w-7xl mx-auto px-5">
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="
            inline-flex items-center gap-2 px-3 py-1.5 rounded-full
            border border-white/10 text-[#dce7ff] text-[0.84rem]
            tracking-[0.12em] uppercase
            "
          >
            <span>24/7</span>
            <span>Let's Work Together</span>
          </p>

          <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
            Have Questions?{" "}
            <span
              className="
              bg-gradient-to-b from-white via-[#e8efff] to-[#90b0ff]
              bg-clip-text text-transparent
              "
            >
              We're Here to Help
            </span>
          </h1>

          <p className="mt-4 text-[#a6aec3] leading-relaxed">
            Whether you're curious about our services, need technical
            support, or want to understand how we can help your business —
            our team is here to assist you every step of the way.
          </p>

          <a
            href="#contact-shell"
            className="
            inline-block mt-6 px-7 py-3 rounded-xl font-semibold text-white
            bg-gradient-to-r from-[#0055ff] to-[#3a7cff]
            shadow-[0_18px_38px_rgba(0,85,255,0.28)]
            hover:scale-[1.03] duration-300
            "
          >
            Fill The Form Out!
          </a>
        </div>

        <div
          id="contact-shell"
          className="mt-14 grid lg:grid-cols-[1.4fr_1fr] gap-8 items-start"
        >
          <article
            className="
            relative overflow-hidden rounded-[28px] border border-white/8
            bg-gradient-to-b from-[rgba(15,18,27,0.94)] to-[rgba(8,10,15,0.98)]
            shadow-xl p-7
            "
          >
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="grid gap-2">
                  <label htmlFor="first-name" className="text-white/90">First name*</label>
                  <input id="first-name" name="first_name" type="text" placeholder="First Name" required className={inputClass} />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="last-name" className="text-white/90">Last name</label>
                  <input id="last-name" name="last_name" type="text" placeholder="Last Name" className={inputClass} />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-white/90">Email*</label>
                  <input id="email" name="email" type="email" placeholder="Email" required className={inputClass} />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="phone" className="text-white/90">Phone*</label>
                  <input id="phone" name="phone" type="tel" placeholder="Phone Number" required className={inputClass} />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="state" className="text-white/90">State*</label>
                  <select id="state" name="state" required className={inputClass}>
                    <option value="">Select State</option>
                    {states.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="place" className="text-white/90">Place*</label>
                  <input id="place" name="place" type="text" placeholder="Place" required className={inputClass} />
                </div>
                <div className="grid gap-2 sm:col-span-2">
                  <label htmlFor="message" className="text-white/90">Message*</label>
                  <textarea id="message" name="message" placeholder="Type your message..." required rows={5} className={inputClass + " min-h-[11rem] resize-vertical"} />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="
                px-7 py-3 rounded-xl font-semibold text-white
                bg-gradient-to-r from-[#0055ff] to-[#3a7cff]
                shadow-[0_18px_38px_rgba(0,85,255,0.28)]
                hover:scale-[1.03] duration-300 w-fit
                disabled:opacity-60 disabled:hover:scale-100
                "
              >
                {submitting ? "Submitting..." : "Submit Now"}
              </button>

              {error && <p className="text-rose-300">{error}</p>}

              {sent && (
                <p className="text-[#8fb3ff]">
                  Thanks! We'll get back to you shortly.
                </p>
              )}
            </form>
          </article>

          <aside className="grid gap-5">
            {[
              { label: "Email", pill: "24/7", value: "semicoloninnovation@gmail.com", href: "mailto:semicoloninnovation@gmail.com" },
              { label: "Phone", pill: "Direct", value: "+91 7012217612", href: "tel:+917012217612" },
              { label: "Address", pill: "Active", value: "Kunnath Building, 2nd Floor, Sankara Iyer Road, Westfort, Thrissur-680004" },
            ].map((c) => (
              <article
                key={c.label}
                className="
                relative overflow-hidden rounded-[28px] border border-white/8
                bg-gradient-to-b from-[rgba(15,18,27,0.94)] to-[rgba(8,10,15,0.98)]
                shadow-xl p-6
                "
              >
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">{c.label}</span>
                  <span className="text-xs uppercase tracking-wider text-[#a6aec3] border border-white/10 rounded-full px-3 py-1">
                    {c.pill}
                  </span>
                </div>
                <div className="my-3 h-px bg-white/10" />
                {c.href ? (
                  <a href={c.href} className="text-[#8fb3ff] hover:text-white transition-colors break-words">
                    {c.value}
                  </a>
                ) : (
                  <p className="text-[#a6aec3]">{c.value}</p>
                )}
              </article>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;