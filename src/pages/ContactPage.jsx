import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  const whatsAppNumber = "543512326814";
  const message = `Hola! De parte del equipo de Nubiq Domótica te dejamos este mensaje armado para agilizar la atención. Podés editarlo según tus necesidades y enviarlo:

Hola Nubiq, soy [Nombre] de [Barrio/Ciudad]. Quiero domotizar mi [casa/departamento]. Me interesa: [Luces] [Clima/Caldera] [Cámaras] [Cerraduras] [Wi-Fi Mesh] [Escenas]. Son [X m²], [X plantas]. ¿Coordinamos una visita o videollamada y me envían presupuesto?`;
  const encodedMessage = encodeURIComponent(message);
  const whatsAppLink = `https://wa.me/${whatsAppNumber}?text=${encodedMessage}`;

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.5 }} 
      className="py-12 md:py-20"
    >
      <section className="text-center mb-12 md:mb-16">
        <motion.div 
          initial={{ y: -30, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Mail className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-md">
            ¡Contactanos!
          </h1>
          <p className="text-base md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Estamos listos para ayudarte. Dejanos tu mensaje y te responderemos a la brevedad.
          </p>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <motion.div
          className="w-full bg-card border border-white/10 p-6 sm:p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center text-primary">
            <Phone className="mr-3" />
            Información de Contacto
          </h2>
          <div className="space-y-6 text-foreground/80">
            <div className="flex items-center space-x-4">
              <Phone className="text-secondary flex-shrink-0" size={24} />
              <div>
                <p className="font-semibold text-foreground">WhatsApp:</p>
                <a href={whatsAppLink} target="_blank" rel="noopener noreferrer" className="text-lg hover:text-primary transition-colors">+54 351 232 6814</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-secondary flex-shrink-0" size={24} />
              <div>
                <p className="font-semibold text-foreground">Email:</p>
                <a href="mailto:contacto@nubiq.tech" className="text-lg hover:text-primary transition-colors">contacto@nubiq.tech</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Clock className="text-secondary flex-shrink-0" size={24} />
              <div>
                <p className="font-semibold text-foreground">Horario de Contacto:</p>
                <p className="text-lg">Lunes a Viernes: 9:00 - 18:00</p>
                <p className="text-lg">Sábados: 9:00 - 14:00</p>
              </div>
            </div>
          </div>
        </motion.div>
        <ContactForm />
      </div>
    </motion.div>
  );
};

export default ContactPage;