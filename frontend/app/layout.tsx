import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { siteUrl } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Sobrado para alugar no São João em Araguaína | 3 quartos',
  description: 'Sobrado com 3 quartos, 2 banheiros, lavabo e 2 vagas no bairro São João, em Araguaína - TO. Aluguel R$ 2.400/mês.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Sobrado para alugar no São João em Araguaína',
    description: 'Veja as fotos do imóvel em um percurso guiado e agende uma visita.',
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    images: [{ url: '/images/og-sobrado.jpg', width: 400, height: 534, alt: 'Sala integrada do sobrado no bairro São João' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobrado para alugar no São João em Araguaína',
    description: '3 quartos, 2 banheiros, lavabo e 2 vagas. Aluguel R$ 2.400/mês.',
    images: ['/images/og-sobrado.jpg']
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#171a19'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
