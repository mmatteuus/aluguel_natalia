import { ContactCta } from '@/components/ContactCta';
import { Faq } from '@/components/Faq';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Highlights } from '@/components/Highlights';
import { Location } from '@/components/Location';
import { MobileContactBar } from '@/components/MobileContactBar';
import { StructuredData } from '@/components/StructuredData';
import { Tour } from '@/components/Tour';

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Tour />
        <Highlights />
        <Location />
        <Faq />
        <ContactCta />
      </main>
      <Footer />
      <MobileContactBar />
    </>
  );
}
