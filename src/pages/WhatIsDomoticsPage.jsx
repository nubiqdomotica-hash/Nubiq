import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Zap, Shield, Clock, Leaf, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
        <div className="p-3 bg-primary/10 rounded-full">
          {icon}
        </div>
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
      <img  src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" />
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

const WhatIsDomoticsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
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
          Es la tecnología que hace tu casa más inteligente y tu vida más fácil. Imaginate controlar luces, temperatura, seguridad y más, desde tu celular o con la voz.
        </motion.p>
      </section>

      <section className="mb-12 md:mb-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
              ¿Cómo funciona?
            </h2>
            <div className="bg-card border border-white/10 p-6 md:p-8 rounded-xl shadow-lg">
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
                Es más simple de lo que pensás. Instalamos dispositivos que se conectan a tu WiFi y se controlan desde una app. No necesitás obras ni cambios estructurales.
              </p>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                Con sensores y una buena conexión, tu casa “aprende” a adaptarse a vos. Podés programar horarios o crear escenas automáticas. Todo funciona en conjunto y sin complicaciones.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-xl overflow-hidden shadow-2xl border border-white/10 order-1 md:order-2"
          >
            <img  alt="Casa inteligente moderna con iconos de domótica flotando alrededor" className="w-full h-auto object-cover aspect-video opacity-90" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/399f02cf-d238-442b-8230-bd06d51cc905/d67af90fd2c33db20c69ef7e9e4dc498.png" />
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Beneficios de la Domótica</h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <BenefitCard
            icon={<Smartphone className="w-6 h-6 text-primary" />}
            title="Control Total"
            description="Manejá toda tu casa desde tu celular, estés donde estés."
            delay={0.1}
          />
          <BenefitCard
            icon={<Zap className="w-6 h-6 text-yellow-500" />}
            title="Ahorro Energético"
            description="Reducí tu consumo con programaciones inteligentes."
            delay={0.2}
          />
          <BenefitCard
            icon={<Shield className="w-6 h-6 text-green-500" />}
            title="Mayor Seguridad"
            description="Monitoreá tu casa y recibí alertas en tiempo real."
            delay={0.3}
          />
          <BenefitCard
            icon={<Clock className="w-6 h-6 text-blue-500" />}
            title="Ahorro de Tiempo"
            description="Automatizá tareas rutinarias y ganá tiempo para vos."
            delay={0.4}
          />
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Ejemplos en la Vida Diaria</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ExampleCard
            title="Al Despertar"
            description="Las cortinas se abren con la luz del sol, y tu música favorita comienza a sonar suavemente. Todo listo para empezar el día."
            imageSrc="https://storage.googleapis.com/hostinger-horizons-assets-prod/399f02cf-d238-442b-8230-bd06d51cc905/5f1a8e9e91ed22e9834b5084a8082372.png"
            imageAlt="Exterior de una casa moderna de dos pisos con un camino de entrada de hormigón y un garaje para dos coches al atardecer"
            delay={0.1}
          />
          <ExampleCard
            title="Reunión en Casa"
            description="Tocás un botón y se activa la escena: luces cálidas, cortinas cerradas y música."
            imageSrc="https://storage.googleapis.com/hostinger-horizons-assets-prod/399f02cf-d238-442b-8230-bd06d51cc905/f8b59ae5e688546afaee01e94ad83c1f.png"
            imageAlt="Grupo de amigos disfrutando de una cena al aire libre por la noche con luces colgantes"
            delay={0.2}
          />
          <ExampleCard
            title="¿Cómo están los chicos?"
            description="Estás en el trabajo. Abrís la app y ves todo en vivo desde la cámara del living. Tranquilidad total."
            imageSrc="https://storage.googleapis.com/hostinger-horizons-assets-prod/399f02cf-d238-442b-8230-bd06d51cc905/85367c9b8984386919d10730985b1e8e.png"
            imageAlt="Dos niños pequeños jugando en el suelo de un living luminoso y moderno"
            delay={0.3}
          />
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-white/5 py-12 md:py-16 rounded-xl text-center my-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">¿Listo para dar el primer paso?</h2>
          <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
            Empezá tu viaje hacia un hogar más inteligente. Te ayudamos a elegir las mejores opciones para tu casa y presupuesto.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/40 px-10 py-6 text-lg md:px-12 md:py-7 md:text-xl">
            <Link to="/contacto">
              ¡Consultanos!
              <Sparkles className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-card border border-white/10 p-6 md:p-8 rounded-xl shadow-lg">
            <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center">
              <Leaf className="w-6 h-6 text-green-500 mr-2" />
              ¿Sabías que...?
            </h2>
            <div className="space-y-4 text-foreground/80 text-sm md:text-base">
              <p>
                La domótica no solo hace tu vida más cómoda, también ayuda al medio ambiente. Puede reducir hasta un 30% el consumo de energía con:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Apagado automático de luces en habitaciones vacías.</li>
                <li>Ajuste inteligente de la climatización.</li>
                <li>Optimización del uso de electrodomésticos.</li>
                <li>Control de cortinas para aprovechar la luz natural.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default WhatIsDomoticsPage;