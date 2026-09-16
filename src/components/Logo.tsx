import Image from "next/image";

/**
 * Marca oficial.
 *
 * Símbolo e assinatura são dois arquivos separados, não um lockup único:
 * assim cada um é dimensionado de forma independente e o `compact` pode
 * esconder a assinatura sem recortar imagem.
 *
 * Os WebP em public/marca/ são derivados a 3x do tamanho de exibição. Os PNG
 * originais ficam em assets/marca/, fora do que vai para o ar: são fonte de
 * build, não arquivo servido.
 *
 * As dimensões são passadas ao next/image para reservar o espaço antes do
 * carregamento — sem isso o header salta quando a imagem chega.
 */
export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src="/marca/icon.webp"
        alt="Unyclinic"
        width={96}
        height={102}
        priority
        className="h-8 w-auto"
      />

      {!compact && (
        <Image
          src="/marca/wordmark.webp"
          alt=""
          aria-hidden="true"
          width={258}
          height={57}
          priority
          className="h-[19px] w-auto"
        />
      )}
    </span>
  );
}
