import { Reveal } from "../../components/ui/Reveal";
import { projects } from "../../content/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section
      id="proyectos"
      style={{ padding: "70px 0 110px", position: "relative", overflowAnchor: "none" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 28px" }}>
        <Reveal variant="blur">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#00d4ff",
                background: "rgba(0,212,255,0.06)",
                border: "1px solid rgba(0,212,255,0.16)",
                padding: "5px 14px",
                borderRadius: "4px",
                marginBottom: "18px",
              }}
            >
              <span
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: "#00d4ff",
                  display: "inline-block",
                  boxShadow: "0 0 6px #00d4ff",
                }}
              />
              {"// proyectos"}
            </span>

            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(30px, 4vw, 40px)",
                fontWeight: 700,
                color: "#e8e8f0",
                margin: "0 0 14px",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Proyectos destacados
            </h2>

            <p
              style={{
                color: "#7070a0",
                fontSize: "15px",
                maxWidth: "560px",
                margin: "0 auto",
                lineHeight: 1.8,
              }}
            >
              Una vista rápida de lo que he construido: qué hace cada proyecto y con qué tecnologías.
            </p>
          </div>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal key={project.id} variant="scale" delay={index * 0.09}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
