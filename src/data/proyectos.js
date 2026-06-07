// ============================================================================
//  PROYECTOS DE NUBIQ — fuente de datos de la página /proyectos
// ============================================================================
//
//  Cada proyecto que querés mostrar es un objeto { ... } dentro de la lista de
//  abajo. Para sumar uno nuevo:
//
//    1. Copiá el bloque de EJEMPLO (está más abajo, comentado con //).
//    2. Pegalo dentro de los corchetes [ ... ], sacale las // del principio
//       de cada línea y completá los datos.
//    3. Poné las fotos y videos del proyecto en la carpeta:
//          public/proyectos/<carpeta-del-proyecto>/
//       y referencialos como '/proyectos/<carpeta>/archivo.jpg'.
//
//  (Si no sabés hacer esto, mandame las fotos, los videos y una descripción
//   y yo lo cargo. — Claude)
//
//  ── Campos de cada proyecto ──────────────────────────────────────────────
//   slug        Identificador corto sin espacios (ej: 'casa-villa-allende').
//   titulo      Nombre que se ve en la tarjeta.
//   ubicacion   Barrio / ciudad (ej: 'Villa Allende, Córdoba'). Opcional.
//   estado      'terminado'     -> pestaña "Proyectos terminados"
//               'en-ejecucion'  -> pestaña "Proyectos en ejecución"
//   fecha       Fecha en formato AÑO-MES-DÍA (ej: '2026-06-07'). Se usa para
//               ORDENAR los proyectos (del más nuevo al más viejo) y se muestra
//               lindo en la tarjeta. En "terminado" es la fecha de finalización
//               (se muestra "Finalizado: ..."); en "en-ejecucion" es la fecha
//               de inicio (se muestra "Inicio: ...").
//   descripcion 1-3 oraciones de qué se hizo en el proyecto. Opcional.
//   categorias  Lista de etiquetas de qué se domotizó, se muestran como chips
//               en la ventana grande. Ej: ['Iluminación', 'Climatización',
//               'Seguridad', 'Cortinas']. Opcional.
//   testimonio  Video del dueño hablando de la obra (se muestra destacado).
//               Ej: { src: '/proyectos/casa/testimonio.mp4',
//                     poster: '/proyectos/casa/testimonio.jpg' }. Opcional.
//   media       Lista de fotos y videos. Cada item:
//                 { tipo: 'imagen', src: '/proyectos/casa/foto.jpg', alt: 'descripción' }
//                 { tipo: 'video',  src: '/proyectos/casa/video.mp4',
//                   poster: '/proyectos/casa/portada.jpg', alt: 'descripción' }
//               La primera IMAGEN de la lista se usa como portada de la tarjeta.
//               Si está vacío ([]), la tarjeta muestra un recuadro gris hasta
//               que carguemos el material.
// ============================================================================

export const proyectos = [
  // ───────────────────────────── TERMINADOS ────────────────────────────────
  {
    slug: 'casa-foa-2026-pocito',
    titulo: 'Casa FOA 2026 — Edición Pocito',
    estado: 'terminado',
    fecha: '2026-06-07',
    media: [],
  },
  {
    slug: 'hogar-el-bosque-2',
    titulo: 'Hogar — El Bosque 2',
    estado: 'terminado',
    fecha: '2026-05-07',
    media: [],
  },
  {
    slug: 'fundacion-va',
    titulo: 'Fundación VA',
    estado: 'terminado',
    fecha: '2026-02-11',
    media: [],
  },
  {
    slug: 'hogar-el-terron-2',
    titulo: 'Hogar — El Terrón 2',
    estado: 'terminado',
    fecha: '2026-02-03',
    media: [],
  },
  {
    slug: 'hogar-el-bosque-1',
    titulo: 'Hogar — El Bosque 1',
    estado: 'terminado',
    fecha: '2025-12-14',
    media: [],
  },
  {
    slug: 'casa-san-isidro-1',
    titulo: 'Casa San Isidro 1',
    estado: 'terminado',
    fecha: '2025-10-10',
    media: [],
  },
  {
    slug: 'hogar-el-terron-1',
    titulo: 'Hogar — El Terrón 1',
    estado: 'terminado',
    fecha: '2025-08-30',
    media: [],
  },
  {
    slug: 'oficinas-bertero',
    titulo: 'Oficinas Inmobiliarias Bertero',
    estado: 'terminado',
    fecha: '2025-08-22',
    media: [],
  },

  // ──────────────────────────── EN EJECUCIÓN ────────────────────────────────
  //  (la fecha es la de INICIO de la obra)
  {
    slug: 'hogar-q2-2',
    titulo: 'Hogar — Q2 2',
    estado: 'en-ejecucion',
    fecha: '2026-05-17',
    media: [],
  },
  {
    slug: 'hogar-las-delicias-1',
    titulo: 'Hogar — Las Delicias 1',
    estado: 'en-ejecucion',
    fecha: '2026-04-10',
    media: [],
  },
  {
    slug: 'housing-la-estancia-de-la-villa',
    titulo: 'Desarrollo — Housing La Estancia de la Villa',
    estado: 'en-ejecucion',
    fecha: '2026-03-24',
    media: [],
  },
  {
    slug: 'colina-de-manantiales',
    titulo: 'Desarrollo — Colina de Manantiales',
    estado: 'en-ejecucion',
    fecha: '2026-03-20',
    media: [],
  },
  {
    slug: 'hogar-q2-1',
    titulo: 'Hogar — Q2 1',
    estado: 'en-ejecucion',
    fecha: '2026-03-02',
    media: [],
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  EJEMPLO — copialo, sacá las // del principio de cada línea y reemplazá
  //  los datos por los del proyecto real (con sus fotos y videos cargados).
  // ─────────────────────────────────────────────────────────────────────────
  // {
  //   slug: 'casa-villa-allende',
  //   titulo: 'Casa en Villa Allende',
  //   ubicacion: 'Villa Allende, Córdoba',
  //   estado: 'terminado',
  //   fecha: '2026-03-15',
  //   descripcion:
  //     'Domótica integral en obra nueva: iluminación, climatización, ' +
  //     'cortinas y seguridad integradas en un solo sistema.',
  //   categorias: ['Iluminación', 'Climatización', 'Cortinas', 'Seguridad'],
  //   testimonio: { src: '/proyectos/casa-villa-allende/testimonio.mp4', poster: '/proyectos/casa-villa-allende/testimonio.jpg' },
  //   media: [
  //     { tipo: 'imagen', src: '/proyectos/casa-villa-allende/living.jpg', alt: 'Living con iluminación inteligente' },
  //     { tipo: 'imagen', src: '/proyectos/casa-villa-allende/cocina.jpg', alt: 'Cocina automatizada' },
  //     { tipo: 'video',  src: '/proyectos/casa-villa-allende/recorrido.mp4', poster: '/proyectos/casa-villa-allende/living.jpg', alt: 'Recorrido del proyecto' },
  //   ],
  // },
];

// Helpers usados por la página (no hace falta tocar esto).
// Ordenan del más reciente al más antiguo según la fecha.
const porFechaDesc = (a, b) => (b.fecha || '').localeCompare(a.fecha || '');

export const proyectosTerminados = proyectos
  .filter((p) => p.estado === 'terminado')
  .sort(porFechaDesc);

export const proyectosEnEjecucion = proyectos
  .filter((p) => p.estado === 'en-ejecucion')
  .sort(porFechaDesc);
