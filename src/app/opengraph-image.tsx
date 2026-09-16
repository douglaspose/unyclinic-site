import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * A imagem é gerada no build, fora do navegador: não existe servidor para
 * buscar `/marca/...`. Os arquivos entram embutidos como data URI.
 */
async function comoDataUri(caminho: string) {
  // Lê os PNG originais em assets/, não os WebP reduzidos de public/: aqui
  // a imagem é desenhada a 1200x630 e precisa da resolução cheia.
  const bytes = await readFile(join(process.cwd(), "assets/marca", caminho));
  return `data:image/png;base64,${bytes.toString("base64")}`;
}

/**
 * Imagem de compartilhamento gerada no build.
 * É o que aparece quando alguém cola o link no WhatsApp ou no LinkedIn —
 * sem ela, o preview fica com um retângulo vazio.
 */
export const dynamic = "force-static";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Unyclinic — Sistema de gestão para clínicas";

export default async function OpengraphImage() {
  const [simbolo, assinatura] = await Promise.all([
    comoDataUri("unyclinic-icon.png"),
    comoDataUri("unyclinic-wordmark.png"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0d12",
          padding: "72px",
          position: "relative",
        }}
      >
        {/* Brilho superior */}
        <div
          style={{
            position: "absolute",
            top: -360,
            left: 180,
            width: 840,
            height: 700,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(56,132,255,0.38) 0%, rgba(124,77,255,0.14) 45%, rgba(11,13,18,0) 70%)",
            display: "flex",
          }}
        />

        {/* Marca oficial */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={simbolo} width={60} height={64} alt="" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={assinatura} width={172} height={38} alt="" />
        </div>

        {/* Promessa */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span
            style={{
              fontSize: 72,
              lineHeight: 1.04,
              color: "#f7f8fa",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              maxWidth: 940,
            }}
          >
            Sua clínica organizada, do agendamento ao financeiro
          </span>
          <span style={{ fontSize: 30, color: "#9aa3b2", maxWidth: 880 }}>
            Agenda, prontuário, financeiro e recontatos. Cada clínica com o
            próprio endereço e o próprio banco de dados.
          </span>
        </div>

        {/* Rodapé */}
        <div style={{ display: "flex", gap: 14 }}>
          {["Clínicas médicas", "Odontologia", "Estética", "Fisioterapia"].map(
            (tag) => (
              <span
                key={tag}
                style={{
                  fontSize: 22,
                  color: "#c8cdd6",
                  border: "1px solid #272b36",
                  borderRadius: 999,
                  padding: "10px 22px",
                  display: "flex",
                }}
              >
                {tag}
              </span>
            ),
          )}
        </div>
      </div>
    ),
    size,
  );
}
