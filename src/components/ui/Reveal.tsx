"use client";

import { useLayoutEffect, useRef, type ElementType, type ReactNode } from "react";
import { gsap, MOTION } from "@/lib/gsap";

type RevealProps = {
  children: ReactNode;
  /** Anima os filhos diretos em cascata em vez do próprio elemento. */
  stagger?: boolean;
  delay?: number;
  /** Deslocamento vertical inicial, em px. */
  y?: number;
  as?: ElementType;
  className?: string;
  id?: string;
};

/**
 * Revelação na entrada da viewport.
 *
 * O estado inicial (opacity: 0) vem do CSS via [data-reveal], e não de um
 * gsap.set no cliente — assim não existe flash do conteúdo já visível antes
 * da hidratação. Sem JS ou com reduced-motion, o CSS mantém tudo visível.
 */
export default function Reveal({
  children,
  stagger = false,
  delay = 0,
  y = MOTION.distance,
  as: Tag = "div",
  className,
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduced: "(prefers-reduced-motion: reduce)",
          mobile: "(max-width: 767px)",
        },
        (context) => {
          const { reduced, mobile } = context.conditions as Record<
            string,
            boolean
          >;

          const targets = stagger
            ? (Array.from(el.children) as HTMLElement[])
            : [el];

          if (reduced) {
            gsap.set(targets, { opacity: 1, y: 0 });
            return;
          }

          gsap.fromTo(
            targets,
            { opacity: 0, y: mobile ? y * 0.6 : y },
            {
              opacity: 1,
              y: 0,
              duration: mobile ? 0.7 : MOTION.duration,
              delay,
              stagger: stagger ? MOTION.stagger : 0,
              scrollTrigger: {
                trigger: el,
                start: MOTION.start,
                once: true,
              },
            },
          );
        },
      );
    }, ref);

    return () => ctx.revert();
  }, [stagger, delay, y]);

  const revealAttr = stagger
    ? { "data-reveal-child": "" }
    : { "data-reveal": "" };

  return (
    <Tag ref={ref} className={className} id={id} {...revealAttr}>
      {children}
    </Tag>
  );
}
