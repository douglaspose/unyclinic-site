"use client";

import { useEffect, useState } from "react";
import Icon from "./ui/Icon";
import { whatsapp, whatsappHref } from "@/content/site";

/**
 * Botão flutuante de WhatsApp.
 *
 * Só aparece depois que o visitante passa do hero: na primeira dobra ele
 * competiria com os dois CTAs principais, e ainda não há motivo para falar
 * com alguém antes de saber o que o produto faz.
 */
export default function WhatsAppButton() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const aoRolar = () => setVisivel(window.scrollY > 640);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${whatsapp.floating} — ${whatsapp.display}`}
      className={`group fixed right-5 bottom-5 z-40 flex items-center overflow-hidden rounded-full bg-linear-to-b from-[#2ee06d] to-[#17a44c] text-ink-950 shadow-[0_8px_30px_-6px_oklch(0.72_0.17_150/0.5),0_1px_0_0_oklch(1_0_0/0.25)_inset] transition-all duration-500 ease-[var(--ease-out-expo)] hover:shadow-[0_12px_38px_-6px_oklch(0.72_0.17_150/0.7),0_1px_0_0_oklch(1_0_0/0.3)_inset] md:right-7 md:bottom-7 ${
        visivel
          ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-4 scale-95 opacity-0"
      }`}
    >
      <span className="grid size-14 shrink-0 place-items-center">
        <Icon name="whatsapp" size={26} />
      </span>

      {/*
        A etiqueta abre no hover usando grid-template-columns 0fr -> 1fr:
        anima largura sem precisar saber quantos pixels o texto ocupa.
      */}
      <span className="grid grid-cols-[0fr] transition-[grid-template-columns] duration-500 ease-[var(--ease-out-expo)] group-hover:grid-cols-[1fr] group-focus-visible:grid-cols-[1fr] motion-reduce:transition-none">
        <span className="overflow-hidden">
          <span className="block pr-6 text-sm font-semibold whitespace-nowrap">
            {whatsapp.floating}
          </span>
        </span>
      </span>
    </a>
  );
}
