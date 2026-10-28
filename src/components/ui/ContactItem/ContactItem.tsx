import {
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

import type { ContactItemData } from "../../../types/contact";

interface ContactItemProps {
  item: ContactItemData;
}

const icons = {
  email: FiMail,
  linkedin: FiLinkedin,
  github: FiGithub,
};

const iconColors = {
  email: "#00bde8",
  linkedin: "#248bc5",
  github: "#d0d0dc",
};

export function ContactItem({ item }: ContactItemProps) {
  const Icon = icons[item.type];

  const isGithub = item.type === "github";

  return (
    <a
      href={item.href}
      target={item.type === "email" ? undefined : "_blank"}
      rel={
        item.type === "email"
          ? undefined
          : "noopener noreferrer"
      }
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",

        width: "100%",
        boxSizing: "border-box",

        padding: "14px 16px",

        marginBottom: "10px",

        background: "rgba(255,255,255,0.025)",

        border: "1px solid rgba(255,255,255,0.07)",

        borderRadius: "9px",

        textDecoration: "none",

        transition: "all 0.25s ease",
      }}
      onMouseEnter={(event) => {
        const element = event.currentTarget;

        element.style.borderColor = isGithub
          ? "rgba(255,255,255,0.15)"
          : "rgba(0,212,255,0.25)";

        element.style.transform = "translateX(4px)";
      }}
      onMouseLeave={(event) => {
        const element = event.currentTarget;

        element.style.borderColor =
          "rgba(255,255,255,0.07)";

        element.style.transform = "";
      }}
    >
      {/* ICONO */}

      <div
        style={{
          width: "34px",
          height: "34px",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          flexShrink: 0,

          background:
            item.type === "github"
              ? "rgba(255,255,255,0.025)"
              : "rgba(0,212,255,0.04)",

          border:
            item.type === "github"
              ? "1px solid rgba(255,255,255,0.08)"
              : "1px solid rgba(0,212,255,0.12)",

          borderRadius: "7px",

          color: iconColors[item.type],
        }}
      >
        <Icon size={16} />
      </div>

      {/* INFORMACIÓN */}

      <div>
        <div
          style={{
            fontFamily:
              "'JetBrains Mono', monospace",

            fontSize: "9px",

            letterSpacing: "0.18em",

            textTransform: "uppercase",

            color: "#575783",

            marginBottom: "4px",
          }}
        >
          {item.label}
        </div>

        <div
          style={{
            fontFamily:
              "'JetBrains Mono', monospace",

            fontSize: "12px",

            color: iconColors[item.type],
          }}
        >
          {item.value}
        </div>
      </div>
    </a>
  );
}