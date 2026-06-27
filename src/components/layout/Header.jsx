import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../../assets/media/logo.png'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
  { label: 'FAQ', path: '/faq' },
]

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    lastScrollY.current = window.scrollY

    const onScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 20)

      if (currentY < 80) {
        setHidden(false)
      } else if (currentY > lastScrollY.current) {
        setHidden(true)
      } else if (currentY < lastScrollY.current) {
        setHidden(false)
      }

      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`
        fixed top-0 left-0 z-50 w-full
        border-b border-white/10 backdrop-blur-md
        transition-all duration-700 ease-in-out
        ${scrolled ? 'bg-black/50' : 'bg-black/20'}
        ${hidden ? 'opacity-0 -translate-y-6 pointer-events-none' : 'opacity-100 translate-y-0'}
      `}
    >
      <div className='mx-auto max-w-[1220px] px-5'>

        {/* Desktop bar */}
        <div className='h-[91px] flex items-center gap-10'>
          <Link to='/' className='shrink-0'>
            <img
              src={logo}
              className='w-[83px] h-[48px] object-contain'
              alt='Semicolon Innovations'
            />
          </Link>

          <div className='hidden md:block w-px h-9 bg-gradient-to-b from-transparent via-white/20 to-transparent' />

          <nav className='hidden md:flex flex-1 justify-between items-center'>
            <div className='flex items-center gap-8'>
              {navLinks.map(({ label, path }) => (
                <Link
                  key={path}
                  to={path}
                  className={`
                    text-[14px] font-medium transition-colors duration-300
                    ${location.pathname === path
                      ? 'text-white'
                      : 'text-white/60 hover:text-white'}
                  `}
                >
                  {label}
                </Link>
              ))}
            </div>

            <Link
              to='/contact'
              className='
                bg-[#0055ff] px-5 h-12 rounded-xl font-bold text-white
                shadow-[0_12px_36px_rgba(0,85,255,0.36)]
                hover:bg-[#1166ff] transition-colors duration-200
                flex items-center
              '
            >
              Get In Touch
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className='ml-auto md:hidden text-white p-2'
            aria-label='Toggle menu'
          >
            {open ? (
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12'/>
              </svg>
            ) : (
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16'/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            className='
              md:hidden bg-[#06090E]/95 backdrop-blur-md
              rounded-[20px] p-5 mt-2 space-y-1
              border border-white/10
            '
          >
            {navLinks.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className={`
                  block px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200
                  ${location.pathname === path
                    ? 'bg-white/10 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/5'}
                `}
              >
                {label}
              </Link>
            ))}
            <div className='pt-2'>
              <Link
                to='/contact'
                className='
                  block text-center bg-[#0055ff] text-white px-5 py-3 rounded-xl font-bold
                  shadow-[0_12px_36px_rgba(0,85,255,0.36)]
                '
              >
                Get In Touch
              </Link>
            </div>
          </div>
        )}

      </div>
    </header>
  )
}

export default Header