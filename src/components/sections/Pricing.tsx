"use client";

import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { pricing } from "@/content/site";

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  // Anual = 2 meses grátis, ou seja, 10 mensalidades diluídas em 12.
  const monthlyEquivalent = (price: number) =>
    annual ? Math.round((price * 10) / 12) : price;

  return (
    <section
      id="planos"
      className="relative scroll-mt-24 py-[var(--space-section)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-ink-800 to-transparent"
      />

      <div className="container-x">
        <SectionHeading
          eyebrow={pricing.eyebrow}
          title={pricing.title}
          subtitle={pricing.subtitle}
        />

        {/* Alternador de ciclo */}
        <Reveal className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-ink-850 bg-ink-925/70 p-1">
            {[false, true].map((isAnnual) => (
              <button
                key={String(isAnnual)}
                onClick={() => setAnnual(isAnnual)}
                aria-pressed={annual === isAnnual}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                  annual === isAnnual
                    ? "bg-ink-800 font-medium text-mist-50"
                    : "text-mist-500 hover:text-mist-200"
                }`}
              >
                {isAnnual ? pricing.annualLabel : pricing.monthlyLabel}
                {isAnnual && (
                  <span className="ml-2 rounded-full bg-vital-500/15 px-1.5 py-0.5 text-[10px] font-medium text-vital-400">
                    {pricing.annualNote}
                  </span>
                )}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Planos */}
        <Reveal
          stagger
          className="mx-auto mt-10 grid max-w-4xl items-start gap-4 md:grid-cols-2"
        >
          {pricing.plans.map((plan) => (
            <article
              key={plan.id}
              className={`relative overflow-hidden rounded-[var(--radius-xl2)] border p-7 transition-all duration-500 ease-[var(--ease-out-expo)] md:p-8 ${
                plan.featured
                  ? "border-pulse-500/40 bg-ink-900/70 shadow-[0_30px_80px_-40px_oklch(0.695_0.168_240/0.6)] md:-translate-y-3"
                  : "border-ink-850 bg-ink-925/50 hover:border-ink-800"
              }`}
            >
              {plan.featured && (
                <>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-28 left-1/2 size-64 -translate-x-1/2 rounded-full opacity-70 blur-[70px]"
                    style={{
                      background:
                        "radial-gradient(circle, oklch(0.695 0.168 240 / 0.28), transparent 70%)",
                    }}
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-[15%] top-0 h-px bg-linear-to-r from-transparent via-pulse-400 to-transparent"
                  />
                </>
              )}

              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{plan.name}</h3>
                    <p className="mt-1 text-sm text-mist-500">
                      {plan.audience}
                    </p>
                  </div>
                  {plan.badge && (
                    <span className="shrink-0 rounded-full border border-pulse-500/35 bg-pulse-500/12 px-2.5 py-1 text-[11px] font-medium text-pulse-300">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <div className="mt-7 flex items-end gap-1.5">
                  <span className="text-2xl text-mist-500">R$</span>
                  <span className="font-display text-5xl leading-none font-semibold tracking-tight text-mist-50 tabular-nums">
                    {monthlyEquivalent(plan.price)}
                  </span>
                  <span className="pb-1 text-sm text-mist-500">/mês</span>
                </div>

                <p className="mt-2 h-5 text-xs text-mist-600">
                  {annual
                    ? `Cobrado anualmente · ${pricing.annualNote}`
                    : "Cobrado mensalmente"}
                </p>

                <div className="my-6 h-px bg-ink-850" />

                <ul className="flex flex-col gap-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 text-sm text-mist-300"
                    >
                      <span
                        className={`grid size-5 shrink-0 place-items-center rounded-full ${
                          plan.featured
                            ? "bg-pulse-500/15 text-pulse-300"
                            : "bg-ink-850 text-mist-400"
                        }`}
                      >
                        <Icon name="check" size={11} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  href="#contato"
                  variant={plan.featured ? "primary" : "secondary"}
                  size="lg"
                  className="mt-8 w-full"
                  withArrow={plan.featured}
                >
                  {plan.cta}
                </Button>
              </div>
            </article>
          ))}
        </Reveal>

        <Reveal className="mt-8 flex items-center justify-center gap-2 text-sm text-mist-600">
          <Icon name="plus" size={14} className="text-mist-600" />
          {pricing.addon}
        </Reveal>
      </div>
    </section>
  );
}
