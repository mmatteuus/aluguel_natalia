import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { siteUrl } from '@/lib/site';
import { Playfair_Display, Lato } from 'next/font/google';
import './globals.css';
import './accessibility.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Sobrado para alugar no São João em Araguaína | 3 quartos',
  description: 'Sobrado com 3 quartos, 2 banheiros, lavabo e 2 vagas no bairro São João, em Araguaína - TO. Aluguel R$ 2.400/mês.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Sobrado para alugar no São João em Araguaína',
    description: 'Veja as fotos do imóvel na galeria completa e agende uma visita.',
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    images: [{ url: '/images/og-sobrado.jpg', width: 1200, height: 1600, alt: 'Hall de entrada do sobrado no bairro São João' }]
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
  themeColor: '#3d2b1f'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" className={`${playfair.variable} ${lato.variable}`}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
