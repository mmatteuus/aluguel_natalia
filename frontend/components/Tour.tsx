'use client';

import Image from 'next/image';
import { track } from '@vercel/analytics';
import { useEffect, useRef, useState } from 'react';
import { property } from '@/content/property';

const clamp = (value: number) => Math.min(1, Math.max(0, value));

export function Tour() {
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const sceneRefs = useRef<Array<HTMLElement | null>>([]);
  const frameRefs = useRef<Array<Array<HTMLSpanElement | null>>>([]);
  const cameraRefs = useRef<Array<HTMLDivElement | null>>([]);
  const railRef = useRef<HTMLOListElement | null>(null);
  const railItemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const seenRooms = useRef(new Set<number>());

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;

    const recordRoomView = (index: number) => {
      if (seenRooms.current.has(index)) return;
      seenRooms.current.add(index);
      track('Room Viewed', { room: property.rooms[index].name, position: index + 1 });
      if (index === property.rooms.length - 1) track('Tour Completed');
    };

    const updateScenes = () => {
      frame = 0;
      const viewportHeight = window.innerHeight;
      let bestIndex = activeRef.current;
      let bestVisibility = 0;

      sceneRefs.current.forEach((scene, index) => {
        if (!scene) return;
        const rect = scene.getBoundingClientRect();
        const scrollableDistance = Math.max(1, rect.height - viewportHeight);
        const progress = clamp(-rect.top / scrollableDistance);

        const camera = cameraRefs.current[index];
        if (camera) {
          const scale = 1.02 + progress * 0.07;
          const offset = (progress - 0.5) * 4;
          const motion = property.rooms[index].motion;
          if (motion === 'pan-left') camera.style.transform = `scale(${scale.toFixed(4)}) translate3d(${-offset}%, 0, 0)`;
          else if (motion === 'pan-right') camera.style.transform = `scale(${scale.toFixed(4)}) translate3d(${offset}%, 0, 0)`;
          else if (motion === 'rise') camera.style.transform = `scale(${scale.toFixed(4)}) translate3d(0, ${-offset}%, 0)`;
          else camera.style.transform = `scale(${scale.toFixed(4)})`;
        }

        const visiblePixels = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0));
        const visibility = visiblePixels / Math.min(rect.height, viewportHeight);
        if (visibility > bestVisibility) {
          bestVisibility = visibility;
          bestIndex = index;
        }

        const frames = frameRefs.current[index] ?? [];
        const position = progress * Math.max(0, frames.length - 1);
        frames.forEach((node, frameIndex) => {
          if (!node) return;
          const opacity = frames.length === 1 ? 1 : clamp(1 - Math.abs(position - frameIndex));
          node.style.opacity = opacity.toFixed(3);
        });
      });

      if (bestVisibility > 0.24 && bestIndex !== activeRef.current) {
        activeRef.current = bestIndex;
        setActive(bestIndex);
      }

      if (bestVisibility > 0.32) recordRoomView(bestIndex);
    };

    const scheduleUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateScenes);
    };

    if (!reduceMotion) {
      updateScenes();
      window.addEventListener('scroll', scheduleUpdate, { passive: true });
      window.addEventListener('resize', scheduleUpdate);
      return () => {
        window.removeEventListener('scroll', scheduleUpdate);
        window.removeEventListener('resize', scheduleUpdate);
        if (frame) window.cancelAnimationFrame(frame);
      };
    }

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const index = Number((visible.target as HTMLElement).dataset.index ?? 0);
      activeRef.current = index;
      setActive(index);
      recordRoomView(index);
    }, { threshold: [0.35, 0.6] });

    sceneRefs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    const item = railItemRefs.current[active];
    if (!rail || !item || rail.scrollWidth <= rail.clientWidth) return;
    const left = item.offsetLeft - rail.clientWidth / 2 + item.clientWidth / 2;
    rail.scrollTo({
      left: Math.max(0, left),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    });
  }, [active]);

  return (
    <section className="tour" id="tour" aria-labelledby="tour-title">
      <div className="tour__rail" aria-label="Etapas do tour">
        <div className="container tour__rail-inner">
          <div>
            <p className="eyebrow">Percurso guiado pelas fotos do imóvel</p>
            <h2 id="tour-title">Caminhe pelos ambientes</h2>
          </div>
          <ol ref={railRef}>
            {property.rooms.map((room, index) => (
              <li
                key={room.id}
                className={active === index ? 'is-active' : ''}
                ref={(node) => { railItemRefs.current[index] = node; }}
              >
                <a href={`#${room.id}`} aria-current={active === index ? 'step' : undefined}>
                  <span>{String(index + 1).padStart(2, '0')}</span>{room.name}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="tour__scenes">
        {property.rooms.map((room, index) => (
          <article
            className="tour-scene"
            id={room.id}
            key={room.id}
            data-index={index}
            ref={(node) => { sceneRefs.current[index] = node; }}
          >
            <div className="tour-scene__stage">
              <div className={`tour-scene__camera tour-scene__camera--${room.motion}`} ref={(node) => { cameraRefs.current[index] = node; }}>
                {room.frames.map((roomFrame, frameIndex) => (
                  <span
                    className="tour-scene__frame"
                    key={roomFrame.image}
                    ref={(node) => {
                      frameRefs.current[index] ??= [];
                      frameRefs.current[index][frameIndex] = node;
                    }}
                    style={{ opacity: frameIndex === 0 ? 1 : 0 }}
                  >
                    <Image
                      src={roomFrame.image}
                      alt={roomFrame.alt}
                      fill
                      sizes="100vw"
                      className="tour-scene__image"
                      style={{ objectPosition: roomFrame.position }}
                    />
                  </span>
                ))}
              </div>
              <div className="tour-scene__veil" aria-hidden="true" />
              <div className="tour-scene__copy container">
                <span>{String(index + 1).padStart(2, '0')} / {String(property.rooms.length).padStart(2, '0')}</span>
                <h3>{room.name}</h3>
                <p>{room.summary}</p>
                {room.frames.length > 1 && <small>{room.frames.length} ângulos reais deste trecho</small>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
