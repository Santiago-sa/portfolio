import { experiences } from "../../content/experience";

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

        <div
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
        </div>

        {/* =====================================================
            LÍNEA DE TIEMPO
        ===================================================== */}

        <div
          style={{
            position: "relative",
          }}
        >
          {/* Línea horizontal */}

          <div
            style={{
              position: "absolute",

              top: "0",

              left: "23.5%",
              right: "23.5%",

              height: "1px",

              background:
                "rgba(120,120,170,0.18)",
            }}
          />

          {/* Puntos */}

          <div
            style={{
              position: "absolute",

              top: "-9px",

              left: "23.5%",

              width: "18px",
              height: "18px",

              borderRadius: "50%",

              background: "#5cc8f2",

              border: "3px solid #05050d",

              boxShadow:
                "0 0 12px rgba(92,200,242,0.7)",

              transform: "translateX(-50%)",
            }}
          />

          <div
            style={{
              position: "absolute",

              top: "-9px",

              left: "76.5%",

              width: "18px",
              height: "18px",

              borderRadius: "50%",

              background: "#9b7bea",

              border: "3px solid #05050d",

              boxShadow:
                "0 0 12px rgba(155,123,234,0.7)",

              transform: "translateX(-50%)",
            }}
          />

          {/* =================================================
              TARJETAS
          ================================================= */}

          <div
            style={{
              display: "grid",

              gridTemplateColumns:
                "repeat(2, minmax(0, 1fr))",

              gap: "20px",

              paddingTop: "42px",
            }}
          >
            {experiences.map((experience, index) => (
              <article
                key={experience.id}
                style={{
                  background:
                    "rgba(255,255,255,0.025)",

                  border:
                    "1px solid rgba(255,255,255,0.08)",

                  borderTop:
                    index === 0
                      ? "2px solid #4fc3f7"
                      : "2px solid #9b7bea",

                  borderRadius: "14px",

                  padding: "26px",

                  minHeight: index === 0 ? "382px" : "332px",

                  position: "relative",

                  transition:
                    "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",

                  backdropFilter: "blur(6px)",
                }}
                onMouseEnter={(event) => {
                  const element = event.currentTarget;

                  element.style.transform =
                    "translateY(-5px)";

                  element.style.boxShadow =
                    "0 18px 45px rgba(0,0,0,0.28)";
                }}
                onMouseLeave={(event) => {
                  const element = event.currentTarget;

                  element.style.transform = "";

                  element.style.boxShadow = "";
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

                      color:
                        index === 0
                          ? "#55c8f5"
                          : "#a88be8",

                      background:
                        index === 0
                          ? "rgba(85,200,245,0.05)"
                          : "rgba(168,139,232,0.05)",

                      border:
                        index === 0
                          ? "1px solid rgba(85,200,245,0.2)"
                          : "1px solid rgba(168,139,232,0.2)",

                      padding:
                        "5px 10px",

                      borderRadius: "14px",
                    }}
                  >
                    {experience.period}
                  </span>
                </div>

                {/* =================================================
                    EMPRESA
                ================================================= */}

                <div
                  style={{
                    color:
                      index === 0
                        ? "#45b8e8"
                        : "#a486e5",

                    fontSize: "13px",

                    fontWeight: 600,

                    marginBottom: "3px",
                  }}
                >
                  {experience.company}
                </div>

                {/* Tipo */}

                <div
                  style={{
                    fontFamily:
                      "'JetBrains Mono', monospace",

                    fontSize: "10px",

                    color: "#6d6d95",

                    marginBottom: "18px",
                  }}
                >
                  {experience.type}
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

                {/* =================================================
                    LOGROS / ACTIVIDADES
                ================================================= */}

                <ul
                  style={{
                    margin: "0 0 15px",

                    paddingLeft: "16px",

                    color: "#8585a8",

                    fontSize: "13px",

                    lineHeight: 1.9,
                  }}
                >
                  {experience.achievements.map(
                    (achievement) => (
                      <li key={achievement}>
                        {achievement}
                      </li>
                    ),
                  )}
                </ul>

                {/* =================================================
                    TECNOLOGÍAS
                ================================================= */}

                <div
                  style={{
                    display: "flex",

                    flexWrap: "wrap",

                    gap: "6px",
                  }}
                >
                  {experience.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        style={{
                          fontFamily:
                            "'JetBrains Mono', monospace",

                          fontSize: "10px",

                          color:
                            index === 0
                              ? "#57c8ef"
                              : "#a98be9",

                          background:
                            index === 0
                              ? "rgba(87,200,239,0.04)"
                              : "rgba(169,139,233,0.04)",

                          border:
                            index === 0
                              ? "1px solid rgba(87,200,239,0.18)"
                              : "1px solid rgba(169,139,233,0.18)",

                          padding:
                            "4px 8px",

                          borderRadius: "3px",
                        }}
                      >
                        {technology}
                      </span>
                    ),
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}