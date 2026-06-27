import { Link } from 'react-router-dom'
import Reveal from '../common/Reveal'
import cardVideo from '../../assets/media/live-home/hero-bg.mp4'

const testimonials = [
  { initials: 'VK', name: 'Vishnu K.B',        role: 'CEO · Deltachase',     text: "Exceptional service. They didn't just build a high-quality website—they also guided us with valuable recommendations that elevated our brand and user engagement." },
  { initials: 'UN', name: 'Unnikrishnan',        role: 'CEO · Zinzere',        text: 'They delivered a customized solution that addressed all of our business needs. The website is sleek, functional, and improved our customer experience.' },
  { initials: 'JJ', name: 'Jaseel Jabbar',       role: 'CEO · Devbunk',        text: 'We were blown away by the creative approach and attention to detail. The team took our ideas and turned them into a stunning website.' },
  { initials: 'CL', name: 'Client',              role: 'Digital Product',      text: 'They not only delivered a top-notch website but also provided strategic insights that helped us improve our overall digital presence.' },
  { initials: 'AN', name: 'Anson Neelamkavil',   role: 'Client · Operations',  text: 'Their innovative solutions helped streamline our operations, and the website design and development is both functional and visually stunning.' },
  { initials: 'SJ', name: 'Sijo',                role: 'CEO · MOCA',           text: 'The team understood our complex requirements and provided a user-friendly, high-performing website that stands out in the market.' },
]

function Testimonials() {
  return (
    <section className='py-20 relative overflow-hidden'>

      <div className='pointer-events-none absolute inset-0 glow-pulse bg-[radial-gradient(ellipse_at_50%_100%,rgba(0,85,255,.10),transparent_50%)]' />

      <div className='max-w-7xl mx-auto px-5'>

        <Reveal className='max-w-2xl mx-auto text-center'>
          <p className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-[#dce7ff] text-[0.84rem] tracking-[0.12em] uppercase'>
            Testimonial
          </p>
          <h2 className='mt-4 text-3xl md:text-4xl font-semibold leading-tight'>
            Customer Reviews About{' '}
            <span className='bg-gradient-to-b from-white via-[#e8efff] to-[#90b0ff] bg-clip-text text-transparent'>
              Work, Usability and Design.
            </span>
          </h2>
          <p className='mt-4 text-[#a6aec3] leading-relaxed'>
            Discover how our expert software solutions, app development, and professional IT training programs have empowered businesses and individuals to succeed.
          </p>
        </Reveal>

        <Reveal className='mt-8 flex flex-wrap items-center justify-center gap-6'>
          <div className='flex items-center gap-6 text-[#a6aec3] font-medium'>
            <span>Clutch</span><span>Google</span><span>LinkedIn</span>
          </div>
          <Link to='/contact' className='px-5 py-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 duration-300 text-sm font-semibold'>
            View About Semicolon
          </Link>
        </Reveal>

        <div className='mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {testimonials.map((t, i) => (
            <Reveal key={t.name} type='reveal-scale' delay={String(((i % 3) + 1) * 100)}>
              <article
                className='relative overflow-hidden rounded-[28px] border border-white/8 shadow-xl p-6 card-hover'
                style={{ boxShadow: '0 -18px 40px -20px rgba(0,85,255,0.55), 0 0 0 1px rgba(255,255,255,0.05)' }}
              >
                {/* Video BG */}
                <video autoPlay muted loop playsInline className='absolute inset-0 w-full h-full object-cover opacity-25'>
                  <source src={cardVideo} />
                </video>
                <div className='absolute inset-0 bg-gradient-to-b from-[rgba(15,18,27,0.92)] to-[rgba(8,10,15,0.96)]' />

                <span
                  className='pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px'
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(58,124,255,0.9), transparent)' }}
                  aria-hidden='true'
                />
                <div className='relative z-10'>
                  <div className='flex items-center justify-between'>
                    <span className='w-11 h-11 rounded-full flex items-center justify-center bg-gradient-to-br from-[#0055ff] to-[#3a7cff] text-white font-semibold text-sm'>
                      {t.initials}
                    </span>
                    {/* X/Twitter icon */}
                    <svg className='w-4 h-4 text-white/30' viewBox='0 0 24 24' fill='currentColor'>
                      <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z'/>
                    </svg>
                  </div>
                  <p className='mt-3 text-[#facc15] tracking-wider text-sm'>★★★★★</p>
                  <p className='mt-2 text-[#a6aec3] leading-relaxed text-sm'>"{t.text}"</p>
                  <div className='mt-4'>
                    <strong className='block text-white text-sm'>{t.name} · {t.role.split(' · ')[0]}</strong>
                    <span className='text-xs text-[#a6aec3]'>{t.role.split(' · ')[1] || t.role}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials