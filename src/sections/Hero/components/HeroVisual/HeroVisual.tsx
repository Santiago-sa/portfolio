import { CodeTerminal } from '../CodeTerminal'
import { FloatingTech } from '../FloatingTech'

const technologies = [
  {
    label: 'React',
    color: '#61dafb',
    className: 'float-a',
    position: {
      left: '-14px',
      top: '18%',
    },
  },
  {
    label: 'Node.js',
    color: '#339933',
    className: 'float-b',
    position: {
      right: '-14px',
      top: '18%',
    },
  },
  {
    label: 'NestJS',
    color: '#e0234e',
    className: 'float-c',
    position: {
      left: '-14px',
      bottom: '18%',
    },
  },
  {
    label: 'Flutter',
    color: '#54c5f8',
    className: 'float-d',
    position: {
      right: '-14px',
      bottom: '18%',
    },
  },
  {
    label: 'PostgreSQL',
    color: '#336791',
    className: 'float-e',
    position: {
      left: '50%',
      top: '-16px',
      transform: 'translateX(-50%)',
    },
  },
  {
    label: 'Docker',
    color: '#2496ed',
    className: 'float-f',
    position: {
      left: '50%',
      bottom: '-16px',
      transform: 'translateX(-50%)',
    },
  },
]

export function HeroVisual() {
  return (
    <div className="hero-visual hero-visual-wrap flex items-center justify-center px-3 py-4">
      <div className="relative w-full max-w-[420px] py-6">
        {technologies.map((technology) => (
          <FloatingTech
            key={technology.label}
            label={technology.label}
            color={technology.color}
            className={technology.className}
            position={technology.position}
          />
        ))}

        <CodeTerminal />
      </div>
    </div>
  )
}