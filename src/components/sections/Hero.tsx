"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { AppWindow } from "../visuals/AppWindow";
import ScreenDashboard from "../visuals/ScreenDashboard";
import { hero } from "@/content/site";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          // "motion" e "reduced" são complementares: uma das duas sempre casa.
          // Sem essa garantia, num celular sem reduced-motion nenhuma condição
          // casaria, o GSAP não rodaria o callback e o hero ficaria invisível.
          motion: "(prefers-reduced-motion: no-preference)",
          reduced: "(prefers-reduced-motion: reduce)",
          desktop: "(min-width: 768px)",
        },
        (context) => {
          const { reduced, desktop } = context.conditions as Record<
            string,
            boolean
          >;

          const all = gsap.utils.toArray<HTMLElement>("[data-reveal]", root.current);

          if (reduced) {
            gsap.set(all, { opacity: 1, yPercent: 0, y: 0, scale: 1 });
            return;
          }

          const tl = gsap.timeline({
            defaults: { ease: "expo.out" },
            delay: 0.12,
          });

          tl.fromTo(
            ".hero-eyebrow",
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.8 },
          )
            // Cada linha sobe de dentro da própria máscara: o texto parece
            // ser "impresso", não apenas aparecer.
            .fromTo(
              ".hero-line",
              { opacity: 0, yPercent: 108 },
              { opacity: 1, yPercent: 0, duration: 1.15, stagger: 0.085 },
              "-=0.5",
            )
            .fromTo(
              ".hero-sub",
              { opacity: 0, y: 18 },
              { opacity: 1, y: 0, duration: 0.9 },
              "-=0.75",
            )
            .fromTo(
              ".hero-cta",
              { opacity: 0, y: 16 },
              { opacity: 1, y: 0, duration: 0.8, stagger: 0.08 },
              "-=0.65",
            )
            .fromTo(
              ".hero-note",
              { opacity: 0 },
              { opacity: 1, duration: 0.7 },
              "-=0.5",
            )
            .fromTo(
              ".hero-window",
              { opacity: 0, y: 64, scale: 0.965 },
              { opacity: 1, y: 0, scale: 1, duration: 1.35 },
              "-=0.85",
            )
            .fromTo(
              ".hero-float",
              { opacity: 0, y: 20, scale: 0.9 },
              { opacity: 1, y: 0, scale: 1, duration: 0.85, stagger: 0.12 },
              "-=0.6",
            );

          if (!desktop) return;

          // Parallax de saída: a janela sobe mais devagar que a página
          gsap.to(".hero-window", {
            y: -70,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.6,
            },
          });

          gsap.to(".hero-glow", {
            opacity: 0.35,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "bottom 40%",
              scrub: true,
            },
          });
        },
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="top"
      className="grain relative overflow-hidden pt-28 pb-[var(--space-section)] md:pt-36"
    >
      {/* ---------- Camadas de fundo ---------- */}
      <div
        aria-hidden
        className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_75%_55%_at_50%_0%,black,transparent_75%)] opacity-60"
      />
      <div
        aria-hidden
        className="hero-glow pointer-events-none absolute -top-[26rem] left-1/2 size-[58rem] -translate-x-1/2 rounded-full opacity-100 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.695 0.168 240 / 0.28) 0%, oklch(0.655 0.19 296 / 0.12) 42%, transparent 68%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-pulse-500/50 to-transparent"
      />

      <div id="conteudo" className="container-x relative">
        {/* ---------- Copy ---------- */}
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <span
            data-reveal
            className="hero-eyebrow inline-flex items-center gap-2 rounded-full border border-ink-800 bg-ink-900/70 py-1.5 pr-4 pl-1.5 text-xs font-medium text-mist-300 backdrop-blur-sm"
          >
            <span className="relative grid size-5 place-items-center">
              <span className="absolute size-2 rounded-full bg-pulse-400/70 [animation:pulse-ring_2.4s_ease-out_infinite]" />
              <span className="size-1.5 rounded-full bg-pulse-400" />
            </span>
            {hero.eyebrow}
          </span>

          <h1 className="mt-7 text-6xl leading-[0.98] font-semibold">
            {hero.titleLines.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.12em]">
                <span
                  data-reveal
                  className={`hero-line block ${
                    i === hero.highlightLine ? "text-gradient" : ""
                  }`}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p
            data-reveal
            className="hero-sub mt-7 max-w-xl text-lg leading-relaxed text-mist-400"
          >
            {hero.subtitle}
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <span data-reveal className="hero-cta">
              <Button href={hero.primaryCta.href} size="lg" withArrow>
                {hero.primaryCta.label}
              </Button>
            </span>
            <span data-reveal className="hero-cta">
              <Button
                href={hero.secondaryCta.href}
                variant="secondary"
                size="lg"
              >
                {hero.secondaryCta.label}
              </Button>
            </span>
          </div>

          <p
            data-reveal
            className="hero-note mt-5 max-w-sm text-sm text-mist-600"
          >
            {/* Ícone inline, não flex: assim ele acompanha a primeira linha
                quando o texto quebra em duas no celular. */}
            <Icon
              name="check"
              size={14}
              className="mr-1.5 inline-block align-[-2px] text-vital-400"
            />
            {hero.footnote}
          </p>
        </div>

        {/* ---------- Mockup ---------- */}
        <div className="relative mx-auto mt-16 max-w-5xl md:mt-20">
          <div data-reveal className="hero-window relative">
            <AppWindow>
              <ScreenDashboard />
            </AppWindow>

            {/* Reflexo inferior: assenta a janela no fundo */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-8 -bottom-px h-32 bg-linear-to-t from-ink-950 to-transparent"
            />
          </div>

          {/* Cartões flutuantes — sinalizam automação sem precisar explicar */}
          <div
            data-reveal
            className="hero-float absolute -top-6 -left-4 hidden lg:block xl:-left-14"
          >
            <div className="surface edge-light flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 shadow-[0_16px_40px_-16px_oklch(0_0_0/0.8)] [animation:float-soft_6s_ease-in-out_infinite]">
              <span className="grid size-8 place-items-center rounded-lg bg-vital-500/15 text-vital-400">
                <Icon name="chat" size={16} />
              </span>
              <div>
                <p className="text-xs font-medium text-mist-100">
                  Confirmação enviada
                </p>
                <p className="text-[11px] text-mist-500">
                  Marina Alves · WhatsApp
                </p>
              </div>
            </div>
          </div>

          <div
            data-reveal
            className="hero-float absolute -right-4 bottom-16 hidden lg:block xl:-right-12"
          >
            <div className="surface edge-light flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 shadow-[0_16px_40px_-16px_oklch(0_0_0/0.8)] [animation:float-soft_7.5s_ease-in-out_infinite_0.8s]">
              <span className="grid size-8 place-items-center rounded-lg bg-pulse-500/15 text-pulse-300">
                <Icon name="repeat" size={16} />
              </span>
              <div>
                <p className="text-xs font-medium text-mist-100">
                  12 recontatos hoje
                </p>
                <p className="text-[11px] text-mist-500">
                  Retorno perto do prazo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
