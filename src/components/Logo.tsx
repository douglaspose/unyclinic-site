import Image from "next/image";

/**
 * Marca oficial.
 *
 * Símbolo e assinatura são dois arquivos separados, não um lockup único:
 * assim cada um é dimensionado de forma independente e o `compact` pode
 * esconder a assinatura sem recortar imagem.
 *
 * As proporções vêm dos arquivos originais (282x301 e 769x170) e são
 * passadas ao next/image para reservar o espaço antes do carregamento —
 * sem isso o header salta quando a imagem chega.
 */
export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src="/marca/unyclinic-icon.png"
        alt="Unyclinic"
        width={282}
        height={301}
        priority
        className="h-8 w-auto"
      />

      {!compact && (
        <Image
          src="/marca/unyclinic-wordmark.png"
          alt=""
          aria-hidden="true"
          width={769}
          height={170}
          priority
          className="h-[19px] w-auto"
        />
      )}
    </span>
  );
}
