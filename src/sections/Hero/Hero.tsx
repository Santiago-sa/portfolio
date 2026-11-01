import { useLang } from "@/i18n/LangProvider";
import { Container } from "@/components/layout/Container";
import { HeroVisual } from "./components/HeroVisual";

export function Hero() {
  const { t } = useLang();
  return (
    <section
      id="inicio"
      className="relative min-h-[calc(100vh-76px)] overflow-hidden pt-6 lg:pt-8"
    >
      <Container>
        <div
          className="
            hero-grid
            min-h-[calc(100vh-76px)]
            py-10
            lg:py-12
          "
        >
          {/* =====================================================
              HERO CONTENT
          ====================================================== */}

          <div className="hero-text max-w-[680px]">
            {/* Status */}

            <div
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-mint/20
                bg-mint/5
                px-4
                py-2
                font-mono
                text-xs
                text-mint
              "
            >
              <span
                className="
                  status-dot
                  h-2
                  w-2
                  rounded-full
                  bg-mint
                "
              />
              {t.hero.available}
            </div>

            {/* Small introduction */}

            <p
              className="
                mb-1
                font-display
                text-[16px]
                font-medium
                text-[#8585a5]
              "
            >
              {t.hero.greeting}
            </p>

            {/* Name */}

            <h1
              className="
                font-display
                font-extrabold
                text-[clamp(28px,5.5vw,64px)]
                leading-[1.06]
                tracking-[-0.03em]
              "
            >
              <span className="block text-[#e8e8f0]">Santiago</span>

              <span
                className="block bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg,#00d4ff 0%,#a78bfa 50%,#00ffaa 100%)",
                  backgroundSize: "200% 200%",
                  animation: "gradShift 6s ease infinite",
                }}
              >
                Alvarez Hernández
              </span>
            </h1>

            {/* Role */}

            <div
              className="
                mt-3
                font-mono
                text-[clamp(11px,1.4vw,14px)]
              "
            >
              <span className="text-cyan">{"<" + t.hero.role}</span>

              <span className="text-[#6b6b8c]">{" / "}</span>

              <span className="text-violet">{"Full Stack Developer"}</span>

              <span className="text-cyan">{" />"}</span>
            </div>

            {/* Description */}

            <p
              className="
                mt-4
                max-w-[440px]
                font-body
                text-[16px]
                leading-[1.85]
                text-[#8585a5]
              "
            >
              {t.hero.tagline}
            </p>

            {/* Actions */}

            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-[10px]
                mb-8
              "
            >
              {/* Projects */}

              <a
                href="#proyectos"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-lg
                  bg-gradient-to-r
                  from-[#55c7ed]
                  to-[#65b7dc]
                  px-6
                  py-[13px]
                  font-body
                  text-[14px]
                  font-semibold
                  text-[#071018]
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:shadow-[0_10px_28px_rgba(0,212,255,0.35)]
                "
              >
                {t.hero.btnProjects}
                <span className="text-lg">→</span>
              </a>

              {/* Contact */}

              <a
                href="#contacto"
                className="
                  inline-flex
                  items-center
                  rounded-lg
                  border
                  border-white/10
                  px-6
                  py-[13px]
                  font-body
                  text-[14px]
                  font-semibold
                  text-[#d8d8e4]
                  transition-all
                  duration-200
                  hover:border-cyan/30
                  hover:text-cyan
                "
              >
                {t.hero.btnContact}
              </a>

              {/* CV */}

              <a
                href={`${import.meta.env.BASE_URL}cv/CV_SantiagoAlvarez.pdf`}
                download="CV_SantiagoAlvarez.pdf"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-lg
                  border
                  border-white/[0.08]
                  px-6
                  py-[13px]
                  font-body
                  text-[14px]
                  font-medium
                  text-[#8585a5]
                  transition-all
                  duration-200
                  hover:border-white/15
                  hover:text-[#d8d8e4]
                "
              >
                <span>↓</span>
                {t.hero.btnCV}
              </a>
            </div>

            {/* =================================================
                STATS
            ================================================== */}

            <div
              className="
                mt-6
                border-t
                border-white/[0.07]
                pt-6
              "
            >
              <div
                className="
                  flex
                  flex-wrap
                  gap-7
                "
              >
                {/* Projects */}

                <div>
                  <div className="font-display text-[22px] font-bold tracking-[-0.02em] text-cyan">
                    6+
                  </div>

                  <div className="mt-1 text-[11px] text-[#666685]">
                    {t.hero.statProjects}
                  </div>
                </div>

                {/* Technologies */}

                <div>
                  <div className="font-display text-[22px] font-bold tracking-[-0.02em] text-cyan">
                    10+
                  </div>

                  <div className="mt-1 text-[11px] text-[#666685]">
                    {t.hero.statTech}
                  </div>
                </div>

                {/* Experience */}

                <div>
                  <div className="font-display text-[22px] font-bold tracking-[-0.02em] text-cyan">
                    2+
                  </div>

                  <div className="mt-1 text-[11px] text-[#666685]">
                    {t.hero.statYears}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              HERO VISUAL
          ====================================================== */}

          <HeroVisual />
        </div>
      </Container>

      <button
        type="button"
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="
          absolute
          bottom-14
          lg:bottom-12
          left-1/2
          z-10
          flex
          -translate-x-1/2
          flex-col
          items-center
          gap-1.5
          bg-transparent
          font-mono
          text-[10px]
          tracking-[0.1em]
          text-[#4848a0]
          animate-[float_2.8s_ease-in-out_infinite]
          transition-colors
          duration-200
          hover:text-[#7070a0]
        "
      >
        {t.hero.scroll}
        <span className="text-[16px] leading-none">⌄</span>
      </button>
    </section>
  );
}
