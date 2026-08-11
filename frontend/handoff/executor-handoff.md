# Handoff — landing do Sobrado São João

## Estado esperado
A aplicação é uma landing Next.js de página única, responsiva e orientada a conversão, com tour fotográfico controlado por scroll nativo.

## Arquitetura
- `app/page.tsx`: composição.
- `content/property.ts`: dados e sequência de imagens.
- `components/Tour.tsx`: estado das cenas e movimento.
- `app/globals.css`: tokens, layout e responsividade.
- `lib/site.ts`: URL canônica.
- `.github/workflows/frontend-ci.yml`: gate de release na raiz do repositório.

## Invariantes
- Não inventar dados do imóvel.
- Não substituir scroll nativo por scrolljack.
- Manter reduced motion.
- Manter todos os CTAs funcionais e rastreados.
- Manter o rodapé MtsFerreira.
- Preservar SEO, security headers e dados estruturados.

## Validação obrigatória
```bash
npm run verify
npm audit --audit-level=critical
```

Após o CI verde: executar duas revisões independentes pré-deploy. Somente depois liberar deploy na Vercel. Após publicar: executar duas análises Grow My Website, corrigindo somente achados aplicáveis e revalidando o deploy.
