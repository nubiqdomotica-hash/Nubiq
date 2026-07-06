// Notifica a IndexNow (Bing, Yandex, Seznam, Naver — NO Google) que las URLs
// del sitio cambiaron, para acelerar la re-indexacion. Se corre en el workflow
// despues de cada deploy. Nunca rompe el deploy: si el ping falla, avisa y sale 0.
//
// Fuente de verdad de las URLs: tools/routes.mjs (mismas URLs canonicas que el
// sitemap, con barra final). Correr con --dry-run para ver el payload sin enviar.

import { routes, BASE_URL } from './routes.mjs';

// La clave IndexNow NO es secreta: se publica en public/<KEY>.txt para que los
// buscadores verifiquen que somos duenos del dominio. Debe coincidir con el
// nombre de ese archivo.
const KEY = '18cf80bd1e36ac26cd2f284b02788966';

const host = new URL(BASE_URL).host;
const keyLocation = `${BASE_URL}/${KEY}.txt`;
const urlList = routes.map((r) => `${BASE_URL}${r.path === '/' ? '/' : r.path + '/'}`);

const payload = { host, key: KEY, keyLocation, urlList };
const dryRun = process.argv.includes('--dry-run');

console.log(`[indexnow] host=${host}  urls=${urlList.length}  keyLocation=${keyLocation}`);
for (const u of urlList) console.log('  -', u);

if (dryRun) {
  console.log('[indexnow] --dry-run: no se envia nada. Payload:');
  console.log(JSON.stringify(payload, null, 2));
  process.exit(0);
}

try {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });
  const body = await res.text().catch(() => '');
  console.log(`[indexnow] respuesta HTTP ${res.status} ${res.statusText} ${body ? '- ' + body : ''}`);
  // 200 = aceptado; 202 = aceptado, verificacion de clave pendiente. Ambos OK.
  if (res.status !== 200 && res.status !== 202) {
    console.warn(`[indexnow] AVISO: status inesperado ${res.status} (no rompe el deploy).`);
  }
} catch (err) {
  console.warn('[indexnow] AVISO: fallo el ping (no rompe el deploy):', err.message);
}

// Siempre salir 0: el ping es un extra, nunca debe tumbar el deploy.
process.exit(0);
