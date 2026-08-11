'use client';

import { Home, Menu, MessageCircle, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { property, whatsappUrl } from '@/content/property';
import { TrackedLink } from '@/components/TrackedLink';

const links = [
  ['Início', '#inicio'],
  ['O imóvel', '#imovel'],
  ['Tour', '#tour'],
  ['Localização', '#localizacao'],
  ['Contato', '#contato']
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;

    navRef.current?.querySelector<HTMLAnchorElement>('a')?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      setOpen(false);
      toggleRef.current?.focus();
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="São João, início" onClick={() => setOpen(false)}>
        <span className="brand__mark"><Home size={22} aria-hidden="true" /></span>
        <span><b>São João</b><small>Araguaína - TO</small></span>
      </a>

      <nav
        className={open ? 'site-nav is-open' : 'site-nav'}
        aria-label="Principal"
        id="menu-principal"
        ref={navRef}
      >
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>

      <TrackedLink
        className="header-contact"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        eventName="WhatsApp Click"
        eventData={{ source: 'header' }}
      >
        <MessageCircle size={18} aria-hidden="true" /> {property.phone}
      </TrackedLink>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="menu-principal"
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setOpen((value) => !value)}
        ref={toggleRef}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
    </header>
  );
}
