import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { track } from '@vercel/analytics';
import { Gallery } from '@/components/Gallery';
import { TrackedLink } from '@/components/TrackedLink';

vi.mock('@vercel/analytics', () => ({ track: vi.fn() }));

describe('analytics semantics', () => {
  beforeEach(() => {
    vi.mocked(track).mockClear();
  });

  it('reports a gallery CTA click with its source, not a gallery view', async () => {
    const user = userEvent.setup();
    render(
      <TrackedLink href="#galeria" eventName="Gallery CTA Click" eventData={{ source: 'hero' }}>
        Ver as fotos
      </TrackedLink>
    );

    await user.click(screen.getByRole('link', { name: 'Ver as fotos' }));

    expect(track).toHaveBeenCalledTimes(1);
    expect(track).toHaveBeenCalledWith('Gallery CTA Click', { source: 'hero' });
  });

  it('reports a gallery impression only when the gallery becomes visible, and only once', () => {
    const callbacks: Array<(entries: IntersectionObserverEntry[]) => void> = [];
    const baseObserver = window.IntersectionObserver;
    class CapturingObserver implements IntersectionObserver {
      readonly root = null;
      readonly rootMargin = '0px';
      readonly thresholds = [0.15];
      constructor(callback: IntersectionObserverCallback) {
        callbacks.push((entries) => callback(entries, this));
      }
      disconnect() {}
      observe() {}
      unobserve() {}
      takeRecords(): IntersectionObserverEntry[] {
        return [];
      }
    }
    window.IntersectionObserver = CapturingObserver;

    try {
      render(<Gallery />);
      expect(track).not.toHaveBeenCalled();

      callbacks[0]([{ isIntersecting: false } as IntersectionObserverEntry]);
      expect(track).not.toHaveBeenCalled();

      callbacks[0]([{ isIntersecting: true } as IntersectionObserverEntry]);
      expect(track).toHaveBeenCalledTimes(1);
      expect(track).toHaveBeenCalledWith('Gallery View', { section: 'galeria' });

      callbacks[0]([{ isIntersecting: true } as IntersectionObserverEntry]);
      expect(track).toHaveBeenCalledTimes(1);
    } finally {
      window.IntersectionObserver = baseObserver;
    }
  });
});