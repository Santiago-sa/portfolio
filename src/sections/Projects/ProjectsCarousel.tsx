import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { projects } from "../../content/projects";
import { ProjectCard } from "./ProjectCard";

const INTERVAL = 5500;
const GAP = 12; // mitad del espacio entre tarjetas (24 px)

function usePerView() {
  const query = "(min-width: 900px)";
  const [wide, setWide] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const on = () => setWide(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return wide ? 2 : 1;
}

export function ProjectsCarousel() {
  const n = projects.length;
  const perView = usePerView();
  const rotates = n > perView;
  const [cur, setCur] = useState(0);
  const [anim, setAnim] = useState(true);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);

  // Clones del inicio al final para que el giro sea continuo
  const items = rotates ? [...projects, ...projects.slice(0, perView)] : projects;
  const active = cur % n;

  useEffect(() => setCur(0), [perView]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!rotates || paused || reduce || cur >= n) return;
    const id = setTimeout(() => setCur((c) => c + 1), INTERVAL);
    return () => clearTimeout(id);
  }, [cur, paused, rotates, n]);

  // Al llegar a los clones, salta sin animación al inicio real
  const onEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget || cur < n) return;
    setAnim(false);
    setCur(cur - n);
    requestAnimationFrame(() => requestAnimationFrame(() => setAnim(true)));
  };

  const step = (d: number) => setCur((c) => Math.min(Math.max(c + d, -1) < 0 ? n - 1 : c + d, n));

  const arrow =
    "flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#e8e8f0] transition-all duration-200 hover:border-cyan/40 hover:bg-cyan/10 hover:text-cyan";

  return (
    <div
      style={{ maxWidth: 920, margin: "0 auto" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="region"
      aria-roledescription="carrusel"
      aria-label="Proyectos"
    >
      <div
        style={{ overflow: "hidden", padding: "6px 0 14px" }}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null || !rotates) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        <div
          onTransitionEnd={onEnd}
          style={{
            display: "flex",
            justifyContent: rotates ? "flex-start" : "center",
            alignItems: "stretch",
            transform: `translateX(-${(cur * 100) / perView}%)`,
            transition: anim ? "transform 0.7s cubic-bezier(0.16,1,0.3,1)" : "none",
          }}
        >
          {items.map((project, i) => (
            <div
              key={`${project.id}-${i}`}
              style={{
                flex: `0 0 ${100 / perView}%`,
                padding: `0 ${GAP}px`,
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "100%", maxWidth: 440 }}>
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {rotates && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginTop: 18 }}>
          <button type="button" aria-label="Anterior" onClick={() => step(-1)} className={arrow}>
            <FiChevronLeft size={16} />
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {projects.map((p, i) => (
              <button
                key={p.id}
                type="button"
                aria-label={`Ir a ${p.title}`}
                onClick={() => setCur(i)}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  width: i === active ? 34 : 7,
                  height: 7,
                  borderRadius: 4,
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  background: "rgba(255,255,255,0.14)",
                  transition: "width 0.35s ease",
                }}
              >
                {i === active && (
                  <span
                    key={cur}
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "#00d4ff",
                      transformOrigin: "left",
                      animation: `dotFill ${INTERVAL}ms linear forwards`,
                      animationPlayState: paused ? "paused" : "running",
                    }}
                  />
                )}
              </button>
            ))}
          </div>
          <button type="button" aria-label="Siguiente" onClick={() => step(1)} className={arrow}>
            <FiChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
