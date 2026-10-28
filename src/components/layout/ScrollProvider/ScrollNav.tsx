import { useState } from "react";
import { SECTIONS, useScroll } from "./ScrollProvider";

export function ScrollNav() {
  const { activeSection } = useScroll();
  const [hov, setHov] = useState<string | null>(null);
  const activeIdx = Math.max(SECTIONS.findIndex((s) => s.id === activeSection), 0);
  const fill = (activeIdx / (SECTIONS.length - 1)) * 100;

  return (
    <div className="scroll-nav fixed right-5 top-1/2 z-[900] -translate-y-1/2 flex-col items-center">
      <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/[0.06]" />
      <div
        className="absolute left-1/2 top-0 w-px -translate-x-1/2"
        style={{
          height: `${fill}%`,
          background: "linear-gradient(to bottom,#00d4ff,#7c3aed)",
          transition: "height 0.6s cubic-bezier(0.4,0,0.2,1)",
          boxShadow: "0 0 8px rgba(0,212,255,0.4)",
        }}
      />
      {SECTIONS.map((s, i) => {
        const active = s.id === activeSection;
        const past = i <= activeIdx;
        return (
          <div
            key={s.id}
            className="relative z-[1] py-[9px]"
            onMouseEnter={() => setHov(s.id)}
            onMouseLeave={() => setHov(null)}
          >
            <span
              className="pointer-events-none absolute right-[19px] top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-[#04040e]/90 px-2 py-[3px] font-mono text-[10px] transition-opacity duration-200"
              style={{
                color: active ? "#00d4ff" : "#6868a0",
                border: `1px solid ${active ? "rgba(0,212,255,0.2)" : "rgba(255,255,255,0.05)"}`,
                opacity: hov === s.id || active ? 1 : 0,
              }}
            >
              {s.label}
            </span>
            <button
              type="button"
              aria-label={s.label}
              onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" })}
              className="block cursor-pointer rounded-full p-0 outline-none"
              style={{
                width: active ? 10 : 6,
                height: active ? 10 : 6,
                background: past ? (active ? "#00d4ff" : "rgba(0,212,255,0.45)") : "rgba(255,255,255,0.12)",
                border: active ? "2px solid rgba(0,212,255,0.3)" : "none",
                transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                boxShadow: active ? "0 0 12px rgba(0,212,255,0.8),0 0 24px rgba(0,212,255,0.3)" : "none",
              }}
            />
            {active && (
              <span
                className="pointer-events-none absolute left-1/2 top-1/2 h-[22px] w-[22px] rounded-full"
                style={{ border: "1px solid rgba(0,212,255,0.25)", animation: "navPulse 2s ease-out infinite" }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
