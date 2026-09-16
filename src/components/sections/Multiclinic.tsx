"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import { multiclinic } from "@/content/site";

const CLINICS = [
  { sub: "helena", nome: "Clínica Helena", cor: "from-pulse-400 to-pulse-600" },
  { sub: "sorriso", nome: "Odonto Sorriso", cor: "from-aura-400 to-aura-500" },
  { sub: "movimente", nome: "Fisio Movimente", cor: "from-vital-400 to-vital-500" },
];

export default function Multiclinic() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // As três clínicas se separam a partir do centro: a animação
        // *mostra* o isolamento em vez de só afirmá-lo.
        gsap.fromTo(
          ".mc-clinic",
          { opacity: 0, y: 26, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.95,
            stagger: 0.12,
            ease: "expo.out",
            scrollTrigger: { trigger: ".mc-diagram", start: "top 80%", once: true },
          },
        );

        gsap.fromTo(
          ".mc-wire",
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: { trigger: ".mc-diagram", start: "top 80%", once: true },
          },
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="multiclinica"
      className="relative scroll-mt-24 overflow-hidden py-[var(--space-section)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-ink-925/60 via-transparent to-ink-925/60"
      />

      <div className="container-x relative">
        <SectionHeading
          eyebrow={multiclinic.eyebrow}
          title={multiclinic.title}
          subtitle={multiclinic.subtitle}
        />

        {/* ---------- Diagrama ---------- */}
        <div className="mc-diagram mt-16">
          <div className="grid gap-4 sm:grid-cols-3">
            {CLINICS.map((c) => (
              <div
                key={c.sub}
                className="mc-clinic relative rounded-[var(--radius-card)] border border-ink-850 bg-ink-925/60 p-5"
              >
                {/* Endereço */}
                <div className="flex items-center gap-2 rounded-lg border border-ink-850 bg-ink-950/70 px-2.5 py-2">
                  <Icon name="lock" size={12} className="shrink-0 text-vital-400" />
                  <span className="truncate text-[11px] text-mist-400">
                    {c.sub}.unyclinic.com.br
                  </span>
                </div>

                {/* Fio até o banco */}
                <div className="flex justify-center py-3">
                  <span
                    className={`mc-wire block h-8 w-px origin-top bg-linear-to-b ${c.cor} opacity-60`}
                  />
                </div>

                {/* Banco isolado */}
                <div className="rounded-lg border border-ink-850 bg-ink-900/60 p-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`grid size-7 shrink-0 place-items-center rounded-md bg-linear-to-br ${c.cor} text-ink-950`}
                    >
                      <Icon name="database" size={14} />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-xs font-medium text-mist-200">
                        {c.nome}
                      </p>
                      <p className="text-[10px] text-mist-600">
                        Banco de dados próprio
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 flex gap-1">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <span
                        key={i}
                        className="h-1 flex-1 rounded-full bg-ink-800"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-mist-600">
            Sem cruzamento entre bases. Sem &ldquo;esqueci o filtro de clínica&rdquo;.
          </p>
        </div>

        {/* ---------- Pilares ---------- */}
        <Reveal stagger className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {multiclinic.pillars.map((p) => (
            <div
              key={p.title}
              className="edge-light rounded-[var(--radius-card)] border border-ink-850 bg-ink-925/50 p-5 transition-colors duration-500 hover:border-ink-800"
            >
              <span className="mb-4 grid size-9 place-items-center rounded-lg border border-ink-800 bg-ink-900 text-pulse-300">
                <Icon name={p.icon} size={16} />
              </span>
              <h3 className="text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist-500">
                {p.body}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
