import manLaptop from '../../assets/media/home-man-laptop.png'
import cardVideo from '../../assets/media/live-home/hero-bg.mp4'
import Reveal from '../common/Reveal'
import SectionCurve from '../common/SectionCurve'

function StageIcon({ name }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }

  if (name === 'discovery') {
    return (
      <svg {...common}>
        <circle cx="11" cy="11" r="6.5" />
        <path d="M16 16l5 5" />
      </svg>
    )
  }

  if (name === 'development') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="2" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
      </svg>
    )
  }

  if (name === 'delivery') {
    return (
      <svg {...common}>
        <path d="M2 12c2.5-3 5-4.5 7-2.5l1.2 1.2" />
        <path d="M22 12c-2.5-3-5-4.5-7-2.5l-1.2 1.2" />
        <path d="M9 11l-2.2 2.2a2 2 0 0 0 2.8 2.8L12 13.6" />
        <path d="M15 11l2.2 2.2a2 2 0 0 1-2.8 2.8L12 13.6" />
      </svg>
    )
  }

  return null
}

const stages = [
  {
    tag: 'Stage 1', icon: 'discovery',
    title: 'Discovery & Planning',
    text: 'We dive deep into your vision, understanding business objectives, technical needs, and training goals through collaborative discussions.',
    points: ['Needs Analysis & Consultation', 'Customized Training & Development Plans'],
  },
  {
    tag: 'Stage 2', icon: 'development',
    title: 'Development & Training Execution',
    text: 'Once the roadmap is defined, our team begins development and training delivery. From code to classrooms, we build solutions and empower learners.',
    points: ['Agile Software & App Development', 'Live Instructor-Led Training Sessions'],
  },
  {
    tag: 'Stage 3', icon: 'delivery',
    title: 'Delivery & Launch',
    text: 'We ensure your software or training program is fully tested, delivered with all resources, and ready for smooth deployment or learning.',
    points: ['Ongoing Support', 'Final QA & Product Deployment'],
  },
]

function Journey() {
  return (
    <section className='pt-20 pb-56 relative'>

      {/* BG glow right side */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden glow-pulse bg-[radial-gradient(ellipse_at_100%_50%,rgba(0,85,255,.09),transparent_40%)]' />

      <div className='max-w-7xl mx-auto px-5 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start'>

        <div>
          <Reveal>
            <p className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-[#dce7ff] text-[0.84rem] tracking-[0.12em] uppercase'>
              How We Work?
            </p>
            <h2 className='mt-4 text-3xl md:text-4xl font-semibold leading-tight'>
              We Simplify The Journey{' '}
              <span className='bg-gradient-to-b from-white via-[#e8efff] to-[#90b0ff] bg-clip-text text-transparent'>
                From Design To Launch.
              </span>
            </h2>
            <p className='mt-4 text-[#a6aec3] leading-relaxed max-w-xl'>
              We make it easy to bring your ideas to life, guiding you from concept to a fully launched product or a future-ready learning path.
            </p>
          </Reveal>

          <div className='mt-10 grid gap-6'>
            {stages.map((s, i) => (
              <Reveal key={s.tag} delay={String((i + 1) * 100)}>
                <article
                  className='relative overflow-hidden rounded-[28px] border border-white/8 shadow-xl p-6 card-hover'
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
                    <div className='flex items-center justify-between'>
                      <span className='w-12 h-12 rounded-xl border border-[#3a7cff]/30 bg-gradient-to-br from-[#0a1f4d] to-[#050a18] flex items-center justify-center text-[#8fb3ff] shadow-[0_0_18px_rgba(0,85,255,0.25)]'>
                        <StageIcon name={s.icon} />
                      </span>
                      <span className='text-xs font-medium text-[#8fb3ff] border border-[#8fb3ff]/20 bg-[#8fb3ff]/10 px-3 py-1 rounded-full'>{s.tag}</span>
                    </div>
                    <strong className='block mt-3 text-lg text-white'>{s.title}</strong>
                    <p className='mt-3 text-[#a6aec3] leading-relaxed'>{s.text}</p>
                    <div className='mt-4 flex flex-wrap gap-2'>
                      {s.points.map(p => (
                        <span key={p} className='text-xs text-[#a6aec3] border border-white/10 bg-white/5 px-3 py-1.5 rounded-full'>{p}</span>
                      ))}
                    </div>
                    {i === stages.length - 1 && (
                      <a
                        href='/contact'
                        className='inline-block mt-5 px-6 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#0055ff] to-[#3a7cff] shadow-[0_18px_38px_rgba(0,85,255,0.28)] hover:scale-[1.03] duration-300'
                      >
                        Connect With Us
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className='sticky top-28 self-start'>
          <Reveal type='reveal-right'>
            <article className='relative overflow-hidden rounded-[28px] border border-white/8 bg-gradient-to-b from-[rgba(15,18,27,0.94)] to-[rgba(8,10,15,0.98)] shadow-xl card-hover'>
              <img src={manLaptop} alt='Semicolon team' className='w-full h-full object-cover' />
            </article>
          </Reveal>
        </div>

      </div>

      {/* <SectionCurve glow height={220} /> */}
    </section>
  )
}

export default Journey