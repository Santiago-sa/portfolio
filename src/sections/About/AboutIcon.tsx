type AboutIconName = "gradCap" | "code" | "phone" | "lightbulb";

interface AboutIconProps {
  name: AboutIconName;
  color: string;
}

const paths: Record<AboutIconName, string[]> = {
  gradCap: ["M22 10v6", "M2 10l10-5 10 5-10 5z", "M6 12v5c3 3 9 3 12 0v-5"],
  code: ["M16 18l6-6-6-6", "M8 6l-6 6 6 6"],
  phone: [
    "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.15 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012.08 0h3a2 2 0 012 1.72 14.06 14.06 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.38-.38a2 2 0 012.11-.45 14.1 14.1 0 002.81.7A2 2 0 0122 16.92z",
  ],
  lightbulb: [
    "M9 18h6",
    "M10 22h4",
    "M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 01-1 1H9a1 1 0 01-1-1v-2.26A7 7 0 015 9a7 7 0 017-7z",
  ],
};

export function AboutIcon({ name, color }: AboutIconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name].map((path) => (
        <path key={path} d={path} />
      ))}
    </svg>
  );
}

export type { AboutIconName };
