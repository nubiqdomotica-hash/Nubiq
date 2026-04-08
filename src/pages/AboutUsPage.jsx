import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, ShieldCheck, HeartHandshake as Handshake, BrainCircuit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ValueCard = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-card p-8 rounded-xl border border-white/10 shadow-lg text-center h-full"
  >
    <div className="inline-block p-4 bg-primary/10 text-primary rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
    <p className="text-foreground/70">{description}</p>
  </motion.div>
);

const AboutUsPage = () => {
  const founderImage = "https://horizons-cdn.hostinger.com/399f02cf-d238-442b-8230-bd06d51cc905/16c09fd023f0ec8d19e239844877fe24.jpg";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-8 space-y-20 md:space-y-28"
    >
      <section className="text-center">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Expertos en Conectar tu Mundo
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto"
        >
          En Nubiq, combinamos pasión por la tecnología y experiencia técnica para crear soluciones de domótica que transforman espacios, priorizando la confianza, la calidad y la satisfacción del cliente.
        </motion.p>
      </section>

      <section className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card/50 border border-white/10 rounded-2xl overflow-hidden text-center group"
        >
          <div className="relative h-80 md:h-96 overflow-hidden">
            <img
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              alt="Lucas Carranza y Franco Oppido, co-fundadores de Nubiq"
              src={founderImage}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-1">Lucas Carranza & Franco Oppido</h3>
            <p className="text-primary font-medium">Co-Fundadores.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="space-y-8"
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center">
              <Target size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-1">Nuestra Misión</h2>
              <p className="text-foreground/70">Ofrecer soluciones de domótica innovadoras y fiables que simplifiquen la vida de nuestros clientes, garantizando confort, seguridad y eficiencia energética a través de un servicio profesional y personalizado.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
              <Lightbulb size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-1">Nuestra Visión</h2>
              <p className="text-foreground/70">Ser la empresa líder en domótica en la región, reconocida por nuestra excelencia técnica, compromiso con el cliente y por hacer de la tecnología un aliado accesible para cada hogar y negocio.</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nuestros Valores Fundamentales</h2>
          <p className="text-md text-foreground/70 mt-2">Los pilares que guían cada proyecto.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ValueCard
            icon={<ShieldCheck size={32} />}
            title="Confianza y Seguridad"
            description="La tranquilidad de nuestros clientes es nuestra máxima prioridad. Implementamos sistemas robustos y seguros."
            delay={0.2}
          />
          <ValueCard
            icon={<Handshake size={32} />}
            title="Compromiso con el Cliente"
            description="Establecemos relaciones a largo plazo, ofreciendo un soporte cercano y garantizando la satisfacción total."
            delay={0.3}
          />
          <ValueCard
            icon={<BrainCircuit size={32} />}
            title="Innovación y Experiencia"
            description="Nos mantenemos a la vanguardia de la tecnología para ofrecer las soluciones más eficientes y avanzadas del mercado."
            delay={0.4}
          />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/40 border border-white/5 rounded-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">¿Listo para transformar tu espacio?</h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
          Permitinos mostrarte cómo la tecnología puede trabajar para vos. Contactanos para una asesoría sin compromiso y descubrí el potencial de un hogar verdaderamente inteligente.
        </p>
        <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/30 px-10 py-7 text-lg">
          <Link to="/contacto">
            Solicitar Asesoramiento Profesional
          </Link>
        </Button>
      </section>
    </motion.div>
  );
};

export default AboutUsPage;