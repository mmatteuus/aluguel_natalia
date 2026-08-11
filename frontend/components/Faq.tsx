import { property, whatsappUrl } from '@/content/property';
import { TrackedLink } from '@/components/TrackedLink';

const questions = [
  {
    question: 'Qual é o valor do aluguel?',
    answer: `O valor divulgado para este sobrado é ${property.price}.`
  },
  {
    question: 'Quantos quartos, banheiros e vagas o imóvel tem?',
    answer: 'O anúncio informa 3 quartos, 2 banheiros, 1 lavabo e garagem para 2 carros.'
  },
  {
    question: 'Onde fica o sobrado?',
    answer: `O endereço divulgado é ${property.address}.`
  },
  {
    question: 'Como agendar uma visita?',
    answer: 'Use qualquer botão de agendamento ou WhatsApp desta página para abrir a conversa com a mensagem do imóvel já preparada.'
  }
] as const;

export function Faq() {
  return (
    <section className="faq" aria-labelledby="faq-title">
      <div className="container faq__grid">
        <div className="faq__intro">
          <p className="eyebrow">Informações diretas</p>
          <h2 id="faq-title">Antes de marcar a visita</h2>
          <p>A página usa somente os dados do anúncio e o que pode ser confirmado pelas fotografias fornecidas.</p>
          <TrackedLink href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-link" eventName="WhatsApp Click" eventData={{ source: 'faq' }}>
            Perguntar pelo WhatsApp →
          </TrackedLink>
        </div>
        <div className="faq__items">
          {questions.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
