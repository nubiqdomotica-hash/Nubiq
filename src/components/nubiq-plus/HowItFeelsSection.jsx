import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Palette, Smartphone } from 'lucide-react';

const FeatureBlock = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ scale: 1.05, y: -5 }}
    className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-300"
  >
    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mb-4 mx-auto">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-center mb-3 text-foreground">{title}</h3>
    <p className="text-foreground/70 text-center text-sm">{description}</p>
  </motion.div>
);

const HowItFeelsSection = () => {
  const features = [
    {
      icon: <Sparkles className="w-7 h-7 text-primary" />,
      title: "Escenas perfectas",
      description: "Cine, cena romántica, fiesta: un toque y todo se ajusta automáticamente."
    },
    {
      icon: <Calendar className="w-7 h-7 text-primary" />,
      title: "Rutinas por estilo de vida",
      description: "Despertá, salí o llegá a casa: tu hogar se anticipa a cada momento."
    },
    {
      icon: <Palette className="w-7 h-7 text-primary" />,
      title: "Estética premium",
      description: "Pulsadores de vidrio, sensores invisibles: tecnología que embellece."
    },
    {
      icon: <Smartphone className="w-7 h-7 text-primary" />,
      title: "Control simple",
      description: "Una app intuitiva para todo: luces, clima, cortinas, seguridad."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Cómo se <span className="text-primary">siente</span> Nubiq+
              </h2>
              <p className="text-lg text-foreground/70">
                Más allá de la tecnología, es la experiencia de vivir en un hogar que te entiende y se adapta a vos.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <FeatureBlock key={feature.title} {...feature} delay={index * 0.15} />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1701170846728-4e7c1b15c4ef" 
              alt="Sala moderna de lujo con vista a la ciudad, silla azul y plantas"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItFeelsSection;