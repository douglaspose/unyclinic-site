import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: Props) {
  const centered = align === "center";

  return (
    <Reveal
      stagger
      className={`flex flex-col gap-4 ${
        centered ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-ink-800 bg-ink-900/60 px-3.5 py-1.5 text-xs font-medium tracking-wide text-pulse-300 uppercase">
          <span className="size-1 rounded-full bg-pulse-400" />
          {eyebrow}
        </span>
      )}

      <h2
        className={`text-4xl leading-[1.08] font-semibold ${
          centered ? "max-w-2xl" : "max-w-3xl"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-lg leading-relaxed text-mist-400 ${
            centered ? "max-w-xl" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
