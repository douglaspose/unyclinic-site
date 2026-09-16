"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Registro central dos plugins.
 * Importar daqui (e nunca direto de "gsap") garante que o ScrollTrigger
 * esteja registrado uma única vez, antes de qualquer animação rodar.
 */
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  // Curva padrão do site. Definir aqui evita repetir ease em cada tween.
  gsap.defaults({ ease: "power3.out", duration: 0.9 });

  // Evita recalcular tudo quando a barra de endereço do mobile recolhe.
  ScrollTrigger.config({ ignoreMobileResize: true });
}

export { gsap, ScrollTrigger };

/** Presets compartilhados — mantêm o ritmo das animações consistente. */
export const MOTION = {
  distance: 28,
  stagger: 0.07,
  duration: 0.9,
  start: "top 85%",
} as const;
