// Manifest centralizado de rutas del sitio.
// Lo consumen: prerender-routes.mjs (HTML estático + meta tags)
//              generate-sitemap.mjs (sitemap.xml)
//
// Para agregar una página nueva:
// 1. Crear el componente en src/pages/
// 2. Agregar la ruta en src/App.jsx
// 3. Agregar la entrada acá con title/description/priority

export const BASE_URL = 'https://nubiqdomotica.com.ar';

export const routes = [
  {
    path: '/',
    title: 'Domótica Premium en Córdoba | Casas a Medida — Nubiq',
    description: 'Domótica premium a medida para casas de alto nivel en Córdoba. Diseñamos, instalamos y acompañamos. Un solo sistema, un solo responsable — durante la obra y después.',
    h1: 'Domótica Premium en Córdoba',
    body: 'Domótica premium a medida para casas de alto nivel en Córdoba. Un solo sistema, un solo responsable, durante la obra y los años que siguen.',
    priority: 1.0,
    changefreq: 'weekly',
  },
  {
    path: '/servicios',
    title: 'Servicios de Domótica en Córdoba | Iluminación, Clima, Seguridad | Nubiq',
    description: 'Iluminación inteligente, climatización, persianas automatizadas, cerraduras, cámaras, riego y audio. Instalación profesional de domótica en Córdoba, Argentina.',
    h1: 'Servicios de Domótica en Córdoba',
    body: 'Iluminación inteligente, climatización automatizada, persianas y cortinas motorizadas, cerraduras y control de acceso, cámaras de vigilancia, riego y pileta, audio multiambiente y redes WiFi profesionales. Instalamos y configuramos todo integrado en un solo sistema que controlás desde el celular o por voz, en Córdoba, Argentina. Cada proyecto se diseña a medida según la casa y la etapa de obra. Pedí tu asesoramiento para saber qué conviene automatizar y cómo.',
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    path: '/proyectos',
    title: 'Proyectos de Domótica en Córdoba | Obras Reales — Nubiq',
    description: 'Mirá proyectos reales de domótica premium en Córdoba: obras terminadas y en ejecución. Fotos y videos de casas inteligentes hechas por Nubiq.',
    h1: 'Nuestros Proyectos',
    body: 'Proyectos reales de domótica premium en Córdoba: obras terminadas y en ejecución. Casas inteligentes con iluminación, clima, seguridad y más, integradas en un solo sistema.',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/que-es-domotica',
    title: '¿Qué es la Domótica? Guía Completa | Nubiq Argentina',
    description: 'Descubrí qué es la domótica, cómo funciona y cuáles son sus beneficios. Control por voz, ahorro energético, seguridad y más. Guía gratuita de Nubiq Córdoba.',
    h1: '¿Qué es la Domótica?',
    body: 'La domótica es la tecnología que integra luces, clima, persianas, cámaras y cerraduras para controlarlos desde el celular, por voz o de forma automática según tus rutinas. Sirve para ganar confort, seguridad y ahorro de energía sin complicarte la vida. En esta guía explicamos qué es, cómo funciona, qué se puede automatizar en una casa y cómo se integra en una obra. En Nubiq diseñamos e instalamos domótica a medida en Córdoba, Argentina.',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/partners',
    title: 'Nubiq Partners | Domótica para Arquitectos y Desarrollistas en Córdoba',
    description: 'Paquete de domótica acorde a tu proyecto. Diferenciá la obra, vendé más rápido y subí el ticket sin complicarte. Para arquitectos y desarrollistas inmobiliarios en Córdoba.',
    h1: 'Nubiq Partners - Domótica para Arquitectos y Desarrollistas',
    body: 'Línea B2B de Nubiq para arquitectos y desarrollistas inmobiliarios en Córdoba. Paquete acorde al proyecto, bajo costo de incidencia en obra, máxima percepción de valor.',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/nosotros',
    title: 'Quiénes Somos | Nubiq Domótica Córdoba, Argentina',
    description: 'Somos Lucas y Franco, co-fundadores de Nubiq. Expertos en domótica residencial premium con Home Assistant en Córdoba, Argentina.',
    h1: 'Quiénes Somos - Nubiq Domótica',
    body: 'Lucas Carranza y Franco Oppido, co-fundadores de Nubiq Domótica en Córdoba. Especialistas en automatización del hogar premium con Home Assistant.',
    priority: 0.6,
    changefreq: 'yearly',
  },
  {
    path: '/contacto',
    title: 'Contacto | Pedí tu Asesoramiento de Domótica | Nubiq Córdoba',
    description: 'Contactanos por WhatsApp o email. Asesoramiento sin compromiso. Instalación de domótica premium en Córdoba, Argentina.',
    h1: 'Contacto - Nubiq Domótica Córdoba',
    body: 'WhatsApp +54 351 232 6814, email contacto@nubiqdomotica.com.ar. Lunes a Viernes 9 a 18, Sábados 9 a 14. Instalación de domótica premium en Córdoba, Argentina.',
    priority: 0.7,
    changefreq: 'yearly',
  },
  {
    path: '/domotica-nueva-cordoba',
    title: 'Domótica en Nueva Córdoba | Casa Inteligente | Nubiq',
    description: 'Instalación de domótica en Nueva Córdoba, Córdoba. Casa inteligente: luces, clima, persianas, cámaras y cerraduras desde el celular. Asesoramiento sin compromiso.',
    h1: 'Domótica en Nueva Córdoba',
    body: 'Instalamos domótica en departamentos, monoambientes y casas de Nueva Córdoba. Ideal para edificios y unidades de alquiler: cerraduras y accesos inteligentes, cámaras de seguridad, climatización automatizada y control de luces y persianas desde el celular. Resolvemos instalaciones en propiedad horizontal coordinando con el consorcio cuando hace falta. Pedí tu asesoramiento para automatizar tu departamento en Nueva Córdoba.',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/domotica-cerro-de-las-rosas',
    title: 'Domótica en Cerro de las Rosas, Córdoba | Casa Inteligente | Nubiq',
    description: 'Instalación de domótica en Cerro de las Rosas, Córdoba. Casa inteligente: luces, clima, persianas, cámaras y cerraduras desde el celular. Asesoramiento sin compromiso.',
    h1: 'Domótica en Cerro de las Rosas',
    body: 'Instalación de domótica en casas de Cerro de las Rosas: viviendas familiares de varios ambientes, con jardín y pileta integrados en un solo sistema. Automatizamos iluminación interior y exterior, climatización por ambiente, riego, control de pileta, cámaras perimetrales y redes WiFi de cobertura total. Diseñamos el proyecto a medida, en obra nueva o sobre tu casa ya terminada. Pedí tu asesoramiento para tu casa en Cerro de las Rosas.',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/domotica-villa-allende',
    title: 'Domótica en Villa Allende, Córdoba | Casa Inteligente | Nubiq',
    description: 'Instalación de domótica en Villa Allende, Córdoba. Casa inteligente: luces, clima, persianas, cámaras y cerraduras desde el celular. Asesoramiento sin compromiso.',
    h1: 'Domótica en Villa Allende',
    body: 'Domótica para casas en countries y barrios cerrados de Villa Allende. Vigilancia inteligente con cámaras y sensores, control de acceso con códigos temporales para personal y visitas, climatización eficiente, automatización de luces y persianas, y redes WiFi profesionales para cubrir lotes grandes. Pensado para la seguridad y el confort de la vida en country, integrado en un solo sistema. Pedí tu asesoramiento para tu casa en Villa Allende.',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/domotica-valle-escondido',
    title: 'Domótica en Valle Escondido, Córdoba | Casa Inteligente | Nubiq',
    description: 'Instalación de domótica en Valle Escondido, Córdoba. Casa inteligente: luces, clima, persianas, cámaras y cerraduras desde el celular. Asesoramiento sin compromiso.',
    h1: 'Domótica en Valle Escondido',
    body: 'Domótica premium en Valle Escondido, orientada al diseño y la arquitectura de la casa. Iluminación arquitectónica y escenas, climatización integrada, persianas y cortinas motorizadas, seguridad y audio multiambiente, coordinados con tu arquitecto durante la obra para que la tecnología no se note y la casa se vea impecable. Acompañamos el proyecto de principio a fin. Pedí tu asesoramiento para tu casa en Valle Escondido.',
    priority: 0.8,
    changefreq: 'monthly',
  },
];
