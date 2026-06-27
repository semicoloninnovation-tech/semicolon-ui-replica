import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    if (!dot) return

    let mouseX = -100, mouseY = -100
    let dotX = -100, dotY = -100
    let rafId

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      // Slower, smoother lag/trail
      dotX += (mouseX - dotX) * 0.1
      dotY += (mouseY - dotY) * 0.1
      dot.style.transform = `translate(${dotX - 8}px, ${dotY - 8}px)`

      rafId = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      ref={dotRef}
      className='fixed top-0 left-0 z-[9999] w-4 h-4 rounded-full bg-white pointer-events-none mix-blend-difference'
      style={{ willChange: 'transform' }}
    />
  )
}