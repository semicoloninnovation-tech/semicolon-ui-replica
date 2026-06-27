import { useEffect, useRef } from 'react'

/**
 * Reveal - wraps children with scroll-triggered animation
 * @param {string} type - 'reveal' | 'reveal-left' | 'reveal-right' | 'reveal-scale'
 * @param {string} delay - '100' | '200' | '300' | '400' | '500' | '600'
 * @param {string} as - HTML tag to render (default: 'div')
 */
export default function Reveal({ children, type = 'reveal', delay = '', as: Tag = 'div', className = '', ...props }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          observer.unobserve(el)
        }
      },
      { threshold: 0.10, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`${type} ${delay ? `delay-${delay}` : ''} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
