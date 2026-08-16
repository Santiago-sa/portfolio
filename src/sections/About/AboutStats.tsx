import { Reveal } from '@/components/ui/Reveal'

const stats = [
  {
    num: '+20',
    label: 'Proyectos',
  },
  {
    num: 'Full Stack',
    label: 'Especialidad',
  },
  {
    num: 'Web & Mobile',
    label: 'Plataformas',
  },
  {
    num: '100%',
    label: 'Pasión',
  },
]

export function AboutStats() {
  return (
    <Reveal
      variant="up"
      delay={0.2}
    >
      <div
        className="about-stat-grid"
        style={{
          marginTop: '48px',
          border: '1px solid rgba(255,255,255,0.05)',
          borderRadius: '12px',
          overflow: 'hidden',
        }}
      >
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            style={{
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(4px)',
              padding: '24px',
              textAlign: 'center',
              borderRight:
                index < 3
                  ? '1px solid rgba(255,255,255,0.04)'
                  : 'none',
            }}
          >
            <div
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontWeight: 700,
                fontSize: '17px',
                color: '#00d4ff',
                marginBottom: '4px',
              }}
            >
              {stat.num}
            </div>

            <div
              style={{
                fontSize: '11px',
                color: '#7070a0',
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  )
}