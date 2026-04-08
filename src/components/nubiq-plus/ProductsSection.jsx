import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ImageOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getWhatsAppLink } from '@/utils/getWhatsAppLink';

const ProductCard = ({ product, onClick }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, y: -8 }}
      onClick={onClick}
      className="bg-card/70 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-300 cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden bg-gray-200">
        {!imgError ? (
          <img 
            src={product.image} 
            alt={product.alt}
            className="w-full h-full object-cover"
            onError={() => {
              console.error(`Error loading image for ${product.name}`);
              setImgError(true);
            }}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 p-4">
            <ImageOff className="w-8 h-8 mb-2" />
            <span className="text-xs text-center">Imagen no disponible</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-foreground mb-2">{product.name}</h3>
        <p className="text-sm text-foreground/70 line-clamp-2">{product.shortDescription}</p>
      </div>
    </motion.div>
  );
};

const ProductModal = ({ product, isOpen, onClose }) => {
  const handleWhatsAppClick = () => {
    window.open(getWhatsAppLink('product', { productName: product?.name }), '_blank');
    onClose();
  };
  const [imgError, setImgError] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && product && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-card border border-white/10 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative h-64 bg-gray-200">
                 {!imgError ? (
                  <img 
                    src={product.image} 
                    alt={product.alt}
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-gray-500">
                    <ImageOff className="w-12 h-12 mb-2" />
                    <span>Imagen no disponible</span>
                  </div>
                )}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-foreground">{product.name}</h3>
                <p className="text-lg text-foreground/70 mb-6">{product.fullDescription}</p>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-foreground">Beneficios</h4>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-foreground/80">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-foreground">Ideal para</h4>
                    <p className="text-foreground/70">{product.idealFor}</p>
                  </div>
                </div>

                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg py-6 text-lg rounded-full"
                >
                  Consultar por WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      name: "Interruptores y Botoneras Inteligentes",
      shortDescription: "Pulsadores táctiles de vidrio templado con diseño minimalista y control total de luces.",
      fullDescription: "Reemplazá tus interruptores convencionales por pulsadores táctiles de vidrio templado con retroiluminación LED. Control individual o por escenas, compatible con control por voz y app.",
      image: "https://horizons-cdn.hostinger.com/399f02cf-d238-442b-8230-bd06d51cc905/b26ea8e4aadcb90080ef929c548142a3.jpg",
      alt: "Mano tocando interruptor inteligente táctil negro con luz azul en pared",
      benefits: [
        "Diseño premium en vidrio templado negro o blanco",
        "Retroiluminación LED personalizable",
        "Control táctil de 1, 2, 3 o 4 canales",
        "Compatible con Alexa y Google Assistant"
      ],
      idealFor: "Todos los ambientes: living, dormitorios, cocina, baños. Perfecto para quienes buscan estética moderna sin obras."
    },
    {
      name: "Iluminación LED Inteligente",
      shortDescription: "Tiras LED y lámparas RGB con control de color, intensidad y temperatura.",
      fullDescription: "Iluminación LED regulable con millones de colores, control de temperatura de color (2700K-6500K) y creación de escenas personalizadas para cada momento.",
      image: "https://horizons-cdn.hostinger.com/399f02cf-d238-442b-8230-bd06d51cc905/357edfdee7aa9c2c763557428c720b1d.webp",
      alt: "Sala de lujo con iluminación LED inteligente en techo con luces azules, púrpuras y naranjas, sofá blanco y cortinas",
      benefits: [
        "Millones de colores y tonos de blanco",
        "Sincronización con música y películas",
        "Programación por horarios",
        "Bajo consumo energético"
      ],
      idealFor: "Living, dormitorios, home theater, cocina. Para quienes quieren ambiente y funcionalidad en un solo sistema."
    },
    {
      name: "Sensores de Movimiento y Presencia",
      shortDescription: "Detección inteligente para automatizar luces y clima según ocupación.",
      fullDescription: "Sensores PIR de alta precisión que detectan presencia y movimiento para activar automáticamente luces, clima o escenas. Montaje discreto en techo o pared.",
      image: "https://horizons-cdn.hostinger.com/399f02cf-d238-442b-8230-bd06d51cc905/b8456fea84be71d29abac75ca928ecbb.png",
      alt: "Sensor de movimiento blanco en escritorio minimalista",
      benefits: [
        "Ahorro energético automático",
        "Activación por presencia sin tocar nada",
        "Ajuste de sensibilidad y tiempo de retardo",
        "Diseño compacto e invisible"
      ],
      idealFor: "Pasillos, baños, garajes, oficinas. Ideal para espacios de paso donde buscás comodidad y eficiencia."
    },
    {
      name: "Automatización de Cortinas y Persianas",
      shortDescription: "Motores silenciosos para control total de luz natural y privacidad.",
      fullDescription: "Motorización de cortinas y persianas con motores silenciosos, control por app, voz o programación automática según horarios o luz solar.",
      image: "https://horizons-cdn.hostinger.com/399f02cf-d238-442b-8230-bd06d51cc905/020d5f9ef7209c55c87e29517e583ac1.jpg",
      alt: "Sala moderna de lujo con cortinas blancas, ventanales grandes y vista a naturaleza",
      benefits: [
        "Apertura/cierre automático al despertar o anochecer",
        "Protección solar inteligente",
        "Ahorro en climatización",
        "Simulación de presencia"
      ],
      idealFor: "Dormitorios, living, oficinas. Perfecto para controlar luz natural sin levantarte del sofá."
    },
    {
      name: "Cerraduras y Control de Acceso",
      shortDescription: "Seguridad premium con apertura por huella, código o smartphone.",
      fullDescription: "Cerraduras inteligentes con múltiples métodos de acceso: huella digital, código PIN, tarjeta NFC o app. Registro de accesos y códigos temporales para visitas.",
      image: "https://horizons-cdn.hostinger.com/399f02cf-d238-442b-8230-bd06d51cc905/9343d86be418587f0f0f30869472e1e2.jpg",
      alt: "Cerradura inteligente",
      benefits: [
        "Olvidate de las llaves físicas",
        "Códigos temporales para invitados o servicio",
        "Notificaciones en tiempo real",
        "Registro completo de accesos"
      ],
      idealFor: "Puerta principal, dormitorios, oficinas. Ideal para familias, alquileres temporales o propiedades con personal."
    },
    {
      name: "Cámaras de Seguridad Inteligentes",
      shortDescription: "Vigilancia 24/7 con detección de personas y visualización en pantallas inteligentes.",
      fullDescription: "Cámaras IP de alta definición con visión nocturna, detección de movimiento inteligente y almacenamiento en la nube. Visualizá todo desde tu smartphone o pantallas LifeSmart.",
      image: "https://horizons-cdn.hostinger.com/399f02cf-d238-442b-8230-bd06d51cc905/ce491d6dc6b042dd8b43bd0b3b36e252.png",
      alt: "Cámara de seguridad inteligente blanca instalada en fachada de casa",
      benefits: [
        "Resolución Full HD 1080p o 2K",
        "Visión nocturna hasta 10 metros",
        "Detección inteligente de personas y vehículos",
        "Audio bidireccional y almacenamiento cloud"
      ],
      idealFor: "Entrada, garaje, patio, perímetro. Para protección completa y tranquilidad estés donde estés."
    },
    {
      name: "Hub Central LifeSmart",
      shortDescription: "Cerebro del sistema que conecta y coordina todos tus dispositivos.",
      fullDescription: "Hub central que integra todos los dispositivos LifeSmart en un solo ecosistema. Compatible con Zigbee, Wi-Fi y control por app o voz.",
      image: "https://horizons-cdn.hostinger.com/399f02cf-d238-442b-8230-bd06d51cc905/ce8015b4a4d0a44a4a71467eb8e0f822.png",
      alt: "Hub central LifeSmart blanco cuadrado con logo verde en pared de azulejos",
      benefits: [
        "Control centralizado de todo el sistema",
        "Compatible con Alexa, Google and Siri",
        "Creación de escenas y rutinas complejas",
        "Actualizaciones automáticas OTA"
      ],
      idealFor: "Esencial para cualquier instalación Nubiq+. El corazón que hace que todo funcione en armonía."
    },
    {
      name: "Termostatos y Control de Clima",
      shortDescription: "Gestión inteligente de temperatura para máximo confort y ahorro energético.",
      fullDescription: "Termostatos inteligentes que aprenden tus preferencias y optimizan el uso de aires acondicionados y calefacción. Control remoto y programación por horarios.",
      image: "https://horizons-cdn.hostinger.com/399f02cf-d238-442b-8230-bd06d51cc905/a65d836c411c30d08f28d60717a4cd20.png",
      alt: "Paneles de control inteligente en pared blanca mostrando temperatura y opciones de clima",
      benefits: [
        "Ahorro de hasta 30% en energía",
        "Aprendizaje automático de preferencias",
        "Control remoto desde cualquier lugar",
        "Integración con sensores de ventanas"
      ],
      idealFor: "Toda la casa, especialmente dormitorios and living. Para quienes quieren ambiente y funcionalidad en un solo sistema."
    },
    {
      name: "Pantalla Central Inteligente",
      shortDescription: "Control centralizado de todo tu hogar en una pantalla táctil de alta resolución.",
      fullDescription: "El panel de control Nature Mini o Nature 7 unifica el control de luces, cortinas, clima y música en una interfaz elegante que decora tu pared.",
      image: "https://horizons-cdn.hostinger.com/399f02cf-d238-442b-8230-bd06d51cc905/4b35e007a7b03d5964a30e980c92f39e.png",
      alt: "Pantalla inteligente horizontal instalada en pared de cocina moderna con interfaz de control",
      benefits: [
        "Pantalla táctil HD",
        "Botones físicos programables",
        "Intercomunicador integrado",
        "Control de escenas con un toque"
      ],
      idealFor: "Living, dormitorio principal, entrada. Unifica el control en un punto central estético."
    }
  ];

  return (
    <>
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Productos <span className="text-primary">LifeSmart</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Nubiq+ te ofrece la línea premium completa. Tecnología de punta diseñada para integrarse perfectamente en tu hogar.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard 
                key={product.name} 
                product={product}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        </div>
      </section>

      <ProductModal 
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
};

export default ProductsSection;