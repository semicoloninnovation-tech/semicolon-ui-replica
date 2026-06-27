import { Link } from 'react-router-dom'
import Reveal from '../common/Reveal'

function ServiceIcon({ name }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }

  switch (name) {
    case 'dollar':
      return (
        <svg {...common}>
          <path d="M12 2v20" />
          <path d="M17 6.5c0-2-2.2-3.5-5-3.5S7 4.5 7 6.5c0 4.5 10 2.5 10 7 0 2-2.2 3.5-5 3.5s-5-1.5-5-3.5" />
        </svg>
      )
    case 'person':
      return (
        <svg {...common}>
          <circle cx="12" cy="6" r="2.6" />
          <path d="M5.5 11.5 12 9l6.5 2.5" />
          <path d="M12 9v6" />
          <path d="M12 15l-3.5 6" />
          <path d="M12 15l3.5 6" />
          <path d="M7 13l-2.5 1.5" />
          <path d="M17 13l2.5 1.5" />
        </svg>
      )
    case 'plug':
      return (
        <svg {...common}>
          <path d="M9 7V3" />
          <path d="M15 7V3" />
          <path d="M7 7h10v4a5 5 0 0 1-10 0V7Z" />
          <path d="M12 16v5" />
        </svg>
      )
    case 'check':
      return (
        <svg {...common}>
          <path d="m20 6-11 11-5-5" />
        </svg>
      )
    case 'award':
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="5" />
          <path d="M8.5 12.5 7 21l5-3 5 3-1.5-8.5" />
        </svg>
      )
    case 'calculator':
      return (
        <svg {...common}>
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M8 7h8" />
          <path d="M8 11h2M11 11h2M14 11h2" />
          <path d="M8 14.5h2M11 14.5h2M14 14.5h2" />
          <path d="M8 18h2M11 18h2M14 18h2" />
        </svg>
      )
    default:
      return null
  }
}

const services = [
  { tag: 'Solutions',  icon: 'dollar',     iconBg: 'from-[#ff7a30] to-[#ff5a1f]', color: 'from-[#0055ff] to-[#3a7cff]', glow: 'rgba(0,85,255,.35)',   orb: 'drift1', pos: '-top-10 -right-10 w-40 h-40',                  delay: '0s',   title: 'Tailored Software Solutions',     meta: 'Build Systems That Power Your Business',        text: "We develop custom software and mobile applications designed to fit your operational needs whether you're a startup or an established firm." },
  { tag: 'Training',   icon: 'person',     iconBg: 'from-white to-[#e5e7eb]',     color: 'from-[#ffb020] to-[#ff8a00]', glow: 'rgba(0,140,255,.32)',  orb: 'sweep',  pos: '-bottom-12 -left-12 w-44 h-44',                delay: '0.6s', title: 'Industry-Relevant IT Training',   meta: 'Empowering the Next Generation of Tech Talent', text: 'Practical workshops and guided learning paths built to equip learners with in-demand technical skills and hands-on experience.', iconText: 'dark' },
  { tag: 'Consulting', icon: 'plug',       iconBg: 'from-[#3a82ff] to-[#1559e0]', color: 'from-[#8a4dff] to-[#c084fc]', glow: 'rgba(58,124,255,.3)',  orb: 'pulse',  pos: 'top-1/2 -translate-y-1/2 -right-14 w-36 h-36', delay: '1.1s', title: 'Expert Tech Consultation',        meta: 'Make Informed Technology Decisions',            text: 'Get expert guidance on strategy, development, implementation, and the right solution path for your business.' },
  { tag: 'Delivery',   icon: 'check',      iconBg: 'from-[#7c5cff] to-[#5a3df0]', color: 'from-[#22d3ee] to-[#0891b2]', glow: 'rgba(0,85,255,.32)',   orb: 'drift2', pos: '-top-12 -left-8 w-40 h-40',                    delay: '0.3s', title: 'End-to-End Project Execution',    meta: 'From Concept to Completion — Seamlessly',       text: 'Our agile-driven development process ensures a smooth journey from idea validation to successful project delivery.' },
  { tag: 'Support',    icon: 'award',      iconBg: 'from-[#f4c20d] to-[#e0a800]', color: 'from-[#22c55e] to-[#15803d]', glow: 'rgba(34,211,255,.28)', orb: 'sweep',  pos: '-bottom-10 -right-10 w-40 h-40',               delay: '1.4s', title: 'Enterprise Support & Maintenance', meta: 'Reliable Support Beyond Launch',                text: 'We provide continuous system monitoring, performance enhancements, and technical support whenever you need it.', iconText: 'dark' },
  { tag: 'Career',     icon: 'calculator', iconBg: 'from-[#1fae6b] to-[#0f7a48]', color: 'from-[#fb7185] to-[#e11d48]', glow: 'rgba(0,85,255,.3)',    orb: 'drift1', pos: 'top-1/2 -translate-y-1/2 -left-14 w-36 h-36',  delay: '0.9s', title: 'Career & Certification Programs', meta: 'Build Skills That Employers Value',              text: 'Our certification programs, internships, and support tracks prepare students for strong careers in the IT sector.' },
]

