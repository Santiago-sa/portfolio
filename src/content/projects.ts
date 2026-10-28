import type { Project } from "../types/projects";

export const projects: Project[] = [
  {
    id: "lendit",
    title: "Lendit",
    category: "Aplicación web · Panel administrativo",
    description:
      "Panel web para el préstamo e inventario de equipos de cómputo de una universidad: solicitudes con confirmación por correo, mantenimiento y control de devoluciones.",
    technologies: ["React", "TypeScript", "NestJS", "Drizzle ORM"],
    image: "/projects/lendit.webp",
    imageMobile: "/projects/lendit-mobile.webp",
    repoUrl: "https://github.com/Santiago-sa/lendit_front",
    accent: "cyan",
  },
];
