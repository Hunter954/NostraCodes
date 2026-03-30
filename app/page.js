import Image from "next/image";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="hero-background" aria-hidden="true">
        <BackgroundRippleEffect />
        <div className="hero-glow hero-glow-left" />
        <div className="hero-glow hero-glow-right" />
        <div className="hero-noise" />
      </div>

      <header className="site-header">
        <a className="brand" href="#">
          <Image src="/logomarca.svg" alt="Nostra Codes" width={160} height={44} priority />
        </a>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Websites • Programas • Dashboards</span>
          <h1>O Próximo nível da sua empresa.</h1>
          <p>
            Transforme sua operação em uma experiência mais forte, moderna e profissional.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#">
              Solicitar projeto
            </a>
            <a className="button button-secondary" href="#">
              Demonstração
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
