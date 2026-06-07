import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, Calendar, Image as ImageIcon, Video as VideoIcon, Play,
  X, ChevronLeft, ChevronRight, FolderOpen, CheckCircle2,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import SeoBreadcrumb from '@/components/SeoBreadcrumb';
import { proyectosTerminados, proyectosEnEjecucion } from '@/data/proyectos';

// ── Helpers de fecha ──────────────────────────────────────────────────────
const MESES = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
];

// Convierte '2026-06-07' -> 'Junio 2026'. Si no es una fecha AÑO-MES-DÍA
// válida, devuelve el texto tal cual vino (para fechas escritas a mano).
const formatMesAnio = (iso) => {
  if (!iso) return null;
  const [y, m] = String(iso).split('-').map(Number);
  if (!y || !m || m < 1 || m > 12) return iso;
  const mes = MESES[m - 1];
  return `${mes.charAt(0).toUpperCase()}${mes.slice(1)} ${y}`;
};

// Texto de la fecha en la tarjeta: "Finalizado: ..." o "Inicio: ..."
const etiquetaFecha = (project) => {
  const txt = formatMesAnio(project.fecha);
  if (!txt) return null;
  const prefijo = project.estado === 'en-ejecucion' ? 'Inicio' : 'Finalizado';
  return `${prefijo}: ${txt}`;
};

// ── Helpers de media ────────────────────────────────────────────────────────
const getCover = (project) => {
  const firstImage = project.media?.find((m) => m.tipo === 'imagen');
  if (firstImage) return firstImage.src;
  const firstVideoPoster = project.media?.find((m) => m.tipo === 'video' && m.poster);
  return firstVideoPoster ? firstVideoPoster.poster : null;
};

const countMedia = (project) => {
  const fotos = project.media?.filter((m) => m.tipo === 'imagen').length || 0;
  const videos = project.media?.filter((m) => m.tipo === 'video').length || 0;
  return { fotos, videos };
};

