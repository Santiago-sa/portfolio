interface FloatingTechProps {
  label: string
  color: string
  className: string
  position: React.CSSProperties
}

export function FloatingTech({
  label,
  color,
  className,
  position,
}: FloatingTechProps) {
  return (
    <div
      className={className}
      style={{
        position: 'absolute',
        ...position,
        background: 'rgba(4,4,14,0.92)',
        border: `1px solid ${color}30`,
        borderRadius: '7px',
        padding: '5px 11px',
        fontSize: '11px',
        fontWeight: 600,
        color,
        fontFamily: "'JetBrains Mono', monospace",
        whiteSpace: 'nowrap',
        zIndex: 2,
        backdropFilter: 'blur(8px)',
        boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
      }}
    >
      {label}
    </div>
  )
}