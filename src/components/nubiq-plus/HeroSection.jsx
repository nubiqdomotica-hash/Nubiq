import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, Video, Award, Sparkles, MapPin, ShieldCheck } from 'lucide-react';
import { getWhatsAppLink } from '@/utils/getWhatsAppLink';
import BookingModal from '@/components/nubiq-plus/BookingModal';

const HeroSection = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(getWhatsAppLink('hero'), '_blank');
  };

  return (
    <>
      <section className="relative min-h-[88vh] md:min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Background image + gradient overlay para legibilidad */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1532971728-03b172590d0e?auto=format&fit=crop&w=1920&q=80"
            alt="Living moderno con domótica premium LifeSmart instalada por Nubiq+ en Córdoba"
            className="w-full h-full object-cover"
            fetchpriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/90"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/10"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 max-w-5xl">
          <div className="text-center">

            {/* Badge superior — distribuidor oficial */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8"
            >
              <Award className="w-4 h-4 text-secondary" />
              <span className="text-sm text-white/90 font-medium tracking-wide">
                Distribuidor oficial <span className="text-white font-semibold">LifeSmart</span> en Córdoba
              </span>
            </motion.div>

            {/* H1 — jerarquía clara, menos texto, más impacto */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight"
            >
              Domótica premium
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-orange-400 bg-clip-text text-transparent">
                que se vive.
              </span>
            </motion.h1>

            {/* Subtítulo — concreto y descriptivo */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
            >
              <span className="text-white font-medium">Nubiq+</span> es nuestra línea premium con productos LifeSmart.
              Diseño, instalación llave en mano y una estética que se integra a tu hogar.
            </motion.p>

            {/* CTAs — jerarquía clara: principal + secundario */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12"
            >
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:opacity-95 text-white shadow-2xl shadow-primary/30 hover:shadow-primary/50 transform hover:-translate-y-0.5 transition-all duration-300 px-8 py-7 text-base sm:text-lg rounded-full font-semibold"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Hablar por WhatsApp
              </Button>

              <Button
                onClick={() => setIsBookingModalOpen(true)}
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white/5 backdrop-blur-md border-white/30 text-white hover:bg-white/15 hover:border-white/50 transform hover:-translate-y-0.5 transition-all duration-300 px-8 py-7 text-base sm:text-lg rounded-full font-medium"
              >
                <Video className="mr-2 h-5 w-5" />
                Agendar videollamada
              </Button>
            </motion.div>

            {/* Trust signals — social proof debajo de los CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm text-white/70"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-secondary" />
                <span>Instalación llave en mano</span>
              </div>
              <span className="hidden sm:inline text-white/30">·</span>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span>Escenas y rutinas a medida</span>
              </div>
              <span className="hidden sm:inline text-white/30">·</span>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-secondary" />
                <span>Córdoba, Argentina</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Indicador sutil de scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs tracking-widest uppercase">Descubrir más</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent"
          />
        </motion.div>
      </section>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
};

export default HeroSection;
