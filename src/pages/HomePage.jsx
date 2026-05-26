import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Layers,
  ShieldCheck,
  Compass,
  MessageCircle,
  PencilRuler,
  Wrench,
  HeartHandshake,
  Quote,
  Building,
  Home as HomeIcon,
  Sun,
  Moon,
  Coffee,
  KeyRound,
  Lightbulb,
  Thermometer,
  Music,
  Lock,
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
  <span className="inline-block uppercase tracking-[0.22em] text-xs md:text-sm text-primary/90 font-semibold mb-4">
    {children}
  </span>
);

const ValueCard = ({ icon, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    className="group relative bg-card/60 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-primary/40 transition-all duration-500"
  >
    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary/20 transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
    <p className="text-foreground/70 leading-relaxed">{description}</p>
  </motion.div>
);

const BeforeAfterRow = ({ icon, before, after, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    className="grid md:grid-cols-[auto_1fr_1fr] gap-4 md:gap-8 items-start py-6 border-b border-white/5 last:border-b-0"
  >
    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/10 text-secondary shrink-0">
      {icon}
    </div>
    <div>
      <span className="text-xs uppercase tracking-wider text-foreground/50 font-semibold">Antes</span>
      <p className="text-foreground/70 mt-1 leading-relaxed">{before}</p>
    </div>
    <div>
      <span className="text-xs uppercase tracking-wider text-primary font-semibold">Ahora</span>
      <p className="text-foreground mt-1 leading-relaxed">{after}</p>
    </div>
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

const CaseCard = ({ tag, quote, context, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    className="bg-card/60 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-500"
  >
    <Quote className="w-8 h-8 text-primary/60 mb-4" />
    <p className="text-foreground/90 text-lg leading-relaxed mb-6 italic">
      &ldquo;{quote}&rdquo;
    </p>
    <div className="pt-4 border-t border-white/10">
      <span className="text-xs uppercase tracking-wider text-primary font-semibold">{tag}</span>
      <p className="text-foreground/60 text-sm mt-1">{context}</p>
    </div>
  </motion.div>
);

const LineCard = ({ icon, name, headline, description, cta, to, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    className="bg-card/60 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-secondary/40 transition-all duration-500 flex flex-col"
  >
    <div className="flex items-center gap-3 mb-4">
      <span className="text-secondary">{icon}</span>
      <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">{name}</span>
    </div>
    <h3 className="text-2xl font-semibold mb-3 text-foreground">{headline}</h3>
    <p className="text-foreground/70 leading-relaxed mb-6 flex-1">{description}</p>
    <Link
      to={to}
      className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all"
    >
      {cta} <ArrowRight className="w-4 h-4" />
    </Link>
  </motion.div>
);

const HomePage = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
      className="space-y-24 md:space-y-36"
    >
      <Helmet>
        <title>Domótica Premium en Córdoba | Casas a Medida — Nubiq</title>
        <meta
          name="description"
          content="Domótica premium a medida para casas de alto nivel en Córdoba. Diseñamos, instalamos y acompañamos. Un solo sistema, un solo responsable — durante la obra y después."
        />
        <meta property="og:title" content="Domótica Premium en Córdoba | Casas a Medida — Nubiq" />
        <meta
          property="og:description"
          content="Tu casa, a la altura de lo que imaginaste. Domótica premium a medida en Córdoba."
        />
        <link rel="canonical" href="https://nubiqdomotica.com.ar/" />
      </Helmet>

      {/* 1. HERO */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 -left-1/4 w-[60vw] h-[60vw] bg-primary/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-[50vw] h-[50vw] bg-secondary/10 rounded-full blur-[140px]" />
        </div>
        <div className="container mx-auto px-4 grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 items-center">
          <motion.div variants={containerVariants} className="text-center md:text-left">
            <motion.div variants={fadeUp}>
              <SectionEyebrow>Domótica Premium · Córdoba</SectionEyebrow>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 text-foreground leading-[1.05] tracking-tight"
            >
              Tu casa, a la altura de <span className="text-primary">lo que imaginaste</span>.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-foreground/75 max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed"
            >
              Domótica premium a medida para casas de alto nivel en Córdoba. Diseñamos,
              instalamos y acompañamos — <strong className="text-foreground">un solo sistema,
              un solo responsable</strong>, durante la obra y los años que siguen.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 px-8 py-6 text-base rounded-full"
              >
                <Link to="/contacto">
                  Pedí tu asesoramiento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 text-foreground hover:bg-white/5 hover:border-white/40 transition-all duration-300 px-8 py-6 text-base rounded-full"
              >
                <Link to="/servicios">Ver cómo trabajamos</Link>
              </Button>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="mt-10 flex items-center gap-6 justify-center md:justify-start text-sm text-foreground/50"
            >
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" /> Acompañamiento post-obra
              </span>
              <span className="hidden sm:flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" /> Diseño a medida
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
                alt="Living de casa premium en Córdoba con domótica Nubiq: iluminación cálida, cortinas automáticas y atmósfera de alto nivel"
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80&fm=webp"
                srcSet="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80&fm=webp 700w, https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80&fm=webp 1400w"
                sizes="(max-width: 768px) 100vw, 50vw"
                width="1400"
                height="933"
                fetchpriority="high"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-background/10 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. ÁNGULO A — Transformación cotidiana */}
      <section className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
        >
          <motion.div variants={fadeUp}>
            <SectionEyebrow>La experiencia del día a día</SectionEyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6"
          >
            La obra termina. <span className="text-primary">Vivir tu casa</span>, recién empieza.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-foreground/70 leading-relaxed">
            No vendemos dispositivos. Vendemos lo que vas a sentir cada día que entres a tu casa.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-card/40 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-10">
          <BeforeAfterRow
            icon={<KeyRound className="w-6 h-6" />}
            before="Llegás de noche y prendés ocho teclas a oscuras hasta dar con la luz que querés."
            after="Entrás y tu casa ya te estaba esperando: luces cálidas, persianas en su punto, música suave."
            delay={0.1}
          />
          <BeforeAfterRow
            icon={<Sun className="w-6 h-6" />}
            before="Te despertás y tenés que cruzar el pasillo helado para subir la persiana y prender la cafetera."
            after="A las 7:00, la persiana se abre sola, la calefacción ya está a temperatura y suena tu playlist."
            delay={0.2}
          />
          <BeforeAfterRow
            icon={<Moon className="w-6 h-6" />}
            before="Antes de dormir hacés una vuelta apagando luces, chequeando puertas, bajando persianas."
            after='Decís &ldquo;buenas noches&rdquo;: todo se apaga, las puertas se cierran, las cámaras se activan.'
            delay={0.3}
          />
          <BeforeAfterRow
            icon={<Coffee className="w-6 h-6" />}
            before="Llegan tus invitados, corrés a poner música, prender luces de jardín, ajustar el aire."
            after='Escena &ldquo;recibir gente&rdquo;: un toque y la casa pasa al modo en que querés mostrarla.'
            delay={0.4}
          />
        </div>
      </section>

      {/* 3. ÁNGULO B — La capa que vale la pena */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/[0.04] via-transparent to-secondary/[0.04]" />
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div variants={fadeUp}>
              <SectionEyebrow>El valor en perspectiva</SectionEyebrow>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6"
            >
              Es el <span className="text-primary">2–3% de tu obra</span>. Y el 100% de lo que vas a usar.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-foreground/75 leading-relaxed mb-6">
              Una casa premium se piensa hasta el último detalle: pisos, revestimientos, cocina,
              luminaria. Todo eso lo mirás. La domótica es la capa que hace que toda esa
              inversión <strong className="text-foreground">se viva, se sienta y se disfrute</strong> — cada día.
            </motion.p>
            <motion.p variants={fadeUp} className="text-base text-foreground/60 leading-relaxed italic">
              El mármol lo mirás. La domótica la vivís.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="bg-card/60 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10"
          >
            <div className="space-y-6">
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-foreground/70 text-sm">El resto de tu obra</span>
                  <span className="text-2xl md:text-3xl font-bold text-foreground/80">97–98%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-foreground/30 rounded-full" style={{ width: '97%' }} />
                </div>
                <p className="text-foreground/50 text-xs mt-2">Estructura, terminaciones, equipamiento. Lo que mirás.</p>
              </div>

              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-primary text-sm font-semibold">Domótica integrada</span>
                  <span className="text-2xl md:text-3xl font-bold text-primary">2–3%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full" style={{ width: '3%' }} />
                </div>
                <p className="text-foreground/50 text-xs mt-2">
                  Lo que tocás, sentís y usás cada día. Para siempre.
                </p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-foreground/70 text-sm leading-relaxed">
                Integrarlo durante la obra es prolijo y eficiente.
                Hacerlo después es romper, ensuciar y pagar de más.
                <span className="text-foreground font-semibold"> El momento es ahora.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. ÁNGULO C — Un sistema, un control, un equipo */}
      <section className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center mb-14 md:mb-20"
        >
          <motion.div variants={fadeUp}>
            <SectionEyebrow>Integración total</SectionEyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6"
          >
            Un sistema. Un control. <span className="text-primary">Un equipo</span>.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-foreground/70 leading-relaxed">
            Una casa de alto nivel merece algo más que diez apps sueltas. Nubiq diseña, instala y
            acompaña — desde el primer plano de obra hasta los años que vienen.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <ValueCard
            icon={<Layers className="w-7 h-7" />}
            title="Todo en un solo lugar"
            description="Luces, clima, persianas, cámaras, audio, riego, seguridad. Un solo control diseñado a medida — no diez apps abiertas a la vez."
            delay={0.1}
          />
          <ValueCard
            icon={<HeartHandshake className="w-7 h-7" />}
            title="Acompañamiento durante la obra"
            description="Coordinamos con tu arquitecto y los gremios desde el primer día. La instalación va integrada al avance de obra, no agregada al final."
            delay={0.2}
          />
          <ValueCard
            icon={<ShieldCheck className="w-7 h-7" />}
            title="Soporte post-venta real"
            description="Monitoreo remoto, actualizaciones, ajustes. El día que entregamos no es el final del proyecto: es el primer día de la relación."
            delay={0.3}
          />
        </div>
      </section>

      {/* 5. ÁNGULO D — 100% a tu medida (dashboard) */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-bl from-secondary/[0.05] via-transparent to-primary/[0.05]" />
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 md:order-1"
          >
            {/* Dashboard mockup */}
            <div className="bg-card/80 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl shadow-primary/10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs uppercase tracking-wider text-foreground/50">Casa</p>
                  <h4 className="text-lg font-semibold text-foreground">Buenas noches, Lucas</h4>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-xs text-primary font-semibold">Modo Noche</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-background/60 rounded-2xl p-4 border border-white/5">
                  <Lightbulb className="w-5 h-5 text-primary mb-3" />
                  <p className="text-xs text-foreground/60">Iluminación</p>
                  <p className="text-foreground font-semibold mt-1">4 escenas activas</p>
                </div>
                <div className="bg-background/60 rounded-2xl p-4 border border-white/5">
                  <Thermometer className="w-5 h-5 text-secondary mb-3" />
                  <p className="text-xs text-foreground/60">Clima</p>
                  <p className="text-foreground font-semibold mt-1">22.5° living</p>
                </div>
                <div className="bg-background/60 rounded-2xl p-4 border border-white/5">
                  <Music className="w-5 h-5 text-primary mb-3" />
                  <p className="text-xs text-foreground/60">Audio</p>
                  <p className="text-foreground font-semibold mt-1">Jazz · 30%</p>
                </div>
                <div className="bg-background/60 rounded-2xl p-4 border border-white/5">
                  <Lock className="w-5 h-5 text-secondary mb-3" />
                  <p className="text-xs text-foreground/60">Seguridad</p>
                  <p className="text-foreground font-semibold mt-1">Activado</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-4 border border-primary/20">
                <p className="text-xs text-foreground/70 mb-1">Escena sugerida</p>
                <p className="text-foreground font-semibold">Buenas noches → todo se apaga, puertas cerradas, cámaras activas.</p>
              </div>
            </div>
            <p className="text-center text-xs text-foreground/40 mt-4">
              Dashboard ilustrativo — cada cliente tiene el suyo, diseñado con vos.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="order-1 md:order-2"
          >
            <motion.div variants={fadeUp}>
              <SectionEyebrow>Diseño a medida</SectionEyebrow>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6"
            >
              Tu casa no se parece a ninguna otra. <span className="text-primary">Tu sistema, tampoco</span>.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-foreground/75 leading-relaxed mb-6">
              No vendemos paquetes enlatados. Diseñamos el control a la medida de cómo vivís vos:
              los rincones que usás, las rutinas que tenés, los gustos que te importan.
            </motion.p>
            <motion.ul variants={fadeUp} className="space-y-3 text-foreground/70">
              <li className="flex gap-3"><span className="text-primary mt-1">→</span> Dashboard pensado pantalla por pantalla con tu familia.</li>
              <li className="flex gap-3"><span className="text-primary mt-1">→</span> Escenas reales — no demo: las que vas a tocar todos los días.</li>
              <li className="flex gap-3"><span className="text-primary mt-1">→</span> Crece con vos: empezás con lo esencial y sumás cuando quieras.</li>
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* 6. CÓMO TRABAJAMOS */}
      <section className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center mb-14 md:mb-20"
        >
          <motion.div variants={fadeUp}>
            <SectionEyebrow>El proceso</SectionEyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6"
          >
            Cómo trabajamos
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-foreground/70 leading-relaxed">
            Un proceso simple, conversado y sin sorpresas. Vamos los dos socios a cada reunión.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          <ProcessStep
            number="01"
            icon={<MessageCircle className="w-5 h-5" />}
            title="Conversamos"
            description="Entendemos tu obra, tu familia y cómo te imaginás viviendo. Sin presión, sin venta enlatada."
            delay={0.1}
          />
          <ProcessStep
            number="02"
            icon={<PencilRuler className="w-5 h-5" />}
            title="Diseñamos a medida"
            description="Te proponemos un sistema pensado para tu casa, coordinado con tu arquitecto."
            delay={0.2}
          />
          <ProcessStep
            number="03"
            icon={<Wrench className="w-5 h-5" />}
            title="Instalamos con la obra"
            description="Nos integramos al avance de obra. Sin romper después, sin ensuciar. Prolijo."
            delay={0.3}
          />
          <ProcessStep
            number="04"
            icon={<HeartHandshake className="w-5 h-5" />}
            title="Acompañamos"
            description="Te explicamos el sistema, lo personalizamos contigo y te seguimos los años que siguen."
            delay={0.4}
          />
        </div>
      </section>

      {/* 7. CASOS REALES (placeholders) */}
      <section className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center mb-14 md:mb-20"
        >
          <motion.div variants={fadeUp}>
            <SectionEyebrow>Clientes reales</SectionEyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6"
          >
            Casas que ya viven <span className="text-primary">a la altura</span>.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-foreground/70 leading-relaxed">
            Lo que valoran los clientes Nubiq — en sus palabras.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <CaseCard
            tag="Casa 450 m² · Remodelación"
            quote="Valor percibido acorde al valor de venta. El trato personalizado y la estética de cómo quedaron las cosas."
            context="Cliente Nubiq Custom · Córdoba"
            delay={0.1}
          />
          <CaseCard
            tag="Cliente que crece con Nubiq"
            quote="Empecé por la incomodidad de prender las luces. Hoy tengo sensores, escaleras automáticas y mucho más. Nubiq siempre estuvo."
            context="Cliente Nubiq Custom · Acompañamiento de varios años"
            delay={0.2}
          />
          <CaseCard
            tag="Casa premium · Obra nueva"
            quote="Quería una casa lujosa con tecnología de vanguardia. Nubiq fueron los únicos que aparecieron y entendieron lo que buscaba."
            context="Cliente Nubiq Custom · Córdoba"
            delay={0.3}
          />
        </div>
        <p className="text-center text-foreground/40 text-xs mt-8 italic">
          Testimonios resumidos. Nombres y fotos completos próximamente, con autorización de cada cliente.
        </p>
      </section>

      {/* 8. OTRAS LÍNEAS — Partners y Express */}
      <section className="relative py-20 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="max-w-3xl mx-auto text-center mb-14"
          >
            <motion.div variants={fadeUp}>
              <SectionEyebrow>Nubiq también es para…</SectionEyebrow>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6"
            >
              ¿Sos arquitecto, desarrollista o ya tenés tu casa terminada?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-foreground/70 leading-relaxed">
              Tenemos una línea pensada para vos.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            <LineCard
              icon={<Building className="w-6 h-6" />}
              name="Nubiq Partners"
              headline="Para arquitectos y desarrollistas"
              description="Paquete acorde al proyecto. Diferenciá tu obra, vendé más rápido y subí el ticket sin complicarte. Bajo costo de incidencia en obra, máxima percepción de valor."
              cta="Conocer Partners"
              to="/partners"
              delay={0.1}
            />
            <LineCard
              icon={<HomeIcon className="w-6 h-6" />}
              name="Nubiq Express"
              headline="Para casas terminadas"
              description="Paquetes claros de rápida implementación. Modernizá tu casa en 1–2 días, sin obra, sin romper, sin sorpresas."
              cta="Conocer Express"
              to="/contacto"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* 9. ZONAS DE CÓRDOBA (reescrita en tono premium) */}
      <section className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <motion.div variants={fadeUp}>
            <SectionEyebrow>Cobertura</SectionEyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6"
          >
            Domótica premium en toda <span className="text-primary">Córdoba</span>.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-foreground/70 leading-relaxed">
            Casas, barrios cerrados y proyectos a medida en Córdoba Capital y alrededores.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-4xl mx-auto"
        >
          {[
            { name: 'Nueva Córdoba', link: '/domotica-nueva-cordoba' },
            { name: 'Cerro de las Rosas', link: '/domotica-cerro-de-las-rosas' },
            { name: 'Villa Allende', link: '/domotica-villa-allende' },
            { name: 'Valle Escondido', link: '/domotica-valle-escondido' },
            { name: 'Estancia El Terrón' },
            { name: 'Mendiolaza' },
            { name: 'Jesús María' },
            { name: 'Villa Carlos Paz' },
            { name: 'General Paz' },
            { name: 'Urca' },
            { name: 'Argüello' },
            { name: 'Manantiales' },
          ].map((barrio) =>
            barrio.link ? (
              <Link
                key={barrio.name}
                to={barrio.link}
                className="bg-card/40 border border-white/10 px-4 py-3 rounded-lg text-center text-sm text-foreground/80 hover:border-primary/50 hover:bg-card/60 hover:text-primary transition-all"
              >
                {barrio.name}
              </Link>
            ) : (
              <div
                key={barrio.name}
                className="bg-card/40 border border-white/10 px-4 py-3 rounded-lg text-center text-sm text-foreground/80"
              >
                {barrio.name}
              </div>
            )
          )}
        </motion.div>
        <p className="text-center text-foreground/50 text-sm mt-6">
          ¿No ves tu zona? Trabajamos en toda la provincia — coordinamos visita o videollamada.
        </p>
      </section>

      {/* 10. CTA FINAL */}
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
              <Compass className="w-12 h-12 text-primary mx-auto mb-6" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6"
            >
              Tu casa, a la altura. <br className="hidden md:block" />
              Empezá por <span className="text-primary">una conversación</span>.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg text-foreground/70 max-w-xl mx-auto mb-10 leading-relaxed"
            >
              Una reunión, los dos socios, sin compromiso. Te contamos qué se puede hacer
              en tu obra y armamos un proyecto pensado para tu casa.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 px-8 py-6 text-base rounded-full"
              >
                <Link to="/contacto">
                  Pedí tu asesoramiento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 text-foreground hover:bg-white/5 hover:border-white/40 transition-all duration-300 px-8 py-6 text-base rounded-full"
              >
                <Link to="/nosotros">Conocé al equipo</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;
