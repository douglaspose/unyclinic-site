import type { ReactElement, SVGProps } from "react";

export type IconName =
  | "gauge"
  | "calendar"
  | "folder"
  | "wallet"
  | "repeat"
  | "chat"
  | "users"
  | "document"
  | "chart"
  | "shield"
  | "lock"
  | "sparkle"
  | "globe"
  | "database"
  | "key"
  | "check"
  | "arrow"
  | "chevron"
  | "plus"
  | "whatsapp";

/** Traçado único e uniforme: 24x24, stroke 1.5, cantos redondos. */
const PATHS: Record<IconName, ReactElement> = {
  gauge: (
    <>
      <path d="M12 14.5 16 9" />
      <path d="M4 18a9 9 0 1 1 16 0" />
      <circle cx="12" cy="14.5" r="1.4" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
      <path d="M3.5 10h17M8.5 3v4M15.5 3v4" />
      <path d="M8 14h3M8 17h6" />
    </>
  ),
  folder: (
    <>
      <path d="M3.5 7.5a2 2 0 0 1 2-2h3.4a2 2 0 0 1 1.5.7l1 1.2h7.1a2 2 0 0 1 2 2v7.6a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z" />
      <path d="M8 14h8" />
    </>
  ),
  wallet: (
    <>
      <rect x="3" y="6" width="18" height="13" rx="2.5" />
      <path d="M3 10h18" />
      <circle cx="16.5" cy="14.5" r="1.2" />
    </>
  ),
  repeat: (
    <>
      <path d="M4 9.5A4.5 4.5 0 0 1 8.5 5H18" />
      <path d="m15 2.5 3 2.5-3 2.5" />
      <path d="M20 14.5A4.5 4.5 0 0 1 15.5 19H6" />
      <path d="m9 21.5-3-2.5 3-2.5" />
    </>
  ),
  chat: (
    <>
      <path d="M20.5 11.5c0 4-3.8 7.2-8.5 7.2a9.7 9.7 0 0 1-2.8-.4L4 20l1.4-3.6a6.9 6.9 0 0 1-1.9-4.9c0-4 3.8-7.2 8.5-7.2s8.5 3.2 8.5 7.2Z" />
      <path d="M9 11.5h6" />
    </>
  ),
  users: (
    <>
      <circle cx="9.5" cy="8.5" r="3" />
      <path d="M3.5 19.5a6 6 0 0 1 12 0" />
      <path d="M16.5 6.4a3 3 0 0 1 0 5.8" />
      <path d="M17.6 14.6a6 6 0 0 1 3.4 4.9" />
    </>
  ),
  document: (
    <>
      <path d="M6 3.5h7L19 9v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20V5a1.5 1.5 0 0 1 1-1.5Z" />
      <path d="M13 3.5V9h5.5" />
      <path d="M8.5 13.5h7M8.5 17h4.5" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V4" />
      <path d="M4 20h16" />
      <path d="M8.5 20v-6M13 20V8.5M17.5 20v-4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5.5c0 4.2 2.9 7.8 7 9.5 4.1-1.7 7-5.3 7-9.5V6Z" />
      <path d="m9.2 12 2 2 3.6-3.8" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" />
      <path d="M8 10.5V7.8a4 4 0 0 1 8 0v2.7" />
      <path d="M12 14.5v2" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3.5 13.7 9l5.5 1.7-5.5 1.8L12 18l-1.7-5.5L4.8 10.7 10.3 9Z" />
      <path d="M18.5 3.5v3M20 5h-3" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17" />
      <path d="M12 3.5c2.2 2.3 3.4 5.3 3.4 8.5S14.2 18.2 12 20.5c-2.2-2.3-3.4-5.3-3.4-8.5S9.8 5.8 12 3.5Z" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7.5" ry="3" />
      <path d="M4.5 6v12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6" />
      <path d="M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="12" r="4" />
      <path d="M12 12h8.5" />
      <path d="M17.5 12v3M20.5 12v2.2" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7" />,
  arrow: (
    <>
      <path d="M4.5 12h15" />
      <path d="m13.5 6 6 6-6 6" />
    </>
  ),
  chevron: <path d="m6 9.5 6 6 6-6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  /* Único ícone preenchido do conjunto: o glifo do WhatsApp só é reconhecível
     na forma cheia, então sobrescreve o traçado padrão do <svg>. */
  whatsapp: (
    <path
      fill="currentColor"
      stroke="none"
      d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 4.99L2 22l5.19-1.36a9.93 9.93 0 0 0 4.85 1.24h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.88 9.88 0 0 0 12.04 2Zm0 1.86c2.17 0 4.2.85 5.73 2.38a8.05 8.05 0 0 1 2.37 5.73c0 4.47-3.63 8.1-8.1 8.1a8.07 8.07 0 0 1-4.12-1.13l-.3-.17-3.07.8.82-3-.19-.31a8.04 8.04 0 0 1-1.24-4.29c0-4.47 3.63-8.1 8.1-8.1Zm-3.1 4.3c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.34.99 2.5c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.43-.59 1.63-1.15.2-.56.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28-.24-.12-1.43-.7-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.31-.74-1.79-.2-.47-.4-.41-.54-.42h-.48Z"
    />
  ),
};

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

export default function Icon({ name, size = 20, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {PATHS[name]}
    </svg>
  );
}
