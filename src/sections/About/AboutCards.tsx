import { useLang } from "@/i18n/LangProvider";
import { Reveal } from "@/components/ui/Reveal";
import { AboutIcon, type AboutIconName } from "./AboutIcon";

const cards = [
  {
    icon: "gradCap" as AboutIconName,
    title: "Ingeniero Informático",
    sub: "Politécnico Colombiano Jaime Isaza Cadavid",
    color: "#00d4ff",
  },
  {
    icon: "code" as AboutIconName,
    title: "Full Stack Developer",
    sub: "Desarrollo frontend y backend completo",
    color: "#a78bfa",
  },
  {
    icon: "phone" as AboutIconName,
    title: "Mobile Developer",
    sub: "Aplicaciones móviles con Flutter",
    color: "#00ffaa",
  },
  {
    icon: "lightbulb" as AboutIconName,
    title: "Problem Solver",
    sub: "Soluciones eficientes y escalables",
    color: "#ffa657",
  },
];

export function AboutCards() {
  const { t } = useLang();
  return (
    <div className="about-cards-grid">
      {cards.map((card, index) => (
        <Reveal key={t.about.cards[index].title} variant="scale" delay={0.05 * index}>
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "12px",
              padding: "22px",
              transition: "all 0.3s",
              backdropFilter: "blur(4px)",
              height: "100%",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = `${card.color}30`;
              el.style.transform = "translateY(-4px)";
              el.style.background = "rgba(255,255,255,0.04)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "rgba(255,255,255,0.06)";
              el.style.transform = "";
              el.style.background = "rgba(255,255,255,0.03)";
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: `${card.color}10`,
                border: `1px solid ${card.color}20`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "14px",
                color: card.color,
              }}
            >
              <AboutIcon name={card.icon} color={card.color} />
            </div>

            <div
              style={{
                fontWeight: 600,
                fontFamily: "'Outfit',sans-serif",
                color: "#e8e8f0",
                fontSize: "14px",
                marginBottom: "5px",
              }}
            >
              {t.about.cards[index].title}
            </div>

            <div
              style={{
                fontSize: "12px",
                color: "#7070a0",
                lineHeight: 1.6,
              }}
            >
              {t.about.cards[index].sub}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
