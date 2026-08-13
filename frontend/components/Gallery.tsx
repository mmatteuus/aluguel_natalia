'use client';

import { useEffect, useRef } from 'react';
import { track } from '@vercel/analytics';
import Image from 'next/image';
import { property } from '@/content/property';

export function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let reported = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!reported && entries.some((entry) => entry.isIntersecting)) {
          reported = true;
          track('Gallery View', { section: 'galeria' });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="gallery" id="galeria" aria-labelledby="gallery-title" ref={sectionRef}>
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Fotografias reais</p>
          <h2 id="gallery-title">As fotos do sobrado</h2>
          <p>As 12 fotografias fornecidas mostram a entrada, a sala, a cozinha, a escada, o piso superior, dois quartos, o banheiro social, o lavabo e a área de serviço.</p>
        </div>

        <div className="gallery__grid">
          {property.rooms.map((room) => (
            <figure className="gallery-card" id={room.id} key={room.id}>
              <div className={`gallery-card__images${room.frames.length > 1 ? ' gallery-card__images--pair' : ''}`}>
                {room.frames.map((frame) => (
                  <div className="gallery-card__image" key={frame.image}>
                    <Image
                      src={frame.image}
                      alt={frame.alt}
                      fill
                      sizes="(max-width: 760px) 100vw, 46vw"
                      style={{ objectPosition: frame.position }}
                    />
                  </div>
                ))}
              </div>
              <figcaption>
                <h3>{room.name}</h3>
                <span>{room.summary}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}