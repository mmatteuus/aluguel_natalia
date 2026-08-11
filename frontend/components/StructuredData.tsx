import { property } from '@/content/property';
import { siteUrl } from '@/lib/site';

export function StructuredData() {
  const residenceId = `${siteUrl}/#residence`;
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/#webpage`,
        url: siteUrl,
        name: 'Sobrado para alugar no São João em Araguaína',
        description: 'Sobrado para aluguel com 3 quartos, 2 banheiros, 1 lavabo e 2 vagas no bairro São João, em Araguaína - TO.',
        mainEntity: { '@id': residenceId }
      },
      {
        '@type': 'SingleFamilyResidence',
        '@id': residenceId,
        name: 'Sobrado para alugar no São João',
        image: `${siteUrl}/images/og-sobrado.jpg`,
        numberOfBedrooms: 3,
        address: {
          '@type': 'PostalAddress',
          streetAddress: property.streetAddress,
          addressLocality: property.city,
          addressRegion: property.state,
          postalCode: property.postalCode,
          addressCountry: property.country
        }
      },
      {
        '@type': 'Offer',
        price: property.numericPrice,
        priceCurrency: property.currency,
        url: siteUrl,
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: property.numericPrice,
          priceCurrency: property.currency,
          unitText: 'mês'
        },
        itemOffered: { '@id': residenceId }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
