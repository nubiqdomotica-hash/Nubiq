import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building,
  TrendingUp,
  Layers,
  Users,
  PhoneCall,
  MessageCircle,
  PencilRuler,
  Wrench,
  HeartHandshake,
  Quote,
  CheckCircle,
  Target,
  DollarSign,
  Zap,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const SectionEyebrow = ({ children }) => (
  <span className="inline-block uppercase tracking-[0.22em] text-xs md:text-sm text-secondary/90 font-semibold mb-4">
    {children}
  </span>
);

const PainCard = ({ icon, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    className="bg-card/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
  >
    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/10 text-secondary mb-5">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
    <p className="text-foreground/70 leading-relaxed text-sm">{description}</p>
  </motion.div>
);

const ValueCard = ({ icon, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    className="group relative bg-card/60 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-primary/40 transition-all duration-500"
  >
    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
    <p className="text-foreground/70 leading-relaxed">{description}</p>
  </motion.div>
);

const ProcessStep = ({ number, icon, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    className="relative pl-12"
  >
    <span className="absolute left-0 top-0 text-5xl font-extrabold text-primary/20 leading-none select-none">
      {number}
    </span>
    <div className="flex items-center gap-3 mb-3">
      <span className="text-primary">{icon}</span>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
    </div>
    <p className="text-foreground/70 leading-relaxed">{description}</p>
  </motion.div>
);

const FaqItem = ({ question, answer, delay = 0 }) => (
  <motion.details
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    className="group bg-card/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
  >
    <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-6 hover:bg-card/60 transition-colors">
      <h3 className="text-base md:text-lg font-semibold text-foreground">{question}</h3>
      <span className="text-primary text-2xl leading-none transition-transform group-open:rotate-45 shrink-0">
        +
      </span>
    </summary>
    <div className="px-6 pb-6 text-foreground/70 leading-relaxed">{answer}</div>
  </motion.details>
);

const PartnersPage = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
      className="space-y-24 md:space-y-36"
    >
      <Helmet>
        <title>Nubiq Partners | Domótica para Arquitectos y Desarrollistas en Córdoba</title>
        <meta
          name="description"
          content="Nubiq Partners: domótica integrada al proyecto del arquitecto y del desarrollista. Subí el ticket, vendé más rápido y diferenciá tu obra. Paquete acorde, bajo costo de incidencia."
        />
        <meta
          property="og:title"
          content="Nubiq Partners | Domótica para Arquitectos y Desarrollistas en Córdoba"
        />
        <meta
          property="og:description"
          content="Diferenciá tu proyecto. Cerrá más rápido. Domótica acorde al ticket de tu obra, integrada a tu flujo de trabajo."
        />
        <link rel="canonical" href="https://nubiqdomotica.com.ar/partners" />
      </Helmet>

      {/* 1. HERO */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 -left-1/4 w-[60vw] h-[60vw] bg-secondary/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[140px]" />
        </div>
        <div className="container mx-auto px-4 grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 items-center">
          <motion.div variants={containerVariants} className="text-center md:text-left">
            <motion.div variants={fadeUp}>
              <SectionEyebrow>Nubiq Partners · B2B</SectionEyebrow>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 text-foreground leading-[1.05] tracking-tight"
            >
              Diferenciá tu proyecto. <span className="text-primary">Cerrá más rápido</span>.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-foreground/75 max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed"
            >
              Domótica integrada al proyecto del arquitecto y del desarrollista en Córdoba.
              <strong className="text-foreground"> Paquete acorde al ticket de tu obra, bajo
              costo de incidencia, máxima percepción de valor.</strong>
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 px-8 py-6 text-base rounded-full"
              >
                <Link to="/contacto">
                  <PhoneCall className="mr-2 h-5 w-5" />
                  Conocé la propuesta en 15 min
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 text-foreground hover:bg-white/5 hover:border-white/40 transition-all duration-300 px-8 py-6 text-base rounded-full"
              >
                <a
                  href="https://wa.me/5493512326814?text=Hola%2C%20soy%20arquitecto%2Fdesarrollista%20y%20quiero%20conocer%20Nubiq%20Partners"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Hablar por WhatsApp
                </a>
              </Button>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 justify-center md:justify-start text-sm text-foreground/60"
            >
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" /> Sin compromiso
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" /> Coordinamos con tu estudio
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" /> Casos reales en Córdoba
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative h-[420px] md:h-[560px] w-full"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/10">
              <img
                alt="Arquitecto revisando planos de un proyecto residencial premium en Córdoba con domótica Nubiq integrada"
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=80&fm=webp"
                srcSet="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=700&q=80&fm=webp 700w, https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=80&fm=webp 1400w"
                sizes="(max-width: 768px) 100vw, 50vw"
                fetchpriority="high"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-background/10 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PROBLEMAS QUE RESUELVE */}
      <section className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center mb-14 md:mb-16"
        >
          <motion.div variants={fadeUp}>
            <SectionEyebrow>El dolor del estudio / desarrollador</SectionEyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6"
          >
            Tres problemas que <span className="text-primary">Nubiq Partners</span> resuelve.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-foreground/70 leading-relaxed">
            Sin sumar complejidad a tu obra, ni costos que descalcen tu proyecto.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <PainCard
            icon={<Target className="w-6 h-6" />}
            title="Cómo diferenciar el proyecto"
            description="En un mercado donde todos venden lo mismo, la domótica integrada se nota desde la primera visita. Sube el ticket por m² y se vende solo."
            delay={0.1}
          />
          <PainCard
            icon={<Zap className="w-6 h-6" />}
            title="Cómo vender más rápido"
            description="Los proyectos con domótica integrada cierran antes. El comprador percibe valor inmediato y el ticket no asusta — está justificado."
            delay={0.2}
          />
          <PainCard
            icon={<DollarSign className="w-6 h-6" />}
            title="Cómo justificar mayor precio"
            description="Subís el m² sin pelearte con el comprador. La domótica es la prueba visible de que la obra está pensada para el cliente premium de hoy."
            delay={0.3}
          />
        </div>
      </section>

      {/* 3. POR QUÉ NUBIQ — Valor para partners */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/[0.04] via-transparent to-secondary/[0.04]" />
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="max-w-3xl mx-auto text-center mb-14 md:mb-20"
          >
            <motion.div variants={fadeUp}>
              <SectionEyebrow>Por qué Nubiq Partners</SectionEyebrow>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6"
            >
              Pensado para <span className="text-primary">tu flujo de obra</span>.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-foreground/70 leading-relaxed">
              Tres motivos por los que estudios y desarrollistas eligen trabajar con nosotros.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <ValueCard
              icon={<Layers className="w-7 h-7" />}
              title="Paquete acorde al proyecto"
              description="No vendemos un paquete enlatado. Armamos la propuesta para el ticket de tu obra: lo justo y necesario para que se note y se venda."
              delay={0.1}
            />
            <ValueCard
              icon={<TrendingUp className="w-7 h-7" />}
              title="Bajo costo de incidencia"
              description="La domótica suma valor percibido sin descuadrarte la obra. Costos coordinados, sin sorpresas, sin retraso de plazos."
              delay={0.2}
            />
            <ValueCard
              icon={<Users className="w-7 h-7" />}
              title="Coordinación directa con tu estudio"
              description="Trabajamos con el arquitecto, no contra él. Nos integramos a tu proceso, respetamos tu criterio estético y hablamos tu idioma."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* 4. CÓMO TRABAJAMOS CON TU ESTUDIO */}
      <section className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center mb-14 md:mb-20"
        >
          <motion.div variants={fadeUp}>
            <SectionEyebrow>El proceso B2B</SectionEyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6"
          >
            Cómo trabajamos con tu estudio
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-foreground/70 leading-relaxed">
            Cuatro pasos claros. Sin complicarte, sin retrasar la obra.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          <ProcessStep
            number="01"
            icon={<MessageCircle className="w-5 h-5" />}
            title="Llamada de 15 min"
            description="Nos contás qué proyecto tenés y qué buscás transmitir. Definimos si tiene sentido seguir."
            delay={0.1}
          />
          <ProcessStep
            number="02"
            icon={<PencilRuler className="w-5 h-5" />}
            title="Propuesta a medida"
            description="Te entregamos paquete y números pensados para tu ticket, tus tiempos y tu cliente."
            delay={0.2}
          />
          <ProcessStep
            number="03"
            icon={<Wrench className="w-5 h-5" />}
            title="Coordinación con la obra"
            description="Nos integramos al avance: cableado al gris, montaje al blanco, programación al final. Sin pisarte gremios."
            delay={0.3}
          />
          <ProcessStep
            number="04"
            icon={<HeartHandshake className="w-5 h-5" />}
            title="Entrega y soporte"
            description="Le explicamos el sistema al comprador final. Vos sumás un activo. Nosotros, una relación. El cliente, una experiencia."
            delay={0.4}
          />
        </div>
      </section>

      {/* 5. CASO REAL (placeholder) */}
      <section className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeUp} className="text-center mb-10">
            <SectionEyebrow>Caso real</SectionEyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Lo que dice un desarrollista que ya trabajó con Nubiq
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="bg-card/60 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10"
          >
            <Quote className="w-10 h-10 text-primary/60 mb-6" />
            <p className="text-foreground/90 text-xl md:text-2xl leading-relaxed mb-8 italic">
              &ldquo;Nubiq nos armó un paquete acorde a desarrollistas. Hace que el proyecto se
              vea distinto desde la primera visita — y lo justifica solo.&rdquo;
            </p>
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-foreground font-semibold">Cliente Nubiq Partners</p>
                <p className="text-foreground/60 text-sm">Desarrollista · Córdoba</p>
              </div>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold self-start sm:self-auto">
                <CheckCircle className="w-4 h-4" /> Proyecto entregado
              </span>
            </div>
          </motion.div>
          <p className="text-center text-foreground/40 text-xs mt-6 italic">
            Testimonio resumido. Nombres completos y referencias próximamente, con autorización del cliente.
          </p>
        </motion.div>
      </section>

      {/* 6. FAQ — Objeciones B2B */}
      <section className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <SectionEyebrow>Preguntas frecuentes</SectionEyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              Lo que nos preguntan los estudios
            </h2>
          </motion.div>

          <div className="space-y-3">
            <FaqItem
              question="¿Cuánto suma al costo total de la obra?"
              answer="En proyectos de desarrollistas la incidencia real está en el orden del 1–2% del valor total de obra. La regla es simple: la propuesta tiene que ser acorde al ticket y al cliente final. Si el paquete no cierra, no te lo proponemos."
              delay={0.1}
            />
            <FaqItem
              question="¿Cómo se integra con mis tiempos de obra?"
              answer="Nos sumamos en 3 momentos: tendido al gris (con el electricista), montaje al blanco (antes de pintura) y programación al final. Coordinamos con tu maestro mayor y los gremios. No retrasamos plazos."
              delay={0.15}
            />
            <FaqItem
              question="¿Trabajan en proyectos chicos o solo grandes?"
              answer="Trabajamos en proyectos de todos los tamaños. Adaptamos la propuesta al ticket y al perfil del comprador final — desde unidades chicas hasta desarrollos premium."
              delay={0.2}
            />
            <FaqItem
              question="¿Qué pasa con el soporte post-entrega al comprador final?"
              answer="Le explicamos el sistema al comprador, lo asistimos al menos 6 meses sin costo y queda con un canal directo. Vos sumás un servicio diferencial sin asumir vos el soporte."
              delay={0.25}
            />
            <FaqItem
              question="¿Pueden firmar acuerdo de exclusividad o referencia?"
              answer="Sí. Para estudios y desarrollistas con proyectos recurrentes armamos un acuerdo de partner: precios pactados, prioridad de agenda y material de venta listo para tus presentaciones."
              delay={0.3}
            />
          </div>
        </motion.div>
      </section>

      {/* 7. CTA FINAL */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-background to-secondary/[0.06]" />
        </div>
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="max-w-3xl mx-auto text-center bg-card/40 backdrop-blur-md border border-white/10 rounded-3xl p-10 md:p-16"
          >
            <motion.div variants={fadeUp}>
              <Building className="w-12 h-12 text-primary mx-auto mb-6" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6"
            >
              ¿Hablamos <span className="text-primary">15 minutos</span>?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg text-foreground/70 max-w-xl mx-auto mb-10 leading-relaxed"
            >
              Una llamada corta para ver tu proyecto. Si tiene sentido seguir, te armamos
              una propuesta acorde.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 px-8 py-6 text-base rounded-full"
              >
                <Link to="/contacto">
                  <PhoneCall className="mr-2 h-5 w-5" />
                  Conocé la propuesta en 15 min
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 text-foreground hover:bg-white/5 hover:border-white/40 transition-all duration-300 px-8 py-6 text-base rounded-full"
              >
                <a
                  href="https://wa.me/5493512326814?text=Hola%2C%20soy%20arquitecto%2Fdesarrollista%20y%20quiero%20conocer%20Nubiq%20Partners"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp directo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default PartnersPage;
