import { Link } from 'react-router-dom'
import heroVideo from '../../assets/media/live-home/hero-bg.mp4'
import Reveal from '../common/Reveal'

function CTA({
  eyebrow = 'Contact Our Team',
  titleLine1 = 'Our Process is Clear, Smart',
  titleLine2 = '& Client-Centric',
  text = 'We combine intelligent technology with strategic planning to deliver impactful digital solutions. From idea to execution, our transparent approach ensures your vision is realized with precision.',
  buttonLabel = 'Contact Us',
  buttonTo = '/contact',
}) {
  return (
    <section className='py-28 relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-5'>
        <Reveal>
          <div className='relative overflow-hidden rounded-[32px] border border-white/10 text-center'>

            {/* Video BG */}
            <video autoPlay muted loop playsInline className='absolute inset-0 w-full h-full object-cover opacity-40'>
              <source src={heroVideo} />
            </video>

            {/* Overlay */}
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,85,255,.30),transparent_18rem),radial-gradient(circle_at_80%_20%,rgba(58,124,255,.25),transparent_18rem)] glow-pulse' />
            <div className='absolute inset-0 bg-[#06090e]/60' />

            {/* Content */}
            <div className='relative z-10 max-w-4xl mx-auto px-8 py-20 md:px-16'>
              <p className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 uppercase tracking-[0.15em] text-xs'>
                {eyebrow}
              </p>

              <h2 className='mt-6 text-4xl md:text-6xl font-bold leading-tight'>
                {titleLine1}
                <span className='block text-white/40'>{titleLine2}</span>
              </h2>

              <p className='mt-6 text-zinc-400 max-w-2xl mx-auto text-lg'>
                {text}
              </p>

              <div className='mt-10 flex flex-wrap justify-center gap-4'>
                <Link to={buttonTo} className='px-7 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#0055ff] to-[#3a7cff] shadow-[0_18px_38px_rgba(0,85,255,0.28)] hover:scale-[1.03] duration-300'>
                  {buttonLabel}
                </Link>
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default CTA
