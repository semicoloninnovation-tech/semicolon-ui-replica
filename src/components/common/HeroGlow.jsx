import heroVideo from '../../assets/media/live-home/hero-bg.mp4'

function HeroGlow() {
  return (
    <div
      className='pointer-events-none absolute top-0 left-0 w-full h-full min-h-[420px] -z-10 overflow-hidden'
      aria-hidden='true'
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload='auto'
        className='absolute inset-0 w-full h-full object-cover opacity-50'
      >
        <source src={heroVideo} type='video/mp4' />
      </video>

      <div className='absolute inset-0 backdrop-blur-[8px]' />

      <div
        className='absolute inset-0'
        style={{
          background:
            'radial-gradient(ellipse 70% 100% at 50% 0%, rgba(0,85,255,0.55), rgba(0,40,140,0.25) 45%, transparent 75%)',
        }}
      />
    </div>
  )
}

export default HeroGlow