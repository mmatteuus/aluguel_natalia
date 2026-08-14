export type RoomFrame = {
  image: string;
  alt: string;
};

export type Room = {
  id: string;
  name: string;
  summary: string;
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
      summary: 'O hall de entrada é o primeiro ambiente do sobrado no piso térreo.',
      frames: [
        { image: '/images/hall-entrada.avif', alt: 'Hall de entrada do sobrado' }
      ]
    },
    {
      id: 'sala',
      name: 'Sala',
      summary: 'A sala de estar se abre a partir do hall de entrada.',
      frames: [
        { image: '/images/sala-estar.avif', alt: 'Sala de estar vista do hall de entrada' }
      ]
    },
    {
      id: 'cozinha',
      name: 'Cozinha',
      summary: 'A cozinha do sobrado aparece em fotografia real do piso térreo.',
      frames: [
        { image: '/images/cozinha.avif', alt: 'Cozinha do sobrado' }
      ]
    },
    {
      id: 'escada',
      name: 'Escada',
      summary: 'Duas fotografias mostram a escada, do térreo até os degraus.',
      frames: [
        { image: '/images/escada-geral.avif', alt: 'Escada do sobrado vista do térreo' },
        { image: '/images/escada-degraus.avif', alt: 'Degraus da escada do sobrado vistos de perto' }
      ]
    },
    {
      id: 'superior',
      name: 'Piso superior',
      summary: 'A parte superior da escada conecta a circulação do segundo pavimento.',
      frames: [
        { image: '/images/superior-circulacao.avif', alt: 'Parte superior da escada e circulação do piso superior' }
      ]
    },
    {
      id: 'quartos',
      name: 'Quartos',
      summary: 'Três fotografias mostram os dormitórios do piso superior, incluindo a entrada da suíte.',
      frames: [
        { image: '/images/quarto-01.avif', alt: 'Primeiro quarto do sobrado' },
        { image: '/images/quarto-02.avif', alt: 'Segundo quarto do sobrado' },
        { image: '/images/suite-entrada.avif', alt: 'Entrada da suíte no piso superior' }
      ]
    },
    {
      id: 'banheiro',
      name: 'Banheiros',
      summary: 'O banheiro social e o lavabo aparecem em fotografias reais.',
      frames: [
        { image: '/images/banheiro-social.avif', alt: 'Banheiro social do sobrado' },
        { image: '/images/lavabo.avif', alt: 'Lavabo do sobrado' }
      ]
    },
    {
      id: 'servico',
      name: 'Área de serviço',
      summary: 'A área de serviço coberta aparece em fotografia real.',
      frames: [
        { image: '/images/area-servico.avif', alt: 'Área de serviço coberta do sobrado' }
      ]
    }
  ] satisfies Room[]
} as const;

export const whatsappUrl = `https://wa.me/${property.whatsapp}?text=${encodeURIComponent(
  'Olá! Tenho interesse no sobrado da R. Dois de Julho, 110. Gostaria de agendar uma visita.'
)}`;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(property.address)}`;
