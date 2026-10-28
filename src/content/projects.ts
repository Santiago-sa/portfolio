import type { Project } from "../types/projects";

export const projects: Project[] = [
  {
    id: "lendit",
    title: "Lendit",
    category: "Aplicación web · Panel administrativo",
    description:
      "Aplicativo web para el préstamo e inventario de equipos de cómputo en una universidad. Los estudiantes solicitan préstamos con fecha y hora, confirman con un código enviado por correo, y los encargados gestionan inventario, mantenimiento y devoluciones.",
    technologies: ["React", "TypeScript", "NestJS", "Drizzle ORM"],
    image: "/projects/lendit.png",
    repoUrl: "https://github.com/Santiago-sa/lendit_front",
    accent: "cyan",
  },
];
