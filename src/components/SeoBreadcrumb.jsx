import React from 'react';
import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://nubiqdomotica.com.ar';

const SeoBreadcrumb = ({ items }) => {
  const itemListElement = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Inicio',
      item: BASE_URL + '/'
    },
    ...items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 2,
      name: item.name,
      item: BASE_URL + item.path
    }))
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SeoBreadcrumb;
