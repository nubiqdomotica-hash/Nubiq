import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Smartphone, Zap, Shield, Clock, Leaf, Sparkles,
  Lightbulb, Thermometer, Camera, Lock, Blinds, Droplets, Speaker, Wifi,
  DollarSign, Calendar, HelpCircle, Home, Sun, ShieldCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SeoBreadcrumb from '@/components/SeoBreadcrumb';

const BenefitCard = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-card border border-white/10 p-6 rounded-xl shadow-lg hover:shadow-primary/20 transition-shadow duration-300"
  >
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <div className="p-3 bg-primary/10 rounded-full">{icon}</div>
      </div>
      <div>
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-foreground/70 text-sm sm:text-base">{description}</p>
      </div>
    </div>
  </motion.div>
);

const ExampleCard = ({ title, description, imageSrc, imageAlt, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-card border border-white/10 rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-secondary/20 transition-shadow duration-300"
  >
    <div className="relative h-48 w-full">
      <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" loading="lazy" decoding="async" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <div className="flex items-center mb-3">
        <h4 className="text-lg sm:text-xl font-semibold">{title}</h4>
      </div>
      <p className="text-foreground/70 flex-grow text-sm sm:text-base">{description}</p>
    </div>
  </motion.div>
);

const AutomationItem = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="bg-card border border-white/10 p-5 rounded-xl shadow-lg"
  >
    <div className="flex items-center mb-2">
      <div className="p-2 bg-primary/10 rounded-lg mr-3">{icon}</div>
      <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
    </div>
    <p className="text-foreground/70 text-sm">{description}</p>
  </motion.div>
);

