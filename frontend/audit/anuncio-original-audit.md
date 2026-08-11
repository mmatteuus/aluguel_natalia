# Audit — anúncio e implementação

## FATO
O anúncio original comunica preço, quantidade de quartos/banheiros/lavabo/vagas, bairro e telefone, mas funciona como peça estática. As 12 fotografias permitem ampliar a percepção dos ambientes sem criar uma planta ou geometria inexistente.

## Melhorias aplicadas
- Hero editorial com fotografia dominante e preço acima da dobra.
- Tour de 8 etapas usando as 12 fotografias disponíveis.
- Movimento ligado ao scroll nativo e transições entre ângulos reais.
- Navegação mobile, rail do tour auto-centralizado e CTA móvel.
- Imagens de página em AVIF e imagem social em JPEG.
- Canonical, Open Graph, sitemap, robots e dados estruturados.
- Web Analytics, Speed Insights e eventos de conversão.
- Security headers, TypeScript strict, testes e CI.

## Riscos controlados
- Não há reconstrução 3D nem alegação de tour 360.
- Não há metragem, IPTU, condomínio, política de pets ou garantia: esses dados não são exibidos.
- O movimento possui fallback para redução de movimento.

## [PENDENTE]
A aprovação final depende do CI, das duas revisões independentes pré-deploy, do deploy Vercel e de duas varreduras do Grow My Website.
