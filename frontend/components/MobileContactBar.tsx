import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { whatsappUrl } from '@/content/property';
import { TrackedLink } from '@/components/TrackedLink';

export function MobileContactBar() {
  return (
    <nav className="mobile-contact-bar" aria-label="Ações rápidas do imóvel">
      <TrackedLink href="#galeria" eventName="Gallery Start" eventData={{ source: 'mobile-bar' }}>
        Ver fotos <ArrowUpRight size={17} aria-hidden="true" />
      </TrackedLink>
      <TrackedLink href={whatsappUrl} target="_blank" rel="noopener noreferrer" eventName="WhatsApp Click" eventData={{ source: 'mobile-bar' }}>
        <MessageCircle size={18} aria-hidden="true" /> WhatsApp
      </TrackedLink>
    </nav>
  );
}
