import { rename, readFile, writeFile } from "node:fs/promises";

/**
 * O Next exporta a imagem de compartilhamento como `out/opengraph-image`,
 * sem extensão nenhuma. Qualquer servidor de arquivos estáticos entrega isso
 * como application/octet-stream, e os robôs do WhatsApp, LinkedIn e Facebook
 * descartam a imagem quando o Content-Type não é de imagem.
 *
 * Em vez de exigir uma regra no servidor — que depende de alguém lembrar de
 * configurá-la —, o arquivo ganha a extensão aqui e o HTML passa a apontar
 * para ela. O resultado fica correto em qualquer hospedagem estática.
 */
await rename("out/opengraph-image", "out/opengraph-image.png");

let trocas = 0;
for (const pagina of ["out/index.html", "out/404.html"]) {
  const html = await readFile(pagina, "utf8");
  const corrigido = html.replace(/\/opengraph-image\?[a-f0-9]+/g, () => {
    trocas++;
    return "/opengraph-image.png";
  });
  if (corrigido !== html) await writeFile(pagina, corrigido);
}

console.log(`pós-build: imagem de compartilhamento renomeada, ${trocas} referência(s) ajustada(s)`);
