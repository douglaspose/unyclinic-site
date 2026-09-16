"use client";

import { useRef, useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import { faq } from "@/content/site";

function Item({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  const body = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`overflow-hidden rounded-[var(--radius-card)] border transition-colors duration-500 ${
        open
          ? "border-ink-800 bg-ink-925/70"
          : "border-ink-850 bg-ink-925/35 hover:border-ink-800"
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4.5 text-left md:px-6"
      >
        <span className="text-[0.9375rem] font-medium text-mist-100 md:text-base">
          {q}
        </span>
        <span
          className={`grid size-7 shrink-0 place-items-center rounded-full border transition-all duration-400 ease-[var(--ease-out-expo)] ${
            open
              ? "rotate-180 border-pulse-500/40 bg-pulse-500/12 text-pulse-300"
              : "border-ink-800 text-mist-500"
          }`}
        >
          <Icon name="chevron" size={14} />
        </span>
      </button>

      {/*
        A altura anima via grid-template-rows 0fr -> 1fr: funciona com
        conteúdo de altura desconhecida e não força layout a cada frame,
        ao contrário de animar max-height no chute.
      */}
      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-[var(--ease-out-expo)] ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div ref={body} className="overflow-hidden">
          <p className="px-5 pb-5 text-[0.9375rem] leading-relaxed text-mist-400 md:px-6 md:pb-6">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative band-tide scroll-mt-24 py-[var(--space-section)]"
    >
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow={faq.eyebrow}
            title={faq.title}
            subtitle={faq.subtitle}
            align="left"
            className="lg:sticky lg:top-28 lg:self-start"
          />

          <Reveal stagger className="flex flex-col gap-2.5">
            {faq.items.map((item, i) => (
              <Item
                key={item.q}
                q={item.q}
                a={item.a}
                open={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
