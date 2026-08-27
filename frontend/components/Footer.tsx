import { property } from '@/content/property';

const footerLinks = [
  ['Início', '#inicio'],
  ['Galeria', '#galeria'],
  ['Localização', '#localizacao'],
  ['Contato', '#contato']
] as const;

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__place">{property.neighborhood} · {property.city} - {property.state}</span>
        <nav aria-label="Rodapé">
          {footerLinks.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <a className="footer__credit" href="https://www.mtsferreira.dev" target="_blank" rel="noopener noreferrer">Desenvolvido por MtsFerreira</a>
      </div>
    </footer>
  );
}
