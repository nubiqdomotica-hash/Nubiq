import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Smile, Wrench, Users, Lightbulb, HelpCircle, Sparkles, ShieldCheck, Zap, Thermometer, Smartphone, Wind, Lock, Video, Droplet, BarChart2, Wifi, Refrigerator, Home, Building, Hotel as Apartment, MoreHorizontal } from 'lucide-react';
const FeatureCard = ({
  icon,
  title,
  description,
  delay
}) => <motion.div initial={{
  opacity: 0,
  y: 20
}} whileInView={{
  opacity: 1,
  y: 0
}} viewport={{
  once: true,
  amount: 0.5
}} transition={{
  duration: 0.5,
  delay
}} className="bg-card p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-primary/20 transition-all duration-300 flex flex-col items-center text-center transform hover:scale-105">
    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 text-primary rounded-full mb-6 shadow-inner">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
    <p className="text-foreground/70 text-sm leading-relaxed">{description}</p>
  </motion.div>;
const ControlIcon = ({
  icon,
  label,
  delay
}) => <motion.div initial={{
  opacity: 0,
  scale: 0.5
}} whileInView={{
  opacity: 1,
  scale: 1
}} viewport={{
  once: true,
  amount: 0.5
}} transition={{
  duration: 0.4,
  delay
}} className="flex flex-col items-center gap-2 text-center">
    <div className="flex items-center justify-center w-16 h-16 bg-muted/50 rounded-full text-primary border border-white/10">
      {icon}
    </div>
    <span className="text-xs text-foreground/80">{label}</span>
  </motion.div>;

const SpaceIcon = ({ icon, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, delay }}
    className="flex flex-col items-center text-center p-3 rounded-xl"
  >
    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 text-primary rounded-full mb-2 shadow-inner">
      {icon}
    </div>
    <h3 className="text-base font-semibold text-foreground">{label}</h3>
  </motion.div>
);

