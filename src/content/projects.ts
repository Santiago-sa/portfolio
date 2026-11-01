import type { Project } from "../types/projects";

export const projects: Project[] = [
  {
    id: "lendit",
    title: "Lendit",
    category: "Aplicación web · Panel administrativo",
    description:
      "Panel web para el préstamo e inventario de equipos de cómputo de una universidad: solicitudes con confirmación por correo, mantenimiento y control de devoluciones.",
    technologies: ["React", "TypeScript", "NestJS", "Drizzle ORM", "PostgreSQL"],
    image: "/projects/lendit.webp",
    imageMobile: "/projects/lendit-mobile.webp",
    repoUrl: "https://github.com/Santiago-sa/lendit_front",
    previewUrl: "lendit",
    accent: "cyan",
  },
  {
    id: "comandas",
    title: "Comandas QR",
    category: "Aplicación web · Restaurantes",
    description:
      "Sistema de comandas por QR: el cliente escanea el código de su mesa, pide desde el menú y paga su cuenta; la cocina recibe los pedidos en vivo en un tablero por estación, con caja, reportes y gestión de menú y mesas.",
    technologies: ["React", "TypeScript", "Vite", "Socket.IO", "NestJS", "Drizzle ORM", "PostgreSQL", "Wompi"],
    image: "/projects/comandas.webp",
    imageMobile: "/projects/comandas-mobile.webp",
    previewUrl: "comandas Qr",
    repoUrl: "https://github.com/Santiago-sa/comandas-front",
    accent: "violet",
  },
  {
    id: "agrovida",
    title: "Agrovida",
    category: "Aplicación móvil · Agricultura orgánica",
    description:
      "App móvil en Flutter para agricultura orgánica y bioproductos. Ofrece documentos educativos en PDF e imágenes disponibles sin conexión y una calculadora de formulaciones según volumen, tipo de bomba y cultivo (plátano, aguacate).",
    technologies: ["Flutter", "Dart"],
    layout: "mobile",
    images: ["/projects/agrovida-inicio.webp", "/projects/agrovida-calculadora.webp"],
    image: "/projects/agrovida-inicio.webp",
    accent: "mint",
  },
];
