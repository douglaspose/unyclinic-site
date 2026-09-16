# Unyclinic — Landing page

Site institucional do Unyclinic, sistema de gestão para clínicas médicas,
odontológicas, estéticas e de fisioterapia.

## Rodar

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção (100% estático)
```

## Onde mexer

**Todo o texto do site está em `src/content/site.ts`.** Copy, preços, módulos,
FAQ e links de menu saem daí — nenhum componente precisa ser editado para
ajustar conteúdo.

Itens marcados com `[REVISAR]` nesse arquivo precisam da sua confirmação antes
de publicar:

| Item | Por quê |
|---|---|
| `brand.email` | O e-mail veio mascarado na extração do site atual |

As respostas do FAQ foram confirmadas e já estão com o texto oficial.

Cores, escala tipográfica, curvas de animação e espaçamento ficam nos tokens
no topo de `src/app/globals.css`.

## Arquitetura

```
src/
├─ app/              layout, página, metadata, sitemap, robots, imagem OG
├─ components/
│  ├─ sections/      uma seção da página por arquivo, na ordem de leitura
│  ├─ ui/            Button, Icon, Reveal, SectionHeading
│  └─ visuals/       mockups do produto (DOM + SVG, não imagem)
├─ lib/gsap.ts       registro central do GSAP + ScrollTrigger
└─ content/site.ts   fonte única de conteúdo
```

### Ordem das seções

A sequência segue o arco de conversão: promessa → dor → solução → amplitude →
profundidade → confiança → adequação → preço → objeções → ação.

Duas escolhas deliberadas: a **dor vem antes das features**, porque sem dor
articulada uma lista de recursos não significa nada para o gestor; e o **preço
vem depois da prova**, porque preço mostrado cedo é custo, mostrado depois é
investimento.

### Animação

- **GSAP + ScrollTrigger** para revelações e scroll; **Lenis** para o scroll suave.
- Um único loop de animação: o Lenis é conduzido pelo ticker do GSAP, para não
  haver dois `requestAnimationFrame` concorrentes brigando pelo mesmo frame.
- Só `transform` e `opacity` são animados. Nada que force recálculo de layout.
- `scrub` aparece em três momentos apenas (parallax do hero, linha do "como
  começa", troca de telas do showcase). O resto é revelação simples.
- `prefers-reduced-motion` desliga tudo e entrega o conteúdo estático.
- Sem JavaScript, um `<noscript>` devolve a visibilidade dos elementos animados.

### Contato

O CTA final abre o cliente de e-mail com assunto e corpo pré-preenchidos
(`mailto:`), porque o site não tem backend. Para trocar por um formulário de
verdade, o ponto de alteração é `src/components/sections/FinalCta.tsx`.

## Marca

Arquivos oficiais em `public/marca/`:

| Arquivo | Uso |
|---|---|
| `unyclinic-icon.png` | Símbolo isolado — header, menu do mockup, favicon |
| `unyclinic-wordmark.png` | Assinatura — recortada do lockup pelos limites reais do canal alfa |
| `unyclinic-mark.png` | Lockup vertical original, preservado como fonte |

Derivados gerados a partir deles, já no lugar certo:

- `src/app/icon.png` — favicon 512px. A marca é prateada e desapareceria numa
  aba clara, então vai sobre quadrado escuro arredondado.
- `src/app/apple-icon.png` — 180px sem arredondamento, porque o iOS aplica a
  máscara dele e cantos já arredondados ficariam duplicados.
- A imagem de compartilhamento embute os PNGs como data URI: ela é gerada no
  build, onde não existe servidor para buscar `/marca/...`.

Para trocar a marca, substitua os arquivos em `public/marca/` mantendo os nomes
e regenere os ícones.

## Deploy na VPS

O build gera a pasta `out/` com HTML, CSS, JS e imagens prontos. **Nenhum
processo Node roda em produção** — o Caddy serve os arquivos direto.

### Contexto importante

O sistema já ocupa o apex `unyclinic.com.br`: ele serve `/login`,
`/dashboard`, `/api/health` e a landing atual como rota `/landing`, com
middleware roteando por hostname. Os subdomínios das clínicas dependem de um
registro DNS wildcard, tudo atrás do Cloudflare e de um Caddy.

Este site entra como **arquivos estáticos na mesma VPS**, e é o Caddy que
decide o que responde no apex. **Nenhum registro DNS precisa mudar** — em
particular, o wildcard `*.unyclinic.com.br` deve ficar exatamente como está,
ou as clínicas perdem acesso.

### Build

```bash
npm ci
npm run build
```

Requer Node 22. Saída: `out/`, cerca de 2 MB em 47 arquivos.

Use `npm run build` e não `npx next build` direto: existe um passo pós-build
que renomeia a imagem de compartilhamento. O Next a exporta sem extensão, e
servida assim ela chega como `application/octet-stream` — o que faz WhatsApp e
LinkedIn descartarem o preview do link.

### Publicar

```bash
rsync -av --delete out/ usuario@vps:/var/www/unyclinic-site/
```

### Caddy

```caddyfile
unyclinic.com.br, www.unyclinic.com.br {
    encode gzip zstd

    # as rotas do sistema continuam no app atual
    @sistema path /login* /dashboard* /api/*
    reverse_proxy @sistema localhost:3000

    # todo o restante do apex é o site institucional, servido como arquivo
    root * /var/www/unyclinic-site
    file_server

    # os arquivos em _next/static têm hash no nome: cache longo é seguro
    @imutavel path /_next/static/*
    header @imutavel Cache-Control "public, max-age=31536000, immutable"

    handle_errors {
        @404 expression {err.status_code} == 404
        rewrite @404 /404.html
        file_server
    }
}

*.unyclinic.com.br {
    reverse_proxy localhost:3000
}
```

A ordem importa: o bloco `@sistema` precisa vir antes do `file_server`, senão
o site institucional captura `/login` também.

### Se um dia precisar de backend

Formulário com envio pelo servidor, área logada ou API passariam a exigir um
processo Node. Nesse caso, troque `output: "export"` por `output: "standalone"`
em `next.config.mjs`: o build passa a gerar `.next/standalone/server.js`, que
roda com `PORT=3100 node server.js` atrás de um `reverse_proxy`.
