"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import SectionHeading from "../ui/SectionHeading";
import Icon from "../ui/Icon";
import { segments } from "@/content/site";

export default function Segments() {
  const [active, setActive] = useState(0);
  const panel = useRef<HTMLDivElement>(null);
  const first = useRef(true);

  // A troca de aba anima o painel, mas não na primeira renderização —
  // senão o conteúdo "pisca" antes mesmo de o usuário interagir.
  useLayoutEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (!panel.current) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".seg-item",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.05, ease: "expo.out" },
      );
    }, panel);

    return () => ctx.revert();
  }, [active]);

  const tab = segments.tabs[active];

  return (
    <section
      id="segmentos"
      className="relative band-tide scroll-mt-24 py-[var(--space-section)]"
    >
      <div className="container-x">
        <SectionHeading
          eyebrow={segments.eyebrow}
          title={segments.title}
          subtitle={segments.subtitle}
        />

        {/* Abas */}
        <div
          role="tablist"
          aria-label="Tipos de clínica"
          className="mt-12 flex flex-wrap justify-center gap-2"
        >
          {segments.tabs.map((t, i) => (
            <button
              key={t.id}
              role="tab"
              id={`seg-tab-${t.id}`}
              aria-selected={i === active}
              aria-controls={`seg-panel-${t.id}`}
              onClick={() => setActive(i)}
              className={`rounded-full border px-4 py-2.5 text-sm transition-all duration-300 ease-[var(--ease-out-expo)] ${
                i === active
                  ? "border-pulse-500/45 bg-pulse-500/12 font-medium text-pulse-300"
                  : "border-ink-850 text-mist-500 hover:border-ink-800 hover:text-mist-200"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Painel */}
        <div
          ref={panel}
          role="tabpanel"
          id={`seg-panel-${tab.id}`}
          aria-labelledby={`seg-tab-${tab.id}`}
          className="edge-light relative mx-auto mt-8 max-w-3xl overflow-hidden rounded-[var(--radius-xl2)] border border-ink-850 bg-ink-925/60 p-7 md:p-10"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full opacity-60 blur-[70px]"
            style={{
              background:
                "radial-gradient(circle, oklch(0.695 0.168 240 / 0.22), transparent 70%)",
            }}
          />

          <h3 className="seg-item relative text-2xl leading-snug font-semibold">
            {tab.headline}
          </h3>

          <ul className="relative mt-6 grid gap-3 sm:grid-cols-2">
            {tab.bullets.map((b) => (
              <li
                key={b}
                className="seg-item flex items-start gap-2.5 rounded-xl border border-ink-850/70 bg-ink-950/40 px-3.5 py-3 text-sm text-mist-300"
              >
                <span className="mt-px grid size-5 shrink-0 place-items-center rounded-full bg-vital-500/12 text-vital-400">
                  <Icon name="check" size={11} />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
