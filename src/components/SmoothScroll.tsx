"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * Smooth scroll via Lenis, sincronizado ao ticker do GSAP.
 *
 * Duas decisões importantes:
 * - Um único loop de animação (o do GSAP) conduz o Lenis. Dois rAF
 *   concorrentes causariam jitter perceptível no scrub do ScrollTrigger.
 * - Quem pediu reduced-motion recebe o scroll nativo do navegador.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      document.documentElement.style.scrollBehavior = "smooth";
      return;
    }

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Âncoras internas precisam passar pelo Lenis, senão o salto é seco.
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement)?.closest?.(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;

      const target = document.querySelector(id);
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target as HTMLElement, {
        offset: -72,
        duration: 1.15,
      });
    };

    document.addEventListener("click", onClick);

    // As fontes trocam depois da primeira pintura e mudam a altura do texto.
    // Sem este refresh, os gatilhos de scroll ficam alguns pixels fora do
    // lugar justamente nas seções de título grande.
    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    // Quem chega por link com âncora (ex: /#planos) seria devolvido ao topo,
    // porque o Lenis assume o controle do scroll assim que inicializa.
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        requestAnimationFrame(() => {
          lenis.scrollTo(target as HTMLElement, {
            offset: -72,
            immediate: true,
          });
        });
      }
    }

    return () => {
      document.removeEventListener("click", onClick);
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
