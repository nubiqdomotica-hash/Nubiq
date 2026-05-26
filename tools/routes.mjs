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
    body: 'Iluminación inteligente, climatización, persianas automatizadas, cerraduras y cámaras inteligentes, riego, audio multiambiente y redes WiFi profesionales. Instalación en Córdoba, Argentina.',
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    path: '/nubiq-plus',
    title: 'Nubiq+ LifeSmart | Distribuidor Oficial Domótica Premium en Córdoba',
    description: 'Nubiq+ es la línea premium de domótica llave en mano con productos LifeSmart. Distribuidor oficial en Córdoba, Argentina.',
    h1: 'Nubiq+ con LifeSmart - Domótica Premium',
    body: 'Línea premium de domótica con productos LifeSmart. Distribuidor oficial en Córdoba. Llave en mano: escenas, rutinas y estética impecable.',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/que-es-domotica',
    title: '¿Qué es la Domótica? Guía Completa | Nubiq Argentina',
    description: 'Descubrí qué es la domótica, cómo funciona y cuáles son sus beneficios. Control por voz, ahorro energético, seguridad y más. Guía gratuita de Nubiq Córdoba.',
    h1: '¿Qué es la Domótica?',
    body: 'La domótica es la tecnología que permite automatizar luces, clima, persianas, cámaras y cerraduras de tu casa para controlarlas desde el celular o por voz. En Nubiq instalamos domótica sin obras en Córdoba, Argentina.',
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
    body: 'Instalamos domótica en departamentos y casas de Nueva Córdoba. Cerraduras inteligentes, cámaras de seguridad, climatización automatizada y más.',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/domotica-cerro-de-las-rosas',
    title: 'Domótica en Cerro de las Rosas, Córdoba | Casa Inteligente | Nubiq',
    description: 'Instalación de domótica en Cerro de las Rosas, Córdoba. Casa inteligente: luces, clima, persianas, cámaras y cerraduras desde el celular. Asesoramiento sin compromiso.',
    h1: 'Domótica en Cerro de las Rosas',
    body: 'Instalación profesional de domótica en Cerro de las Rosas. Casas familiares con varios ambientes, jardín y pileta integrados en un solo sistema controlable.',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/domotica-villa-allende',
    title: 'Domótica en Villa Allende, Córdoba | Casa Inteligente | Nubiq',
    description: 'Instalación de domótica en Villa Allende, Córdoba. Casa inteligente: luces, clima, persianas, cámaras y cerraduras desde el celular. Asesoramiento sin compromiso.',
    h1: 'Domótica en Villa Allende',
    body: 'Domótica para casas en country y barrios cerrados de Villa Allende. Vigilancia inteligente, climatización eficiente, control de acceso y redes WiFi profesionales.',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/domotica-valle-escondido',
    title: 'Domótica en Valle Escondido, Córdoba | Casa Inteligente | Nubiq',
    description: 'Instalación de domótica en Valle Escondido, Córdoba. Casa inteligente: luces, clima, persianas, cámaras y cerraduras desde el celular. Asesoramiento sin compromiso.',
    h1: 'Domótica en Valle Escondido',
    body: 'Domótica premium en Valle Escondido con productos LifeSmart. Iluminación arquitectónica, climatización integrada, seguridad y audio multiambiente.',
    priority: 0.8,
    changefreq: 'monthly',
  },
];
