"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import { AppWindow } from "../visuals/AppWindow";
import ScreenDashboard from "../visuals/ScreenDashboard";
import ScreenAgenda from "../visuals/ScreenAgenda";
import ScreenProntuario from "../visuals/ScreenProntuario";
import ScreenFinanceiro from "../visuals/ScreenFinanceiro";
import { showcase } from "@/content/site";

const SCREENS: Record<string, ReactNode> = {
  dashboard: <ScreenDashboard />,
  agenda: <ScreenAgenda />,
  prontuario: <ScreenProntuario />,
  financeiro: <ScreenFinanceiro />,
};

export default function Showcase() {
  const [active, setActive] = useState(0);
  const track = useRef<HTMLDivElement>(null);
  const total = showcase.screens.length;

  useLayoutEffect(() => {
    const el = track.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // O trilho só existe no desktop; no mobile as telas são empilhadas.
      mm.add("(min-width: 1024px)", () => {
        const st = ScrollTrigger.create({
          trigger: el,
          start: "top top",
          end: "bottom bottom",
          onUpdate: (self) => {
            // O último segmento precisa de folga, senão o índice final
            // só aparece no pixel exato do fim do trilho.
            const index = Math.min(
              total - 1,
              Math.floor(self.progress * total * 1.001),
            );
            setActive(index);
          },
        });

        return () => st.kill();
      });
    }, track);

    return () => ctx.revert();
  }, [total]);

  return (
    <section
      id="produto"
      className="relative band-tide scroll-mt-24 lg:pb-[var(--space-section)]"
    >
      <div className="container-x pt-[var(--space-section)]">
        <SectionHeading
          eyebrow={showcase.eyebrow}
          title={showcase.title}
          subtitle={showcase.subtitle}
        />
      </div>

      {/* ---------------- Desktop: trilho com painel fixo ---------------- */}
      <div
        ref={track}
        className="relative hidden lg:block"
        style={{ height: `${total * 92}vh` }}
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="container-x w-full">
            <div className="grid grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] items-center gap-14">
              {/* Coluna de texto */}
              <div>
                {/* Trilha de progresso */}
                <div className="mb-8 flex flex-col gap-0">
                  {showcase.screens.map((screen, i) => {
                    const isActive = i === active;
                    return (
                      <div
                        key={screen.id}
                        className="relative flex items-center gap-3 py-2 pl-4"
                      >
                        <span className="absolute inset-y-0 left-0 w-px bg-ink-850" />
                        <span
                          className={`absolute inset-y-1 left-0 w-px origin-top bg-pulse-400 transition-transform duration-500 ease-[var(--ease-out-expo)] ${
                            isActive ? "scale-y-100" : "scale-y-0"
                          }`}
                        />
                        <span
                          className={`text-sm transition-colors duration-500 ${
                            isActive
                              ? "font-medium text-mist-50"
                              : "text-mist-600"
                          }`}
                        >
                          {screen.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Blocos de texto empilhados, um visível por vez */}
                <div className="relative min-h-[260px]">
                  {showcase.screens.map((screen, i) => (
                    <div
                      key={screen.id}
                      aria-hidden={i !== active}
                      className={`absolute inset-0 transition-all duration-700 ease-[var(--ease-out-expo)] ${
                        i === active
                          ? "translate-y-0 opacity-100"
                          : "pointer-events-none translate-y-4 opacity-0"
                      }`}
                    >
                      <h3 className="text-3xl leading-tight font-semibold">
                        {screen.title}
                      </h3>
                      <p className="mt-4 max-w-md leading-relaxed text-mist-400">
                        {screen.body}
                      </p>
                      <ul className="mt-6 flex flex-col gap-2.5">
                        {screen.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-center gap-2.5 text-sm text-mist-300"
                          >
                            <span className="grid size-5 shrink-0 place-items-center rounded-full bg-pulse-500/15 text-pulse-300">
                              <Icon name="check" size={11} />
                            </span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coluna da janela */}
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-10 rounded-[3rem] opacity-70 blur-[70px]"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 40%, oklch(0.695 0.168 240 / 0.20), transparent 65%)",
                  }}
                />

                <div className="relative">
                  {showcase.screens.map((screen, i) => (
                    <div
                      key={screen.id}
                      aria-hidden={i !== active}
                      className={`transition-all duration-700 ease-[var(--ease-out-expo)] ${
                        i === active
                          ? "relative z-10 scale-100 opacity-100 blur-none"
                          : "pointer-events-none absolute inset-0 scale-[0.97] opacity-0 blur-[2px]"
                      }`}
                    >
                      <AppWindow>{SCREENS[screen.id]}</AppWindow>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- Mobile: telas empilhadas ---------------- */}
      <div className="container-x flex flex-col gap-16 pt-14 pb-[var(--space-section)] lg:hidden">
        {showcase.screens.map((screen) => (
          <Reveal key={screen.id} stagger className="flex flex-col gap-5">
            <div>
              <span className="text-xs font-medium tracking-wide text-pulse-300 uppercase">
                {screen.label}
              </span>
              <h3 className="mt-2 text-2xl leading-tight font-semibold">
                {screen.title}
              </h3>
              <p className="mt-3 leading-relaxed text-mist-400">
                {screen.body}
              </p>
            </div>

            {/*
              A tela do sistema é mais larga que um celular. Em vez de cortar
              e esconder a coluna da direita, ela rola na horizontal — e o
              container sangra até as bordas para aproveitar a largura toda.
            */}
            <div className="-mx-5 overflow-x-auto px-5 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <AppWindow className="min-w-[460px]">
                {SCREENS[screen.id]}
              </AppWindow>
            </div>

            <p className="flex items-center gap-1.5 text-xs text-mist-600">
              <Icon name="arrow" size={13} />
              {showcase.mobileHint}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
