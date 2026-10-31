export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  /** Ruta dentro de /public, ej: "/projects/lendit.png". Si no existe se muestra una vista previa genérica. */
  /** Texto de la barra de direcciones del mockup, ej: "comandas.app". */
  previewUrl?: string;
  image?: string;
  /** Opcional: captura móvil real. Si falta, se recorta la de escritorio. */
  imageMobile?: string;
  repoUrl?: string;
  liveUrl?: string;
  accent: "cyan" | "violet" | "mint";
}
