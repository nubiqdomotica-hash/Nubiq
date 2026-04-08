import React from 'react';
import { motion } from 'framer-motion';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

const FloatingWhatsAppButton = ({ phoneNumber }) => {
  const message = `Hola! De parte del equipo de Nubiq Domótica te dejamos este mensaje armado para agilizar la atención. Podés editarlo según tus necesidades y enviarlo:

Hola Nubiq, soy [Nombre] de [Barrio/Ciudad]. Quiero domotizar mi [casa/departamento]. Me interesa: [Luces] [Clima/Caldera] [Cámaras] [Cerraduras] [Wi-Fi Mesh] [Escenas]. Son [X m²], [X plantas]. ¿Coordinamos una visita o videollamada y me envían presupuesto?`;

  const openWhatsAppChat = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <motion.button
      onClick={openWhatsAppChat}
      className="fixed bottom-6 right-6 bg-transparent text-white rounded-full shadow-lg z-50 flex items-center justify-center p-0 overflow-hidden"
      aria-label="Contactar por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{ width: '56px', height: '56px' }}
    >
      <WhatsAppIcon size={48} className="rounded-full" />
    </motion.button>
  );
};

export default FloatingWhatsAppButton;