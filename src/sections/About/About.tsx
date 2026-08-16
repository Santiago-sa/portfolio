import { AboutCards } from './AboutCards'
import { AboutIntro } from './AboutIntro'
import { AboutStats } from './AboutStats'

function SectionTitle() {
  return (
    <div
      style={{
        textAlign: 'center',
        marginBottom: '60px',
      }}
    >
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: '10px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#00d4ff',
          background: 'rgba(0,212,255,0.06)',
          border: '1px solid rgba(0,212,255,0.16)',
          padding: '5px 14px',
          borderRadius: '4px',
          marginBottom: '18px',
        }}
      >
        <span
          style={{
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: '#00d4ff',
            display: 'inline-block',
            boxShadow: '0 0 6px #00d4ff',
          }}
        />

        // sobre mí
      </span>

      <h2
        style={{
          fontFamily: "'Outfit',sans-serif",
          fontSize: 'clamp(26px,3.8vw,40px)',
          fontWeight: 700,
          color: '#e8e8f0',
          margin: '0 0 14px',
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
        }}
      >
        Conoce un poco sobre mí
      </h2>
    </div>
  )
}

export function About() {
  return (
    <section
      id="about"
      style={{
        padding: '110px 0',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 28px',
        }}
      >
        <SectionTitle />

        <div className="about-grid">
          <AboutIntro />

          <AboutCards />
        </div>

        <AboutStats />
      </div>
    </section>
  )
}