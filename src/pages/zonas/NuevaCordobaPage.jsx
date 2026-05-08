import React from 'react';
import NeighborhoodPage from '@/components/NeighborhoodPage';

const NuevaCordobaPage = () => (
  <NeighborhoodPage
    neighborhood="Nueva Córdoba"
    slug="domotica-nueva-cordoba"
    intro="Instalamos domótica en departamentos y casas de Nueva Córdoba sin obras ni roturas. Convertí tu hogar en una casa inteligente y controlá todo desde el celular o por voz."
    whyHere={[
      "Nueva Córdoba es uno de los barrios con mayor densidad de departamentos modernos de la ciudad. La domótica calza perfecto en estos espacios: las soluciones de Nubiq se instalan sin obras, sin romper paredes y sin complicar al consorcio.",
      "Trabajamos sobre la red WiFi existente del departamento, sumando dispositivos que se integran con tu rutina: luces que se apagan al irte, persianas que bajan cuando te vas a dormir, climatización que se enciende antes de que llegues a casa.",
      "Para los que viven solos o pasan poco tiempo en el departamento, la domótica también suma seguridad: alertas en tiempo real, simulación de presencia y cámaras que revisás desde cualquier lugar."
    ]}
    highlightedServices={[
      {
        icon: 'Lightbulb',
        title: 'Iluminación inteligente',
        description: 'Escenas para estudio, cine y descanso. Ideal para monoambientes y deptos de 1 o 2 dormitorios típicos de Nueva Córdoba.'
      },
      {
        icon: 'Lock',
        title: 'Cerraduras inteligentes',
        description: 'Olvidate de la llave. Abrí con código, huella o desde el celular. Útil si alquilás por temporadas o tenés visitas frecuentes.'
      },
      {
        icon: 'Video',
        title: 'Cámaras y seguridad',
        description: 'Mirá tu departamento desde cualquier parte. Detección inteligente y alertas instantáneas. Tranquilidad cuando viajás o estás en la facu.'
      },
      {
        icon: 'Thermometer',
        title: 'Climatización automática',
        description: 'Encendé el aire antes de llegar. Termostatos que aprenden tu rutina y bajan el consumo cuando no estás.'
      },
      {
        icon: 'Wifi',
        title: 'Red WiFi profesional',
        description: 'Wi-Fi mesh sin zonas muertas, ideal para deptos largos o en pisos altos donde la señal flaquea.'
      },
      {
        icon: 'Wind',
        title: 'Persianas automáticas',
        description: 'Subida y bajada programada según horarios y luz natural. Súper útil en deptos con balcón orientado al sol.'
      }
    ]}
    testimonialQuote="Vivo sola en Nueva Córdoba y la domótica me cambió la vida. Llego de la facu y ya está todo encendido como me gusta."
    testimonialAuthor="Cliente"
    faqs={[
      {
        question: "¿Pueden instalar domótica en un departamento alquilado en Nueva Córdoba?",
        answer: "Sí. Nuestras soluciones son sin obras y reversibles. La mayoría de los dispositivos se conectan a la WiFi existente y se pueden retirar sin dejar marca al mudarte."
      },
      {
        question: "¿Necesito permiso del consorcio?",
        answer: "Para automatizaciones internas (luces, persianas internas, climatización, cerradura de tu puerta) no necesitás permiso. Solo si querés intervenir áreas comunes."
      },
      {
        question: "¿Cuánto cuesta domotizar un monoambiente o un 2 ambientes?",
        answer: "Variá según los sistemas. Para un setup básico (luces de la sala, cerradura inteligente, asistente de voz) los proyectos arrancan accesibles. Te hacemos un presupuesto gratis y a medida."
      }
    ]}
  />
);

export default NuevaCordobaPage;
