"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import Button from "./ui/Button";
import Icon from "./ui/Icon";
import { nav, brand } from "@/content/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll do corpo enquanto o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ease-[var(--ease-out-expo)] ${
          scrolled
            ? "border-b border-ink-850/80 bg-ink-950/72 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container-x">
          <div
            className={`flex items-center justify-between transition-[height] duration-500 ease-[var(--ease-out-expo)] ${
              scrolled ? "h-16" : "h-20"
            }`}
          >
            <a href="#top" aria-label={brand.name}>
              <Logo />
            </a>

            <nav className="hidden items-center gap-1 lg:flex">
              {nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative rounded-full px-3.5 py-2 text-sm text-mist-400 transition-colors duration-200 hover:text-mist-50"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href="#faq"
                className="text-sm text-mist-500 transition-colors hover:text-mist-200"
              >
                {nav.clientLabel}
              </a>
              <Button href={nav.ctaHref} size="md">
                {nav.ctaLabel}
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              className="grid size-10 place-items-center rounded-full border border-ink-800 bg-ink-900/60 text-mist-200 lg:hidden"
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 block h-px w-4 bg-current transition-all duration-300 ease-[var(--ease-out-expo)] ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-px w-4 bg-current transition-all duration-300 ease-[var(--ease-out-expo)] ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Painel mobile */}
      <div
        // O painel fechado continua no DOM para poder animar a altura. Sem
        // `inert`, seus links seguiriam alcançáveis por Tab e anunciados por
        // leitor de tela mesmo com o menu recolhido.
        inert={!open}
        aria-hidden={!open}
        className={`overflow-hidden border-b border-ink-850 bg-ink-950/96 backdrop-blur-xl transition-[max-height,opacity] duration-500 ease-[var(--ease-out-expo)] lg:hidden ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-x flex flex-col gap-1 py-5">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-xl px-3 py-3.5 text-lg text-mist-200 transition-colors hover:bg-ink-900 hover:text-mist-50"
            >
              {link.label}
              <Icon name="arrow" size={16} className="text-mist-600" />
            </a>
          ))}
          <Button
            href={nav.ctaHref}
            size="lg"
            className="mt-3 w-full"
            onClick={() => setOpen(false)}
          >
            {nav.ctaLabel}
          </Button>
        </div>
      </div>
    </header>
  );
}
