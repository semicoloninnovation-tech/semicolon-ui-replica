import { Link } from 'react-router-dom'
import aboutImage from '../../assets/media/live-home/about-image.png'
import Reveal from '../common/Reveal'
import SectionCurve from '../common/SectionCurve'

import laptop from "../../assets/media/home-man-laptop.png";
import HeroGlow from "../common/HeroGlow";

function About() {
  return (
    <section className='py-20 relative overflow-hidden'>
<HeroGlow/>
      {/* Section BG glow */}
      <div className='pointer-events-none absolute inset-0 glow-pulse bg-[radial-gradient(ellipse_at_0%_60%,rgba(0,85,255,.10),transparent_40%)]' />

      <div className='max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center'>

        <Reveal type='reveal-left'>
          <article className='relative overflow-hidden rounded-[28px] border border-white/8 bg-gradient-to-b from-[rgba(15,18,27,0.94)] to-[rgba(8,10,15,0.98)] shadow-xl card-hover'>
            <img src={aboutImage} alt='Semicolon learners' className='w-full h-full object-cover' />
          </article>
        </Reveal>

        <Reveal type='reveal-right'>
          <article>
            <p className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-[#dce7ff] text-[0.84rem] tracking-[0.12em] uppercase'>
              About Us
            </p>

            <h2 className='mt-4 text-3xl md:text-4xl font-semibold leading-tight'>
              Where Innovation Meets{' '}
              <span className='bg-gradient-to-b from-white via-[#e8efff] to-[#90b0ff] bg-clip-text text-transparent'>
                Education!
              </span>
            </h2>

            <div className='w-12 h-[3px] my-5 rounded-full bg-gradient-to-r from-[#0055ff] to-[#8fb3ff]' />

            <p className='text-[#a6aec3] leading-relaxed'>
              We are a forward-thinking IT Solutions and Training Center committed to shaping
              future tech leaders. Our mission is to bridge the gap between education and
              industry by offering high-quality training, real-time project exposure, and
              career-launching opportunities.
            </p>

            <p className='mt-6 font-semibold text-white'>Why Choose Us?</p>

            <ul className='mt-3 grid gap-3 text-[#a6aec3]'>
              {[
                'Expert trainers with real industry experience.',
                'Internationally attested certifications.',
                'Paid internships with live client projects.',
                'Career support to secure top placements.',
              ].map((item) => (
                <li key={item} className='flex items-start gap-3'>
                  <span className='mt-1 w-5 h-5 shrink-0 rounded-full bg-gradient-to-br from-[#0055ff] to-[#3a7cff] flex items-center justify-center'>
                    <svg className='w-3 h-3 text-white' fill='none' stroke='currentColor' strokeWidth={2.5} viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7'/>
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className='mt-8 flex flex-wrap items-center gap-4'>
              <Link to='/about'
                className='inline-block px-7 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#0055ff] to-[#3a7cff] shadow-[0_18px_38px_rgba(0,85,255,0.28)] hover:scale-[1.03] duration-300'>
                View About Semicolon
              </Link>
              <div>
                <p className='text-[#facc15] tracking-wider text-sm'>★★★★★</p>
                <p className='text-xs text-[#a6aec3]'>Loved by 20+ Clients</p>
              </div>
            </div>
          </article>
        </Reveal>

      </div>

      <div className='pointer-events-none absolute left-0 bottom-0 w-full h-40 bg-[radial-gradient(ellipse_60%_100%_at_50%_100%,rgba(0,85,255,.35),transparent_70%)]' />
      {/* <SectionCurve /> */}
    </section>
  )
}

export default About
