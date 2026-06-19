#!/usr/bin/env node
// Genera public/llms.txt a partir del manifest central de rutas (tools/routes.mjs).
// Formato llms.txt (https://llmstxt.org): H1 + resumen en blockquote + secciones con links.
// Se corre antes del vite build; vite copia public/llms.txt a dist/llms.txt.
//
// Antes este archivo parseaba App.jsx/Helmet con regex y podia fallar en silencio
// (el build lo corre con ignoreError), por eso llms.txt no llegaba a produccion.
// Ahora lee routes.mjs, que ya tiene title/description/h1/body de cada ruta.

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { routes, BASE_URL } from './routes.mjs';

const OUTPUT = path.resolve(process.cwd(), 'public', 'llms.txt');

function withSlash(p) {
  return p === '/' ? '/' : `${p}/`;
}

function buildLlmsTxt() {
  const lines = [];
  lines.push('# Nubiq Domótica');
  lines.push('');
  lines.push(
    '> Empresa de domótica premium a medida en Córdoba, Argentina. Diseñamos, ' +
      'instalamos y acompañamos casas inteligentes de alto nivel: iluminación, ' +
      'climatización, persianas, seguridad, cámaras, riego y audio integrados en un ' +
      'solo sistema y con un solo responsable, durante la obra y los años que siguen.'
  );
  lines.push('');
  lines.push(
    'Nubiq trabaja con dueños de casas de alto nivel (obra nueva o remodelación) y ' +
      'con arquitectos y desarrollistas (línea Nubiq Partners). Mensaje madre: ' +
      '"Tu casa, a la altura de lo que imaginaste."'
  );
  lines.push('');
  lines.push(
    'Contacto: WhatsApp +54 351 232 6814 · email contacto@nubiqdomotica.com.ar. ' +
      'Zonas de servicio: Córdoba Capital, Nueva Córdoba, Cerro de las Rosas, ' +
      'Villa Allende y Valle Escondido. Horario: lunes a viernes 9 a 18, sábados 9 a 14.'
  );
  lines.push('');
  lines.push('## Páginas');
  for (const r of routes) {
    lines.push(`- [${r.title}](${BASE_URL}${withSlash(r.path)}): ${r.description}`);
  }
  lines.push('');

  return lines.join('\n');
}

async function main() {
  const content = buildLlmsTxt();
  await fs.mkdir(path.dirname(OUTPUT), { recursive: true });
  await fs.writeFile(OUTPUT, content, 'utf8');
  console.log(`[llms] OK - generado con ${routes.length} URLs en ${OUTPUT}`);
}

main().catch((err) => {
  console.error('[llms] error:', err.message);
  process.exit(1);
});
