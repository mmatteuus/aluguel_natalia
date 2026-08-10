'use client';

import { useEffect } from 'react';
import { MessageCircle, RotateCcw } from 'lucide-react';
import { track } from '@vercel/analytics';
import { whatsappUrl } from '@/content/property';
import { TrackedLink } from '@/components/TrackedLink';

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    track('Runtime Error', { digest: error.digest ?? 'client' });
  }, [error]);

  return (
    <main className="error-page">
      <div className="error-page__card">
        <p className="eyebrow">A página encontrou um problema</p>
        <h1>Não foi possível continuar este trecho da visita.</h1>
        <p>Tente carregar novamente. Se preferir, o contato do imóvel continua disponível pelo WhatsApp.</p>
        <div className="error-page__actions">
          <button className="button button--dark" type="button" onClick={reset}><RotateCcw size={18} aria-hidden="true" /> Tentar novamente</button>
          <TrackedLink className="button button--primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer" eventName="WhatsApp Click" eventData={{ source: 'error-page' }}>
            <MessageCircle size={18} aria-hidden="true" /> Abrir WhatsApp
          </TrackedLink>
        </div>
      </div>
    </main>
  );
}
