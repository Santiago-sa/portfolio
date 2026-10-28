import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import { footerNavigation, footerSocials } from "@/content/footer";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (label: string) => {
    switch (label) {
      case "GitHub":
        return <FaGithub />;

      case "LinkedIn":
        return <FaLinkedinIn />;

      case "Email":
        return <FiMail />;

      default:
        return null;
    }
  };

  return (
    <footer
      style={{
        position: "relative",
        padding: "70px 0 28px",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        background: "rgba(3,3,12,0.55)",
      }}
    >
      <div
        style={{
          maxWidth: "1160px",
          margin: "0 auto",
          padding: "0 28px",
        }}
      >
        {/* =========================================
            CONTENIDO PRINCIPAL
        ========================================= */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.8fr 1fr 1fr",
            gap: "80px",
            paddingBottom: "48px",
          }}
        >
          {/* =========================================
              MARCA
          ========================================= */}

          <div>
            <a
              href="#home"
              style={{
                display: "inline-block",
                marginBottom: "16px",
                color: "#e8e8f0",
                fontFamily: "'Outfit', sans-serif",
                fontSize: "18px",
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "-0.02em",
              }}
            >
              Santiago
              <span className="text-cyan">.</span>
            </a>

            <p
              style={{
                maxWidth: "230px",
                margin: 0,
                color: "#7070a0",
                fontFamily: "'Inter', sans-serif",
                fontSize: "13.5px",
                lineHeight: 1.75,
              }}
            >
              Construyendo aplicaciones web y móviles modernas con pasión y
              precisión técnica.
            </p>
          </div>

          {/* =========================================
              NAVEGACIÓN
          ========================================= */}

          <div>
            <span
              style={{
                display: "block",
                marginBottom: "18px",
                color: "#6666a0",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              Navegación
            </span>

            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "11px",
              }}
            >
              {footerNavigation.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    width: "fit-content",
                    color: "#7070a0",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.color = "#63c7ef";
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.color = "#7070a0";
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* =========================================
              REDES
          ========================================= */}

          <div>
            <span
              style={{
                display: "block",
                marginBottom: "18px",
                color: "#6666a0",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              Redes
            </span>

            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {footerSocials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label === "Email" ? undefined : "_blank"}
                  rel={
                    social.label === "Email" ? undefined : "noopener noreferrer"
                  }
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "9px",
                    width: "fit-content",
                    color: "#7070a0",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.color = "#63c7ef";
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.color = "#7070a0";
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "14px",
                      fontSize: "13px",
                    }}
                  >
                    {getSocialIcon(social.label)}
                  </span>

                  {social.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* =========================================
            SEPARADOR
        ========================================= */}

        <div
          style={{
            width: "100%",
            height: "1px",
            background: "rgba(255,255,255,0.05)",
          }}
        />

        {/* =========================================
            COPYRIGHT
        ========================================= */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            paddingTop: "22px",
          }}
        >
          <span
            style={{
              color: "#55558a",
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
            }}
          >
            © {currentYear} Santiago Alvarez Hernández. Todos los derechos
            reservados.
          </span>

          {/* <span
            style={{
              color: "#55558a",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.04em",
            }}
          >
  
          </span> */}
        </div>
      </div>

      {/* =========================================
          RESPONSIVE
      ========================================= */}

      <style>
        {`
          @media (max-width: 768px) {
            footer {
              padding-top: 55px !important;
            }

            footer > div {
              padding-left: 20px !important;
              padding-right: 20px !important;
            }

            footer > div > div:first-child {
              grid-template-columns: 1fr 1fr !important;
              gap: 40px !important;
            }

            footer > div > div:first-child > div:first-child {
              grid-column: 1 / -1;
            }

            footer > div > div:last-child {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 10px !important;
            }
          }

          @media (max-width: 480px) {
            footer > div > div:first-child {
              grid-template-columns: 1fr !important;
            }

            footer > div > div:first-child > div:first-child {
              grid-column: auto;
            }
          }
        `}
      </style>
    </footer>
  );
}
