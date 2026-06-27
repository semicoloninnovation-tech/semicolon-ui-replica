import heroVideo from '../../assets/media/live-home/hero-bg.mp4'
import b1 from '../../assets/media/live-home/brand-1.png'
import b2 from '../../assets/media/live-home/brand-2.png'
import b3 from '../../assets/media/live-home/brand-3.png'
import b4 from '../../assets/media/live-home/brand-4.png'
import b5 from '../../assets/media/live-home/brand-5.png'
import b6 from '../../assets/media/live-home/brand-6.png'

const brands = [b1,b2,b3,b4,b5,b6, b1,b2,b3,b4,b5,b6]

function Hero() {
  return (
    <section className='relative overflow-hidden min-h-[49rem] pt-[8.6rem] pb-[3.25rem]'>

      {/* BG Video */}
      <div className='absolute inset-0'>
        <video autoPlay muted loop playsInline
          className='w-full h-full object-cover scale-110 opacity-90'>
          <source src={heroVideo} />
        </video>
        <div className='absolute inset-0 backdrop-blur-[8px]' />
        <div className='absolute inset-0 glow-pulse bg-[radial-gradient(circle_at_16%_34%,rgba(24,86,255,.28),transparent_22rem),radial-gradient(circle_at_78%_8%,rgba(66,121,255,.58),transparent_22rem)]' />
      </div>

      <div className='relative z-10'>
        <div className='max-w-[1220px] mx-auto px-5'>
          <div className='max-w-[54rem] mx-auto text-center'>

            {/* Badge */}
            <div
              className='inline-flex items-center gap-2 p-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md'
              style={{ animation: 'wordReveal 0.7s ease 0.1s both' }}
            >
              <div className='bg-white text-black px-4 py-1 rounded-full font-semibold text-sm'>
                We're
              </div>
              <p className='text-white/80 text-sm pr-3'>Your Trusted Tech Partner of 2025</p>
            </div>

            {/* Headline */}
            <h1 className='mt-8 text-[clamp(3rem,6.7vw,5.95rem)] leading-[0.95] font-bold'>
              <span
                className='block text-white/70'
                style={{ animation: 'wordReveal 0.8s cubic-bezier(0.22,1,0.36,1) 0.25s both' }}
              >
                Innovative IT Solutions and Industry Focused
              </span>
              <span
                className='block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'
                style={{ animation: 'wordReveal 0.8s cubic-bezier(0.22,1,0.36,1) 0.45s both' }}
              >
                Training Under One Roof
              </span>
            </h1>

            {/* Subtext */}
            <p
              className='mt-6 text-[1.18rem] text-white/75 max-w-[48rem] mx-auto'
              style={{ animation: 'wordReveal 0.8s ease 0.6s both' }}
            >
              Your Trusted Partner in IT Solutions, Career-Focused Training, and Global Certifications
            </p>

            {/* Buttons */}
            <div
              className='mt-10 flex justify-center gap-4'
              style={{ animation: 'wordReveal 0.8s ease 0.75s both' }}
            >
              <button className='bg-[#efeeec] text-black px-6 h-12 rounded-xl font-bold hover:scale-[1.04] transition-transform duration-200'>
                Connect With Us
              </button>
              <button className='border border-white/10 bg-white/10 backdrop-blur-md text-white px-6 h-12 rounded-xl hover:bg-white/15 transition-colors duration-200'>
                What is SemiColon?
              </button>
            </div>

            {/* Divider */}
            <div className='my-10 h-px bg-white/10' />

            {/* Brand Marquee */}
            <div className='overflow-hidden'>
              <div className='flex gap-6 animate-marquee'>
                {brands.map((img, i) => (
                  <div key={i} className='w-16 h-16 flex items-center justify-center shrink-0'>
                    <img src={img} className='max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300' />
                  </div>
                ))}
              </div>
              g\
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero