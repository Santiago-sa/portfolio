import { Container } from "@/components/layout/Container";
import { useScroll } from "@/components/layout/ScrollProvider";

const navigationItems = [
  {
    label: "Inicio",
    href: "#inicio",
  },
  {
    label: "Sobre mí",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Experiencia",
    href: "#experience",
  },
  {
    label: "Proyectos",
    href: "#proyectos",
  },
  {
    label: "Contacto",
    href: "#contact",
  },
];

export function Navbar() {
  const scrolled = useScroll().scrollPct > 0.01;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-[400ms] ${
        scrolled
          ? "border-white/[0.04] bg-[#04040e]/90 backdrop-blur-[22px]"
          : "border-transparent bg-transparent"
      }`}
    >
      <Container>
        <nav
          style={{ height: scrolled ? 62 : 76, transition: "height 0.4s ease" }}
          className="
            flex
            items-center
            justify-between
          "
        >
          {/* Logo */}

          <a
            href="#inicio"
            className="
              font-display
              text-xl
              font-extrabold
              tracking-[-0.04em]
              text-[#e8e8f0]
            "
          >
            Santiago
            <span className="text-cyan">.</span>
          </a>

          {/* Navigation */}

          <ul className="hidden items-center gap-7 lg:flex">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="
                    font-mono
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.12em]
                    text-[#7070a0]
                    transition-colors
                    duration-200
                    hover:text-[#e8e8f0]
                  "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}

          <div className="flex items-center gap-5">
            {/* Language */}

            <div className="hidden items-center gap-2 font-mono text-[10px] sm:flex">
              <button
                type="button"
                className="
                  text-cyan
                  transition-colors
                  hover:text-white
                "
              >
                ES
              </button>

              <span className="text-[#4848a0]">/</span>

              <button
                type="button"
                className="
                  text-[#4848a0]
                  transition-colors
                  hover:text-white
                "
              >
                EN
              </button>
            </div>

            {/* Contact */}

            <a
              href="#contact"
              className="
                hidden
                rounded-lg
                border
                border-cyan/20
                bg-cyan/5
                px-4
                py-2.5
                font-mono
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-cyan
                transition-all
                duration-200
                hover:border-cyan/40
                hover:bg-cyan/10
                sm:inline-flex
              "
            >
              Hablemos
            </a>

            {/* Mobile button */}

            <button
              type="button"
              aria-label="Abrir menú"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-md
                border
                border-white/10
                text-[#e8e8f0]
                lg:hidden
              "
            >
              <span className="text-lg">☰</span>
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
