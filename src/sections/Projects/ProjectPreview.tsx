import { useState } from "react";

interface ProjectPreviewProps {
  title: string;
  image?: string;
}

/** Ventana de navegador con el screenshot del proyecto (o un esqueleto si aún no hay imagen). */
export function ProjectPreview({ title, image }: ProjectPreviewProps) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(image) && !failed;

  return (
    <div className="project-preview">
      <div className="project-preview-bar">
        <span style={{ background: "#ff5f57" }} />
        <span style={{ background: "#febc2e" }} />
        <span style={{ background: "#28c840" }} />
        <div className="project-preview-url">{title.toLowerCase()}.app</div>
      </div>

      <div className="project-preview-screen">
        {showImage ? (
          <img
            src={image}
            alt={`Vista previa de ${title}`}
            loading="lazy"
            onError={() => setFailed(true)}
            className="project-preview-img"
          />
        ) : (
          <div className="project-preview-skeleton" aria-hidden="true">
            <div className="skeleton-sidebar">
              {[0, 1, 2, 3, 4].map((i) => (
                <span key={i} />
              ))}
            </div>
            <div className="skeleton-main">
              <span className="skeleton-title" />
              <div className="skeleton-cards">
                <span />
                <span />
                <span />
              </div>
              <span className="skeleton-table" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
