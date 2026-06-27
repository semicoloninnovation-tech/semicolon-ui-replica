function SectionCurve({ className = '', color = '#06090e', height = 140, width = '38%', glow = false }) {
  const gradientId = `curveGlow-${Math.round(height)}`

  return (
    <svg
      className={`absolute left-0 bottom-0 pointer-events-none z-10 ${className}`}
      viewBox="0 0 760 200"
      preserveAspectRatio="none"
      style={{ height: `${height}px`, width }}
      aria-hidden="true"
    >
      {glow && (
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(20,90,255,0.9)" />
            <stop offset="55%" stopColor="rgba(10,40,140,0.55)" />
            <stop offset="100%" stopColor="rgba(6,12,30,0)" />
          </linearGradient>
        </defs>
      )}
      <path
        d="M0,28 C0,12.5 12.5,0 28,0 L600,0 C588,0 577,5 570,14 L210,182 C203,192 191,198 178,198 L28,198 C12.5,198 0,185.5 0,170 Z"
        fill={glow ? `url(#${gradientId})` : color}
      />
    </svg>
  )
}

export default SectionCurve
