// Genera public/sitemap.xml automaticamente desde el manifest de rutas.
// Se corre antes del vite build para que el sitemap quede al dia.

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { routes, BASE_URL } from './routes.mjs';

const SITEMAP_PATH = path.resolve(process.cwd(), 'public', 'sitemap.xml');

function formatDate(d = new Date()) {
  return d.toISOString().split('T')[0];
}

function buildSitemap() {
  const today = formatDate();
  const urls = routes
    .map((r) => {
      const loc = `${BASE_URL}${r.path === '/' ? '/' : r.path + '/'}`;
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq || 'monthly'}</changefreq>
    <priority>${r.priority?.toFixed(1) || '0.5'}</priority>
  </url>`;
    })
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

async function main() {
  const xml = buildSitemap();
  await fs.writeFile(SITEMAP_PATH, xml, 'utf8');
  console.log(`[sitemap] OK - generado con ${routes.length} URLs en ${SITEMAP_PATH}`);
}

main().catch((err) => {
  console.error('[sitemap] error:', err);
  process.exit(1);
});
