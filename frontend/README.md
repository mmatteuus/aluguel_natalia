# Frontend — Sobrado São João

Landing imersiva para divulgar o sobrado da R. Dois de Julho, 110 — São João, Araguaína - TO.

## Rodar localmente

```bash
npm install
npm run dev
```

## Validar

```bash
npm run verify
```

O comando executa typecheck, lint, testes e build em sequência.

## Estrutura

- `app/`: página, metadata, sitemap, robots e estilos globais.
- `components/`: navegação, tour, conteúdo, conversão e dados estruturados.
- `content/`: contrato factual do imóvel e sequência das fotografias.
- `lib/`: resolução da URL canônica.
- `public/images/`: fotografias reais fornecidas para o anúncio.
- `prd`, `audit`, `contracts`, `tasks`, `checklists`, `configs`, `templates`, `inspirations`, `handoff`: documentação do frontend.

## Deploy

A aplicação é compatível com Vercel e usa a URL de produção disponibilizada pelo ambiente para canonical, sitemap e dados estruturados.
