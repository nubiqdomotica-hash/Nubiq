# CLAUDE.md — Web de Nubiq Domótica

Documentación operativa de la web `nubiqdomotica.com.ar`.
Lectura obligada al inicio de cualquier sesión que toque esta carpeta.

## Lo más importante de la marca

- **Línea prioritaria hoy:** Nubiq Custom (premium a medida, casas en obra).
- **Mensaje madre:** *"Tu casa, a la altura de lo que imaginaste."*
- **Promesa:** Nubiq aumenta el valor percibido del hogar. La tecnología es el medio, no el fin.
- **NO usar como cara de marca:** "Home Assistant" (sí en blog técnico/SEO), "domótica para todos", "barato".
- **CTA:** "Pedí tu asesoramiento" (no "comprá").
- Docs fundacionales fuera del repo:
  - `C:\Users\LUCAS\Documents\Lucas\.agents\product-marketing.md` (3 líneas, personas, objeciones)
  - `C:\Users\LUCAS\Documents\Lucas\Nubiq-Marketing\kit-mensaje-custom.md` (kit de mensaje Custom)

## Stack

- **React 18** + **Vite 4** (SPA) — `src/main.jsx` monta `App.jsx` con BrowserRouter y HelmetProvider.
- **Tailwind 3** + **shadcn/ui** (Radix) — UI en `src/components/ui/`.
- **Framer Motion 10** — animaciones (`fadeUp`, containers staggered).
- **react-router-dom 6** — routing.
- **react-helmet-async** — meta tags por página (NO `react-helmet`, migrado en 2026-05).
- **react-hook-form + zod** — formularios.
- **Web3Forms** — envío de formulario de contacto (no hay backend propio).
- **lucide-react** — iconos.
- **Google Analytics 4** — ID `G-H7XBE62M4G`.

## Estructura de carpetas

```
Nubiq-clean/
├── index.html              # base con meta tags + Schema.org JSON-LD + GA
├── public/
│   ├── sitemap.xml         # AUTO-GENERADO en build (no editar a mano)
│   ├── robots.txt
│   └── brochure-nubiq.pdf
├── src/
│   ├── main.jsx            # entry con HelmetProvider
│   ├── App.jsx             # router con 11 rutas
│   ├── pages/              # una jsx por ruta + zonas/ para barrios
│   ├── components/         # Layout, Navbar, Footer, ContactForm, etc.
│   │   ├── ui/             # shadcn primitives
│   │   ├── nubiq-plus/     # secciones de la landing /nubiq-plus
│   │   └── icons/
│   ├── lib/utils.js        # cn() helper
│   └── index.css
├── tools/
│   ├── routes.mjs          # MANIFEST CENTRAL de rutas (fuente de verdad)
│   ├── generate-sitemap.mjs # lee routes.mjs y escribe public/sitemap.xml
│   ├── prerender-routes.mjs # lee routes.mjs y escribe dist/<ruta>/index.html
│   ├── generate-llms.js    # genera llms.txt para IAs
│   └── build.mjs           # orquesta: sitemap → llms → vite → prerender
└── .github/workflows/
    └── deploy.yml          # build + deploy a GitHub Pages
```

## Cómo agregar una página nueva

1. Crear el componente en `src/pages/MiPagina.jsx` con `<Helmet>` + `<SeoBreadcrumb>`.
2. Agregar la `<Route>` en `src/App.jsx`.
3. **Agregar la entrada en `tools/routes.mjs`** con `path`, `title`, `description`, `h1`, `body`, `priority`, `changefreq`.
4. `npm run build` regenera sitemap y prerender automáticamente.

## Cómo correr en local

```bash
npm install         # primera vez
npm run dev         # http://localhost:3000
npm run build       # build de prod en dist/
npm run preview     # servir dist/ localmente
npm run lint        # eslint
```

## Deploy

- Push a `main` dispara `.github/workflows/deploy.yml` → GitHub Pages.
- Dominio `nubiqdomotica.com.ar` apunta a GH Pages.
- **Cada push a main = deploy en producción.** No hay branch de staging.

## SEO (cómo está hoy)

- **Schema.org JSON-LD** completo en `index.html`: Organization + WebSite + LocalBusiness con servicios, horarios, geo, áreas servidas.
- **react-helmet-async** por página → title, description, OG tags, canonical.
- **Prerender estático** por ruta → bots reciben HTML con meta tags correctos sin necesitar SSR.
- **Sitemap.xml** + **robots.txt** (permisos a Googlebot, Bingbot, GPTBot, ClaudeBot, PerplexityBot).
- **Geo meta tags** Córdoba en `index.html`.
- **`<noscript>`** con contenido específico por ruta (también vía prerender).

## Convenciones

- Componentes en PascalCase, archivos en PascalCase también.
- Animaciones: usar variants `fadeUp` y `containerVariants` ya definidos en cada página.
- Tono y copy: seguir el kit Custom para la línea Custom (mayoría del sitio).
- Imágenes: priorizar las propias en `public/`. Las de Unsplash son temporales — reemplazar cuando haya fotos reales de obras.

## Notas técnicas

- El build NO falla si el prerender falla (es opcional).
- `vite.config.js` tiene varios plugins de Hostinger Horizons (visual editor, edit mode) que solo corren en dev.
- Bundle JS ~ 518KB sin gzip / 163KB gzipped. Optimizable con code-splitting si crece.
- **No usar Supabase** — fue removido en 2026-05 (era código muerto con anon key expuesta).
