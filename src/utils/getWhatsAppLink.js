const WHATSAPP_NUMBER = '5493515208747';

export const getWhatsAppLink = (messageType = 'general', customData = {}) => {
  const messages = {
    hero: `Hola Nubiq! Me interesa conocer más sobre Nubiq+ con LifeSmart. Quisiera información sobre las soluciones premium de domótica llave en mano.`,
    
    videocall: `Hola Nubiq! Quisiera agendar una videollamada gratuita para conocer sobre Nubiq+ LifeSmart. ¿Cuándo tienen disponibilidad?`,
    
    timeline: `Hola Nubiq! Me interesa el proceso llave en mano de Nubiq+ LifeSmart. ¿Podríamos coordinar un relevamiento para mi propiedad?`,
    
    product: `Hola Nubiq! Me interesa conocer más sobre ${customData.productName || 'los productos LifeSmart'}. ¿Podrían darme más información?`,
    
    leadForm: `Hola Nubiq! Me interesa Nubiq+ LifeSmart.
Nombre: ${customData.nombre || '[Nombre]'}
WhatsApp: ${customData.whatsapp || '[WhatsApp]'}
Metros cuadrados: ${customData.metros || '[m²]'}
Servicios de interés: ${customData.servicios?.join(', ') || '[Servicios]'}`,
    
    general: `Hola, me interesa conocer sobre Nubiq+ LifeSmart. Mi casa tiene [m²]. Me interesan: [luces/cortinas/riego/pileta/seguridad/otros]`
  };

  const message = messages[messageType] || messages.general;
  const encodedMessage = encodeURIComponent(message);
  
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};