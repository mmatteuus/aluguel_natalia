export type RoomFrame = {
  image: string;
  alt: string;
  position?: string;
};

export type Room = {
  id: string;
  name: string;
  summary: string;
  motion: 'push' | 'pan-left' | 'pan-right' | 'rise';
  frames: RoomFrame[];
};

export const property = {
  title: 'Seu novo lar espera por você.',
  eyebrow: 'Sobrado para alugar',
  price: 'R$ 2.400/mês',
  numericPrice: 2400,
  currency: 'BRL',
  address: 'R. Dois de Julho, 110 - São João, Araguaína - TO, 77805-130',
  streetAddress: 'R. Dois de Julho, 110',
  neighborhood: 'São João',
  city: 'Araguaína',
  state: 'TO',
  postalCode: '77805-130',
  country: 'BR',
  phone: '(63) 99225-7802',
  whatsapp: '5563992257802',
  facts: [
    { value: '3', label: 'quartos' },
    { value: '2', label: 'banheiros' },
    { value: '1', label: 'lavabo' },
    { value: '2', label: 'vagas' }
  ],
  rooms: [
    {
      id: 'entrada',
      name: 'Entrada',
      summary: 'A sala comprida conduz o olhar da entrada para os demais ambientes do térreo.',
      motion: 'push',
      frames: [
        { image: '/images/sala-entrada.avif', alt: 'Entrada do sobrado vista pela sala ampla', position: 'center 56%' },
        { image: '/images/sala-lateral.avif', alt: 'Sala ampla vista por um segundo ângulo', position: 'center 56%' }
      ]
    },
    {
      id: 'sala',
      name: 'Sala',
      summary: 'Sala e cozinha aparecem conectadas visualmente, com a escada ao fundo.',
      motion: 'pan-left',
      frames: [
        { image: '/images/sala-integrada.avif', alt: 'Sala integrada com cozinha e escada ao fundo', position: 'center 58%' }
      ]
    },
    {
      id: 'cozinha',
      name: 'Cozinha',
      summary: 'Bancada em granito, armários inferiores e revestimento decorativo formam o ponto de destaque.',
      motion: 'push',
      frames: [
        { image: '/images/cozinha.avif', alt: 'Cozinha com bancada de granito e revestimento decorativo', position: 'center 54%' }
      ]
    },
    {
      id: 'escada',
      name: 'Escada',
      summary: 'A sequência de fotos permite acompanhar a subida em granito até o piso superior.',
      motion: 'rise',
      frames: [
        { image: '/images/escada-terreo.avif', alt: 'Escada em granito vista a partir do térreo', position: 'center 58%' },
        { image: '/images/escada-subida.avif', alt: 'Escada em granito e guarda-corpo metálico durante a subida', position: 'center 50%' }
      ]
    },
    {
      id: 'superior',
      name: 'Piso superior',
      summary: 'O corredor distribui o acesso aos ambientes do segundo pavimento.',
      motion: 'push',
      frames: [
        { image: '/images/corredor-superior.avif', alt: 'Circulação do piso superior com guarda-corpo metálico', position: 'center 58%' }
      ]
    },
    {
      id: 'quartos',
      name: 'Quartos',
      summary: 'Duas fotografias mostram dormitórios com piso claro, janelas e teto trabalhado.',
      motion: 'pan-right',
      frames: [
        { image: '/images/quarto-01.avif', alt: 'Primeiro quarto com janela horizontal e teto trabalhado', position: 'center 58%' },
        { image: '/images/quarto-02.avif', alt: 'Segundo quarto com piso claro e iluminação natural', position: 'center 58%' }
      ]
    },
    {
      id: 'banheiro',
      name: 'Banheiros',
      summary: 'O banheiro social tem box de vidro e bancada em granito; o lavabo fica no térreo.',
      motion: 'push',
      frames: [
        { image: '/images/banheiro.avif', alt: 'Banheiro social com bancada em granito e box de vidro', position: 'center 52%' },
        { image: '/images/lavabo.avif', alt: 'Lavabo do piso térreo com bancada em granito', position: 'center 52%' }
      ]
    },
    {
      id: 'servico',
      name: 'Área de serviço',
      summary: 'Área coberta com tanque e pontos hidráulicos visíveis nas fotografias.',
      motion: 'pan-left',
      frames: [
        { image: '/images/area-servico.avif', alt: 'Área de serviço coberta com tanque', position: 'center 54%' }
      ]
    }
  ] satisfies Room[]
} as const;

export const whatsappUrl = `https://wa.me/${property.whatsapp}?text=${encodeURIComponent(
  'Olá! Tenho interesse no sobrado da R. Dois de Julho, 110. Gostaria de agendar uma visita.'
)}`;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(property.address)}`;
