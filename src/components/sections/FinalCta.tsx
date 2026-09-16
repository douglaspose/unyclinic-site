import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { finalCta, brand, whatsapp, whatsappHref } from "@/content/site";

export default function FinalCta() {
  const mailto = `mailto:${brand.email}?subject=${encodeURIComponent(
    "Quero conhecer o Unyclinic",
  )}&body=${encodeURIComponent(
    "Olá! Tenho uma clínica e gostaria de conhecer o sistema por dentro.\n\nNome:\nClínica:\nEspecialidade:\nTelefone:",
  )}`;

  return (
    <section
      id="contato"
      className="relative scroll-mt-24 px-5 pb-[var(--space-section)] md:px-8"
    >
      <div className="container-x px-0!">
        <div className="grain edge-light relative overflow-hidden rounded-[var(--radius-xl2)] border border-ink-850 bg-ink-925 px-6 py-16 md:rounded-[2rem] md:px-16 md:py-24">
          {/* Fundo do painel */}
          <div
            aria-hidden
            className="grid-bg pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_100%,black,transparent)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-52 left-1/2 size-[42rem] -translate-x-1/2 rounded-full blur-[110px]"
            style={{
              background:
                "radial-gradient(circle, oklch(0.695 0.168 240 / 0.30) 0%, oklch(0.655 0.19 296 / 0.14) 45%, transparent 70%)",
            }}
          />

          <Reveal
            stagger
            className="relative flex flex-col items-center text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-ink-800 bg-ink-900/70 px-3.5 py-1.5 text-xs text-mist-300 backdrop-blur-sm">
              <span className="size-1.5 rounded-full bg-vital-400" />
              {finalCta.note}
            </span>

            <h2 className="mt-7 max-w-2xl text-5xl leading-[1.05] font-semibold">
              {finalCta.title}
            </h2>

            <p className="mt-5 max-w-lg text-lg leading-relaxed text-mist-400">
              {finalCta.subtitle}
            </p>

            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
              {/*
                WhatsApp na frente do e-mail de propósito: é por onde dono de
                clínica realmente responde. O e-mail continua logo abaixo para
                quem prefere registro escrito.
              */}
              <Button
                href={whatsappHref}
                size="lg"
                withArrow
                target="_blank"
                rel="noopener noreferrer"
              >
                {whatsapp.cta}
              </Button>
              <Button
                href={finalCta.secondary.href}
                variant="secondary"
                size="lg"
              >
                {finalCta.secondary.label}
              </Button>
            </div>

            <div className="mt-8 flex flex-col items-center gap-x-6 gap-y-2 text-sm text-mist-500 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-mist-200"
              >
                <Icon name="whatsapp" size={15} />
                {whatsapp.display}
              </a>
              <a
                href={mailto}
                className="inline-flex items-center gap-2 transition-colors hover:text-mist-200"
              >
                <Icon name="document" size={15} />
                {brand.email}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
