import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Thermometer, Wind, Lock, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AutomationCategoryCard = ({ icon, title, description, imageUrl, imageAlt, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
  >
    <div className="relative h-56 w-full">
      <img src={imageUrl} alt={imageAlt} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-white p-2">
        <div className="bg-primary/80 p-3 rounded-full inline-block mb-2 backdrop-blur-sm shadow-md">
          {icon}
        </div>
        <h3 className="text-2xl font-bold drop-shadow-md">{title}</h3>
      </div>
    </div>
    <div className="p-6 flex-grow">
      <p className="text-foreground/70 text-sm">{description}</p>
    </div>
  </motion.div>
);

const AutomationsPage = () => {
  const automationCategories = [
    {
      icon: <Lightbulb size={28} />,
      title: "Iluminación Inteligente",
      description: "Controlá el ambiente de cada habitación. Programá horarios, ajustá intensidades y creá escenas personalizadas con tu voz o desde tu móvil.",
      imageUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/399f02cf-d238-442b-8230-bd06d51cc905/950d85665435cc140d4842f067dfe206.webp",
      imageAlt: "Terraza moderna al atardecer con iluminación ambiental y muebles de exterior",
      delay: 0.1
    },
    {
      icon: <Thermometer size={28} />,
      title: "Climatización Eficiente",
      description: "Mantené la temperatura perfecta y ahorrá energía. Termostatos inteligentes que se adaptan a tu rutina y se ajustan automáticamente.",
      imageUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/399f02cf-d238-442b-8230-bd06d51cc905/d83b5b4bb763e728f7e6af090a8bb20d.jpg",
      imageAlt: "Mujer ajustando un termostato inteligente en una pared de una cocina moderna",
      delay: 0.2
    },
    {
      icon: <Wind size={28} />,
      title: "Persianas y Cortinas",
      description: "Despertá con la luz natural o protegé tu privacidad con un solo comando. Automatizá tus persianas y cortinas para mayor confort y seguridad.",
      imageUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/399f02cf-d238-442b-8230-bd06d51cc905/8669b2d2b91f8cccef8461137b06e78d.jpg",
      imageAlt: "Sala de estar con persiana de bambú en una ventana grande que da a un paisaje verde",
      delay: 0.3
    },
    {
      icon: <Lock size={28} />,
      title: "Seguridad y Acceso",
      description: "Protegé lo que más importa con cerraduras inteligentes y sensores de movimiento. Recibí notificaciones en tiempo real estés donde estés.",
      imageUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/399f02cf-d238-442b-8230-bd06d51cc905/c31ada68f2030aa3f812b1ad3d27045a.webp",
      imageAlt: "Cerradura inteligente con teclado numérico y lector de huellas en una puerta de madera oscura, interior de sala de estar de lujo visible al fondo.",
      delay: 0.4
    },
    {
      icon: <Video size={28} />,
      title: "Vigilancia Inteligente",
      description: "Monitoreá tu hogar desde cualquier lugar con cámaras de alta definición. Detección de movimiento, grabación y comunicación bidireccional.",
      imageUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/399f02cf-d238-442b-8230-bd06d51cc905/792a7c17ea108834f5fe2c0c5f9bfb9c.png",
      imageAlt: "Tres cámaras de seguridad blancas montadas en la esquina de un edificio moderno con revestimiento metálico oscuro, bajo un cielo azul claro.",
      delay: 0.5
    },
  ];

  const topCategories = automationCategories.slice(0, 3);
  const bottomCategories = automationCategories.slice(3);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-8"
    >
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Descubrí Nuestras Automatizaciones
        </h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Explorá cómo podemos transformar cada rincón de tu hogar en un espacio más inteligente, cómodo y eficiente, adaptado a tus necesidades y presupuesto.
        </p>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {topCategories.map((category) => (
          <AutomationCategoryCard
            key={category.title}
            icon={category.icon}
            title={category.title}
            description={category.description}
            imageUrl={category.imageUrl}
            imageAlt={category.imageAlt}
            delay={category.delay}
          />
        ))}
      </div>

      {bottomCategories.length > 0 && (
        <div className="grid md:grid-cols-2 gap-8 lg:flex lg:justify-center lg:gap-8">
          {bottomCategories.map((category) => (
            <div key={category.title} className="lg:w-1/3"> {/* Ajusta lg:w-1/3 si tienes 2 o 3 items abajo, para 2 sería lg:w-auto o lg:w-1/2 si quieres que ocupen más espacio */}
              <AutomationCategoryCard
                icon={category.icon}
                title={category.title}
                description={category.description}
                imageUrl={category.imageUrl}
                imageAlt={category.imageAlt}
                delay={category.delay}
              />
            </div>
          ))}
        </div>
      )}

      <section className="mt-20 py-16 bg-muted/50 rounded-xl text-center">
        <h2 className="text-3xl font-bold mb-6 text-foreground">¿Tenés una idea en mente?</h2>
        <p className="text-lg text-foreground/70 max-w-xl mx-auto mb-8">
          Contanos tus necesidades específicas. Ofrecemos soluciones personalizadas para adaptarnos perfectamente a tu estilo de vida y a tu hogar, siempre buscando la opción más sencilla y económica para vos.
        </p>
        <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-primary-foreground shadow-lg">
          <Link to="/contacto">
            Solicitar Asesoramiento Personalizado
          </Link>
        </Button>
      </section>
    </motion.div>
  );
};

export default AutomationsPage;