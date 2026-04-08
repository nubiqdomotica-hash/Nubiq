import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getWhatsAppLink } from '@/utils/getWhatsAppLink';

const BookingModal = ({ isOpen, onClose }) => {
  const handleBooking = () => {
    window.open(getWhatsAppLink('videocall'), '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-card border border-white/10 rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-foreground/60 hover:text-foreground transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-2xl font-bold mb-4 text-foreground">Agendar Videollamada</h3>
              <p className="text-foreground/70 mb-6">
                Coordiná una videollamada gratuita con nuestro equipo para conocer cómo Nubiq+ LifeSmart puede transformar tu hogar.
              </p>

              <div className="space-y-4">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">¿Qué incluye?</h4>
                  <ul className="text-sm text-foreground/70 space-y-1">
                    <li>• Análisis de tus necesidades</li>
                    <li>• Demostración de productos LifeSmart</li>
                    <li>• Estimación preliminar de costos</li>
                    <li>• Respuestas a todas tus consultas</li>
                  </ul>
                </div>

                <Button
                  onClick={handleBooking}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white shadow-lg py-6 text-lg rounded-full"
                >
                  Coordinar por WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;