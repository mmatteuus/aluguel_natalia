# Checklist pré-release

## Design e responsividade
- [ ] Tokens centralizados e identidade coerente.
- [ ] Desktop, tablet, mobile e telas largas revisados.
- [ ] Microinterações com propósito.
- [ ] Motion não interfere no scroll nativo.
- [ ] `prefers-reduced-motion` funcional.

## Código
- [ ] TypeScript strict sem erros.
- [ ] ESLint sem warnings.
- [ ] Testes passando.
- [ ] Build de produção passando.
- [ ] Lockfile presente.
- [ ] Nenhum arquivo de produção com `any` ou `console.log`.

## Performance
- [ ] Imagens AVIF/WebP e dimensões reservadas.
- [ ] Hero com carregamento prioritário; demais imagens sob demanda.
- [ ] Scroll sem jank perceptível.
- [ ] Speed Insights habilitado.

## Acessibilidade
- [ ] `lang="pt-BR"`.
- [ ] Skip link.
- [ ] Landmarks e headings em ordem.
- [ ] Foco visível.
- [ ] Teclado e Escape no menu.
- [ ] Touch targets >= 44px.
- [ ] Imagens informativas com alt.

## SEO
- [ ] Title e description.
- [ ] H1 único.
- [ ] Canonical.
- [ ] Open Graph e imagem social.
- [ ] robots e sitemap.
- [ ] Dados estruturados.

## Segurança e observabilidade
- [ ] HTTPS no deploy.
- [ ] CSP e security headers.
- [ ] `npm audit --audit-level=critical` verde.
- [ ] Page views, Web Vitals e eventos de conversão.
- [ ] Error boundary.

## Obrigatórios
- [ ] Rodapé “Desenvolvido por MtsFerreira”.
- [ ] Link `https://MtsFerreira.dev` com `target="_blank"` e `rel="noopener noreferrer"`.
- [ ] Sem informações do imóvel sem fonte confirmada.
- [ ] Duas revisões independentes pré-deploy aprovadas.
- [ ] Duas análises Grow My Website concluídas antes do encerramento.
