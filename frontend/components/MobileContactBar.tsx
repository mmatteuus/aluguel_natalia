import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { whatsappUrl } from '@/content/property';
import { TrackedLink } from '@/components/TrackedLink';

export function MobileContactBar() {
  return (
    <aside className="mobile-contact-bar" aria-label="Ações rápidas">
      <TrackedLink href="#tour" eventName="Tour Start" eventData={{ source: 'mobile-bar' }}>
        Entrar no imóvel <ArrowUpRight size={17} aria-hidden="true" />
      </TrackedLink>
      <TrackedLink href={whatsappUrl} target="_blank" rel="noopener noreferrer" eventName="WhatsApp Click" eventData={{ source: 'mobile-bar' }}>
        <MessageCircle size={18} aria-hidden="true" /> WhatsApp
      </TrackedLink>
    </aside>
  );
}