// Preguntas frecuentes: fuente unica para el bloque visible y para el schema FAQ.
const faqs = [
  {
    q: '¿Qué es la domótica?',
    a: 'La domótica es la tecnología que integra y coordina los sistemas de una casa —iluminación, climatización, persianas, cerraduras, cámaras, audio y más— en un único sistema central. En lugar de manejar cada cosa por separado, controlás todo desde el celular, con la voz o de forma automática según tus rutinas.',
  },
  {
    q: '¿Necesito hacer obras para instalar domótica?',
    a: 'Depende del proyecto. Si tu casa está en obra o remodelación, integramos todo a medida desde el cableado y el resultado queda impecable, sin cables a la vista: es el mejor momento para hacerlo. Si tu casa ya está terminada, también se puede sumar domótica con soluciones pensadas para no romper de más.',
  },
  {
    q: '¿Cuánto cuesta instalar domótica en Argentina?',
    a: 'No hay un precio de lista, porque la domótica es un proyecto a medida: la inversión depende del tamaño de la casa, de los sistemas que quieras integrar, de la etapa de obra y de la calidad de los equipos. En Nubiq te asesoramos sin compromiso y armamos un presupuesto claro sobre lo que de verdad te sirve.',
  },
  {
    q: '¿La domótica funciona si se corta internet?',
    a: 'Sí. El cerebro del sistema es local, es decir que vive dentro de tu casa. Las automatizaciones importantes —luces, seguridad, climatización— siguen funcionando aunque se caiga internet. La conexión solo hace falta para controlar la casa a distancia desde el celular.',
  },
  {
    q: '¿Puedo empezar por poco y ampliar después?',
    a: 'Sí, y es lo que recomendamos en muchos casos. Podés arrancar por lo que más te mueve —por ejemplo la iluminación o la seguridad— y sumar el resto con el tiempo, sin tener que rehacer nada. El sistema está pensado para crecer con vos.',
  },
  {
    q: '¿Qué mantenimiento necesita una casa inteligente?',
    a: 'Muy poco. Y no te dejamos solo con el sistema: en Nubiq acompañamos después de la instalación con monitoreo remoto, actualizaciones y soporte. Si algo necesita ajuste, lo resolvemos.',
  },
  {
    q: '¿Puedo controlar mi casa desde el celular estando en otro lugar?',
    a: 'Sí. Podés ver las cámaras, prender o apagar luces, controlar el clima, abrir portones y revisar el estado de la casa desde cualquier parte del mundo, con tu celular y una conexión a internet.',
  },
  {
    q: '¿Qué tecnología usan para la domótica?',
    a: 'Usamos un sistema central abierto que hace de cerebro de la casa y se integra con equipos de distintas marcas, elegidos por su calidad y durabilidad. Al ser un sistema abierto, no quedás atado a una app cerrada ni a suscripciones de una sola marca.',
  },
  {
    q: '¿Dónde instalan domótica?',
    a: 'Nubiq trabaja en Córdoba, Argentina: hogares, casas en barrios cerrados, oficinas y proyectos de arquitectos y desarrollistas. Nuestro foco son las casas premium en obra o remodelación.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const WhatIsDomoticsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <Helmet>
        <title>¿Qué es la Domótica? Guía Completa | Nubiq Córdoba, Argentina</title>
        <meta name="description" content="Qué es la domótica, cómo funciona, qué se puede automatizar en una casa, beneficios y cuánto cuesta en Argentina. Guía completa de Nubiq, domótica premium en Córdoba." />
        <meta property="og:title" content="¿Qué es la Domótica? Guía Completa | Nubiq Córdoba" />
        <meta property="og:description" content="Qué es la domótica, cómo funciona, qué se puede automatizar, beneficios y cuánto cuesta en Argentina. La guía completa de Nubiq." />
        <link rel="canonical" href="https://nubiqdomotica.com.ar/que-es-domotica/" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <SeoBreadcrumb items={[{ name: '¿Qué es la Domótica?', path: '/que-es-domotica' }]} />

      {/* Hero */}
      <section className="text-center mb-12 md:mb-16">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          ¿Qué es la Domótica?
        </motion.h1>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base md:text-xl text-foreground/80 max-w-3xl mx-auto"
        >
          Es la tecnología que integra todo tu hogar —luces, clima, seguridad, cortinas, audio— en un solo sistema que controlás desde el celular, con la voz o de forma automática. Más que tecnología, es una forma de vivir tu casa: que se anticipe a vos y esté a la altura de lo que imaginaste.
        </motion.p>
      </section>

      {/* Definición */}
      <section className="max-w-3xl mx-auto mb-12 md:mb-16">
        <div className="bg-card border border-white/10 p-6 md:p-8 rounded-xl shadow-lg space-y-4 text-base md:text-lg text-foreground/80 leading-relaxed">
          <p>
            La palabra <strong>domótica</strong> viene de <em>domus</em> (hogar) y <em>automática</em>. En criollo: es hacer que tu casa piense y responda por vos. En lugar de manejar cada cosa por separado —una llave para la luz, un control para el aire acondicionado, otra app para las cámaras—, todos los sistemas se integran en un único cerebro central.
          </p>
          <p>
            Desde ahí, tu casa entiende contextos: "es de noche y acabo de llegar", "salimos todos", "es hora de dormir", y actúa en consecuencia. No se trata de llenar la casa de aparatos: se trata de que la tecnología desaparezca y solo quede el resultado. Una casa más cómoda, más segura y más tuya.
          </p>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="mb-12 md:mb-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">¿Cómo funciona una casa inteligente?</h2>
            <div className="bg-card border border-white/10 p-6 md:p-8 rounded-xl shadow-lg space-y-4 text-base md:text-lg text-foreground/80 leading-relaxed">
              <p>Es más simple de lo que parece. Una casa inteligente tiene tres partes que trabajan juntas:</p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li><strong>Los dispositivos:</strong> luces, motores de cortina, termostatos, cerraduras, cámaras y sensores que detectan qué pasa en la casa.</li>
                <li><strong>El cerebro:</strong> un sistema central que coordina todo y toma decisiones según las rutinas que definimos con vos.</li>
                <li><strong>El control:</strong> una app hecha a tu medida, tu voz, o la automatización que hace que todo funcione solo.</li>
              </ul>
              <p>
                Los sensores detectan (entraste a una habitación, hay sol, se abrió una puerta) y el cerebro decide qué hacer. Podés manejar todo a mano, pedirlo por voz o —lo más potente— dejar que la casa funcione sola con <strong>escenas y rutinas inteligentes</strong>: al atardecer se encienden las luces del jardín; cuando salís, se apaga todo y se arma la seguridad.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-2xl border border-white/10 order-1 md:order-2"
          >
            <img alt="Living moderno y luminoso de una casa inteligente en Córdoba" className="w-full h-auto object-cover aspect-video opacity-90" src="/secciones/casa-inteligente.webp" loading="lazy" decoding="async" />
          </motion.div>
        </div>
      </section>

      {/* Qué se puede automatizar */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">¿Qué se puede automatizar en una casa?</h2>
        <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-10 text-sm md:text-base">
          Casi todo lo que accionás a diario puede integrarse. Estos son los sistemas más pedidos —y lo mejor es que no hace falta hacer todo de una: se puede empezar por lo que más te mueve y ampliar con el tiempo.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <AutomationItem icon={<Lightbulb className="w-5 h-5 text-primary" />} title="Iluminación" description="Escenas, encendido automático y control de cada ambiente desde el celular o por voz." />
          <AutomationItem icon={<Thermometer className="w-5 h-5 text-primary" />} title="Climatización" description="Aire y calefacción que se ajustan solos según la hora, el clima y quién está en casa." />
          <AutomationItem icon={<Camera className="w-5 h-5 text-primary" />} title="Cámaras y vigilancia" description="Mirá tu casa en vivo desde cualquier lugar y recibí alertas ante movimiento." />
          <AutomationItem icon={<Lock className="w-5 h-5 text-primary" />} title="Accesos y cerraduras" description="Cerraduras inteligentes, portones y códigos temporales para visitas o personal." />
          <AutomationItem icon={<Blinds className="w-5 h-5 text-primary" />} title="Cortinas y persianas" description="Se abren con el sol y se cierran de noche, solas o con un botón." />
          <AutomationItem icon={<Droplets className="w-5 h-5 text-primary" />} title="Pileta y riego" description="Riego según el pronóstico y control de filtrado y luces de la pileta." />
          <AutomationItem icon={<Speaker className="w-5 h-5 text-primary" />} title="Audio multiambiente" description="Música en cada ambiente y experiencias de cine en casa, integradas al sistema." />
          <AutomationItem icon={<Wifi className="w-5 h-5 text-primary" />} title="Redes WiFi" description="Cobertura profesional en toda la casa, la base para que todo funcione sin cortes." />
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline" size="lg">
            <Link to="/servicios">Ver todos nuestros servicios en detalle</Link>
          </Button>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-6 md:py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12">Beneficios de la domótica</h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <BenefitCard icon={<Smartphone className="w-6 h-6 text-primary" />} title="Control total y simple" description="Toda tu casa en un solo lugar: la manejás desde el celular estés donde estés, sin diez apps distintas." delay={0.1} />
          <BenefitCard icon={<Shield className="w-6 h-6 text-green-500" />} title="Seguridad y tranquilidad" description="Cámaras, sensores y alertas en tiempo real. Sabés qué pasa en tu casa aunque no estés." delay={0.2} />
          <BenefitCard icon={<Sparkles className="w-6 h-6 text-secondary" />} title="Más valor para tu casa" description="Una casa integrada se vive —y se percibe— distinto. La domótica bien hecha eleva el valor de la propiedad." delay={0.3} />
          <BenefitCard icon={<Zap className="w-6 h-6 text-yellow-500" />} title="Eficiencia energética" description="Luces que se apagan solas y climatización inteligente que ayuda a cuidar el consumo." delay={0.4} />
          <BenefitCard icon={<Clock className="w-6 h-6 text-blue-500" />} title="Tiempo para vos" description="La casa se ocupa de lo rutinario —cortinas, luces, riego— y vos ganás tiempo." delay={0.5} />
          <BenefitCard icon={<Leaf className="w-6 h-6 text-green-500" />} title="Confort a medida" description="Rutinas y escenas pensadas para tu forma de vivir, no un paquete enlatado igual para cualquier casa." delay={0.6} />
        </div>
      </section>

      {/* Ejemplos */}
      <section className="py-6 md:py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12">La domótica en la vida diaria</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ExampleCard title="Al despertar" description="Las cortinas se abren con la luz del sol y tu música favorita empieza a sonar suavemente. Todo listo para arrancar el día." imageSrc="/secciones/al-despertar.webp" imageAlt="Exterior de una casa moderna con pileta al atardecer" delay={0.1} />
          <ExampleCard title="Reunión en casa" description="Tocás un botón y se activa la escena: luces cálidas, cortinas cerradas y música en el ambiente justo." imageSrc="/secciones/reunion-en-casa.webp" imageAlt="Grupo de amigos disfrutando de una cena en casa" delay={0.2} />
          <ExampleCard title="¿Cómo están los chicos?" description="Estás en el trabajo. Abrís la app y ves todo en vivo desde la cámara del living. Tranquilidad total." imageSrc="/secciones/familia-en-casa.webp" imageAlt="Familia con su bebé en el living de su casa" delay={0.3} />
        </div>
      </section>

      {/* Cuánto cuesta */}
      <section className="max-w-3xl mx-auto py-6 md:py-12">
        <div className="bg-card border border-white/10 p-6 md:p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
            <DollarSign className="w-7 h-7 text-primary mr-2" />
            ¿Cuánto cuesta la domótica en Argentina?
          </h2>
          <div className="space-y-4 text-base md:text-lg text-foreground/80 leading-relaxed">
            <p>
              Es la pregunta que todos hacen, y la respuesta honesta es: <strong>depende</strong>. No por evasivos, sino porque la domótica no es un producto de góndola con precio fijo — es un proyecto que se arma a la medida de tu casa y de lo que querés lograr. Lo que define la inversión es:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>El <strong>tamaño</strong> de la casa y la cantidad de ambientes.</li>
              <li>Qué <strong>sistemas</strong> querés integrar (no es lo mismo solo iluminación que iluminación + clima + seguridad + audio).</li>
              <li>La <strong>etapa</strong>: en obra o remodelación la integración es más prolija y eficiente; sobre una casa terminada también se puede, con otro enfoque.</li>
              <li>La <strong>calidad de los equipos</strong>: trabajamos con productos validados por su durabilidad y estética. Ni los más baratos ni los más caros: los que corresponden.</li>
            </ul>
            <p>
              Un buen marco para pensarlo: la domótica suele representar una fracción pequeña del valor total de una casa premium, y es, al mismo tiempo, de lo que más se usa y se disfruta a diario. Por eso no la vemos como un gasto, sino como parte del valor de la casa.
            </p>
            <p>
              No publicamos "precios de lista" porque cada proyecto es único. Lo que sí hacemos es <strong>asesorarte sin compromiso</strong> y armar un presupuesto claro sobre lo que de verdad te sirve.
            </p>
          </div>
        </div>
      </section>

      {/* Cuándo instalarla */}
      <section className="mb-6 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12">¿Cuándo conviene instalar la domótica?</h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-primary/30 p-6 rounded-xl shadow-lg"
          >
            <div className="flex items-center mb-3">
              <Calendar className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-lg md:text-xl font-semibold">En obra o remodelación (el momento ideal)</h3>
            </div>
            <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
              Cuando la casa está en construcción o reforma, se integra todo desde el cableado: el resultado queda impecable y la tecnología, invisible. Es el momento dorado. Si estás construyendo, es el mejor momento para pensarlo — después, algunas cosas se complican. Es acá donde está nuestro foco.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border border-white/10 p-6 rounded-xl shadow-lg"
          >
            <div className="flex items-center mb-3">
              <Home className="w-6 h-6 text-secondary mr-2" />
              <h3 className="text-lg md:text-xl font-semibold">En una casa ya terminada</h3>
            </div>
            <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
              Si ya vivís en tu casa, también se puede modernizar con soluciones pensadas para no romper de más. Se arranca por lo que más te importa y se puede ampliar con el tiempo. Contanos cómo es tu casa y vemos juntos qué conviene.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-white/5 py-12 md:py-16 rounded-xl text-center my-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Tu casa, a la altura de lo que imaginaste</h2>
          <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
            Te ayudamos a pensar tu casa inteligente a medida, con criterio y sin venderte lo que no te sirve. El primer paso es una charla sin compromiso.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/40 px-10 py-6 text-lg md:px-12 md:py-7 md:text-xl">
            <Link to="/contacto">
              Pedí tu asesoramiento
              <Sparkles className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* FAQ visible */}
      <section className="max-w-3xl mx-auto py-6 md:py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12 flex items-center justify-center">
          <HelpCircle className="w-7 h-7 text-primary mr-2" />
          Preguntas frecuentes
        </h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.3) }}
              className="bg-card border border-white/10 p-5 md:p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-base md:text-lg font-semibold mb-2">{f.q}</h3>
              <p className="text-foreground/70 text-sm md:text-base leading-relaxed">{f.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cierre eficiencia */}
      <section className="py-6 md:py-12">
        <div className="container mx-auto px-4">
          <div className="bg-card border border-white/10 p-6 md:p-8 rounded-xl shadow-lg">
            <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center">
              <ShieldCheck className="w-6 h-6 text-green-500 mr-2" />
              Domótica con criterio
            </h2>
            <div className="space-y-4 text-foreground/80 text-sm md:text-base leading-relaxed">
              <p>
                En Nubiq no vendemos por vender. Asesoramos: armamos tu proyecto sobre lo que de verdad te sirve, con productos elegidos por su calidad y una estética cuidada donde no se ven cables ni "engendros". Y no terminamos con la instalación — te acompañamos después, con monitoreo y soporte.
              </p>
              <p className="flex items-center flex-wrap gap-2 text-foreground/70">
                <Sun className="w-5 h-5 text-yellow-500" />
                <span>Dato: una casa inteligente bien configurada puede reducir de forma notable el consumo de energía, apagando lo que no se usa y aprovechando la luz natural.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default WhatIsDomoticsPage;
