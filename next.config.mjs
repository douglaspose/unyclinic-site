/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  /**
   * Exportação estática: o build gera a pasta `out/` com HTML, CSS, JS e
   * imagens prontos. Nenhum processo Node roda em produção — o Caddy serve
   * os arquivos direto.
   *
   * É possível porque o site não tem formulário, API nem server action: o
   * contato acontece por mailto e WhatsApp.
   */
  output: "export",

  images: {
    // Sem servidor não existe quem otimize imagem sob demanda. Os arquivos
    // em public/marca/ já são WebP no tamanho certo, gerados no build.
    unoptimized: true,
  },
};
export default nextConfig;
