import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Lightbulb, Thermometer, Wind, Lock, Video, Wifi, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SeoBreadcrumb from '@/components/SeoBreadcrumb';

const iconMap = {
  Lightbulb: <Lightbulb size={28} />,
  Thermometer: <Thermometer size={28} />,
  Wind: <Wind size={28} />,
  Lock: <Lock size={28} />,
  Video: <Video size={28} />,
  Wifi: <Wifi size={28} />
};

const NeighborhoodPage = ({
  neighborhood,
  slug,
  intro,
  whyHere,
  highlightedServices,
  testimonialQuote,
  testimonialAuthor,
  faqs
}) => {
  const url = `https://nubiqdomotica.com.ar/${slug}`;
  const title = `Domótica en ${neighborhood}, Córdoba | Casa Inteligente | Nubiq`;
  const description = `Instalación de domótica en ${neighborhood}, Córdoba. Casa inteligente sin obras: luces, clima, persianas, cámaras y cerraduras desde el celular. Asesoramiento gratuito.`;

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Nubiq Domótica - ${neighborhood}`,
    description,
    url,
    telephone: '+54-351-232-6814',
    email: 'contacto@nubiqdomotica.com.ar',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Córdoba',
      addressRegion: 'Córdoba',
      addressCountry: 'AR'
    },
    areaServed: { '@type': 'Place', name: `${neighborhood}, Córdoba` },
    image: 'https://horizons-cdn.hostinger.com/399f02cf-d238-442b-8230-bd06d51cc905/9e5b49882bef04eec3f5e8e3e52180ac.png'
  };

  const faqSchema = faqs && faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer }
    }))
  } : null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 space-y-16 md:space-y-24"
    >
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <link rel="canonical" href={url} />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
      </Helmet>
      <SeoBreadcrumb items={[
        { name: 'Zonas', path: '/servicios' },
        { name: neighborhood, path: `/${slug}` }
      ]} />

      <section className="text-center pt-8">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
        >
          <MapPin size={16} />
          <span className="text-sm font-medium">{neighborhood}, Córdoba</span>
        </motion.div>
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Domótica en {neighborhood}
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-xl text-foreground/80 max-w-3xl mx-auto"
        >
          {intro}
        </motion.p>
      </section>

      <section className="bg-card/50 border border-white/10 rounded-2xl p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
          ¿Por qué automatizar tu casa en {neighborhood}?
        </h2>
        <div className="space-y-4 text-foreground/80 leading-relaxed">
          {whyHere.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
          Servicios más pedidos en {neighborhood}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlightedServices.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-card border border-white/10 p-6 rounded-xl"
            >
              <div className="bg-primary/10 text-primary p-3 rounded-full inline-block mb-4">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
              <p className="text-foreground/70 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {testimonialQuote && (
        <section className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-white/5 rounded-2xl p-8 md:p-12 text-center">
          <p className="text-lg md:text-xl italic text-foreground/90 max-w-3xl mx-auto mb-4">
            "{testimonialQuote}"
          </p>
          <p className="text-sm text-foreground/60">— {testimonialAuthor}, {neighborhood}</p>
        </section>
      )}

      {faqs && faqs.length > 0 && (
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
            Preguntas frecuentes - Domótica en {neighborhood}
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-card border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  {faq.question}
                </h3>
                <p className="text-foreground/70 ml-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="bg-muted/40 border border-white/5 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
          ¿Tu casa está en {neighborhood}? Pedí presupuesto gratis
        </h2>
        <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
          Coordinamos visita o videollamada sin compromiso. Te contamos qué se puede automatizar y cuánto sale.
        </p>
        <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 px-10 py-6 text-lg">
          <Link to="/contacto">
            Solicitar presupuesto
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </section>
    </motion.div>
  );
};

export default NeighborhoodPage;
