import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { getWhatsAppLink } from '@/utils/getWhatsAppLink';

const LeadCaptureSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: '',
    whatsapp: '',
    metros: '',
    servicios: []
  });

  const serviciosOptions = [
    'Luces inteligentes',
    'Control de clima',
    'Cortinas automáticas',
    'Seguridad (cerraduras + cámaras)',
    'Riego automático',
    'Control de pileta',
    'Otros'
  ];

  const handleCheckboxChange = (servicio) => {
    setFormData(prev => ({
      ...prev,
      servicios: prev.servicios.includes(servicio)
        ? prev.servicios.filter(s => s !== servicio)
        : [...prev.servicios, servicio]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.whatsapp || !formData.metros || formData.servicios.length === 0) {
      toast({
        title: 'Completá todos los campos',
        description: 'Por favor completá tu información para continuar.',
        variant: 'destructive'
      });
      return;
    }

    window.open(getWhatsAppLink('leadForm', formData), '_blank');
    
    toast({
      title: '¡Perfecto!',
      description: 'Te redirigimos a WhatsApp para continuar la conversación.',
      variant: 'default'
    });

    setFormData({ nombre: '', whatsapp: '', metros: '', servicios: [] });
  };

  const handleDirectWhatsApp = () => {
    window.open(getWhatsAppLink('general'), '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Hablemos de <span className="text-primary">tu casa</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Elegí cómo querés contactarnos: directamente por WhatsApp o completando un breve formulario.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-card/70 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-lg flex flex-col justify-center items-center text-center space-y-6"
          >
            <MessageCircle className="w-16 h-16 text-green-500" />
            <h3 className="text-2xl font-bold text-foreground">Contacto Directo</h3>
            <p className="text-foreground/70">
              Escribinos directamente por WhatsApp y contanos sobre tu proyecto. Nuestro equipo te responderá a la brevedad.
            </p>
            <Button
              onClick={handleDirectWhatsApp}
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-green-500/30 w-full py-6 text-lg rounded-full"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Abrir WhatsApp
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-card/70 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Formulario Rápido</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="nombre" className="text-foreground/80">Nombre</Label>
                <Input
                  id="nombre"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  placeholder="Tu nombre completo"
                  className="bg-background/50 border-white/20 text-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="text-foreground/80">WhatsApp</Label>
                <Input
                  id="whatsapp"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  placeholder="3515208747"
                  className="bg-background/50 border-white/20 text-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="metros" className="text-foreground/80">Metros cuadrados</Label>
                <Input
                  id="metros"
                  value={formData.metros}
                  onChange={(e) => setFormData({ ...formData, metros: e.target.value })}
                  placeholder="Ej: 120 m²"
                  className="bg-background/50 border-white/20 text-foreground"
                />
              </div>

              <div className="space-y-3">
                <Label className="text-foreground/80">Servicios de interés</Label>
                <div className="space-y-2">
                  {serviciosOptions.map(servicio => (
                    <label key={servicio} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.servicios.includes(servicio)}
                        onChange={() => handleCheckboxChange(servicio)}
                        className="w-4 h-4 rounded border-white/20 text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-foreground/80">{servicio}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white shadow-lg py-6 text-lg rounded-full"
              >
                <Send className="mr-2 h-5 w-5" />
                Enviar por WhatsApp
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;