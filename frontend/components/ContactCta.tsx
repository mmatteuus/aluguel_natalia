import { CalendarDays, MessageCircle } from 'lucide-react';
import { property, whatsappUrl } from '@/content/property';
import { TrackedLink } from '@/components/TrackedLink';

export function ContactCta() {
  return (
    <section className="contact-cta" id="contato" aria-labelledby="contact-title">
      <div className="container contact-cta__inner">
        <div>
          <p className="eyebrow">Pronto para conhecer?</p>
          <h2 id="contact-title">Depois do tour digital, agende a visita presencial.</h2>
          <p>O contato abre diretamente no WhatsApp com uma mensagem sobre este endereço.</p>
        </div>
        <div className="contact-cta__actions">
          <TrackedLink className="button button--light" href={whatsappUrl} target="_blank" rel="noopener noreferrer" eventName="Schedule Visit" eventData={{ source: 'final-cta' }}>
            <CalendarDays size={19} aria-hidden="true" /> Agendar visita
          </TrackedLink>
          <TrackedLink className="button button--outline-light" href={whatsappUrl} target="_blank" rel="noopener noreferrer" eventName="WhatsApp Click" eventData={{ source: 'final-cta' }}>
            <MessageCircle size={19} aria-hidden="true" /> WhatsApp {property.phone}
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
