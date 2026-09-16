import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { pains } from "@/content/site";

export default function Pains() {
  return (
    <section className="relative py-[var(--space-section)]">
      <div className="container-x">
        <SectionHeading
          eyebrow={pains.eyebrow}
          title={pains.title}
          subtitle={pains.subtitle}
        />

        <Reveal stagger className="mt-14 grid gap-4 md:grid-cols-2">
          {pains.items.map((item, i) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-[var(--radius-card)] border border-ink-850 bg-ink-925/40 p-6 transition-colors duration-500 hover:border-ink-800 md:p-7"
            >
              {/* Índice discreto: dá ritmo sem virar lista numerada */}
              <span className="font-display absolute top-5 right-6 text-5xl leading-none font-semibold text-ink-900 transition-colors duration-500 select-none group-hover:text-ink-850">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                <div className="mb-4 flex h-6 items-end gap-1">
                  {/* Barrinhas desencontradas = a ideia de desorganização */}
                  <span className="h-3 w-1 rounded-full bg-amber-glow/60" />
                  <span className="h-5 w-1 rounded-full bg-amber-glow/35" />
                  <span className="h-2 w-1 rounded-full bg-amber-glow/50" />
                </div>

                <h3 className="text-xl leading-snug font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2.5 max-w-md text-[0.9375rem] leading-relaxed text-mist-500">
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
