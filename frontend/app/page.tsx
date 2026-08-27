import { ContactCta } from '@/components/ContactCta';
import { Footer } from '@/components/Footer';
import { Gallery } from '@/components/Gallery';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
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
        <Location />
        <ContactCta />
      </main>
      <Footer />
      <MobileContactBar />
    </>
  );
}
