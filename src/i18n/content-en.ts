import type { Experience } from "../types/experience";
import type { Project } from "../types/projects";

export const experiencesEn: Record<string, Partial<Experience>> = {
  urasoft: {
    period: "Jan 2026 - Sep 2026",
    position: "Software Developer",
    description:
      "Development of a software project for a municipal public entity, focused on building the frontend of a mobile application.",
    achievements: [
      "Mobile app development in Flutter, focused on frontend construction",
      "Responsive layouts, reusable widgets, and screen navigation",
      "Project structure designed to ease future backend integration",
      "Development best practices and modular code organization",
      "Support in gathering the system's initial requirements",
    ],
  },
  "cargo-ban": {
    position: "Full Stack Developer",
    type: "Full-time",
    description:
      "Development of enterprise web applications for logistics and port management. Implementation of scalable architectures, high-performance APIs, and process automation.",
    achievements: [
      "Building frontend interfaces with React and TypeScript",
      "Developing RESTful APIs with NestJS and Node.js",
      "Developing mobile applications with Flutter and Dart",
      "Designing and managing databases with PostgreSQL",
      "Automating business processes with Microsoft Power Automate",
    ],
  },
  projects: {
    period: "2022 - Present",
    position: "Software Developer",
    company: "Academic and Personal Projects",
    description:
      "Development of web and mobile applications for clients and personal projects, gaining experience across multiple technology stacks.",
    achievements: [
      "Mobile application development with Flutter and Dart",
      "Full stack web application development",
      "Relational and NoSQL database design",
      "Authentication and authorization systems implementation",
    ],
  },
};

export const projectsEn: Record<string, Partial<Project>> = {
  lendit: {
    category: "Web app · Admin dashboard",
    description:
      "Web panel for loaning and managing computer equipment at a university: requests confirmed by email, maintenance, and return tracking.",
  },
  comandas: {
    category: "Web app · Restaurants",
    description:
      "QR ordering system: customers scan their table's code, order from the menu, and pay their bill; the kitchen receives orders live on a board per station, with cashier, reports, and menu and table management.",
  },
  agrovida: {
    category: "Mobile app · Organic farming",
    description:
      "Flutter mobile app for organic farming and bio-products. Offers educational documents in PDF and images available offline, and a formulation calculator by volume, sprayer type, and crop (plantain, avocado).",
  },
};

export function localize<T extends { id: string }>(items: T[], overrides: Record<string, Partial<T>>, lang: "es" | "en"): T[] {
  return lang === "en" ? items.map((item) => ({ ...item, ...overrides[item.id] })) : items;
}
