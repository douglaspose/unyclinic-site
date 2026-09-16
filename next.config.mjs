/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  /**
   * Gera um servidor auto-contido em .next/standalone: sobe na VPS sem
   * precisar levar node_modules junto (a pasta tem ~400 MB; o standalone
   * fica na casa das dezenas). `next start` continua funcionando igual.
   */
  output: "standalone",
};
export default nextConfig;
