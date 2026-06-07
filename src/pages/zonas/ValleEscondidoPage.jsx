import React from 'react';
import NeighborhoodPage from '@/components/NeighborhoodPage';

const ValleEscondidoPage = () => (
  <NeighborhoodPage
    neighborhood="Valle Escondido"
    slug="domotica-valle-escondido"
    intro="Domótica en Valle Escondido: casas modernas en country, integración total y diseño cuidado. Llevamos tu casa al siguiente nivel sin sacrificar estética."
    whyHere={[
      "Valle Escondido es uno de los countries más lindos de Córdoba, con casas de diseño moderno, materiales de calidad y arquitectura cuidada. La domótica acá tiene que ser invisible: sin cables a la vista, sin botones desprolijos, integrada al diseño.",
      "Trabajamos con productos premium para esta zona, donde la estética y la integración pesan tanto como la funcionalidad. Llaves de luz con acabados premium, paneles de control de cristal, sensores discretos.",
      "Para casas de obra nueva en Valle Escondido coordinamos desde el plano: previsiones de cableado, ubicación de paneles, integración con domótica del techo, riego, pileta y sistemas de audio multiambiente."
    ]}
    highlightedServices={[
      {
        icon: 'Lightbulb',
        title: 'Iluminación arquitectónica',
        description: 'Diseño de iluminación que resalta cada espacio. Escenas que cambian la atmósfera de la casa con un toque.'
      },
      {
        icon: 'Wifi',
        title: 'Red WiFi profesional',
        description: 'Cobertura sin compromisos. Equipamiento de primera línea, redes separadas para familia, invitados y dispositivos inteligentes.'
      },
      {
        icon: 'Thermometer',
        title: 'Climatización integrada',
        description: 'Control completo de aires acondicionados, calefacción por losa radiante o piso radiante, todo en una sola interfaz.'
      },
      {
        icon: 'Video',
        title: 'Seguridad premium',
        description: 'Cámaras de alta resolución integradas con cerraduras y sensores. Alertas inteligentes y control desde donde estés.'
      },
      {
        icon: 'Lock',
        title: 'Control de acceso',
        description: 'Cerraduras inteligentes con acabados premium, integración con portones y barreras. Llegar y abrir todo solo con tu auto.'
      },
      {
        icon: 'Wind',
        title: 'Cortinas motorizadas',
        description: 'Sistemas premium de cortinas y persianas, integración con escenas y con sensores de luz natural.'
      }
    ]}
    testimonialQuote="Buscaba algo que no se notara como tecnología agregada. Quedó integrado al diseño de la casa, exactamente lo que quería."
    testimonialAuthor="Cliente"
    faqs={[
      {
        question: "¿Hacen instalaciones premium con acabados de diseño?",
        answer: "Sí. Para clientes que buscan lo mejor trabajamos con productos premium: acabados de cristal, paneles táctiles y diseño cuidado, integrados a la estética de la casa."
      },
      {
        question: "¿Trabajan con arquitectos en obras nuevas?",
        answer: "Sí, es nuestra forma preferida de trabajar. Sumarse desde el plano permite cableados ocultos, previsiones eléctricas correctas y un acabado profesional sin compromisos estéticos."
      },
      {
        question: "¿Pueden integrar audio multiambiente y cine en casa?",
        answer: "Sí. Diseñamos sistemas de audio para living, sala multimedia y exterior. Integramos cine en casa con audio envolvente y control desde la misma app de la domótica."
      }
    ]}
  />
);

export default ValleEscondidoPage;
