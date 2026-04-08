import React from 'react';
import { motion } from 'framer-motion';
import { Search, Wrench, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getWhatsAppLink } from '@/utils/getWhatsAppLink';

const TimelineStep = ({ number, icon, title, description, delay, isLast }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay }}
    className="relative flex gap-6 pb-12"
  >
    {!isLast && (
      <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
    )}
    
    <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
      {number}
    </div>

    <div className="flex-1">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-primary/10 rounded-lg">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-foreground">{title}</h3>
      </div>
      <p className="text-foreground/70 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const TurnkeySection = () => {
  const handleWhatsAppClick = () => {
    window.open(getWhatsAppLink('timeline'), '_blank');
  };

  const steps = [
    {
      number: 1,
      icon: <Search className="w-5 h-5 text-primary" />,
      title: "Relevamiento",
      description: "Visitamos tu propiedad, escuchamos tus necesidades y diseñamos una solución personalizada que se adapta a tu estilo de vida y presupuesto."
    },
    {
      number: 2,
      icon: <Wrench className="w-5 h-5 text-primary" />,
      title: "Proyecto e instalación",
      description: "Nuestro equipo técnico instala todos los dispositivos con prolijidad profesional. Cableado oculto, integración perfecta, sin obras invasivas."
    },
    {
      number: 3,
      icon: <Settings className="w-5 h-5 text-primary" />,
      title: "Configuración + soporte",
      description: "Configuramos escenas y rutinas, te capacitamos en el uso del sistema y te brindamos soporte continuo para que aproveches todo el potencial."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Proceso <span className="text-primary">llave en mano</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Desde la primera visita hasta el soporte continuo, nos ocupamos de todo para que vos solo disfrutes.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto mb-12">
          {steps.map((step, index) => (
            <TimelineStep 
              key={step.number} 
              {...step} 
              delay={index * 0.2}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-8 py-6 text-lg rounded-full"
          >
            Quiero mi asesoramiento
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TurnkeySection;