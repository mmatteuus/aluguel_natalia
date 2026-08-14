import { ContactCta } from '@/components/ContactCta';
import { Faq } from '@/components/Faq';
import { Footer } from '@/components/Footer';
import { Gallery } from '@/components/Gallery';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Highlights } from '@/components/Highlights';
import { Location } from '@/components/Location';
import { MobileContactBar } from '@/components/MobileContactBar';
import { StructuredData } from '@/components/StructuredData';

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Gallery />
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