const HomePage = () => {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut'
      }
    }
  };
  return <motion.div initial="hidden" animate="visible" exit={{
    opacity: 0
  }} variants={containerVariants} className="space-y-20 md:space-y-28">
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={containerVariants} className="text-center md:text-left">
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-foreground leading-tight">
              El futuro de tu hogar, <span className="text-primary">hoy</span>.
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto md:mx-0 mb-10">
              Bienvenido a Nubiq Domótica. Convertimos tu lugar en un espacio inteligente, fácil de usar y adaptado a vos. Nos ocupamos de cada detalle para que disfrutes al máximo, mientras la tecnología se encarga del resto.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/30 transform hover:scale-105 transition-all duration-300 px-8 py-6 text-lg rounded-full">
                <Link to="/contacto">
                  Solicitar Asesoría
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 px-8 py-6 text-lg rounded-full">
                <Link to="/servicios">
                  Ver Servicios
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div className="relative h-80 md:h-full w-full" initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0.16, 1, 0.3, 1]
        }}>
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 transform md:rotate-3 transition-transform duration-500 hover:rotate-0">
              <img alt="Una mano sosteniendo un smartphone que controla las luces y la temperatura de una sala de estar moderna y elegante" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1608377205619-03a0b4c4e270" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/20 backdrop-blur-sm border border-white/5 rounded-2xl">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div className="relative h-64 md:h-80 w-full order-last md:order-first" initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true,
            amount: 0.5
          }} transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}>
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl shadow-secondary/20">
                <img alt="Diagrama abstracto de dispositivos inteligentes conectados en un hogar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1666401565408-9b6b0741f0d6" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true,
            amount: 0.5
          }} transition={{
            duration: 0.7
          }} className="md:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-center md:text-left">La magia de la <span className="text-primary">automatización</span></h2>
              <p className="text-lg text-foreground/80 mb-6 text-center md:text-left">Los dispositivos interactúan y se envían señales entre ellos para funcionar automáticamente, asegurando el máximo confort en tu espacio. La domótica busca interconectar dispositivos para optimizar la eficiencia energética, seguridad y tu bienestar.</p>
              <p className="text-foreground/70 text-center md:text-left">Imaginá llegar a casa y que las luces se enciendan solas, la temperatura se ajuste a tu gusto y tu música favorita comience a sonar. Que las persianas se cierren automáticamente al anochecer y que cuando despiertes la piscina ya este filtrada. Todo esto y mas es posible con domótica.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        amount: 0.3
      }} transition={{
        duration: 0.7
      }} className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Control total en <span className="text-primary">una sola app</span></h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">Integramos todos tus dispositivos en una única aplicación, asegurando que tengas el control total de tu hogar en la palma de tu mano.</p>
        </motion.div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-x-4 gap-y-8">
          <ControlIcon icon={<Lightbulb size={32} />} label="Luces" delay={0.1} />
          <ControlIcon icon={<Thermometer size={32} />} label="Clima" delay={0.2} />
          <ControlIcon icon={<Wind size={32} />} label="Cortinas" delay={0.3} />
          <ControlIcon icon={<Lock size={32} />} label="Cerraduras" delay={0.4} />
          <ControlIcon icon={<Video size={32} />} label="Cámaras" delay={0.5} />
          <ControlIcon icon={<Droplet size={32} />} label="Riego" delay={0.6} />
          <ControlIcon icon={<BarChart2 size={32} />} label="Consumos" delay={0.7} />
          <ControlIcon icon={<Refrigerator size={32} />} label="Electro" delay={0.8} />
        </div>
      </section>

      <section className="py-12 md:py-16 container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        amount: 0.3
      }} transition={{
        duration: 0.7
      }} className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">¿Por qué elegir <span className="text-primary">Nubiq</span>?</h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            Te acompañamos en cada paso para que disfrutes de un hogar que trabaja para vos.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard icon={<Wrench size={32} />} title="Instalación Sin Obras" description="Modernizá tu hogar sin el estrés y costo de las remodelaciones. Nuestros sistemas de domótica se adaptan a tu espacio actual de forma sencilla y elegante." delay={0.2} />
          <FeatureCard icon={<Smile size={32} />} title="Bienestar y Confort Total" description="Nos enfocamos en entender tus necesidades para crear soluciones de automatización que realmente mejoren tu día a día y tu calidad de vida." delay={0.4} />
          <FeatureCard icon={<Users size={32} />} title="Procesos Claros y Adaptables" description="Te acompañamos con un enfoque personalizado en cada paso, asegurando que la tecnología de tu hogar inteligente trabaje para vos, no al revés." delay={0.6} />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/20 backdrop-blur-sm border border-white/5 rounded-2xl">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          amount: 0.5
        }} transition={{
          duration: 0.7
        }}>
            <HelpCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-10 text-foreground">¿No sabés por dónde empezar?</h2>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 transition-all duration-300 text-white shadow-lg hover:shadow-secondary/20 transform hover:scale-105 px-8 py-6 text-lg md:px-12 md:py-7 md:text-xl rounded-full">
              <Link to="/que-es-domotica">
                Nosotros te lo explicamos
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
      
      <section className="py-16 md:py-20 bg-muted/40 border border-white/5 rounded-2xl">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          amount: 0.5
        }} transition={{
          duration: 0.7
        }}>
            <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 text-foreground">¿Listo para transformar tu hogar?</h2>
            <p className="text-base md:text-lg text-foreground/70 max-w-xl mx-auto mb-8 md:mb-10">
              Contactanos hoy mismo para una consulta gratuita. Descubrí cómo podemos hacer tu vida más fácil y tu hogar más inteligente con domótica, sin complicaciones y a bajo costo.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 transition-all duration-300 text-primary-foreground shadow-xl hover:shadow-primary/30 transform hover:scale-105 px-8 py-6 text-lg rounded-full">
              <Link to="/contacto">
                Solicitá tu consulta
                <ArrowRight className="ml-3 h-5 w-5 hidden sm:inline" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </motion.div>;
};
export default HomePage;