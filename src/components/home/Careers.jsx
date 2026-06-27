import { Link } from 'react-router-dom'
import Reveal from '../common/Reveal'
import cardVideo from '../../assets/media/live-home/hero-bg.mp4'

function CareerIcon({ name }) {
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

  if (name === 'person') {
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
  }

  if (name === 'plug') {
    return (
      <svg {...common}>
        <path d="M9 7V3" />
        <path d="M15 7V3" />
        <path d="M7 7h10v4a5 5 0 0 1-10 0V7Z" />
        <path d="M12 16v5" />
      </svg>
    )
  }

  return null
}

const roles = [
  { title: 'Office Admin',  icon: 'person', iconBg: 'from-white to-[#e5e7eb]',     iconText: 'dark', role: 'Manage front office, maintain student records, handle inquiries, and coordinate training schedules.', reqs: ['Strong communication and organizational skills', 'Basic computer knowledge (MS Office)', 'Customer-friendly approach'] },
  { title: 'IT Trainers',   icon: 'plug',   iconBg: 'from-[#3a82ff] to-[#1559e0]', iconText: 'light', role: 'Deliver training sessions, create curriculum, guide students through projects, and provide academic support.', reqs: ['Expertise in Programming, Web Development, AI, Robotics, or relevant domains', 'Prior teaching or mentoring experience preferred', 'Passion for student success and growth'] },
]

function Careers() {
  return (
    <section className='py-20 relative overflow-hidden' id='career'>

      <div className='pointer-events-none absolute inset-0 glow-pulse bg-[radial-gradient(ellipse_at_100%_80%,rgba(0,85,255,.08),transparent_40%)]' />

      <div className='max-w-7xl mx-auto px-5'>

        <Reveal className='max-w-2xl mx-auto text-center'>
          <p className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-[#dce7ff] text-[0.84rem] tracking-[0.12em] uppercase'>
            Join Our Team
          </p>
          <h2 className='mt-4 text-3xl md:text-4xl font-semibold leading-tight'>Join Our Team</h2>
          <p className='mt-4 text-[#a6aec3] leading-relaxed'>
            We're on the lookout for passionate, creative, and driven individuals to be part of our growing IT family. Explore exciting career opportunities and help us shape the future of technology and training.
          </p>
          <Link to='/careers' className='inline-block mt-6 px-7 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#0055ff] to-[#3a7cff] shadow-[0_18px_38px_rgba(0,85,255,0.28)] hover:scale-[1.03] duration-300'>
            Who We Are – SemiColon
          </Link>
        </Reveal>

        <div className='mt-14 grid md:grid-cols-2 gap-6'>
          {roles.map((r, i) => (
            <Reveal key={r.title} type='reveal-scale' delay={String((i + 1) * 100)}>
              <article
                className='relative overflow-hidden rounded-[28px] border border-white/8 shadow-xl p-7 card-hover h-full'
                style={{ boxShadow: '0 -18px 40px -20px rgba(0,85,255,0.55), 0 0 0 1px rgba(255,255,255,0.05)' }}
              >
                {/* Video BG */}
                <video autoPlay muted loop playsInline className='absolute inset-0 w-full h-full object-cover opacity-25'>
                  <source src={cardVideo} />
                </video>
                <div className='absolute inset-0 bg-gradient-to-b from-[rgba(15,18,27,0.92)] to-[rgba(8,10,15,0.96)]' />

                {/* Top blue glow line */}
                <span
                  className='pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px'
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(58,124,255,0.9), transparent)' }}
                  aria-hidden='true'
                />

                <div className='relative z-10'>
                  <div className='flex items-start justify-between'>
                    <span className={`w-12 h-12 rounded-full bg-gradient-to-br ${r.iconBg} flex items-center justify-center shadow-lg ${r.iconText === 'dark' ? 'text-[#0a0a0a]' : 'text-white'}`}>
                      <CareerIcon name={r.icon} />
                    </span>
                    <svg className='w-4 h-4 text-white/20 mt-1' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2}>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M7 17L17 7M17 7H7M17 7v10'/>
                    </svg>
                  </div>
                  <strong className='block mt-4 text-lg text-white'>{r.title}</strong>
                  <p className='mt-3 text-[#a6aec3] leading-relaxed'><span className='text-white/60 text-xs uppercase tracking-wider'>Role: </span>{r.role}</p>
                  <p className='mt-3 text-white/60 text-xs uppercase tracking-wider'>Requirements:</p>
                  <ul className='mt-1 grid gap-1 list-disc pl-4 text-[#a6aec3]'>
                    {r.reqs.map((req) => (
                      <li key={req}>{req}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Careers