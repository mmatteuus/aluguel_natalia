# PRD — Landing imersiva do Sobrado São João

## Trilha
AUDITAR E MELHORAR.

## FATO
- Imóvel: sobrado para aluguel.
- Valor divulgado: R$ 2.400/mês.
- Endereço: R. Dois de Julho, 110 - São João, Araguaína - TO, 77805-130.
- 3 quartos, 2 banheiros, 1 lavabo e 2 vagas.
- Fonte visual: 12 fotografias reais fornecidas.

## Objetivo
Transformar o anúncio em uma visita digital fotográfica, com narrativa por scroll nativo, conversão direta para WhatsApp e experiência responsiva.

## Jornada
Hero → tour Entrada → Sala → Cozinha → Escada → Piso superior → Quartos → Banheiros → Área de serviço → detalhes → localização → FAQ → contato.

## Requisitos obrigatórios
- Scroll nativo, sem scrolljack.
- Motion via transform/opacity e fallback `prefers-reduced-motion`.
- Mobile, tablet, desktop e telas largas.
- WCAG 2.2 AA como alvo.
- SEO técnico: canonical, Open Graph, sitemap, robots e dados estruturados.
- Observabilidade: Web Analytics, Speed Insights e eventos dos CTAs/tour.
- TypeScript strict, lint, testes, build e auditoria de dependências no CI.
- Rodapé em todas as páginas: “Desenvolvido por MtsFerreira” com link seguro para https://MtsFerreira.dev.
- Nenhuma informação comercial ou característica do imóvel pode ser inventada.

## Critério de aceite
Release somente após duas revisões independentes pré-deploy, CI verde, deploy Vercel saudável e duas passagens do Grow My Website com correção de achados aplicáveis.
