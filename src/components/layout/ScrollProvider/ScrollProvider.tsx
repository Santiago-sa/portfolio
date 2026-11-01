import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export const SECTIONS = [
  { id: "inicio", label: "Inicio" },
  { id: "about", label: "Sobre mí" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experiencia" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contact", label: "Contacto" },
];

interface ScrollState {
  scrollPct: number;
  activeSection: string;
}

const ScrollCtx = createContext<ScrollState>({ scrollPct: 0, activeSection: "inicio" });
// eslint-disable-next-line react-refresh/only-export-components
export const useScroll = () => useContext(ScrollCtx);

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ScrollState>({ scrollPct: 0, activeSection: "inicio" });

  useEffect(() => {
    const observers = SECTIONS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const ob = new IntersectionObserver(
        ([e]) => e.isIntersecting && setState((s) => ({ ...s, activeSection: id })),
        { threshold: 0.3 },
      );
      ob.observe(el);
      return ob;
    });

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = document.documentElement;
        const pct = el.scrollTop / Math.max(el.scrollHeight - el.clientHeight, 1);
        setState((s) => ({ ...s, scrollPct: pct }));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observers.forEach((o) => o?.disconnect());
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <ScrollCtx.Provider value={state}>{children}</ScrollCtx.Provider>;
}
