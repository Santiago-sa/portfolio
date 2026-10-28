import { useScroll } from "./ScrollProvider";

export function ScrollProgressBar() {
  const { scrollPct } = useScroll();
  return (
    <div className="fixed inset-x-0 top-0 z-[1100] h-[2px] bg-cyan/[0.06]">
      <div
        style={{
          height: "100%",
          width: `${scrollPct * 100}%`,
          background: "linear-gradient(90deg,#00d4ff 0%,#7c3aed 55%,#00ffaa 100%)",
          transition: "width 60ms linear",
          boxShadow: "0 0 10px rgba(0,212,255,0.55), 0 0 20px rgba(0,212,255,0.25)",
        }}
      />
    </div>
  );
}
