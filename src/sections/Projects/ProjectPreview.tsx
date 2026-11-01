import { useState } from "react";

interface ProjectPreviewProps {
  title: string;
  image?: string;
}


const NAV = ["Dashboard", "Inventario", "Préstamos", "Mantenimiento", "Usuarios"];
const STATS = [
  ["Equipos", "128", "#4fc3f7"],
  ["Prestados", "34", "#a78bfa"],
  ["Disponibles", "86", "#00ffaa"],
  ["Dañados", "8", "#ff6b6b"],
];
const ROWS = [
  ["Portátil Lenovo T14", "Laura M.", "Activo", "#00ffaa"],
  ["Tablet Galaxy Tab", "Andrés R.", "Por vencer", "#ffa657"],
  ["Portátil HP 450", "Camila P.", "Activo", "#00ffaa"],
  ["Proyector Epson", "Julián S.", "Devuelto", "#7070a0"],
];

function DashboardMock() {
  const t = { fontFamily: "'Inter',sans-serif", fontSize: 7.5, color: "#8888b4" } as const;
  return (
    <div aria-hidden="true" style={{ display: "flex", height: "100%", background: "#07070f", ...t }}>
      <div style={{ width: "27%", padding: "8px 6px", borderRight: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)" }}>
        <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: 9, color: "#e8e8f0", marginBottom: 8 }}>
          Lend<span style={{ color: "#00d4ff" }}>It</span>
        </div>
        {NAV.map((n, i) => (
          <div key={n} style={{ padding: "3px 5px", marginBottom: 2, borderRadius: 4, color: i === 2 ? "#00d4ff" : "#6868a0", background: i === 2 ? "rgba(0,212,255,0.08)" : "transparent" }}>
            {n}
          </div>
        ))}
      </div>
      <div style={{ flex: 1, padding: "8px 9px", minWidth: 0 }}>
        <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 9, color: "#e8e8f0", marginBottom: 6 }}>Préstamos</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 4, marginBottom: 7 }}>
          {STATS.map(([l, v, c]) => (
            <div key={l} style={{ padding: "4px 5px", borderRadius: 4, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.03)" }}>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: 11, color: c }}>{v}</div>
              <div style={{ fontSize: 6 }}>{l}</div>
            </div>
          ))}
        </div>
        <div style={{ borderRadius: 4, border: "1px solid rgba(255,255,255,0.06)", overflow: "hidden" }}>
          {ROWS.map(([eq, who, st, c], i) => (
            <div key={eq} style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 0.8fr", alignItems: "center", gap: 4, padding: "4px 6px", borderTop: i ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
              <span style={{ color: "#c8c8d8", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>{eq}</span>
              <span>{who}</span>
              <span style={{ justifySelf: "start", padding: "1px 5px", borderRadius: 8, fontSize: 6.5, color: c, background: `${c}18` }}>{st}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface ProjectPreviewProps {
  title: string;
  image?: string;
  imageMobile?: string;
  previewUrl?: string;
  layout?: "desktop" | "mobile";
  images?: string[];
}


/** "/projects/x.webp" + [420,840] → "/projects/x-420.webp 420w, /projects/x-840.webp 840w" */
const srcSetFor = (path: string, widths: number[]) =>
  widths.map((w) => `${path.replace(/\.webp$/, "")}-${w}.webp ${w}w`).join(", ");

/** App móvil: un celular grande (180 px = 2x nativo de la captura, nítido en pantallas retina). */
function MobileAppPreview({ title, images }: { title: string; images: string[] }) {
  return (
    <div className="project-preview">
      <div className="project-mobile-stage">
        <span className="project-chip float-a" style={{ left: 14, top: "14%" }}>Flutter</span>
        <span className="project-chip float-b" style={{ right: 14, bottom: "24%" }}>Offline</span>
        {images.map((src, i) => (
          <div key={src} className="project-mobile-phone">
            <img
              src={src}
              srcSet={`${src.replace(/\.webp$/, "-1x.webp")} 1x, ${src} 2x`}
              alt={`Pantalla ${i + 1} de la app ${title}`}
              decoding="async"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/** Pantalla de PC (recortada, se desplaza al pasar el mouse) + celular encima. */
export function ProjectPreview({ title, image, imageMobile, previewUrl, layout, images }: ProjectPreviewProps) {
  if (layout === "mobile" && image) return <MobileAppPreview title={title} images={images ?? [image]} />;

  const [failed, setFailed] = useState(false);
  const showImage = Boolean(image) && !failed;

  return (
    <div className="project-preview" style={{ position: "relative", paddingBottom: 16 }}>
      <div className="project-preview-bar">
        <span style={{ background: "#ff5f57" }} />
        <span style={{ background: "#febc2e" }} />
        <span style={{ background: "#28c840" }} />
        <div className="project-preview-url">{previewUrl ?? `${title.toLowerCase()}.app`}</div>
      </div>

      <div className="project-preview-screen">
        {showImage ? (
          <img
            src={image}
            srcSet={srcSetFor(image!, [420, 840, 1260])}
            sizes="(max-width: 600px) 92vw, 420px"
            decoding="async"
            alt={`Vista de escritorio de ${title}`}
            loading="lazy"
            onError={() => setFailed(true)}
            className="project-preview-img"
          />
        ) : (
          <DashboardMock />
        )}
      </div>

      {/* Base del monitor */}
      <div aria-hidden="true" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ width: 34, height: 9, background: "rgba(255,255,255,0.07)" }} />
        <div style={{ width: 96, height: 4, borderRadius: 3, background: "rgba(255,255,255,0.1)" }} />
      </div>

      {/* Celular */}
      {showImage && (
        <div
          className="project-preview-phone"
          style={{
            position: "absolute",
            right: 12,
            bottom: 4,
            width: 100,
            aspectRatio: "9 / 19",
            overflow: "hidden",
            borderRadius: 14,
            border: "3px solid #1c1c2e",
            background: "#07070f",
            boxShadow: "0 10px 30px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08)",
          }}
        >
          <img
            src={imageMobile ?? image}
            srcSet={imageMobile ? srcSetFor(imageMobile, [96, 192, 288]) : undefined}
            sizes="94px"
            decoding="async"
            alt={`Vista móvil de ${title}`}
            loading="lazy"
            className="project-phone-img"
          />
          <div style={{ position: "absolute", top: 3, left: "50%", width: 22, height: 4, transform: "translateX(-50%)", borderRadius: 3, background: "#1c1c2e" }} />
        </div>
      )}
    </div>
  );
}
