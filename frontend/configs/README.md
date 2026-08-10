# Configuração do frontend

## Runtime

- Node.js: `>=20.9.0`.
- Build: Next.js com TypeScript strict.
- Deploy: Vercel.
- A URL canônica usa `NEXT_PUBLIC_SITE_URL` quando definida; caso contrário, usa a URL de produção exposta pela Vercel.

## Qualidade

`npm run verify` executa typecheck, lint, testes e build. O workflow na raiz do repositório também executa auditoria de dependências críticas.

## Motion

O tour mantém scroll nativo. As cenas aplicam somente transformações e opacidade ligadas ao progresso do scroll. `prefers-reduced-motion` troca a experiência por quadros estáticos e navegação convencional.

## Conteúdo

Dados comerciais e fotografias ficam centralizados em `content/property.ts` e `public/images/`. Não adicionar informações do imóvel sem fonte confirmada.
