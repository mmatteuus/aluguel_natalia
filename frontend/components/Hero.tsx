import Image from 'next/image';
import { ArrowRight, BedDouble, CalendarDays, CarFront, MapPin, MessageCircle, ShowerHead, Toilet } from 'lucide-react';
import { property, whatsappUrl } from '@/content/property';
import { TrackedLink } from '@/components/TrackedLink';

const factIcons = [BedDouble, ShowerHead, Toilet, CarFront] as const;

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <Image
        src="/images/hall-entrada.avif"
        alt="Hall de entrada do sobrado"
        fill
        priority
        sizes="100vw"
        className="hero__image"
      />
      <div className="hero__shade" aria-hidden="true" />
      <div className="container hero__content">
        <p className="eyebrow">{property.eyebrow}</p>
        <h1 id="hero-title">{property.title}</h1>
        <p className="hero__lead">Conheça os ambientes pelas fotografias reais do sobrado no bairro São João, em Araguaína.</p>

        <div className="property-card" aria-label="Resumo do imóvel">
          <strong>{property.price}</strong>
          <div className="property-card__address"><MapPin size={20} aria-hidden="true" /> <span>{property.address}</span></div>
          <div className="property-card__facts">
            {property.facts.map((fact, index) => {
              const Icon = factIcons[index];
              return <div key={fact.label}><Icon size={21} aria-hidden="true" /><b>{fact.value}</b><span>{fact.label}</span></div>;
            })}
          </div>
        </div>

        <div className="hero__actions">
          <TrackedLink className="button button--primary" href="#galeria" eventName="Gallery Start" eventData={{ source: 'hero' }}>
            Ver fotos <ArrowRight size={20} aria-hidden="true" />
          </TrackedLink>
          <TrackedLink className="button button--ghost" href={whatsappUrl} target="_blank" rel="noopener noreferrer" eventName="Schedule Visit" eventData={{ source: 'hero' }}>
            <CalendarDays size={20} aria-hidden="true" /> Agendar visita
          </TrackedLink>
          <TrackedLink className="button button--whatsapp" href={whatsappUrl} target="_blank" rel="noopener noreferrer" eventName="WhatsApp Click" eventData={{ source: 'hero' }}>
            <MessageCircle size={20} aria-hidden="true" /> WhatsApp {property.phone}
          </TrackedLink>
        </div>
      </div>
      <a className="hero__scroll" href="#galeria">Role para explorar <span aria-hidden="true">↓</span></a>
    </section>
  );
}
