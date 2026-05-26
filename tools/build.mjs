// Build orchestrator: cross-shell (cmd, bash, PowerShell)
// Pasos:
//  1. generate-llms (no bloqueante si falla)
//  2. vite build
//  3. prerender de rutas estáticas

import { spawn } from 'node:child_process';

function run(commandLine, { ignoreError = false } = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(commandLine, { stdio: 'inherit', shell: true });
    child.on('close', (code) => {
      if (code !== 0 && !ignoreError) {
        reject(new Error(`"${commandLine}" exited with code ${code}`));
      } else {
        resolve(code);
      }
    });
  });
}

async function main() {
  await run('node tools/generate-sitemap.mjs');
  await run('node tools/generate-llms.js', { ignoreError: true });
  await run('vite build');
  await run('node tools/prerender-routes.mjs');
}

main().catch((err) => {
  console.error('[build] error:', err.message);
  process.exit(1);
});
