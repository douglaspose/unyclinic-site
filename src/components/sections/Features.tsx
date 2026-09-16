"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import SectionHeading from "../ui/SectionHeading";
import Icon from "../ui/Icon";
import { features } from "@/content/site";

export default function Features() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // batch agrupa os cards que entram juntos na viewport num único
        // stagger, em vez de disparar 12 ScrollTriggers independentes.
        ScrollTrigger.batch(".feat-card", {
          start: "top 88%",
          once: true,
          onEnter: (batch) =>
            gsap.fromTo(
              batch,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.85, stagger: 0.06, overwrite: true },
            ),
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".feat-card", { opacity: 1, y: 0 });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  /**
   * Realce que segue o cursor. Um listener só, no contêiner, escrevendo
   * variáveis CSS — os cards não precisam de listener nem de estado.
   */
  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const card = (event.target as HTMLElement).closest<HTMLElement>(
      ".feat-card",
    );
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    card.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <section
      ref={root}
      id="recursos"
      className="relative scroll-mt-24 py-[var(--space-section)]"
    >
      {/* Banda de luz que separa esta seção da anterior */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-ink-800 to-transparent"
      />

      <div className="container-x">
        <SectionHeading
          eyebrow={features.eyebrow}
          title={features.title}
          subtitle={features.subtitle}
        />

        <div
          onPointerMove={onPointerMove}
          className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.items.map((item) => {
            const wide = item.span === "wide";
            const accent = "accent" in item && item.accent;

            return (
              <article
                key={item.id}
                data-reveal
                className={`feat-card group relative overflow-hidden rounded-[var(--radius-card)] border p-5 transition-colors duration-500 md:p-6 ${
                  wide ? "lg:col-span-2" : ""
                } ${
                  accent
                    ? "border-pulse-500/30 bg-pulse-500/6 hover:border-pulse-500/50"
                    : "border-ink-850 bg-ink-925/50 hover:border-ink-800"
                }`}
              >
                {/* Realce sob o cursor */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(340px circle at var(--mx, 50%) var(--my, 50%), oklch(0.695 0.168 240 / 0.10), transparent 70%)",
                  }}
                />

                <div className="relative flex h-full flex-col">
                  <span
                    className={`mb-4 grid size-10 place-items-center rounded-xl border transition-all duration-500 ${
                      accent
                        ? "border-pulse-500/35 bg-pulse-500/15 text-pulse-300"
                        : "border-ink-800 bg-ink-900 text-mist-400 group-hover:border-pulse-500/40 group-hover:text-pulse-300"
                    }`}
                  >
                    <Icon name={item.icon} size={18} />
                  </span>

                  <h3 className="text-[1.0625rem] leading-snug font-semibold">
                    {item.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed text-mist-500 ${
                      wide ? "max-w-lg" : ""
                    }`}
                  >
                    {item.body}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
