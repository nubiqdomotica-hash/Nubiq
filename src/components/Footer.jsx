import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const lucasWhatsAppNumber = "5493512326814";
  const message = `Hola! De parte del equipo de Nubiq Domótica te dejamos este mensaje armado para agilizar la atención. Podés editarlo según tus necesidades y enviarlo:

Hola Nubiq, soy [Nombre] de [Barrio/Ciudad]. Quiero domotizar mi [casa/departamento]. Me interesa: [Luces] [Clima/Caldera] [Cámaras] [Cerraduras] [Wi-Fi Mesh] [Escenas]. Son [X m²], [X plantas]. ¿Coordinamos una visita o videollamada y me envían presupuesto?`;

  const openWhatsAppChat = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${lucasWhatsAppNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <footer className="bg-card/50 border-t border-white/5 text-foreground/70 py-12" itemScope itemType="https://schema.org/LocalBusiness">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-xl font-semibold text-foreground mb-2" itemProp="name">Nubiq Domótica</p>
            <p className="text-sm">Domótica en Córdoba, Argentina. Casa inteligente sin obras, con Home Assistant.</p>
          </div>

          <div>
            <p className="text-lg font-semibold text-foreground mb-3">Enlaces</p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Inicio</Link></li>
              <li><Link to="/servicios" className="hover:text-primary transition-colors">Servicios</Link></li>
              <li><Link to="/proyectos" className="hover:text-primary transition-colors">Proyectos</Link></li>
              <li><Link to="/que-es-domotica" className="hover:text-primary transition-colors">¿Qué es la domótica?</Link></li>
              <li><Link to="/nosotros" className="hover:text-primary transition-colors">Nosotros</Link></li>
              <li><Link to="/contacto" className="hover:text-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-lg font-semibold text-foreground mb-3">Contacto</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start justify-center md:justify-start gap-2" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <span>
                  <span itemProp="addressLocality">Córdoba</span>, <span itemProp="addressRegion">Córdoba</span>, <span itemProp="addressCountry">Argentina</span>
                </span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a href={`https://wa.me/${lucasWhatsAppNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" itemProp="telephone">
                  +54 351 232 6814
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a href="mailto:contacto@nubiqdomotica.com.ar" className="hover:text-primary transition-colors" itemProp="email">
                  contacto@nubiqdomotica.com.ar
                </a>
              </li>
              <li className="flex items-start justify-center md:justify-start gap-2">
                <Clock size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <span>Lun a Vie 9:00-18:00<br />Sáb 9:00-14:00</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-lg font-semibold text-foreground mb-3">Seguinos</p>
            <div className="flex flex-col items-center md:items-start space-y-3 text-sm">
              <a
                href="https://www.instagram.com/nubiq.domotica"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-primary transition-colors"
                aria-label="Instagram de Nubiq Domótica"
              >
                <Instagram size={20} className="text-pink-500" />
                <span>Instagram</span>
              </a>
              <button
                onClick={openWhatsAppChat}
                className="flex items-center space-x-2 hover:text-primary transition-colors"
                aria-label="WhatsApp de Nubiq Domótica"
              >
                <WhatsAppIcon size={20} className="rounded-full" />
                <span className="ml-1">WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center text-xs text-foreground/50">
          <p>&copy; {currentYear} Nubiq Domótica. Todos los derechos reservados.</p>
          <p className="mt-1">Domótica en Córdoba · Casa inteligente · Automatización del hogar con Home Assistant</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
