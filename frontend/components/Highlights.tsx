import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { property } from '@/content/property';

const highlights = [
  'Hall de entrada com escada ao fundo',
  'Sala de estar no piso térreo',
  'Cozinha em fotografia real',
  'Escada de acesso ao piso superior',
  'Dormitórios e entrada da suíte',
  'Banheiro social, lavabo e área de serviço'
];

export function Highlights() {
  return (
    <section className="highlights" id="imovel" aria-labelledby="highlights-title">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Conheça cada detalhe</p>
          <h2 id="highlights-title">As fotos mostram o caminho antes da visita presencial</h2>
          <p>O material disponível permite acompanhar o térreo, a subida pela escada, a circulação superior, os dormitórios, os banheiros e a área de serviço sem criar cômodos ou características que não estejam documentados.</p>
        </div>

        <div className="room-strip" aria-label="Cômodos em destaque">
          {property.rooms.map((room, index) => (
            <a className="room-card" href={`#${room.id}`} key={room.id}>
              <span className="room-card__image">
                <Image src={room.frames[0].image} alt="" fill sizes="(max-width: 760px) 78vw, 22vw" />
                <span className="room-card__number">{index + 1}</span>
              </span>
              <strong>{room.name}</strong>
              <small>{room.summary}</small>
            </a>
          ))}
        </div>

        <div className="comfort-grid">
          <div className="comfort-grid__image">
            <Image src="/images/cozinha.avif" alt="Cozinha do sobrado" fill sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div className="comfort-grid__copy">
            <p className="eyebrow">Espaço para viver bem</p>
            <h2>O que aparece nas fotografias do sobrado</h2>
            <p>As 12 fotografias reais percorrem o sobrado do hall de entrada à área de serviço: sala de estar, cozinha, escada, circulação superior, dormitórios, suíte, banheiro social e lavabo — tudo documentado nas imagens, sem características inventadas.</p>
            <ul>
              {highlights.map((item) => <li key={item}><CheckCircle2 size={19} aria-hidden="true" /> {item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
