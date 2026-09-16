import type { AnchorHTMLAttributes, ReactNode } from "react";
import Icon from "./Icon";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
};

const BASE =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium " +
  "whitespace-nowrap transition-all duration-300 ease-[var(--ease-out-expo)] " +
  "active:scale-[0.98] select-none";

const VARIANTS: Record<Variant, string> = {
  // O gradiente + glow externo é o que dá o peso de "botão principal"
  primary:
    "bg-linear-to-b from-pulse-400 to-pulse-600 text-ink-950 font-semibold " +
    "shadow-[0_1px_0_0_oklch(1_0_0/0.25)_inset,0_8px_24px_-8px_oklch(0.695_0.168_240/0.55)] " +
    "hover:shadow-[0_1px_0_0_oklch(1_0_0/0.3)_inset,0_12px_34px_-8px_oklch(0.695_0.168_240/0.75)] " +
    "hover:-translate-y-0.5",
  secondary:
    "surface text-mist-100 hover:border-ink-700 hover:bg-ink-850/70 hover:-translate-y-0.5",
  ghost: "text-mist-400 hover:text-mist-50",
};

const SIZES: Record<Size, string> = {
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-6.5 text-[0.9375rem]",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  withArrow = false,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...props}
    >
      {children}
      {withArrow && (
        <Icon
          name="arrow"
          size={16}
          className="transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:translate-x-1"
        />
      )}
    </a>
  );
}
