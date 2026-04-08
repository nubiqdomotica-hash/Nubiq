import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, Video, Award } from 'lucide-react';
import { getWhatsAppLink } from '@/utils/getWhatsAppLink';
import BookingModal from '@/components/nubiq-plus/BookingModal';

const HeroSection = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(getWhatsAppLink('hero'), '_blank');
  };

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1532971728-03b172590d0e" 
            alt="Sala de estar moderna con domótica premium" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 flex flex-col items-center justify-center"
          >
            <div className="bg-white/95 rounded-xl px-6 py-3 mb-6 shadow-xl inline-block transform hover:scale-105 transition-transform duration-300">
               <img 
                 src="https://images.unsplash.com/photo-1608377205619-03a0b4c4e270" 
                 alt="Logo LifeSmart - Línea premium de domótica" 
                 className="h-12 w-auto object-contain"
               />
            </div>
            
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm text-white/90 font-medium">Distribuidores oficiales LifeSmart</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
          >
            Nubiq+ con LifeSmart:<br />
            <span className="bg-gradient-to-r from-primary via-secondary to-orange-400 bg-clip-text text-transparent">
              lujo que se siente.
            </span><br />
            Inteligencia que se vive.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            Nubiq+ es la línea premium de productos LifeSmart. Diseñamos e instalamos domótica llave en mano: escenas, rutinas y control total, con estética impecable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 px-8 py-7 text-lg rounded-full"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Hablar por WhatsApp
            </Button>

            <Button
              onClick={() => setIsBookingModalOpen(true)}
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 hover:border-white/50 shadow-xl transform hover:scale-105 transition-all duration-300 px-8 py-7 text-lg rounded-full"
            >
              <Video className="mr-2 h-5 w-5" />
              Agendar videollamada gratis
            </Button>
          </motion.div>
        </div>
      </section>

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </>
  );
};

export default HeroSection;