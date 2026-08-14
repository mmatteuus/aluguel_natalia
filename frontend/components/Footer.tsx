const footerLinks = [
  ['Início', '#inicio'],
  ['O imóvel', '#imovel'],
  ['Galeria', '#galeria'],
  ['Localização', '#localizacao'],
  ['Contato', '#contato']
] as const;

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__place">São João · Araguaína - TO</span>
        <nav aria-label="Rodapé">
          {footerLinks.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <a className="footer__credit" href="https://MtsFerreira.dev" target="_blank" rel="noopener noreferrer">Desenvolvido por MtsFerreira</a>
      </div>
    </footer>
  );
}
