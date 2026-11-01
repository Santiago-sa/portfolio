import { FiBriefcase, FiCheck } from "react-icons/fi";

import { Reveal } from "@/components/ui/Reveal";
import { experiences } from "../../content/experience";

const ACC = ["#4fc3f7", "#9b7bea", "#00ffaa"];

export function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "70px 0 110px",
        position: "relative",
        overflowAnchor: "none",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 28px",
        }}
      >
        {/* =====================================================
            ENCABEZADO
        ===================================================== */}

        <Reveal variant="blur"><div
          style={{
            textAlign: "center",
            marginBottom: "70px",
          }}
        >
          {/* Label */}

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

            // experiencia
          </span>

          {/* Título */}

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
            Mi experiencia
          </h2>

          {/* Descripción */}

          <p
            style={{
              color: "#7070a0",

              fontSize: "15px",

              maxWidth: "560px",

              margin: "0 auto",

              lineHeight: 1.8,
            }}
          >
            Recorrido profesional y aprendizajes en el mundo del desarrollo
            de software.
          </p>
        </div></Reveal>

        {/* =====================================================
            LÍNEA DE TIEMPO
        ===================================================== */}

        <div
          style={{
            position: "relative",
          }}
        >
          <div className="exp-line" />

          {/* =================================================
              TARJETAS
          ================================================= */}

          <div className="exp-grid">
            {experiences.map((experience, index) => (
              <Reveal
                key={experience.id}
                variant={(["left", "up", "right"] as const)[index % 3]}
                delay={index * 0.1}
                className="relative h-full"
              >
              <span
                className="exp-dot"
                style={{ background: ACC[index], boxShadow: `0 0 12px ${ACC[index]}b3` }}
              />
              <article
                style={{
                  height: "100%",
                  background:
                    "rgba(255,255,255,0.025)",

                  border:
                    "1px solid rgba(255,255,255,0.08)",

                  borderTop: `2px solid ${ACC[index]}`,

                  borderRadius: "14px",

                  padding: "26px",

                  display: "flex",
                  flexDirection: "column",

                  position: "relative",

                  transition:
                    "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",

                  backdropFilter: "blur(6px)",
                }}
                onMouseEnter={(event) => {
                  const element = event.currentTarget;

                  element.style.background = "rgba(255,255,255,0.04)";
                  element.style.borderColor = `${ACC[index]}66`;
                  element.style.borderTopColor = ACC[index];
                }}
                onMouseLeave={(event) => {
                  const element = event.currentTarget;

                  element.style.background = "rgba(255,255,255,0.025)";
                  element.style.borderColor = "rgba(255,255,255,0.08)";
                  element.style.borderTopColor = ACC[index];
                }}
              >
                {/* =================================================
                    CABECERA DE TARJETA
                ================================================= */}

                <div
                  style={{
                    display: "flex",

                    alignItems: "flex-start",

                    justifyContent:
                      "space-between",

                    gap: "15px",

                    marginBottom: "7px",
                  }}
                >
                  <h3
                    style={{
                      margin: 0,

                      fontFamily:
                        "'Outfit', sans-serif",

                      fontSize: "16px",

                      fontWeight: 700,

                      color: "#e8e8f0",

                      lineHeight: 1.4,
                    }}
                  >
                    {experience.position}
                  </h3>

                  {/* Periodo */}

                  <span
                    style={{
                      flexShrink: 0,

                      fontFamily:
                        "'JetBrains Mono', monospace",

                      fontSize: "10px",

                      color: ACC[index],

                      background: `${ACC[index]}0d`,

                      border: `1px solid ${ACC[index]}33`,

                      padding:
                        "5px 10px",

                      borderRadius: "14px",
                    }}
                  >
                    {experience.period}
                  </span>
                </div>

                {/* Empresa + tipo */}

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "8px 12px",
                    marginBottom: "18px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "7px",
                      color: ACC[index],
                      fontSize: "13px",
                      fontWeight: 600,
                    }}
                  >
                    <FiBriefcase size={14} /> {experience.company}
                  </span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "10px",
                      color: "#8080a8",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "10px",
                      padding: "2px 8px",
                    }}
                  >
                    {experience.type}
                  </span>
                </div>

                {/* =================================================
                    DESCRIPCIÓN
                ================================================= */}

                <p
                  style={{
                    margin: "0 0 12px",

                    color: "#9090b2",

                    fontSize: "13.5px",

                    lineHeight: 1.8,
                  }}
                >
                  {experience.description}
                </p>

                {/* Logros: marcador propio, aparecen escalonados */}

                <div
                  role="list"
                  style={{ display: "flex", flexDirection: "column", gap: "10px", margin: "4px 0 22px" }}
                >
                  {experience.achievements.map((achievement, j) => (
                    <Reveal key={achievement} variant="up" delay={0.2 + j * 0.07}>
                      <div
                        role="listitem"
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          color: "#8f8fb2",
                          fontSize: "13px",
                          lineHeight: 1.6,
                        }}
                      >
                        <span
                          style={{
                            width: "18px",
                            height: "18px",
                            flexShrink: 0,
                            marginTop: "2px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "5px",
                            background: `${ACC[index]}14`,
                            border: `1px solid ${ACC[index]}33`,
                          }}
                        >
                          <FiCheck size={11} color={ACC[index]} />
                        </span>
                        {achievement}
                      </div>
                    </Reveal>
                  ))}
                </div>

                {/* Tecnologías: siempre al fondo de la tarjeta */}

                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: "16px",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                  }}
                >
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "10px",
                        color: ACC[index],
                        background: `${ACC[index]}0a`,
                        border: `1px solid ${ACC[index]}2e`,
                        padding: "4px 8px",
                        borderRadius: "3px",
                      }}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}