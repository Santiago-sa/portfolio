import { useState } from "react";

import { skills } from "../../content/skills";
import type { SkillCategory } from "../../types/skills";
import { SkillIcon } from "../../components/ui/SkillIcon";

const categories: SkillCategory[] = [
  "Frontend",
  "Backend",
  "Mobile",
  "DB",
  "DevOps / Tools",
];

const categoryLabels: Record<SkillCategory, string> = {
  Frontend: "Frontend",
  Backend: "Backend",
  Mobile: "Mobile",
  DB: "Bases de datos",
  "DevOps / Tools": "DevOps / Tools",
};

export function Skills() {
  const [activeCategory, setActiveCategory] =
    useState<SkillCategory>("Frontend");

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory,
  );

  return (
    <section
      id="skills"
      style={{
        padding: "70px 0 110px",
        position: "relative",

        // Evita que el navegador intente recolocar
        // la sección cuando cambia el contenido.
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
        {/* =========================================================
            ENCABEZADO
        ========================================================= */}

        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",

            // El encabezado queda completamente independiente
            // del contenido que cambia.
            position: "relative",
            zIndex: 1,
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

           // tecnologías
          </span>

          {/* Título */}

          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(26px, 3.8vw, 40px)",
              fontWeight: 700,
              color: "#e8e8f0",
              margin: "0 0 14px",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Tecnologías y herramientas
          </h2>

          {/* Descripción */}

          <p
            style={{
              color: "#7070a0",
              fontSize: "15px",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            Stack que uso para construir soluciones robustas, escalables y
            modernas.
          </p>
        </div>

        {/* =========================================================
            CATEGORÍAS
        ========================================================= */}

        <div
          style={{
            display: "flex",
            gap: "7px",
            flexWrap: "wrap",
            justifyContent: "center",

            // Altura estable para que la zona inferior
            // no pueda afectar al encabezado.
            minHeight: "38px",

            marginBottom: "44px",
          }}
        >
          {categories.map((category) => {
            const isActive = category === activeCategory;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                style={{
                  background: isActive
                    ? "linear-gradient(135deg,#00d4ff,#0096b8)"
                    : "rgba(255,255,255,0.03)",

                  border: isActive
                    ? "none"
                    : "1px solid rgba(255,255,255,0.06)",

                  color: isActive ? "#04040e" : "#8888b0",

                  padding: "7px 17px",
                  borderRadius: "7px",

                  fontSize: "13px",
                  fontWeight: isActive ? 600 : 400,

                  cursor: "pointer",
                  fontFamily: "'Inter', sans-serif",

                  transition: "all 0.22s",

                  backdropFilter: "blur(4px)",
                }}
              >
                {categoryLabels[category]}
              </button>
            );
          })}
        </div>

        {/* =========================================================
            TECNOLOGÍAS
        ========================================================= */}

        <div
           style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, 190px)",
    justifyContent: "center",
    gap: "14px",
  

            /*
             * IMPORTANTE:
             *
             * Reservamos espacio para la categoría que tenga
             * más elementos.
             *
             * De esta manera, cuando cambias:
             *
             * Frontend → Backend
             * Backend → Mobile
             * Mobile → DB
             *
             * la altura de esta zona no cambia.
             */
            minHeight: "350px",

            /*
             * Evita que el navegador haga scroll anchoring
             * sobre esta zona.
             */
            overflowAnchor: "none",

            alignContent: "start",
          }}
        >
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "12px",
                padding: "22px 12px",
                textAlign: "center",
                cursor: "default",
                transition: "all 0.28s",
                backdropFilter: "blur(4px)",

                /*
                 * Altura fija de cada tarjeta.
                 * Así las filas no cambian de tamaño.
                 */
                minHeight: "118px",
                boxSizing: "border-box",
              }}
              onMouseEnter={(event) => {
                const element = event.currentTarget;

                element.style.borderColor =
                  "rgba(0,212,255,0.20)";

                element.style.transform =
                  "translateY(-5px)";

                element.style.boxShadow =
                  "0 16px 40px rgba(0,0,0,0.35)";
              }}
              onMouseLeave={(event) => {
                const element = event.currentTarget;

                element.style.borderColor =
                  "rgba(255,255,255,0.06)";

                element.style.transform = "";

                element.style.boxShadow = "";
              }}
            >
              {/* Icono */}

              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "12px",

                  background:
                    "rgba(255,255,255,0.03)",

                  border:
                    "1px solid rgba(255,255,255,0.06)",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  margin: "0 auto 12px",
                }}
              >
                <SkillIcon skill={skill} />
              </div>

              {/* Nombre */}

              <div
                style={{
                  fontSize: "12.5px",
                  fontWeight: 600,
                  color: "#e8e8f0",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}