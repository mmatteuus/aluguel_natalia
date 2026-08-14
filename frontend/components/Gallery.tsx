'use client';

import { useEffect, useRef, useState } from 'react';
import { track } from '@vercel/analytics';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import Image from 'next/image';
import { property } from '@/content/property';

type Photo = {
  room: (typeof property.rooms)[number];
  frame: (typeof property.rooms)[number]['frames'][number];
  isFirst: boolean;
};

const photos: Photo[] = property.rooms.flatMap((room) =>
  room.frames.map((frame, index) => ({ room, frame, isFirst: index === 0 }))
);

const total = photos.length;

export function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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

  useEffect(() => {
    if (activeIndex === null) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = '';
      previousFocus?.focus();
    };
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) return;
    const dialog = dialogRef.current;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActiveIndex(null);
      } else if (event.key === 'ArrowLeft') {
        setActiveIndex((index) => (index === null ? index : (index - 1 + total) % total));
      } else if (event.key === 'ArrowRight') {
        setActiveIndex((index) => (index === null ? index : (index + 1) % total));
      } else if (event.key === 'Tab' && dialog) {
        const focusables = Array.from(dialog.querySelectorAll<HTMLElement>('button'));
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex]);

  function openPhoto(index: number) {
    setActiveIndex(index);
    track('Photo View', { photo: photos[index].frame.alt, position: index + 1 });
  }

  return (
    <section className="gallery" id="galeria" aria-labelledby="gallery-title" ref={sectionRef}>
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Fotografias reais</p>
          <h2 id="gallery-title">As fotos do sobrado</h2>
          <p>As 12 fotografias fornecidas mostram a entrada, a sala, a cozinha, a escada, o piso superior, os quartos e a suíte, o banheiro social, o lavabo e a área de serviço.</p>
        </div>

        <div className="gallery__grid">
          {photos.map((photo, index) => (
            <figure
              className="gallery-card"
              id={photo.isFirst ? photo.room.id : undefined}
              key={photo.frame.image}
            >
              <button
                className="gallery-tile"
                type="button"
                aria-label={`Ampliar foto: ${photo.frame.alt}`}
                onClick={() => openPhoto(index)}
              >
                <Image
                  src={photo.frame.image}
                  alt={photo.frame.alt}
                  fill
                  sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 25vw"
                />
                <span className="gallery-tile__zoom" aria-hidden="true"><ZoomIn size={18} /></span>
              </button>
              <figcaption>
                <h3>{photo.room.name}</h3>
                <span>{photo.room.summary}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Galeria de fotos ampliada" ref={dialogRef}>
          <div className="lightbox__stage">
            <Image
              src={photos[activeIndex].frame.image}
              alt={photos[activeIndex].frame.alt}
              fill
              sizes="(max-width: 620px) 92vw, 56vh"
            />
          </div>
          <p className="lightbox__caption">
            <b>{photos[activeIndex].room.name}</b>
            <span aria-live="polite">{activeIndex + 1} / {total}</span>
          </p>
          <button className="lightbox__close" type="button" ref={closeRef} aria-label="Fechar galeria" onClick={() => setActiveIndex(null)}>
            <X size={22} aria-hidden="true" />
          </button>
          <button className="lightbox__prev" type="button" aria-label="Foto anterior" onClick={() => setActiveIndex((index) => (index === null ? index : (index - 1 + total) % total))}>
            <ChevronLeft size={26} aria-hidden="true" />
          </button>
          <button className="lightbox__next" type="button" aria-label="Próxima foto" onClick={() => setActiveIndex((index) => (index === null ? index : (index + 1) % total))}>
            <ChevronRight size={26} aria-hidden="true" />
          </button>
        </div>
      )}
    </section>
  );
}