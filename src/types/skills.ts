export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Mobile"
  | "DB"
  | "DevOps / Tools";

export interface Skill {
  name: string;
  category: SkillCategory;
}