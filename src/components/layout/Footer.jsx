import { Link } from "react-router-dom";

import logo from "../../assets/media/logo.png";
import footerBg from "../../assets/media/live-home/footer-bg.png";

const footerGroups = [
  {
    title: "Pages",
    links: [
      { label: "Home", to: "/" },
      { label: "About", to: "/about" },
      { label: "Services", to: "/services" },
      { label: "Portfolio", to: "/portfolio" },
      { label: "Careers", to: "/careers" },
      { label: "Contact", to: "/contact" },
      { label: "FAQ", to: "/faq" },
    ],
  },
  {
    title: "Social medias",
    links: [
      { label: "Linkedin", href: "https://www.linkedin.com/in/semicolon-innovation-a99900373" },
      { label: "Instagram", href: "https://www.instagram.com/semicoloninnovations" },
      { label: "Youtube", href: "https://www.youtube.com/" },
      { label: "Facebook", href: "https://www.facebook.com" },
    ],
  },
];

const office = [
  "SemiColon Innovations",
  "Kunnath Building, Sankara Iyyer Road Junction",
  "Westfort, Thrissur",
  "Kerala - 680004",
];

function Footer() {
  return (
    <footer
      className="
      mt-16
      pt-16
      pb-8
      border-t
      border-white/[0.04]
      bg-cover
      bg-center
      "
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(5,8,16,0.88), rgba(4,5,8,0.98)), url(${footerBg})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-[0.95fr_1.05fr] gap-12 pb-10">
          <div className="grid gap-4">
            <Link to="/" aria-label="Semicolon Innovations">
              <img src={logo} className="w-12 h-12 object-contain" alt="" />
            </Link>

            <p className="max-w-xs text-white/60">
              Engineered with 💙 passion and precision - by SemiColon
            </p>

            <form className="mt-2 grid grid-cols-[minmax(0,1fr)_auto] gap-3 items-start">
              <label className="sr-only" htmlFor="footer-email">
                Email
              </label>
              <input
                id="footer-email"
                name="email"
                type="email"
                placeholder="Enter Your Email...."
                className="
                min-h-[3.4rem] px-4 rounded-2xl border border-white/[0.06]
                bg-white/[0.03] text-white placeholder-white/30
                focus:outline-none focus:border-white/20
                "
              />
              <button
                type="submit"
                className="
                px-5 rounded-xl font-semibold text-white
                bg-gradient-to-r from-[#0055ff] to-[#3a7cff]
                shadow-[0_18px_38px_rgba(0,85,255,0.28)]
                hover:scale-[1.03] duration-300
                "
              >
                Subscribe Us
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerGroups.map((group) => (
              <div key={group.title} className="grid gap-3 content-start">
                <h3 className="text-lg text-white">{group.title}</h3>
                {group.links.map((link) =>
                  link.to ? (
                    <Link
                      key={link.label}
                      to={link.to}
                      className="text-white/60 hover:text-[#dce7ff] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/60 hover:text-[#dce7ff] transition-colors"
                    >
                      {link.label}
                    </a>
                  )
                )}
              </div>
            ))}

            <div className="grid gap-3 content-start">
              <h3 className="text-lg text-white">Office</h3>
              {office.map((line) => (
                <span key={line} className="text-white/60">
                  {line}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          className="
          flex flex-wrap justify-between gap-4 pt-6
          border-t border-white/[0.05] text-white/50 text-sm
          "
        >
          <span>&copy; {new Date().getFullYear()} Semicolon Innovations</span>
          <span>
            <a href="#" className="hover:text-[#dce7ff] transition-colors">
              Terms & Conditions
            </a>
          </span>
          <span>
            <a href="#" className="hover:text-[#dce7ff] transition-colors">
              Privacy Policy
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
