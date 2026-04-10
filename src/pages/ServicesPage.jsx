import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Thermometer, Wind, Lock, Video, Building, Users, Package, Droplets, Wifi, Speaker, Zap as EnergyZap, Download, CheckCircle, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return isMobile;
};

const ServiceDetailCard = ({
  icon,
  title,
  description,
  imageUrl,
  imageAlt,
  features,
  imageLeft = false,
  delay,
  imageHeightClass = 'h-64 md:h-full',
  matchTextHeight = false
}) => {
  const isMobile = useIsMobile();
  const [isExpanded, setIsExpanded] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay }
    }
  };

  const contentVariants = {
    collapsed: { height: 0, opacity: 0, marginTop: 0 },
    expanded: { height: 'auto', opacity: 1, marginTop: '1.5rem' }
  };

  const handleToggle = () => {
    if (isMobile) {
      setIsExpanded(!isExpanded);
    }
  };

  const imageContainerClass = matchTextHeight
    ? `relative h-52 md:h-auto md:min-h-full w-full overflow-hidden ${imageLeft ? 'md:order-first' : 'md:order-last'}`
    : `relative ${imageHeightClass} w-full overflow-hidden ${imageLeft ? 'md:order-first' : 'md:order-last'}`;

  const textContainerClass = matchTextHeight
    ? 'p-8 h-full flex flex-col justify-center'
    : 'p-8';

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-card/50 border border-white/10 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30"
    >
      <div className={`grid md:grid-cols-2 ${matchTextHeight ? 'items-stretch' : 'items-center'}`}>
        <div className={imageContainerClass}>
          <img src={imageUrl} alt={imageAlt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <div
          className={textContainerClass}
          onClick={handleToggle}
          role={isMobile ? 'button' : 'article'}
          tabIndex={isMobile ? 0 : -1}
          onKeyDown={isMobile ? (e) => e.key === 'Enter' && handleToggle() : undefined}
        >
          <div className="flex items-center mb-4">
            <div className="bg-primary/80 p-3 rounded-full inline-block mr-4 backdrop-blur-sm shadow-md text-primary-foreground">
              {icon}
            </div>
            <h3 className="text-2xl font-bold">{title}</h3>
          </div>
          <p className="text-foreground/70">{description}</p>

          <AnimatePresence>
            {(isExpanded || !isMobile) && (
              <motion.div
                key="features"
                initial={isMobile ? 'collapsed' : 'expanded'}
                animate="expanded"
                exit="collapsed"
                variants={contentVariants}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <ul className="space-y-3 md:mt-6">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          {isMobile && (
            <motion.div className="flex justify-center mt-4 text-primary">
              <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                <ChevronDown size={24} />
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const DeveloperBenefitCard = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-card p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-secondary/20 transition-shadow duration-300 h-full"
  >
    <div className="flex items-center mb-4">
      <div className="p-3 bg-gradient-to-r from-secondary to-orange-500 text-white rounded-full mr-4">
        {icon}
      </div>
      <h4 className="text-lg sm:text-xl font-semibold text-foreground">{title}</h4>
    </div>
    <p className="text-foreground/70">{description}</p>
  </motion.div>
);

const ServicesPage = () => {
  const services = [
    {
      icon: <Lightbulb size={28} />,
      title: 'Iluminación Inteligente',
      description: 'Transformá la atmósfera de tus espacios con un control total sobre la luz. Creá ambientes perfectos para cada momento, desde una cena romántica hasta una noche de películas.',
      imageUrl: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/399f02cf-d238-442b-8230-bd06d51cc905/950d85665435cc140d4842f067dfe206.webp',
      imageAlt: 'Terraza moderna al atardecer con iluminación ambiental y muebles de exterior',
      features: [
        'Control de intensidad y color desde tu celular o con la voz.',
        'Creación de escenas personalizadas para cualquier ocasión.',
        'Programación de encendido y apagado para simular presencia y ahorrar energía.',
        'Sensores que encienden luces automáticamente según la hora del día.'
      ],
      imageLeft: false
    },
    {
      icon: <Thermometer size={28} />,
      title: 'Climatización Eficiente',
      description: 'Disfrutá de la temperatura ideal en todo momento y reducí tu consumo energético. Nuestros sistemas aprenden de tus hábitos para optimizar el confort y el ahorro.',
      imageUrl: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/399f02cf-d238-442b-8230-bd06d51cc905/d83b5b4bb763e728f7e6af090a8bb20d.jpg',
      imageAlt: 'Mujer ajustando un termostato inteligente en una pared de una cocina moderna',
      features: [
        'Termostatos inteligentes que se adaptan a tu rutina diaria.',
        'Control remoto de aires acondicionados y calefacción.',
        "Modo 'Ausente' para maximizar el ahorro cuando no estás en casa.",
        'Integración con sensores de ventanas para evitar desperdicio de energía.'
      ],
      imageLeft: true
    },
    {
      icon: <Wind size={28} />,
      title: 'Persianas y Cortinas',
      description: 'Gestioná la luz natural y tu privacidad con un solo toque. Automatizá tus cortinas para que trabajen para vos, mejorando la seguridad y la eficiencia energética.',
      imageUrl: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/399f02cf-d238-442b-8230-bd06d51cc905/8669b2d2b91f8cccef8461137b06e78d.jpg',
      imageAlt: 'Sala de estar con persiana de bambú en una ventana grande que da a un paisaje verde',
      features: [
        'Apertura programada para despertar con la luz del sol.',
        'Control por voz para ajustes rápidos y cómodos.',
        'Cierre automático al anochecer para mayor privacidad.',
        'Protección de tus muebles del sol directo en horas pico.'
      ],
      imageLeft: false,
      imageHeightClass: 'h-48 md:h-72'
    },
    {
      icon: <Lock size={28} />,
      title: 'Seguridad y Acceso',
      description: 'Sentite seguro sabiendo que tu hogar está protegido. Controlá quién entra y sale, y recibí alertas instantáneas ante cualquier actividad sospechosa.',
      imageUrl: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/399f02cf-d238-442b-8230-bd06d51cc905/c31ada68f2030aa3f812b1ad3d27045a.webp',
      imageAlt: 'Cerradura inteligente con teclado numérico y lector de huellas en una puerta de madera oscura',
      features: [
        'Cerraduras inteligentes con apertura por código, huella o celular. Olvidate de las llaves.',
        'Creación de accesos temporales para visitas o personal de servicio.',
        'Sensores de apertura en puertas y ventanas con notificaciones en tiempo real.',
        'Integración con cámaras para verificar quién está en la puerta.'
      ],
      imageLeft: true
    },
    {
      icon: <Video size={28} />,
      title: 'Vigilancia Inteligente',
      description: 'Mantené un ojo en tu propiedad desde cualquier parte del mundo. Nuestras cámaras inteligentes te ofrecen tranquilidad con video de alta calidad y funciones avanzadas.',
      imageUrl: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/399f02cf-d238-442b-8230-bd06d51cc905/792a7c17ea108834f5fe2c0c5f9bfb9c.png',
      imageAlt: 'Tres cámaras de seguridad blancas montadas en la esquina de un edificio moderno',
      features: [
        'Visualización en vivo y grabaciones en la nube.',
        'Detección inteligente de personas, vehículos y paquetes.',
        'Comunicación de audio bidireccional para hablar con quien esté allí.',
        'Zonas de actividad personalizables para reducir falsas alarmas.'
      ],
      imageLeft: false
    },
    {
      icon: <Droplets size={28} />,
      title: 'Pileta y Riego',
      description: 'Olvidate del mantenimiento manual. Automatizá el cuidado de tu pileta y jardín para que siempre luzcan impecables, ahorrando agua y esfuerzo.',
      imageUrl: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/399f02cf-d238-442b-8230-bd06d51cc905/65d24b382c8cbca974997fadc00545e7.png',
      imageAlt: 'Jardín con sistema de riego y pileta automatizada',
      features: [
        'Control del sistema de filtrado y luces de la pileta.',
        'Riego automático basado en el pronóstico del tiempo.',
        'Despertá con la pileta filtrada.',
        'Encendé las luces de la pileta automáticamente al atardecer.'
      ],
      imageLeft: true
    },
    {
      icon: <Wifi size={28} />,
      title: 'Redes WiFi Profesionales',
      description: 'Disfrutá de una conexión estable, rápida y con cobertura total en cada ambiente. Diseñamos redes WiFi de nivel profesional para hogares, oficinas y proyectos de alta exigencia.',
      imageUrl: '/redes-wifi-profesionales.jpg',
      imageAlt: 'Rack de red profesional con cableado organizado y equipamiento de conectividad',
      features: [
        'Cobertura uniforme en toda la propiedad, sin zonas muertas ni cortes inesperados.',
        'Instalación de puntos de acceso y equipos de alto rendimiento según la necesidad de cada espacio.',
        'Redes separadas para familia, invitados y dispositivos inteligentes para mayor seguridad y orden.',
        'Optimización para streaming, videollamadas, domótica y trabajo remoto sin interrupciones.'
      ],
      imageLeft: false,
      imageHeightClass: 'h-52 md:h-[30rem]'
    },
    {
      icon: <Speaker size={28} />,
      title: 'Sistema de Audio',
      description: 'Convertí cada ambiente en una experiencia sonora de primer nivel. Diseñamos sistemas de audio a medida para hogares, con sonido envolvente, distribución multiambiente y configuraciones de cine en casa con terminaciones premium.',
      imageUrl: '/sistema-audio.jpg',
      imageAlt: 'Sala de cine en casa con sistema de audio envolvente y parlantes distribuidos',
      features: [
        'Sistemas de sonido envolvente para livings, salas multimedia y espacios de entretenimiento.',
        'Configuraciones de nivel cine para disfrutar películas, recitales y videojuegos con máxima inmersión.',
        'Instalación prolija de parlantes, subwoofers y amplificación con integración estética al hogar.',
        'Control simple desde el celular, automatizaciones y escenas personalizadas para cine, música o reuniones.'
      ],
      imageLeft: true,
      imageHeightClass: 'h-52 md:h-full',
      matchTextHeight: true
    }
  ];

  const developerBenefits = [
    {
      icon: <Building size={24} />,
      title: 'Diferenciador de mercado',
      description: 'Incorporar domótica en viviendas nuevas hace que tus proyectos se destaquen ante compradores exigentes. Un hogar inteligente en Córdoba ofrece un plus competitivo en ventas.',
      delay: 0.1
    },
    {
      icon: <Package size={24} />,
      title: 'Integración simplificada',
      description: 'Instalamos sistemas integrales durante la obra. Coordinamos con arquitectos e ingenieros, asegurando cableados y conexiones ocultas para un acabado profesional.',
      delay: 0.2
    },
    {
      icon: <Users size={24} />,
      title: 'Experiencia del cliente',
      description: 'Entregamos la casa lista para usar. Brindamos capacitación al propietario y documentación de uso. Elevamos la satisfacción del cliente final, lo que mejora la reputación de tu empresa.',
      delay: 0.3
    },
    {
      icon: <EnergyZap size={24} />,
      title: 'Eficiencia y ahorro energético',
      description: 'Ofrecer sistemas de luz y climatización automatizados permite hogares más sustentables. Los compradores valoran viviendas que consumen menos energía y cuidan el medio ambiente.',
      delay: 0.4
    }
  ];

  const brochureUrl = '/brochure-nubiq.pdf';
  const handleDownload = () => { window.open(brochureUrl, '_blank'); };

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
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Nuestras Soluciones Inteligentes
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto"
        >
          Descubrí cómo cada uno de nuestros servicios está diseñado para aportar confort, seguridad y eficiencia a tu vida, transformando tu casa en un verdadero hogar inteligente.
        </motion.p>
      </section>

      <div className="space-y-12">
        {services.map((service, index) => (
          <ServiceDetailCard
            key={service.title}
            {...service}
            delay={index * 0.15}
          />
        ))}
      </div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center"
      >
        <div className="border-t border-b border-white/10 py-8 px-4 flex flex-col sm:flex-row justify-center items-center gap-6 bg-card/30 rounded-lg">
          <h3 className="text-xl font-semibold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">Descarga nuestro brochure para compartir!</h3>
          <Button onClick={handleDownload} variant="outline" className="bg-transparent border-primary text-primary hover:bg-primary/10 hover:text-white transition-colors">
            <Download className="mr-2 h-4 w-4" />
            Descargar Brochure Completo
          </Button>
        </div>
      </motion.section>

      <section className="py-12 md:py-16 bg-muted/40 border border-white/5 rounded-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">¿Listo para empezar tu proyecto?</h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
          Cada hogar es único. Contanos tu idea y nuestro equipo de expertos diseñará una solución a medida, perfectamente adaptada a tu estilo de vida.
        </p>
        <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/30 px-10 py-7 text-lg">
          <Link to="/contacto">
            Solicitar Asesoramiento
          </Link>
        </Button>
      </section>

      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-secondary to-orange-500 bg-clip-text text-transparent">
            Soluciones para Constructoras
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Trabajamos con empresas constructoras y desarrolladores, agregando valor a proyectos nuevos con la última tecnología en domótica.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {developerBenefits.map((benefit) => <DeveloperBenefitCard key={benefit.title} {...benefit} />)}
        </div>
        <div className="text-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-secondary to-orange-500 hover:from-orange-600 hover:to-amber-600 transition-all text-white shadow-lg shadow-secondary/20 hover:shadow-secondary/30 px-8 py-6 text-lg">
            <Link to="/contacto">
              Asesoría para tu desarrollo
            </Link>
          </Button>
        </div>
      </section>
    </motion.div>
  );
};

export default ServicesPage;
