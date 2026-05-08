// Genera un HTML estático por cada ruta SPA, con meta tags correctos.
// Esto resuelve el problema de SPA + SEO sin requerir SSR ni puppeteer.
// Cada bot/crawler/social pide /servicios y recibe un HTML con sus propios
// title/description/og:* + el bundle JS que rehidrata la app normalmente.
//
// Al implementarse como copia del index.html en dist/<ruta>/index.html,
// Hostinger sirve cada ruta como archivo estático.

import { promises as fs } from 'node:fs';
import path from 'node:path';

const DIST = path.resolve(process.cwd(), 'dist');
const BASE_URL = 'https://nubiqdomotica.com.ar';
const LOGO_URL = 'https://horizons-cdn.hostinger.com/399f02cf-d238-442b-8230-bd06d51cc905/9e5b49882bef04eec3f5e8e3e52180ac.png';

const routes = [
  {
    path: '/servicios',
    title: 'Servicios de Domótica en Córdoba | Iluminación, Clima, Seguridad | Nubiq',
    description: 'Iluminación inteligente, climatización, persianas automatizadas, cerraduras, cámaras, riego y audio. Instalación profesional de domótica en Córdoba, Argentina.',
    h1: 'Servicios de Domótica en Córdoba',
    body: 'Iluminación inteligente, climatización, persianas automatizadas, cerraduras y cámaras inteligentes, riego, audio multiambiente y redes WiFi profesionales. Instalación en Córdoba, Argentina.'
  },
  {
    path: '/nubiq-plus',
    title: 'Nubiq+ LifeSmart | Distribuidor Oficial Domótica Premium en Córdoba',
    description: 'Nubiq+ es la línea premium de domótica llave en mano con productos LifeSmart. Distribuidor oficial en Córdoba, Argentina.',
    h1: 'Nubiq+ con LifeSmart - Domótica Premium',
    body: 'Línea premium de domótica con productos LifeSmart. Distribuidor oficial en Córdoba. Llave en mano: escenas, rutinas y estética impecable.'
  },
  {
    path: '/que-es-domotica',
    title: '¿Qué es la Domótica? Guía Completa 2025 | Nubiq Argentina',
    description: 'Descubrí qué es la domótica, cómo funciona y cuáles son sus beneficios. Control por voz, ahorro energético, seguridad y más. Guía gratuita de Nubiq Córdoba.',
    h1: '¿Qué es la Domótica?',
    body: 'La domótica es la tecnología que permite automatizar luces, clima, persianas, cámaras y cerraduras de tu casa para controlarlas desde el celular o por voz. En Nubiq instalamos domótica sin obras en Córdoba, Argentina.'
  },
  {
    path: '/nosotros',
    title: 'Quiénes Somos | Nubiq Domótica Córdoba, Argentina',
    description: 'Somos Lucas y Franco, co-fundadores de Nubiq. Expertos en domótica residencial y comercial con Home Assistant en Córdoba, Argentina.',
    h1: 'Quiénes Somos - Nubiq Domótica',
    body: 'Lucas Carranza y Franco Oppido, co-fundadores de Nubiq Domótica en Córdoba. Especialistas en automatización del hogar con Home Assistant.'
  },
  {
    path: '/contacto',
    title: 'Contacto | Pedí tu Presupuesto de Domótica Gratis | Nubiq Córdoba',
    description: 'Contactanos por WhatsApp o email. Asesoramiento gratuito y sin compromiso. Instalación de domótica en hogares y oficinas en Córdoba, Argentina.',
    h1: 'Contacto - Nubiq Domótica Córdoba',
    body: 'WhatsApp +54 351 232 6814, email contacto@nubiqdomotica.com.ar. Lunes a Viernes 9 a 18, Sábados 9 a 14. Instalación de domótica en Córdoba, Argentina.'
  },
  {
    path: '/domotica-nueva-cordoba',
    title: 'Domótica en Nueva Córdoba | Casa Inteligente | Nubiq',
    description: 'Instalación de domótica en Nueva Córdoba, Córdoba. Casa inteligente sin obras: luces, clima, persianas, cámaras y cerraduras desde el celular. Asesoramiento gratuito.',
    h1: 'Domótica en Nueva Córdoba',
    body: 'Instalamos domótica en departamentos y casas de Nueva Córdoba sin obras ni roturas. Cerraduras inteligentes, cámaras de seguridad, climatización automatizada y más.'
  },
  {
    path: '/domotica-cerro-de-las-rosas',
    title: 'Domótica en Cerro de las Rosas, Córdoba | Casa Inteligente | Nubiq',
    description: 'Instalación de domótica en Cerro de las Rosas, Córdoba. Casa inteligente sin obras: luces, clima, persianas, cámaras y cerraduras desde el celular. Asesoramiento gratuito.',
    h1: 'Domótica en Cerro de las Rosas',
    body: 'Instalación profesional de domótica en Cerro de las Rosas. Casas familiares con varios ambientes, jardín y pileta integrados en un solo sistema controlable.'
  },
  {
    path: '/domotica-villa-allende',
    title: 'Domótica en Villa Allende, Córdoba | Casa Inteligente | Nubiq',
    description: 'Instalación de domótica en Villa Allende, Córdoba. Casa inteligente sin obras: luces, clima, persianas, cámaras y cerraduras desde el celular. Asesoramiento gratuito.',
    h1: 'Domótica en Villa Allende',
    body: 'Domótica para casas en country y barrios cerrados de Villa Allende. Vigilancia inteligente, climatización eficiente, control de acceso y redes WiFi profesionales.'
  },
  {
    path: '/domotica-valle-escondido',
    title: 'Domótica en Valle Escondido, Córdoba | Casa Inteligente | Nubiq',
    description: 'Instalación de domótica en Valle Escondido, Córdoba. Casa inteligente sin obras: luces, clima, persianas, cámaras y cerraduras desde el celular. Asesoramiento gratuito.',
    h1: 'Domótica en Valle Escondido',
    body: 'Domótica premium en Valle Escondido con productos LifeSmart. Iluminación arquitectónica, climatización integrada, seguridad y audio multiambiente.'
  }
];

