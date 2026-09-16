import { segmentsStrip } from "@/content/site";

export default function Marquee() {
  // A lista é duplicada: a animação translada -50%, então a segunda cópia
  // assume a posição da primeira e o loop fica sem emenda.
  const items = [...segmentsStrip, ...segmentsStrip];

  return (
    <section
      aria-label="Tipos de clínica atendidos"
      className="relative border-y border-ink-850/70 bg-ink-925/40 py-5"
    >
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max [animation:marquee-x_38s_linear_infinite] motion-reduce:[animation:none]">
          {items.map((item, i) => (
            <div
              key={`${item}-${i}`}
              className="flex shrink-0 items-center gap-8 px-8"
            >
              <span className="text-sm whitespace-nowrap text-mist-500">
                {item}
              </span>
              <span className="size-1 rounded-full bg-pulse-500/50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
