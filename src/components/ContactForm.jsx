import React, { useState } from 'react';
    import { useForm } from 'react-hook-form';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Textarea } from '@/components/ui/textarea';
    import { Label } from '@/components/ui/label';
    import { useToast } from '@/components/ui/use-toast';
    import { Loader2, Send } from 'lucide-react';
    
    const ContactForm = () => {
      const { toast } = useToast();
      const [isSubmitting, setIsSubmitting] = useState(false);
      const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    
      const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
          const response = await fetch('https://whgiftfytqyqvyuijwgu.supabase.co/functions/v1/contact-form', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          toast({
            title: '¡Enviado!',
            description: '¡Gracias por tu mensaje! Nos pondremos en contacto pronto.',
            variant: 'default',
          });
          reset();
        } catch (error) {
          toast({
            title: 'Error',
            description: 'Hubo un error al enviar el mensaje. Por favor, intente nuevamente o contáctenos por whatsapp',
            variant: 'destructive',
          });
        } finally {
          setIsSubmitting(false);
        }
      };
    
      return (
        <motion.div 
          className="w-full bg-card border border-white/10 p-6 sm:p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center text-primary">
            <Send className="mr-3" />
            Envianos un mensaje
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground/80">Nombre</Label>
              <Input 
                id="name" 
                placeholder="Tu nombre completo" 
                {...register("name", { required: "El nombre es requerido" })}
                className={errors.name ? 'border-destructive' : ''}
              />
              {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground/80">Correo electrónico</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="tu@email.com" 
                {...register("email", { 
                  required: "El correo electrónico es requerido",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Ingresá un correo electrónico válido"
                  }
                })}
                className={errors.email ? 'border-destructive' : ''}
              />
              {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground/80">Mensaje</Label>
              <Textarea 
                id="message" 
                placeholder="Contanos sobre tu proyecto o consulta..." 
                rows={5} 
                {...register("message", { required: "El mensaje no puede estar vacío" })}
                className={errors.message ? 'border-destructive' : ''}
              />
              {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message}</p>}
            </div>
            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                'Enviar'
              )}
            </Button>
          </form>
        </motion.div>
      );
    };
    
    export default ContactForm;