export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  /** Ruta dentro de /public, ej: "/projects/lendit.png". Si no existe se muestra una vista previa genérica. */
  image?: string;
  repoUrl?: string;
  liveUrl?: string;
  accent: "cyan" | "violet";
}
