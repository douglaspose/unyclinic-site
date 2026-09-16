import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display-face",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://unyclinic.com.br"),
  title: {
    default: "Unyclinic — Sistema de gestão para clínicas",
    template: "%s | Unyclinic",
  },
  description:
    "Agenda, prontuário, financeiro e recontato de pacientes no mesmo lugar. Cada clínica com o próprio endereço, login e banco de dados. Para clínicas médicas, odontológicas, estéticas e de fisioterapia.",
  keywords: [
    "sistema para clínicas",
    "software de gestão para clínicas",
    "prontuário eletrônico",
    "agenda para clínica odontológica",
    "gestão de clínica médica",
    "software para clínica de estética",
    "sistema para fisioterapia",
  ],
  authors: [{ name: "Unyclinic" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://unyclinic.com.br",
    siteName: "Unyclinic",
    title: "Unyclinic — Sua clínica organizada, do agendamento ao financeiro",
    description:
      "Sistema de gestão para clínicas médicas, odontológicas, estéticas e de fisioterapia. Cada clínica com banco de dados próprio.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unyclinic — Sistema de gestão para clínicas",
    description:
      "Agenda, prontuário, financeiro e recontatos no mesmo lugar.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b0d12",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${display.variable}`}
    >
      <head>
        {/*
          Os elementos animados nascem invisíveis via CSS, e o GSAP os traz
          à tona. Sem JavaScript ninguém os traria — então o noscript devolve
          a visibilidade. Servidor e cliente entregam o mesmo HTML, o que
          evita divergência de hidratação.
        */}
        <noscript>
          <style>{`[data-reveal],[data-reveal-child]>*{opacity:1!important}`}</style>
        </noscript>
      </head>
      <body className="antialiased">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-pulse-500 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-ink-950"
        >
          Pular para o conteúdo
        </a>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
