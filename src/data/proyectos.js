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
    descripcion:
      'Nuestro espacio en Casa FOA 2026, Edición Pocito: domótica premium ' +
      'puesta en escena en una de las muestras de arquitectura y diseño más ' +
      'importantes del país.',
    media: [
      { tipo: 'imagen', src: '/proyectos/casa-foa-2026-pocito/foto-1.jpg', alt: 'Espacio de Nubiq en Casa FOA 2026' },
      { tipo: 'video', src: '/proyectos/casa-foa-2026-pocito/testimonio-gaby-kanter.mp4', poster: '/proyectos/casa-foa-2026-pocito/testimonio-gaby-kanter-poster.jpg', alt: 'Entrevista a Gaby Kanter en Casa FOA' },
      { tipo: 'video', src: '/proyectos/casa-foa-2026-pocito/proceso-de-obra.mp4', poster: '/proyectos/casa-foa-2026-pocito/proceso-de-obra-poster.jpg', alt: 'Proceso de obra del espacio en Casa FOA' },
    ],
  },
  {
    slug: 'hogar-el-bosque-2',
    titulo: 'Hogar — El Bosque 2',
    ubicacion: 'El Bosque, Córdoba',
    estado: 'terminado',
    fecha: '2026-05-07',
    descripcion:
      'En esta casa de El Bosque, la iluminación interior y exterior y los ' +
      'sensores inteligentes funcionan sobre un software de domótica local: ' +
      'rápido, privado y siempre disponible, incluso sin internet. Todo se ' +
      'maneja por voz, desde cualquier ambiente.',
    categorias: ['Iluminación', 'Sensores', 'Domótica local', 'Control por voz'],
    media: [
      { tipo: 'imagen', src: '/proyectos/hogar-el-bosque-2/portada.jpg', alt: 'Frente de la casa de El Bosque 2' },
    ],
  },
  {
    slug: 'fundacion-margonari-glavich',
    titulo: 'Fundación Margonari Glavich',
    estado: 'terminado',
    fecha: '2026-02-11',
    media: [],
  },
  {
    slug: 'hogar-el-terron-2',
    titulo: 'Hogar — El Terrón 2',
    ubicacion: 'El Terrón, Córdoba',
    estado: 'terminado',
    fecha: '2026-02-03',
    descripcion:
      'Sonido de alta fidelidad Sonos integrado a la casa de El Terrón. La ' +
      'música suena en cada ambiente con la calidad que se merece, y se ' +
      'controla con un solo gesto.',
    categorias: ['Sonido HiFi Sonos'],
    media: [
      { tipo: 'video', src: '/proyectos/hogar-el-terron-2/clip-1.mp4', poster: '/proyectos/hogar-el-terron-2/clip-1-poster.jpg', alt: 'Detalle de la casa de El Terrón 2' },
      { tipo: 'video', src: '/proyectos/hogar-el-terron-2/clip-2.mp4', poster: '/proyectos/hogar-el-terron-2/clip-2-poster.jpg', alt: 'Detalle de la casa de El Terrón 2' },
    ],
  },
  {
    slug: 'hogar-el-bosque-1',
    titulo: 'Hogar — El Bosque 1',
    ubicacion: 'El Bosque, Córdoba',
    estado: 'terminado',
    fecha: '2025-12-14',
    descripcion:
      'Una integración completa en El Bosque: iluminación inteligente en todo ' +
      'el hogar, control de la caldera, piscina, riego que se anticipa al ' +
      'clima y cámaras de videovigilancia, todo desde una pantalla de control ' +
      'o por voz. Una red WiFi mesh cubre cada metro de la casa para que nada ' +
      'se interrumpa.',
    categorias: ['Iluminación', 'Caldera', 'Piscina', 'Riego inteligente', 'Cámaras', 'Pantalla de control', 'Control por voz', 'WiFi mesh'],
    media: [
      { tipo: 'imagen', src: '/proyectos/hogar-el-bosque-1/portada.jpg', alt: 'Frente de la casa de El Bosque 1' },
      { tipo: 'video', src: '/proyectos/hogar-el-bosque-1/recorrido.mp4', poster: '/proyectos/hogar-el-bosque-1/recorrido-poster.jpg', alt: 'Recorrido por la casa de El Bosque' },
    ],
  },
  {
    slug: 'hogar-san-isidro-1',
    titulo: 'Hogar — San Isidro 1',
    ubicacion: 'San Isidro, Córdoba',
    estado: 'terminado',
    fecha: '2025-10-10',
    descripcion:
      'Sistema de videovigilancia inteligente con seis cámaras en San Isidro. ' +
      'Monitoreo claro y confiable de toda la propiedad, accesible desde el ' +
      'celular esté donde esté la familia.',
    categorias: ['Videovigilancia', '6 cámaras'],
    media: [],
  },
  {
    slug: 'hogar-el-terron-1',
    titulo: 'Hogar — El Terrón 1',
    ubicacion: 'El Terrón, Córdoba',
    estado: 'terminado',
    fecha: '2025-08-30',
    descripcion:
      'Casa en El Terrón con iluminación, control de la caldera y de la ' +
      'piscina, cerradura digital y cámaras de videovigilancia, todo a un ' +
      'comando de voz o desde el celular. Confort y seguridad que se manejan ' +
      'sin pensarlo.',
    categorias: ['Iluminación', 'Caldera', 'Piscina', 'Cerradura digital', 'Cámaras', 'Control por voz'],
    media: [
      { tipo: 'video', src: '/proyectos/hogar-el-terron-1/trailer.mp4', poster: '/proyectos/hogar-el-terron-1/trailer-poster.jpg', alt: 'Trailer de la casa de El Terrón' },
      { tipo: 'video', src: '/proyectos/hogar-el-terron-1/recorrido.mp4', poster: '/proyectos/hogar-el-terron-1/recorrido-poster.jpg', alt: 'Recorrido por la casa de El Terrón' },
    ],
  },
  {
    slug: 'oficinas-inmobiliaria-bertero',
    titulo: 'Oficinas — Inmobiliaria Bertero',
    estado: 'terminado',
    fecha: '2025-08-22',
    descripcion:
      'Las oficinas de la Inmobiliaria Bertero suman iluminación inteligente, ' +
      'cerradura digital y cámaras de videovigilancia: un espacio de trabajo ' +
      'más seguro, cómodo y eficiente, sin complicaciones.',
    categorias: ['Iluminación', 'Cerradura digital', 'Cámaras'],
    media: [
      { tipo: 'video', src: '/proyectos/oficinas-inmobiliaria-bertero/recorrido.mp4', poster: '/proyectos/oficinas-inmobiliaria-bertero/recorrido-poster.jpg', alt: 'Recorrido por las oficinas de Inmobiliaria Bertero' },
    ],
  },
  {
    slug: 'hogar-jesus-maria',
    titulo: 'Hogar — Jesús María',
    ubicacion: 'Jesús María, Córdoba',
    estado: 'terminado',
    fecha: '2026-05-22',
    descripcion:
      'Una casa en Jesús María integrada de punta a punta. La iluminación, la ' +
      'climatización, los portones y la piscina responden desde una pantalla ' +
      'táctil o por voz, mientras el video portero y las cámaras de ' +
      'videovigilancia cuidan cada acceso. Todo en un solo sistema, simple de ' +
      'usar y pensado para el día a día.',
    categorias: ['Iluminación', 'Climatización', 'Piscina', 'Portones', 'Video portero', 'Cámaras', 'Pantalla táctil', 'Control por voz'],
    testimonio: { src: '/proyectos/hogar-jesus-maria/testimonio.mp4', poster: '/proyectos/hogar-jesus-maria/testimonio-poster.jpg' },
    media: [
      { tipo: 'imagen', src: '/proyectos/hogar-jesus-maria/portada.jpg', alt: 'Frente de la casa de Jesús María' },
      { tipo: 'video', src: '/proyectos/hogar-jesus-maria/demo.mp4', poster: '/proyectos/hogar-jesus-maria/demo-poster.jpg', alt: 'Recorrido por la casa de Jesús María' },
    ],
  },

  // ──────────────────────────── EN EJECUCIÓN ────────────────────────────────
  //  (la fecha es la de INICIO de la obra)
  {
    slug: 'hogar-q2-2',
    titulo: 'Hogar — Q2 2',
    estado: 'en-ejecucion',
    fecha: '2026-05-17',
    descripcion:
      'Otra casa en Q2, también en plena integración: iluminación inteligente, ' +
      'control de climatización y control por voz sobre una central domótica. ' +
      'Te mostramos cómo avanza la obra.',
    categorias: ['Iluminación', 'Climatización', 'Control por voz', 'Central domótica'],
    media: [
      { tipo: 'video', src: '/proyectos/hogar-q2-2/recorrido.mp4', poster: '/proyectos/hogar-q2-2/recorrido-poster.jpg', alt: 'Recorrido de obra en Q2' },
    ],
  },
  {
    slug: 'hogar-las-delicias-1',
    titulo: 'Hogar — Las Delicias 1',
    ubicacion: 'Las Delicias, Córdoba',
    estado: 'en-ejecucion',
    fecha: '2026-04-10',
    descripcion:
      'Nuestro proyecto más completo, en Las Delicias. Iluminación, ' +
      'climatización, cortinas, riego, piscina, portones, cerraduras digitales ' +
      'y cámaras de videovigilancia conviven en una central domótica que se ' +
      'maneja por voz. Suma sonido HiFi Sonos, un sistema de sonido ' +
      'cinematográfico, red WiFi profesional en toda la superficie y una UPS ' +
      'que mantiene todo funcionando ante un corte de luz. Una casa pensada ' +
      'sin concesiones.',
    categorias: ['Iluminación', 'Climatización', 'Cortinas', 'Riego', 'Piscina', 'Portones', 'Cerraduras digitales', 'Cámaras', 'Sonido HiFi Sonos', 'Home cinema', 'WiFi profesional', 'Control por voz', 'Central domótica', 'UPS'],
    media: [
      { tipo: 'video', src: '/proyectos/hogar-las-delicias-1/recorrido-de-obra.mp4', poster: '/proyectos/hogar-las-delicias-1/recorrido-de-obra-poster.jpg', alt: 'Recorrido de obra en Las Delicias' },
    ],
  },
  {
    slug: 'housing-la-estancia-de-la-villa',
    titulo: 'Desarrollo — Housing La Estancia de la Villa',
    ubicacion: 'Villa Allende, Córdoba',
    estado: 'en-ejecucion',
    fecha: '2026-03-24',
    descripcion:
      'Un desarrollo de nueve casas en La Estancia de la Villa, todas con el ' +
      'mismo estándar Nubiq: iluminación, climatización, cámaras de ' +
      'videovigilancia y control por voz sobre una central domótica. Domótica ' +
      'premium llevada a escala, sin perder el detalle.',
    categorias: ['Iluminación', 'Climatización', 'Cámaras', 'Control por voz', 'Central domótica'],
    media: [
      { tipo: 'video', src: '/proyectos/housing-la-estancia-de-la-villa/recorrido.mp4', poster: '/proyectos/housing-la-estancia-de-la-villa/recorrido-poster.jpg', alt: 'Recorrido de obra en La Estancia de la Villa' },
      { tipo: 'video', src: '/proyectos/housing-la-estancia-de-la-villa/recorrido-2.mp4', poster: '/proyectos/housing-la-estancia-de-la-villa/recorrido-2-poster.jpg', alt: 'Recorrido de obra en La Estancia de la Villa' },
    ],
  },
  {
    slug: 'colina-de-manantiales',
    titulo: 'Desarrollo — Colina de Manantiales',
    estado: 'en-ejecucion',
    fecha: '2026-03-20',
    descripcion:
      'Proyecto en marcha en Colina de Manantiales: iluminación, ' +
      'climatización, cerradura digital y control por voz sobre una central ' +
      'domótica. Una casa que se prepara para responder a cada gesto.',
    categorias: ['Iluminación', 'Climatización', 'Cerradura digital', 'Control por voz', 'Central domótica'],
    media: [],
  },
  {
    slug: 'hogar-q2-1',
    titulo: 'Hogar — Q2 1',
    estado: 'en-ejecucion',
    fecha: '2026-03-02',
    descripcion:
      'Obra en marcha en Q2. Estamos integrando iluminación inteligente, ' +
      'control de climatización y una central domótica que se maneja por voz, ' +
      'para una casa que va a responder a cada gesto.',
    categorias: ['Iluminación', 'Climatización', 'Control por voz', 'Central domótica'],
    media: [
      { tipo: 'imagen', src: '/proyectos/hogar-q2-1/foto-1.jpg', alt: 'Obra en ejecución en Q2' },
    ],
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
