import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer, delay }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-lg hover:border-primary/30 transition-all duration-300"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/20 transition-colors"
      >
        <h3 className="text-lg font-semibold text-foreground pr-4">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5">
              <p className="text-foreground/70 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "¿Se puede hacer por etapas?",
      answer: "Sí, completamente. Muchos clientes empiezan automatizando el living y luego van agregando dormitorios, cocina o seguridad. Diseñamos el sistema pensando en escalabilidad, para que puedas crecer sin perder lo ya instalado."
    },
    {
      question: "¿Requiere obra?",
      answer: "En la mayoría de los casos, no. Los dispositivos LifeSmart se integran sobre la instalación eléctrica existente. Solo en casos específicos (motorización de cortinas o cableado especial) puede requerirse obra mínima. Te informamos todo en el relevamiento inicial."
    },
    {
      question: "¿Qué mantenimiento tiene?",
      answer: "Prácticamente ninguno. Los dispositivos reciben actualizaciones automáticas de firmware y tienen años de vida útil. Solo es necesario mantener limpio el hub central y verificar baterías de sensores una vez al año. Ofrecemos plan de mantenimiento preventivo opcional."
    },
    {
      question: "¿Qué pasa ante cortes de luz/internet?",
      answer: "Los dispositivos con batería interna (sensores, algunos interruptores) siguen funcionando localmente. Al volver la luz, el sistema se reconecta automáticamente. Sin internet, perdés el control remoto pero las escenas y automatizaciones locales siguen activas. Todo vuelve a la normalidad al restaurarse la conexión."
    },
    {
      question: "¿Cuánto tarda un proyecto?",
      answer: "Depende del alcance. Una instalación básica (living + 2 dormitorios con luces y clima) puede completarse en 1-2 días. Proyectos más complejos (casa completa con seguridad, cortinas y riego) pueden tomar 1-2 semanas. Te damos un cronograma claro en el presupuesto."
    },
    {
      question: "¿Soporte y garantía?",
      answer: "Todos los productos LifeSmart tienen garantía del fabricante (1-2 años según el dispositivo). Nuestra instalación tiene garantía de 6 meses. Además, ofrecemos soporte técnico remoto sin costo por el primer año y planes de mantenimiento extendido. Estamos a un WhatsApp de distancia."
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Preguntas <span className="text-primary">frecuentes</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre Nubiq+ y LifeSmart.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;