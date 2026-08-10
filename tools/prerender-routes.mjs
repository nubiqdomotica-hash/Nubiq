// Prerender REAL por ruta: abre cada ruta en un navegador headless (puppeteer),
// espera a que React pinte, normaliza las animaciones (opacity/transform) y
// vuelca el HTML renderizado del <div id="root"> dentro del HTML de cada ruta.
// Ademas copia al <head> los bloques JSON-LD que genera react-helmet-async
// (BreadcrumbList, FAQPage, LocalBusiness por barrio): sin esto solo existen
// despues de ejecutar JS, asi que Bing y los bots de IA nunca los ven.
// Los meta tags por ruta se siguen resolviendo con string-replace (probado y
// deterministico); el navegador aporta el CUERPO renderizado y el schema.
//
// RED DE SEGURIDAD: si el navegador no arranca o una ruta falla, se cae al
// metodo anterior (root vacio, mismos meta tags) y el build sigue en 0. Nunca
// rompe el deploy — en el peor caso queda como estaba antes de esta tanda.
//
// Las rutas vienen del manifest compartido tools/routes.mjs

import { promises as fs } from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { routes, BASE_URL } from './routes.mjs';

const DIST = path.resolve(process.cwd(), 'dist');

// ── Meta tags por ruta (identico al metodo anterior) ────────────────────────
function customizeHtml(baseHtml, route) {
  let html = baseHtml;
  // GitHub Pages sirve cada ruta con barra final (301 de /servicios a /servicios/).
  // El canonical y og:url deben apuntar a la URL final (con barra).
  const url = BASE_URL + route.path + (route.path === '/' ? '' : '/');

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

// Inyecta el HTML renderizado dentro del <div id="root"></div> vacio.
// Se usa una funcion como reemplazo para que los "$" del contenido no se
// interpreten como patrones especiales de String.replace.
function injectBody(html, innerHtml) {
  return html.replace(/<div id="root">\s*<\/div>/, () => `<div id="root">${innerHtml}</div>`);
}

// Inyecta antes de </head> los bloques JSON-LD que Helmet genero en el navegador.
// Se conserva el atributo data-rh de cada bloque: al montar React en el cliente,
// Helmet reconoce esos tags como propios y los reemplaza en vez de duplicarlos.
function injectJsonLd(html, blocks) {
  if (!blocks || blocks.length === 0) return html;
  const snippet = blocks.map((b) => `\t\t${b}\n`).join('');
  return html.replace(/<\/head>/, () => `\n${snippet}\t</head>`);
}

// ── Mini-servidor estatico del dist/ con fallback SPA (sin dependencias) ─────
const CONTENT_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.woff2': 'font/woff2',
  '.pdf': 'application/pdf',
};

function startServer(distDir) {
  return new Promise((resolve) => {
    const server = http.createServer(async (req, res) => {
      try {
        const urlPath = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
        let filePath = path.join(distDir, urlPath);
        let data = null;
        try {
          const stat = await fs.stat(filePath);
          if (stat.isDirectory()) filePath = path.join(filePath, 'index.html');
          data = await fs.readFile(filePath);
        } catch {
          // Fallback SPA: cualquier ruta desconocida sirve el index.html base.
          filePath = path.join(distDir, 'index.html');
          data = await fs.readFile(filePath);
        }
        res.setHeader('Content-Type', CONTENT_TYPES[path.extname(filePath)] || 'application/octet-stream');
        res.end(data);
      } catch (err) {
        res.statusCode = 500;
        res.end('prerender server error');
      }
    });
    server.listen(0, '127.0.0.1', () => resolve(server));
  });
}

// ── Render de una ruta en el navegador ──────────────────────────────────────
const BLOCK_RE = /googletagmanager\.com|google-analytics\.com|analytics\.google\.com|fonts\.googleapis\.com|fonts\.gstatic\.com/;

