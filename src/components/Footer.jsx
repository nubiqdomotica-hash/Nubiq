import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const lucasWhatsAppNumber = "543512326814";
  const message = `Hola! De parte del equipo de Nubiq Domótica te dejamos este mensaje armado para agilizar la atención. Podés editarlo según tus necesidades y enviarlo:

Hola Nubiq, soy [Nombre] de [Barrio/Ciudad]. Quiero domotizar mi [casa/departamento]. Me interesa: [Luces] [Clima/Caldera] [Cámaras] [Cerraduras] [Wi-Fi Mesh] [Escenas]. Son [X m²], [X plantas]. ¿Coordinamos una visita o videollamada y me envían presupuesto?`;

  const openWhatsAppChat = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${lucasWhatsAppNumber}?text=${encodedMessage}`, '_blank');
  };
  return <footer className="bg-card/50 border-t border-white/5 text-foreground/70 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-xl font-semibold text-foreground mb-2">Nubiq Domótica </p>
            <p className="text-sm">Viví la experiencia de tu hogar conectado.</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-foreground mb-3">Enlaces rápidos</p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Inicio</Link></li>
              <li><Link to="/servicios" className="hover:text-primary transition-colors">Servicios</Link></li>
              <li><Link to="/nosotros" className="hover:text-primary transition-colors">Sobre nosotros</Link></li>
              <li><Link to="/contacto" className="hover:text-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-lg font-semibold text-foreground mb-3">Síguenos / Contáctanos</p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-2 sm:space-y-0 sm:space-x-4 text-sm">
              <a href="https://www.instagram.com/nubiq.domotica" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-primary transition-colors">
                <Instagram size={20} className="text-pink-500" />
                <span>Instagram</span>
              </a>
              <button onClick={openWhatsAppChat} className="flex items-center space-x-2 hover:text-primary transition-colors">
                <WhatsAppIcon size={20} className="rounded-full" />
                <span className="ml-1">WhatsApp</span>
              </button>
            </div>
            <p className="text-xs text-foreground/50 mt-2">Mantenete atento a nuestras novedades.</p>
          </div>
        </div>
        <div className="border-t border-border/50 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Nubiq. Todos los derechos reservados.</p>
          <p className="mt-1"></p>
        </div>
      </div>
    </footer>;
};
export default Footer;