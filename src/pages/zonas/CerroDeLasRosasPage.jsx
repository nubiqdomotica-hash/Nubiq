import React from 'react';
import NeighborhoodPage from '@/components/NeighborhoodPage';

const CerroDeLasRosasPage = () => (
  <NeighborhoodPage
    neighborhood="Cerro de las Rosas"
    slug="domotica-cerro-de-las-rosas"
    intro="Instalación profesional de domótica en Cerro de las Rosas. Casas familiares con varios ambientes, jardín y pileta: integramos todo en un solo sistema controlable desde el celular."
    whyHere={[
      "Cerro de las Rosas combina casas familiares grandes con jardines, pileta y varios ambientes. La domótica acá despliega todo su potencial: integramos iluminación interior y exterior, climatización por zonas, riego automático del jardín y filtrado de la pileta en una sola plataforma.",
      "En casas de varios pisos, la domótica simplifica mucho lo cotidiano: subir y bajar persianas en simultáneo, controlar luces de cada planta desde un solo lugar, y enterarte si quedó una puerta abierta sin tener que recorrer toda la casa.",
      "Para los que viajan seguido o tienen segunda casa, sumamos automatizaciones de seguridad: simulación de presencia, alertas en tiempo real y cámaras inteligentes que distinguen personas de mascotas o vehículos."
    ]}
    highlightedServices={[
      {
        icon: 'Lightbulb',
        title: 'Iluminación interior y exterior',
        description: 'Iluminación arquitectónica de jardín, parque y pileta. Escenas que cambian según la hora y la actividad.'
      },
      {
        icon: 'Wifi',
        title: 'Red WiFi para casas grandes',
        description: 'Cobertura completa en casa de 200m² o más, con varios access points. Sin cortes en el jardín ni en la pileta.'
      },
      {
        icon: 'Video',
        title: 'Vigilancia perimetral',
        description: 'Cámaras inteligentes con detección de personas. Cobertura del frente, jardín y pileta, todo en una app.'
      },
      {
        icon: 'Thermometer',
        title: 'Climatización por zonas',
        description: 'Cada ambiente con su temperatura ideal. Programación por horarios y por días de la semana.'
      },
      {
        icon: 'Wind',
        title: 'Persianas y cortinas',
        description: 'Automatización de toda la casa en simultáneo. Una rutina baja todas las persianas a la noche y abre las del comedor a la mañana.'
      },
      {
        icon: 'Lock',
        title: 'Acceso inteligente',
        description: 'Cerraduras con código y huella, accesos temporales para personal de servicio, control desde donde estés.'
      }
    ]}
    testimonialQuote="Tenemos una casa grande con pileta y jardín. Nubiq integró todo lo que ya teníamos más cosas nuevas en un solo sistema. Funciona impecable."
    testimonialAuthor="Cliente"
    faqs={[
      {
        question: "¿Trabajan con casas que ya tienen sistemas viejos instalados?",
        answer: "Sí. Hacemos un relevamiento previo y aprovechamos lo que ya tenés. Con Home Assistant podemos integrar cámaras, sensores y cerraduras de muchas marcas en una sola plataforma."
      },
      {
        question: "¿Pueden automatizar la pileta y el riego del jardín?",
        answer: "Sí. Filtrado de pileta por horarios, encendido de luces de pileta al atardecer, riego inteligente que respeta el pronóstico del clima. Todo controlado desde el celular."
      },
      {
        question: "¿Hacen instalación durante la obra de una casa nueva?",
        answer: "Sí. Trabajamos con arquitectos y constructoras coordinando cableados ocultos, ubicación de access points y previsiones para domótica desde el plano."
      }
    ]}
  />
);

export default CerroDeLasRosasPage;