function customizeHtml(baseHtml, route) {
  let html = baseHtml;
  const url = BASE_URL + route.path;

  // Reemplazar title
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(route.title)}</title>`);

  // Reemplazar meta description
  html = html.replace(
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeHtml(route.description)}">`
  );

  // Reemplazar canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${url}" />`
  );

  // Reemplazar og:title
  html = html.replace(
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapeHtml(route.title)}" />`
  );

  // Reemplazar og:description
  html = html.replace(
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapeHtml(route.description)}" />`
  );

  // Reemplazar og:url
  html = html.replace(
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${url}" />`
  );

  // Reemplazar twitter:title
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`
  );

  // Reemplazar twitter:description
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`
  );

  // Reemplazar contenido del <noscript> con info específica de la ruta
  const noscriptContent = `<noscript><h1>${escapeHtml(route.h1)}</h1><p>${escapeHtml(route.body)}</p><p>Contactanos por WhatsApp al +54 351 232 6814 o por email a contacto@nubiqdomotica.com.ar.</p></noscript>`;
  html = html.replace(/<noscript>[\s\S]*?<\/noscript>/, noscriptContent);

  return html;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

async function main() {
  let baseHtml;
  try {
    baseHtml = await fs.readFile(path.join(DIST, 'index.html'), 'utf8');
  } catch (err) {
    console.error('[prerender] No se encontró dist/index.html. Asegurate de correr el build primero.');
    console.error(err.message);
    process.exit(0);
  }

  let generated = 0;
  for (const route of routes) {
    const segment = route.path.replace(/^\//, '');
    const dir = path.join(DIST, segment);
    await fs.mkdir(dir, { recursive: true });
    const html = customizeHtml(baseHtml, route);
    await fs.writeFile(path.join(dir, 'index.html'), html, 'utf8');
    generated++;
  }
  console.log(`[prerender] OK - generadas ${generated} rutas estáticas en /dist`);
}

main().catch((err) => {
  console.error('[prerender] error:', err);
  // No falla el build si hay un error en prerender
  process.exit(0);
});
