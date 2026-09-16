"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import SectionHeading from "../ui/SectionHeading";
import Icon from "../ui/Icon";
import { howItWorks } from "@/content/site";

export default function HowItWorks() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // A linha é desenhada conforme o usuário rola: o progresso do
        // scroll vira o progresso do processo. É o único scrub da seção.
        gsap.fromTo(
          ".hiw-line",
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".hiw-grid",
              start: "top 72%",
              end: "bottom 65%",
              scrub: 0.5,
            },
          },
        );

        gsap.fromTo(
          ".hiw-step",
          { opacity: 0, y: 34 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.14,
            scrollTrigger: { trigger: ".hiw-grid", start: "top 80%", once: true },
          },
        );

        gsap.fromTo(
          ".hiw-dot",
          { scale: 0 },
          {
            scale: 1,
            duration: 0.6,
            ease: "back.out(2.2)",
            stagger: 0.14,
            scrollTrigger: { trigger: ".hiw-grid", start: "top 78%", once: true },
          },
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative band-tide py-[var(--space-section)]"
    >
      <div className="container-x">
        <SectionHeading eyebrow={howItWorks.eyebrow} title={howItWorks.title} />

        <div className="hiw-grid relative mt-16">
          {/* Trilho + linha desenhada (só no desktop, onde os passos ficam lado a lado) */}
          <div
            aria-hidden
            className="absolute top-[22px] right-[16%] left-[16%] hidden h-px bg-ink-850 md:block"
          >
            <span className="hiw-line block h-full origin-left bg-linear-to-r from-pulse-500 via-pulse-400 to-aura-500" />
          </div>

          <div className="relative grid gap-10 md:grid-cols-3 md:gap-6">
            {howItWorks.steps.map((step) => (
              <div
                key={step.n}
                data-reveal
                className="hiw-step flex flex-col items-center text-center md:px-4"
              >
                <span className="hiw-dot relative z-10 grid size-11 place-items-center rounded-full border border-ink-800 bg-ink-925 font-display text-sm font-semibold text-pulse-300 shadow-[0_0_0_6px_var(--color-ink-950)]">
                  {step.n}
                </span>

                <h3 className="mt-6 text-xl leading-snug font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2.5 max-w-xs text-[0.9375rem] leading-relaxed text-mist-500">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div
            data-reveal
            className="hiw-step mt-14 flex items-center justify-center gap-2 text-sm text-mist-600"
          >
            <Icon name="check" size={15} className="text-vital-400" />
            Sem instalação: tudo acontece no navegador.
          </div>
        </div>
      </div>
    </section>
  );
}
