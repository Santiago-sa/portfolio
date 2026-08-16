export type ContactItemType =
  | "email"
  | "linkedin"
  | "github";

export interface ContactItemData {
  id: string;
  type: ContactItemType;
  label: string;
  value: string;
  href: string;
}