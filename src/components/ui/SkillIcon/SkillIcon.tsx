import type { Skill } from "@/types/skills";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiMui,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiLaravel,
  SiPhp,
  SiFlutter,
  SiDart,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
  SiSwagger,
} from "react-icons/si";

interface SkillIconProps {
  skill: Skill;
}

const iconMap = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  HTML5: SiHtml5,
  CSS3: SiCss,
  Bootstrap: SiBootstrap,
  "Material UI": SiMui,

  "Node.js": SiNodedotjs,
  NestJS: SiNestjs,
  "Express.js": SiExpress,
  Laravel: SiLaravel,
  PHP: SiPhp,

  Flutter: SiFlutter,
  Dart: SiDart,

  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,

  Docker: SiDocker,
  Git: SiGit,
  GitHub: SiGithub,
  Postman: SiPostman,
  Swagger: SiSwagger,
} as const;

const iconColors = {
  React: "#61DAFB",
  "Next.js": "#FFFFFF",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  "Tailwind CSS": "#06B6D4",
  HTML5: "#E34F26",
  CSS3: "#1572B6",
  Bootstrap: "#7952B3",
  "Material UI": "#007FFF",

  "Node.js": "#339933",
  NestJS: "#E0234E",
  "Express.js": "#FFFFFF",
  Laravel: "#FF2D20",
  PHP: "#777BB4",

  Flutter: "#54C5F8",
  Dart: "#0175C2",

  PostgreSQL: "#4169E1",
  MySQL: "#4479A1",
  MongoDB: "#47A248",

  Docker: "#2496ED",
  Git: "#F05032",
  GitHub: "#FFFFFF",
  Postman: "#FF6C37",
  Swagger: "#85EA2D",
} as const;

export function SkillIcon({ skill }: SkillIconProps) {
  const Icon = iconMap[skill.name as keyof typeof iconMap];
  const color = iconColors[skill.name as keyof typeof iconColors] ?? "#FFFFFF";

  if (!Icon) {
    return null;
  }

  return <Icon size={40} color={color} aria-label={skill.name} />;
}
