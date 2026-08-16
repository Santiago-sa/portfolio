import { Reveal } from '@/components/ui/Reveal'

const technologies = [
  'React',
  'Node.js',
  'NestJS',
  'Flutter',
  'PostgreSQL',
  'Docker',
]

export function AboutIntro() {
  return (
    <div>
      <Reveal
        variant="left"
        delay={0.1}
      >
        <p
          style={{
            fontSize: '16px',
            color: '#8888b4',
            lineHeight: 1.9,
            marginBottom: '18px',
          }}
        >
          Soy Ingeniero Informático apasionado por el desarrollo de
          software y la creación de soluciones digitales. Me especializo
          en construir aplicaciones web y móviles, trabajando tanto en
          frontend como backend.
        </p>

        <p
          style={{
            fontSize: '16px',
            color: '#8888b4',
            lineHeight: 1.9,
            marginBottom: '28px',
          }}
        >
          Me formé en el Politécnico Colombiano Jaime Isaza Cadavid,
          donde desarrollé una base sólida en ingeniería de software,
          bases de datos y arquitectura de sistemas.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
          }}
        >
          {technologies.map((technology) => (
            <span
              key={technology}
              style={{
                background: 'rgba(0,212,255,0.06)',
                border: '1px solid rgba(0,212,255,0.15)',
                borderRadius: '5px',
                padding: '4px 11px',
                fontSize: '12px',
                color: '#00d4ff',
                fontFamily: "'JetBrains Mono',monospace",
              }}
            >
              {technology}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  )
}