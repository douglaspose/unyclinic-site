import type { ReactNode } from "react";
import Image from "next/image";
import Icon, { type IconName } from "../ui/Icon";

/* ---------------------------------------------------------------------------
   Chrome compartilhado dos mockups.
   Tudo aqui é DOM + SVG, não imagem: escala sem borrar, anima por partes
   e não pesa no LCP.
   ------------------------------------------------------------------------- */

export function AppWindow({
  children,
  url = "helena.unyclinic.com.br",
  className = "",
}: {
  children: ReactNode;
  url?: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-ink-800 bg-ink-925 shadow-[0_40px_120px_-30px_oklch(0_0_0/0.9),0_0_0_1px_oklch(1_0_0/0.04)_inset] ${className}`}
    >
      {/* Barra do navegador */}
      <div className="flex items-center gap-3 border-b border-ink-850 bg-ink-900/80 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-ink-700" />
          <span className="size-2.5 rounded-full bg-ink-700" />
          <span className="size-2.5 rounded-full bg-ink-700" />
        </div>

        <div className="mx-auto flex max-w-[280px] min-w-0 flex-1 items-center gap-1.5 rounded-md bg-ink-950/80 px-2.5 py-1.5">
          <Icon name="lock" size={11} className="shrink-0 text-vital-400" />
          <span className="truncate text-[11px] text-mist-500">{url}</span>
        </div>

        <div className="hidden w-[52px] justify-end gap-1 sm:flex">
          <span className="size-2.5 rounded-full bg-ink-800" />
        </div>
      </div>

      {children}
    </div>
  );
}

const NAV: { label: string; icon: IconName }[] = [
  { label: "Dashboard", icon: "gauge" },
  { label: "Agenda", icon: "calendar" },
  { label: "Pacientes", icon: "folder" },
  { label: "Financeiro", icon: "wallet" },
  { label: "Recontatos", icon: "repeat" },
  { label: "Relatórios", icon: "chart" },
];

export function Sidebar({ active }: { active: string }) {
  return (
    <aside className="hidden w-[168px] shrink-0 flex-col justify-between border-r border-ink-850 bg-ink-950/50 p-3 sm:flex">
      <div className="flex flex-col gap-0.5">
        <div className="mb-3 flex items-center gap-1.5 px-2 py-1.5">
          {/* A própria marca, não um substituto: é o menu do sistema real */}
          <Image
            src="/marca/unyclinic-icon.png"
            alt=""
            aria-hidden="true"
            width={282}
            height={301}
            className="h-4 w-auto"
          />
          <Image
            src="/marca/unyclinic-wordmark.png"
            alt=""
            aria-hidden="true"
            width={769}
            height={170}
            className="h-[9px] w-auto"
          />
        </div>

        {NAV.map((item) => {
          const isActive = item.label === active;
          return (
            <div
              key={item.label}
              className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-[11px] transition-colors ${
                isActive
                  ? "bg-pulse-500/12 font-medium text-pulse-300"
                  : "text-mist-500"
              }`}
            >
              <Icon name={item.icon} size={13} />
              {item.label}
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-2 rounded-lg border border-ink-850 px-2 py-2">
        <span className="grid size-6 place-items-center rounded-full bg-ink-800 text-[9px] font-semibold text-mist-300">
          HM
        </span>
        <div className="min-w-0">
          <p className="truncate text-[10px] font-medium text-mist-300">
            Dra. Helena M.
          </p>
          <p className="text-[9px] text-mist-600">Administrador</p>
        </div>
      </div>
    </aside>
  );
}

export function ScreenTopBar({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle: string;
  action?: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-ink-850 px-4 py-3">
      <div>
        <h3 className="font-display text-[13px] font-semibold text-mist-100">
          {title}
        </h3>
        <p className="text-[10px] text-mist-600">{subtitle}</p>
      </div>
      {action && (
        <span className="hidden rounded-md bg-pulse-500/15 px-2.5 py-1.5 text-[10px] font-medium text-pulse-300 sm:block">
          {action}
        </span>
      )}
    </div>
  );
}
