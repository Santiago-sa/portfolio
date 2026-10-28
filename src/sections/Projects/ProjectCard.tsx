import { FiExternalLink, FiGithub } from "react-icons/fi";

import type { Project } from "../../types/projects";
import { ProjectPreview } from "./ProjectPreview";

const ACCENTS = {
  cyan: { solid: "#4fc3f7", soft: "rgba(79,195,247,0.05)", line: "rgba(79,195,247,0.2)" },
  violet: { solid: "#9b7bea", soft: "rgba(155,123,234,0.05)", line: "rgba(155,123,234,0.2)" },
} as const;

export function ProjectCard({ project }: { project: Project }) {
  const accent = ACCENTS[project.accent];

  return (
    <article className="project-card" style={{ borderTop: `2px solid ${accent.solid}` }}>
      <ProjectPreview title={project.title} image={project.image} imageMobile={project.imageMobile} />

      <div style={{ padding: "16px 18px 18px" }}>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: accent.solid,
          }}
        >
          {project.category}
        </span>

        <h3
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "18px",
            fontWeight: 700,
            color: "#e8e8f0",
            margin: "6px 0 8px",
            letterSpacing: "-0.01em",
          }}
        >
          {project.title}
        </h3>

        <p style={{ margin: "0 0 12px", color: "#9090b2", fontSize: "12.5px", lineHeight: 1.7 }}>
          {project.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "14px" }}>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                color: accent.solid,
                background: accent.soft,
                border: `1px solid ${accent.line}`,
                padding: "4px 8px",
                borderRadius: "3px",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {(project.repoUrl || project.liveUrl) && (
          <div style={{ display: "flex", gap: "16px" }}>
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noreferrer" className="project-link">
                <FiGithub size={14} /> Código
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link">
                <FiExternalLink size={14} /> Ver demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