// ── Tarjeta de un proyecto ──────────────────────────────────────────────────
const ProjectCard = ({ project, index, onOpen }) => {
  const cover = getCover(project);
  const { fotos, videos } = countMedia(project);
  const hasMedia = (project.media?.length || 0) > 0;

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(project)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group text-left bg-card/50 border border-white/10 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
    >
      {/* Portada */}
      <div className="relative h-56 w-full overflow-hidden bg-muted">
        {cover ? (
          <img
            src={cover}
            alt={project.media?.[0]?.alt || project.titulo}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
            <FolderOpen className="w-12 h-12 text-foreground/30" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Contador de media */}
        {hasMedia && (
          <div className="absolute top-3 right-3 flex gap-2">
            {fotos > 0 && (
              <span className="flex items-center gap-1 text-xs font-medium text-white bg-black/50 backdrop-blur-sm rounded-full px-2.5 py-1">
                <ImageIcon className="w-3.5 h-3.5" /> {fotos}
              </span>
            )}
            {videos > 0 && (
              <span className="flex items-center gap-1 text-xs font-medium text-white bg-black/50 backdrop-blur-sm rounded-full px-2.5 py-1">
                <VideoIcon className="w-3.5 h-3.5" /> {videos}
              </span>
            )}
          </div>
        )}

        {/* Indicador de "ver proyecto" en hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="flex items-center gap-2 text-sm font-semibold text-white bg-primary/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
            <Play className="w-4 h-4" /> Ver proyecto
          </span>
        </div>
      </div>

      {/* Texto */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{project.titulo}</h3>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-foreground/60 mb-3">
          {project.ubicacion && (
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-primary" /> {project.ubicacion}
            </span>
          )}
          {etiquetaFecha(project) && (
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-primary" /> {etiquetaFecha(project)}
            </span>
          )}
        </div>
        {project.descripcion && (
          <p className="text-foreground/70 leading-relaxed">{project.descripcion}</p>
        )}
      </div>
    </motion.button>
  );
};

// ── Estado vacío ("Próximamente") ───────────────────────────────────────────
const EmptyState = ({ texto }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-center py-16 px-6 border border-dashed border-white/15 rounded-2xl bg-card/30"
  >
    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-5">
      <FolderOpen className="w-8 h-8 text-primary" />
    </div>
    <h3 className="text-2xl font-semibold text-foreground mb-3">Próximamente</h3>
    <p className="text-foreground/60 max-w-md mx-auto mb-8">{texto}</p>
    <Button asChild variant="outline" className="bg-transparent border-primary text-primary hover:bg-primary/10 hover:text-white transition-colors">
      <Link to="/contacto">Quiero domotizar mi casa</Link>
    </Button>
  </motion.div>
);

// ── Paginación responsiva: 6 por página en computadora, 3 en celular ────────
const usePageSize = () => {
  const getSize = () =>
    typeof window !== 'undefined' && window.innerWidth >= 1024 ? 6 : 3;
  const [size, setSize] = useState(getSize);
  useEffect(() => {
    const onResize = () => setSize(getSize());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return size;
};

// ── Grilla de proyectos paginada (o vacío) ──────────────────────────────────
const ProjectsGrid = ({ projects, emptyText, onOpen }) => {
  const pageSize = usePageSize();
  const [page, setPage] = useState(0);
  const totalPages = Math.max(1, Math.ceil(projects.length / pageSize));

  // Si por un cambio de tamaño la página actual queda fuera de rango, reacomodo.
  useEffect(() => {
    setPage((p) => Math.min(p, totalPages - 1));
  }, [totalPages]);

  if (!projects.length) return <EmptyState texto={emptyText} />;

  const start = page * pageSize;
  const visibles = projects.slice(start, start + pageSize);
  const hayPaginas = totalPages > 1;
  const flechaClase =
    'p-3 rounded-full border border-white/15 text-foreground/80 transition-colors ' +
    'hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 ' +
    'focus-visible:ring-primary disabled:opacity-30 disabled:cursor-not-allowed ' +
    'disabled:hover:border-white/15 disabled:hover:text-foreground/80';

  return (
    <div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {visibles.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} onOpen={onOpen} />
        ))}
      </div>

      {hayPaginas && (
        <div className="flex items-center justify-center gap-5 mt-12">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            aria-label="Ver proyectos más recientes"
            className={flechaClase}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <span className="text-sm font-medium text-foreground/60 tabular-nums select-none">
            {page + 1} / {totalPages}
          </span>

          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            aria-label="Ver proyectos anteriores"
            className={flechaClase}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

// ── Visor / lightbox a pantalla grande ──────────────────────────────────────
const Lightbox = ({ project, startIndex, onClose }) => {
  const media = project?.media || [];
  const [current, setCurrent] = useState(startIndex || 0);

  const goPrev = useCallback(
    () => setCurrent((i) => (i - 1 + media.length) % media.length),
    [media.length]
  );
  const goNext = useCallback(
    () => setCurrent((i) => (i + 1) % media.length),
    [media.length]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [goPrev, goNext, onClose]);

  if (!project) return null;
  const item = media[current];
  const hasMany = media.length > 1;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label={`Galería de ${project.titulo}`}
      onClick={onClose}
    >
      {/* Barra superior */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 text-white" onClick={(e) => e.stopPropagation()}>
        <div className="min-w-0">
          <p className="font-semibold truncate">{project.titulo}</p>
          {project.ubicacion && <p className="text-sm text-white/60 truncate">{project.ubicacion}</p>}
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar galería"
          className="flex-shrink-0 ml-4 p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Media */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-12 pb-4 min-h-0" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="max-w-5xl w-full max-h-full flex items-center justify-center"
          >
            {item?.tipo === 'video' ? (
              <video
                src={item.src}
                poster={item.poster}
                controls
                autoPlay
                playsInline
                className="max-h-[75vh] w-auto max-w-full rounded-lg"
              />
            ) : (
              <img
                src={item?.src}
                alt={item?.alt || project.titulo}
                className="max-h-[75vh] w-auto max-w-full rounded-lg object-contain"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Flechas */}
        {hasMany && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Anterior"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Siguiente"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* Pie: descripción + contador */}
      <div className="px-4 sm:px-6 py-4 text-center text-white" onClick={(e) => e.stopPropagation()}>
        {item?.alt && <p className="text-sm text-white/80 max-w-2xl mx-auto mb-2">{item.alt}</p>}
        {hasMany && <p className="text-xs text-white/50">{current + 1} / {media.length}</p>}
      </div>
    </motion.div>
  );
};

// ── Ventana grande de un proyecto (detalle) ─────────────────────────────────
const ProjectModal = ({ project, onClose, onOpenMedia }) => {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  const media = project.media || [];
  const cover = getCover(project);
  const tieneContenido = media.length > 0 || project.descripcion || project.testimonio;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm flex items-start sm:items-center justify-center p-0 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label={`Proyecto ${project.titulo}`}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.98 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-3xl bg-card border border-white/10 sm:rounded-2xl shadow-2xl my-0 sm:my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 backdrop-blur-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Foto principal */}
        <div className="relative h-60 sm:h-80 w-full bg-muted">
          {cover ? (
            <img src={cover} alt={media[0]?.alt || project.titulo} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
              <FolderOpen className="w-14 h-14 text-foreground/30" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        </div>

        {/* Contenido */}
        <div className="px-6 sm:px-8 pb-8 -mt-12 relative">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{project.titulo}</h2>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-foreground/60 mb-4">
            {project.ubicacion && (
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> {project.ubicacion}</span>
            )}
            {etiquetaFecha(project) && (
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-primary" /> {etiquetaFecha(project)}</span>
            )}
          </div>

          {/* Etiquetas de qué se domotizó */}
          {project.categorias?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.categorias.map((c) => (
                <span key={c} className="text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1">
                  {c}
                </span>
              ))}
            </div>
          )}

          {/* Descripción */}
          {project.descripcion && (
            <p className="text-foreground/80 leading-relaxed mb-8">{project.descripcion}</p>
          )}

          {/* Galería */}
          {media.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground/50 mb-3">Galería</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {media.map((m, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => onOpenMedia(i)}
                    className="group relative aspect-square rounded-xl overflow-hidden bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <img
                      src={m.tipo === 'video' ? m.poster : m.src}
                      alt={m.alt || project.titulo}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {m.tipo === 'video' && (
                      <span className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <Play className="w-8 h-8 text-white" />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Video testimonio del dueño */}
          {project.testimonio && (
            <div className="mb-8">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground/50 mb-3">Lo que dice el dueño</h3>
              <video
                src={project.testimonio.src}
                poster={project.testimonio.poster}
                controls
                playsInline
                className="w-full rounded-xl bg-black"
              />
            </div>
          )}

          {/* Mensaje si todavía no hay material cargado */}
          {!tieneContenido && (
            <p className="text-foreground/60 leading-relaxed mb-8">
              Estamos preparando las fotos, los videos y el detalle de esta obra.
              ¡Muy pronto vas a poder verla completa acá!
            </p>
          )}

          {/* Cierre / CTA */}
          <div className="pt-6 border-t border-white/10">
            <p className="text-foreground/80 mb-4">¿Querés algo así en tu casa?</p>
            <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground">
              <Link to="/contacto" onClick={onClose}>Hablemos de tu proyecto</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ── Página ──────────────────────────────────────────────────────────────────
const ProyectosPage = () => {
  const [detalle, setDetalle] = useState(null);   // proyecto abierto en la ventana grande
  const [lightbox, setLightbox] = useState(null); // { project, index } media a pantalla completa

  const openDetalle = (project) => setDetalle(project);
  const closeDetalle = () => setDetalle(null);
  const openMedia = (index) => { if (detalle) setLightbox({ project: detalle, index }); };
  const closeMedia = () => setLightbox(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-8 space-y-16 md:space-y-20"
    >
      <Helmet>
        <title>Proyectos de Domótica en Córdoba | Obras Reales — Nubiq</title>
        <meta name="description" content="Mirá proyectos reales de domótica premium en Córdoba: obras terminadas y en ejecución. Fotos y videos de casas inteligentes hechas por Nubiq." />
        <meta property="og:title" content="Proyectos de Domótica en Córdoba | Nubiq" />
        <meta property="og:description" content="Obras reales de domótica premium en Córdoba: proyectos terminados y en ejecución. Fotos y videos de casas inteligentes hechas por Nubiq." />
        <link rel="canonical" href="https://nubiqdomotica.com.ar/proyectos" />
      </Helmet>

      <SeoBreadcrumb items={[{ name: 'Proyectos', path: '/proyectos' }]} />

      {/* Encabezado */}
      <section className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Nuestros Proyectos
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto"
        >
          Obras reales de domótica premium en Córdoba. Cada proyecto es una casa pensada en detalle:
          mirá lo que hicimos y lo que estamos construyendo ahora.
        </motion.p>
      </section>

      {/* Pestañas */}
      <section>
        <Tabs defaultValue="terminados" className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="h-auto p-1.5 bg-card/60 border border-white/10">
              <TabsTrigger value="terminados" className="text-sm sm:text-base px-5 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <CheckCircle2 className="w-4 h-4 mr-2" /> Terminados
              </TabsTrigger>
              <TabsTrigger value="en-ejecucion" className="text-sm sm:text-base px-5 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <FolderOpen className="w-4 h-4 mr-2" /> En ejecución
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="terminados">
            <ProjectsGrid
              projects={proyectosTerminados}
              emptyText="Estamos preparando los primeros casos para mostrarte. Muy pronto vas a ver acá obras terminadas con fotos y videos."
              onOpen={openDetalle}
            />
          </TabsContent>

          <TabsContent value="en-ejecucion">
            <ProjectsGrid
              projects={proyectosEnEjecucion}
              emptyText="Acá vas a ver los proyectos que tenemos en marcha. Si querés que el tuyo sea uno de ellos, hablemos."
              onOpen={openDetalle}
            />
          </TabsContent>
        </Tabs>
      </section>

      {/* Cierre / CTA */}
      <section className="py-12 md:py-16 bg-muted/40 border border-white/5 rounded-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">¿Querés que tu casa sea el próximo proyecto?</h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
          Contanos tu idea y diseñamos una solución a medida, perfectamente adaptada a tu hogar y tu estilo de vida.
        </p>
        <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/30 px-10 py-7 text-lg">
          <Link to="/contacto">Pedí tu asesoramiento</Link>
        </Button>
      </section>

      {/* Ventana grande del proyecto */}
      <AnimatePresence>
        {detalle && (
          <ProjectModal project={detalle} onClose={closeDetalle} onOpenMedia={openMedia} />
        )}
      </AnimatePresence>

      {/* Visor de media a pantalla completa */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox project={lightbox.project} startIndex={lightbox.index} onClose={closeMedia} />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProyectosPage;
