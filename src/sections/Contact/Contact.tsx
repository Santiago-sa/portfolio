import { useState } from "react";
import { useLang } from "@/i18n/LangProvider";
import { FiSend } from "react-icons/fi";
import { Reveal } from "@/components/ui/Reveal";

import { contactItems } from "../../content/contact";
import { ContactItem } from "../../components/ui/ContactItem";

export function Contact() {
  const { t } = useLang();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">(
    "idle",
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const form = event.currentTarget;

    const formData = new FormData(form);

    const rawAccessKey = String(
      import.meta.env.VITE_WEB3FORMS_KEY ?? "",
    ).trim();

    const accessKey =
      rawAccessKey.match(
        /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
      )?.[0] ?? rawAccessKey;

    const name = String(formData.get("name") ?? "");

    const email = String(formData.get("email") ?? "");

    const finalSubject = "Portafolio";

    const message = String(formData.get("message") ?? "");

    if (!accessKey) {
      setSubmitState("error");

      return;
    }

    setIsSubmitting(true);
    setSubmitState("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          subject: finalSubject,
          message,
          from_name: "Portafolio",
          replyto: email,
        }),
      });

      const result = (await response.json()) as {
        success?: boolean;
      };

      if (!response.ok || !result.success) {
        setSubmitState("error");

        return;
      }

      form.reset();
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: "70px 0 90px",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1140px",
          margin: "0 auto",
          padding: "0 28px",
        }}
      >
        {/* =========================================================
            ENCABEZADO
        ========================================================= */}

        <Reveal variant="blur">
          <div
            style={{
              textAlign: "center",
              marginBottom: "34px",
            }}
          >
            {/* LABEL */}

            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",

                fontFamily: "'JetBrains Mono', monospace",

                fontSize: "10px",

                letterSpacing: "0.2em",

                textTransform: "uppercase",

                color: "#00d4ff",

                background: "rgba(0,212,255,0.06)",

                border: "1px solid rgba(0,212,255,0.16)",

                padding: "5px 14px",

                borderRadius: "4px",

                marginBottom: "18px",
              }}
            >
              <span
                style={{
                  width: "4px",
                  height: "4px",

                  borderRadius: "50%",

                  background: "#00d4ff",

                  display: "inline-block",

                  boxShadow: "0 0 6px #00d4ff",
                }}
              />

              {t.contact.label}
            </span>

            {/* TÍTULO */}

            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",

                fontSize: "clamp(28px, 4vw, 40px)",

                fontWeight: 700,

                color: "#e8e8f0",

                margin: "0 0 12px",

                lineHeight: 1.15,

                letterSpacing: "-0.02em",
              }}
            >
              {t.contact.title}
            </h2>

            {/* DESCRIPCIÓN */}

            <p
              style={{
                color: "#7070a0",

                fontSize: "15px",

                maxWidth: "600px",

                margin: "0 auto",

                lineHeight: 1.8,
              }}
            >
              {t.contact.subtitle}
            </p>
          </div>
        </Reveal>

        {/* =========================================================
            CONTENIDO
        ========================================================= */}

        <div
          style={{
            display: "grid",

            gridTemplateColumns: "1fr 1.28fr",

            gap: "58px",

            alignItems: "start",
          }}
        >
          {/* =======================================================
              INFORMACIÓN DE CONTACTO
          ======================================================= */}

          <Reveal variant="left" delay={0.1}>
            <div>
              <h3
                style={{
                  fontFamily: "'Outfit', sans-serif",

                  fontSize: "22px",

                  fontWeight: 700,

                  color: "#e8e8f0",

                  margin: "0 0 14px",
                }}
              >
                {t.contact.heading}
              </h3>

              <p
                style={{
                  color: "#7070a0",

                  fontSize: "15px",

                  lineHeight: 1.8,

                  maxWidth: "460px",

                  margin: "0 0 28px",
                }}
              >
                {t.contact.body}
              </p>

              {/* CONTACTOS */}

              {contactItems.map((item) => (
                <ContactItem key={item.id} item={item} />
              ))}
            </div>
          </Reveal>

          {/* =======================================================
              FORMULARIO
          ======================================================= */}

          <Reveal variant="right" delay={0.18}>
            <form
              onSubmit={handleSubmit}
              style={{
                background: "rgba(255,255,255,0.025)",

                border: "1px solid rgba(255,255,255,0.08)",

                borderRadius: "12px",

                padding: "24px",
              }}
            >
              {/* NOMBRE + EMAIL */}

              <div
                style={{
                  display: "grid",

                  gridTemplateColumns: "1fr 1fr",

                  gap: "16px",

                  marginBottom: "16px",
                }}
              >
                {/* NOMBRE */}

                <div>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: "block",

                      fontSize: "11px",

                      color: "#7070a0",

                      marginBottom: "7px",
                    }}
                  >
                    {t.contact.name}
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder={t.contact.phName}
                    style={{
                      width: "100%",

                      boxSizing: "border-box",

                      height: "47px",

                      padding: "0 14px",

                      background: "rgba(255,255,255,0.025)",

                      border: "1px solid rgba(255,255,255,0.09)",

                      borderRadius: "7px",

                      outline: "none",

                      color: "#e8e8f0",

                      fontFamily: "'Inter', sans-serif",

                      fontSize: "13px",
                    }}
                  />
                </div>

                {/* EMAIL */}

                <div>
                  <label
                    htmlFor="contact-email"
                    style={{
                      display: "block",

                      fontSize: "11px",

                      color: "#7070a0",

                      marginBottom: "7px",
                    }}
                  >
                    {t.contact.email}
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder={t.contact.phEmail}
                    style={{
                      width: "100%",

                      boxSizing: "border-box",

                      height: "47px",

                      padding: "0 14px",

                      background: "rgba(255,255,255,0.025)",

                      border: "1px solid rgba(255,255,255,0.09)",

                      borderRadius: "7px",

                      outline: "none",

                      color: "#e8e8f0",

                      fontFamily: "'Inter', sans-serif",

                      fontSize: "13px",
                    }}
                  />
                </div>
              </div>

              {/* MENSAJE */}

              <div
                style={{
                  marginBottom: "20px",
                }}
              >
                <label
                  htmlFor="contact-message"
                  style={{
                    display: "block",

                    fontSize: "11px",

                    color: "#7070a0",

                    marginBottom: "7px",
                  }}
                >
                  {t.contact.message}
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  placeholder={t.contact.phMessage}
                  rows={4}
                  style={{
                    width: "100%",

                    boxSizing: "border-box",

                    padding: "14px",

                    resize: "vertical",

                    minHeight: "88px",

                    background: "rgba(255,255,255,0.025)",

                    border: "1px solid rgba(255,255,255,0.09)",

                    borderRadius: "7px",

                    outline: "none",

                    color: "#e8e8f0",

                    fontFamily: "'Inter', sans-serif",

                    fontSize: "13px",

                    lineHeight: 1.6,
                  }}
                />
              </div>

              {/* BOTÓN */}

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: "100%",

                  height: "49px",

                  border: "none",

                  borderRadius: "7px",

                  background: "linear-gradient(135deg,#68c9ee,#4e9cc1)",

                  color: "#061018",

                  fontFamily: "'Inter', sans-serif",

                  fontSize: "13px",

                  fontWeight: 600,

                  cursor: isSubmitting ? "not-allowed" : "pointer",

                  opacity: isSubmitting ? 0.78 : 1,

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",

                  gap: "8px",

                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(event) => {
                  if (isSubmitting) {
                    return;
                  }

                  const element = event.currentTarget;

                  element.style.transform = "";

                  element.style.boxShadow = "0 8px 24px rgba(0,212,255,0.28)";
                }}
                onMouseLeave={(event) => {
                  if (isSubmitting) {
                    return;
                  }

                  const element = event.currentTarget;

                  element.style.transform = "";

                  element.style.boxShadow = "";
                }}
              >
                <FiSend size={15} />

                {isSubmitting ? t.contact.sending : t.contact.send}
              </button>

              {submitState === "success" ? (
                <p
                  style={{
                    marginTop: "12px",
                    marginBottom: 0,
                    fontSize: "12px",
                    color: "#75e7b0",
                  }}
                >
                  {t.contact.sent}
                </p>
              ) : null}

              {submitState === "error" ? (
                <p
                  style={{
                    marginTop: "12px",
                    marginBottom: 0,
                    fontSize: "12px",
                    color: "#ff8a8a",
                  }}
                >
                  {t.contact.error}
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
