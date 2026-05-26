// Genera un HTML estático por cada ruta SPA, con meta tags correctos.
// Esto resuelve el problema de SPA + SEO sin requerir SSR ni puppeteer.
// Cada bot/crawler/social pide /servicios y recibe un HTML con sus propios
// title/description/og:* + el bundle JS que rehidrata la app normalmente.
//
// Al implementarse como copia del index.html en dist/<ruta>/index.html,
// Hostinger sirve cada ruta como archivo estático.
//
// Las rutas vienen del manifest compartido tools/routes.mjs

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { routes, BASE_URL } from './routes.mjs';

const DIST = path.resolve(process.cwd(), 'dist');

function customizeHtml(baseHtml, route) {
  // La ruta "/" ya existe como dist/index.html base, no se sobrescribe acá.
  let html = baseHtml;
  const url = BASE_URL + route.path;

  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(route.title)}</title>`);

  html = html.replace(
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeHtml(route.description)}">`
  );

  html = html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${url}" />`
  );

  html = html.replace(
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapeHtml(route.title)}" />`
  );

  html = html.replace(
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapeHtml(route.description)}" />`
  );

  html = html.replace(
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${url}" />`
  );

  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`
  );

  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`
  );

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
    if (route.path === '/') continue;
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
  process.exit(0);
});
