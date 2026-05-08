import React from 'react';
import NeighborhoodPage from '@/components/NeighborhoodPage';

const VillaAllendePage = () => (
  <NeighborhoodPage
    neighborhood="Villa Allende"
    slug="domotica-villa-allende"
    intro="Domótica en Villa Allende: casas en country, barrios cerrados y zonas residenciales. Convertí tu casa en un hogar inteligente y disfrutá del confort que se integra con la vida en zona norte."
    whyHere={[
      "Villa Allende y sus alrededores tienen muchas casas en country y barrios cerrados, con superficies amplias, parque, pileta y conexión a la naturaleza. La domótica suma una capa de confort y seguridad sin romper la estética del hogar.",
      "En countries, la seguridad ya está cubierta perimetralmente, pero la domótica refuerza el control interior: alertas si quedó una ventana abierta, cámaras integradas con el resto de la casa, luces que simulan presencia cuando viajás.",
      "El uso eficiente de la energía también pesa: en casas grandes los costos de climatización pueden ser altos. Con sensores y termostatos inteligentes ajustamos cada zona según uso real, lo que se traduce en ahorro mensual."
    ]}
    highlightedServices={[
      {
        icon: 'Wifi',
        title: 'Red WiFi mesh para casas extensas',
        description: 'Casas grandes y de varias plantas requieren varios puntos de acceso bien diseñados. Diseñamos la red para que tengas señal estable en todo el lote.'
      },
      {
        icon: 'Lightbulb',
        title: 'Iluminación de parque y pileta',
        description: 'Escenas exteriores automáticas: luces de jardín al atardecer, pileta iluminada cuando hay gente, todo programado.'
      },
      {
        icon: 'Thermometer',
        title: 'Climatización eficiente',
        description: 'Termostatos inteligentes por zona. Modo "ausente" para máximo ahorro cuando viajás o no hay nadie en casa.'
      },
      {
        icon: 'Video',
        title: 'Vigilancia inteligente',
        description: 'Cámaras con IA que distinguen personas, vehículos y mascotas. Notificaciones precisas, sin falsas alarmas.'
      },
      {
        icon: 'Lock',
        title: 'Accesos sin llaves',
        description: 'Cerraduras inteligentes con código temporal para personal de servicio o jardineros. Llevá el control de quién entra y a qué hora.'
      },
      {
        icon: 'Wind',
        title: 'Persianas y toldos motorizados',
        description: 'Protección del sol del oeste, privacidad nocturna y eficiencia energética. Automatización por horarios o por sensores de luz.'
      }
    ]}
    testimonialQuote="Vivimos en un country en Villa Allende. La instalación fue prolija, sin obras y el sistema anda perfecto."
    testimonialAuthor="Cliente"
    faqs={[
      {
        question: "¿Atienden countries y barrios cerrados de Villa Allende?",
        answer: "Sí. Trabajamos en countries y barrios cerrados de toda la zona norte. Coordinamos previamente el ingreso con el guardia y el reglamento del country."
      },
      {
        question: "¿Funciona si se va la luz?",
        answer: "Los dispositivos con batería interna siguen operando localmente. Al volver la luz, el sistema se reconecta automáticamente. Para corte total, recomendamos integrar con UPS o generador, dependiendo del proyecto."
      },
      {
        question: "¿Pueden integrar mi sistema de alarma actual?",
        answer: "En la mayoría de los casos sí. Hacemos un relevamiento de marcas y modelos para confirmar la compatibilidad. Con Home Assistant integramos lo más amplio del mercado."
      }
    ]}
  />
);

export default VillaAllendePage;