async function renderRoute(browser, url) {
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: 1280, height: 1800 });
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      // Bloquear Analytics (evita visitas falsas en cada deploy) y fuentes
      // externas (build autonomo y rapido). El resto (assets locales) sigue.
      if (BLOCK_RE.test(req.url())) req.abort();
      else req.continue();
    });

    await page.goto(url, { waitUntil: 'networkidle0', timeout: 45000 });
    // Esperar a que el chunk lazy de la pagina haya pintado contenido real.
    await page.waitForFunction(
      () => {
        const r = document.getElementById('root');
        return r && (r.innerText || '').trim().length > 200;
      },
      { timeout: 20000 }
    );
    // Dar tiempo a que framer-motion asiente el primer frame.
    await new Promise((r) => setTimeout(r, 1000));

    // Normalizar animaciones: forzar visible lo que quedo en opacity:0 /
    // transform (whileInView que no se disparo por no estar en viewport).
    // Solo toca estilos inline; no agrega !important ni ensucia el HTML.
    await page.evaluate(() => {
      const root = document.getElementById('root');
      if (!root) return;
      root.querySelectorAll('*').forEach((el) => {
        const s = el.style;
        if (!s) return;
        if (s.opacity !== '' && parseFloat(s.opacity) < 1) s.opacity = '1';
        if (s.transform && s.transform !== 'none') s.transform = 'none';
        if (s.visibility === 'hidden') s.visibility = 'visible';
      });
    });

    const inner = await page.$eval('#root', (el) => el.innerHTML);
    if (!inner || inner.trim().length === 0) return null;

    // Bloques JSON-LD puestos por react-helmet-async. Se identifican por
    // data-rh="true"; el JSON-LD base de index.html no lo lleva, asi que
    // no se recaptura ni se duplica.
    const jsonLd = await page.$$eval(
      'head script[type="application/ld+json"][data-rh="true"]',
      (nodes) => nodes.map((n) => n.outerHTML)
    );

    return { inner, jsonLd };
  } finally {
    await page.close().catch(() => {});
  }
}

async function main() {
  let baseHtml;
  try {
    baseHtml = await fs.readFile(path.join(DIST, 'index.html'), 'utf8');
  } catch (err) {
    console.error('[prerender] No se encontro dist/index.html. Corre el build primero.');
    console.error(err.message);
    process.exit(0);
  }

  // HTML por ruta con meta tags resueltos (root mantiene su meta base). Esto es
  // tambien el fallback si el navegador no rinde una ruta.
  const routeHtml = new Map();
  for (const route of routes) {
    routeHtml.set(route.path, route.path === '/' ? baseHtml : customizeHtml(baseHtml, route));
  }

  // Intentar el render real. Cualquier fallo cae al fallback (root vacio).
  const rendered = new Map();
  let server;
  let browser;
  try {
    server = await startServer(DIST);
    const port = server.address().port;
    const { default: puppeteer } = await import('puppeteer');
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });
    for (const route of routes) {
      const url = `http://127.0.0.1:${port}${route.path}${route.path === '/' ? '' : '/'}`;
      try {
        const result = await renderRoute(browser, url);
        if (result) rendered.set(route.path, result);
        else console.warn(`[prerender] ${route.path}: sin contenido renderizado, uso fallback`);
      } catch (err) {
        console.warn(`[prerender] ${route.path}: fallo el render (${err.message}), uso fallback`);
      }
    }
  } catch (err) {
    console.warn(`[prerender] navegador no disponible (${err.message}). Uso fallback en todas las rutas.`);
  } finally {
    if (browser) await browser.close().catch(() => {});
    if (server) server.close();
  }

  // Escribir todas las rutas (render real donde se pudo, fallback donde no).
  let full = 0;
  let empty = 0;
  let schemaBlocks = 0;
  let schemaRoutes = 0;
  for (const route of routes) {
    let html = routeHtml.get(route.path);
    const result = rendered.get(route.path);
    if (result) {
      html = injectBody(html, result.inner);
      html = injectJsonLd(html, result.jsonLd);
      full++;
      if (result.jsonLd.length > 0) {
        schemaBlocks += result.jsonLd.length;
        schemaRoutes++;
        console.log(`[prerender] ${route.path}: ${result.jsonLd.length} bloque(s) JSON-LD al <head>`);
      }
    } else {
      empty++;
    }
    if (route.path === '/') {
      await fs.writeFile(path.join(DIST, 'index.html'), html, 'utf8');
    } else {
      const dir = path.join(DIST, route.path.replace(/^\//, ''));
      await fs.mkdir(dir, { recursive: true });
      await fs.writeFile(path.join(dir, 'index.html'), html, 'utf8');
    }
  }

  console.log(`[prerender] OK - ${full} rutas con cuerpo renderizado, ${empty} con fallback (de ${routes.length}).`);
  console.log(`[prerender] schema - ${schemaBlocks} bloques JSON-LD inyectados en ${schemaRoutes} rutas.`);
}

main().catch((err) => {
  console.error('[prerender] error:', err);
  process.exit(0);
});