function Services() {
  return (
    <section className='py-20 relative overflow-hidden' id='services'>

      {/* Section glow top-center */}
      <div className='pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-64 glow-pulse bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,85,255,.15),transparent_70%)]' />

      <div className='max-w-7xl mx-auto px-5'>

        <Reveal className='max-w-2xl mx-auto text-center'>
          <p className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-[#dce7ff] text-[0.84rem] tracking-[0.12em] uppercase'>
            Features
          </p>
          <h2 className='mt-4 text-3xl md:text-4xl font-semibold leading-tight'>
            Endless IT Solutions & Training Feature{' '}
            <span className='bg-gradient-to-b from-white via-[#e8efff] to-[#90b0ff] bg-clip-text text-transparent'>
              Delivered with Precision
            </span>
          </h2>
          <p className='mt-4 text-[#a6aec3] leading-relaxed'>
            Get unlimited design and delivery features that give you the freedom to create without boundaries.
          </p>
          <Link to='/about'
            className='inline-block mt-6 px-7 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#0055ff] to-[#3a7cff] shadow-[0_18px_38px_rgba(0,85,255,0.28)] hover:scale-[1.03] duration-300'>
            Who We Are – SemiColon
          </Link>
        </Reveal>

        <div className='mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {services.map((s, i) => (
            <Reveal key={s.title} type='reveal-scale' delay={String(((i % 3) + 1) * 100)}>
              <article className='relative overflow-hidden rounded-[28px] border border-white/8 bg-gradient-to-b from-[rgba(15,18,27,0.94)] to-[rgba(8,10,15,0.98)] shadow-xl p-6 h-full card-hover card-top-glow group'>

                {/* Unique animated glow orb per card */}
                <span
                  className={`glow-orb glow-orb--${s.orb} ${s.pos}`}
                  style={{ background: s.glow, animationDelay: s.delay }}
                  aria-hidden='true'
                />

                {/* Icon badge + corner arrow */}
                <div className='relative z-10 flex items-center justify-between'>
                  <span className={`w-12 h-12 rounded-full bg-gradient-to-br ${s.iconBg} flex items-center justify-center shadow-lg ${s.iconText === 'dark' ? 'text-[#0a0a0a]' : 'text-white'}`}>
                    <ServiceIcon name={s.icon} />
                  </span>
                  <span className='text-white/30 group-hover:text-white/70 transition-colors duration-300'>
                    <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round'>
                      <path d='M7 17 17 7M7 7h10v10'/>
                    </svg>
                  </span>
                </div>
                <strong className='relative z-10 block mt-5 text-lg text-white'>{s.title}</strong>
                <span className='relative z-10 block mt-1 text-sm text-[#8fb3ff]'>{s.meta}</span>
                <p className='relative z-10 mt-3 text-[#a6aec3] leading-relaxed'>{s.text}</p>
                {/* hover reveal link arrow */}
                <div className='relative z-10 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <span className='text-xs text-[#3a7cff]'>Learn more →</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services