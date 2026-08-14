import { describe, expect, it } from 'vitest';
import { mapsUrl, property, whatsappUrl } from '@/content/property';

describe('property content contract', () => {
  it('keeps the known listing facts and the eight-room structure', () => {
    expect(property.price).toBe('R$ 2.400/mês');
    expect(property.facts.map((fact) => fact.value)).toEqual(['3', '2', '1', '2']);
    expect(property.rooms).toHaveLength(8);
    expect(property.rooms[0].name).toBe('Entrada');
    expect(property.rooms.at(-1)?.name).toBe('Área de serviço');
  });

  it('uses all twelve provided property photographs in the gallery', () => {
    const images = property.rooms.flatMap((room) => room.frames.map((frame) => frame.image));
    expect(images).toHaveLength(12);
    expect(new Set(images).size).toBe(12);
    expect(images).toContain('/images/escada-geral.avif');
    expect(images).toContain('/images/suite-entrada.avif');
    expect(images).toContain('/images/lavabo.avif');
  });

  it('builds direct WhatsApp and map links from the listing data', () => {
    expect(whatsappUrl).toContain('wa.me/5563992257802');
    expect(whatsappUrl).toContain('agendar%20uma%20visita');
    expect(mapsUrl).toContain('google.com/maps/search');
    expect(decodeURIComponent(mapsUrl)).toContain('R. Dois de Julho, 110');
  });
});
