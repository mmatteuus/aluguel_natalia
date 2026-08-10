import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { property } from '@/content/property';

const highlights = [
  'Sala e cozinha conectadas visualmente',
  'Cozinha com bancada em granito',
  'Lavabo no piso térreo',
  'Dormitórios no piso superior',
  'Banheiro social com box em vidro',
  'Área de serviço coberta'
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
              </span>
              <span className="room-card__number">{index + 1}</span>
              <strong>{room.name}</strong>
              <small>{room.summary}</small>
            </a>
          ))}
        </div>

        <div className="comfort-grid">
          <div className="comfort-grid__image">
            <Image src="/images/cozinha.avif" alt="Cozinha com bancada de granito e revestimento decorativo" fill sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div className="comfort-grid__copy">
            <p className="eyebrow">Espaço para viver bem</p>
            <h2>O que aparece nas fotografias do sobrado</h2>
            <p>Os ambientes usam piso claro e paredes em tons neutros. A cozinha traz bancada em granito e um revestimento decorativo marcante. A escada também usa granito e guarda-corpo metálico. Nos dormitórios, as imagens mostram janelas, iluminação natural e detalhes de teto.</p>
            <ul>
              {highlights.map((item) => <li key={item}><CheckCircle2 size={19} aria-hidden="true" /> {item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
