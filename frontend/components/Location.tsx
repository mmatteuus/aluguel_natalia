import { MapPin, Navigation } from 'lucide-react';
import { mapsUrl, property } from '@/content/property';
import { TrackedLink } from '@/components/TrackedLink';

export function Location() {
  return (
    <section className="location-section" id="localizacao" aria-labelledby="location-title">
      <div className="container location-card">
        <MapPin size={28} aria-hidden="true" />
        <div>
          <p className="eyebrow">Localização</p>
          <h2 id="location-title">{property.neighborhood}, {property.city}</h2>
          <p>{property.address}</p>
        </div>
        <TrackedLink className="button button--dark" href={mapsUrl} target="_blank" rel="noopener noreferrer" eventName="Map Open">
          <Navigation size={18} aria-hidden="true" /> Abrir rota
        </TrackedLink>
      </div>
    </section>
  );
}
