import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/nubiq-plus/HeroSection';
import HowItFeelsSection from '@/components/nubiq-plus/HowItFeelsSection';
import TurnkeySection from '@/components/nubiq-plus/TurnkeySection';
import ProductsSection from '@/components/nubiq-plus/ProductsSection';
import LeadCaptureSection from '@/components/nubiq-plus/LeadCaptureSection';
import FAQSection from '@/components/nubiq-plus/FAQSection';
import SeoBreadcrumb from '@/components/SeoBreadcrumb';

const NubiqPlusPage = () => {
  return (
    <>
      <Helmet>
        <title>Nubiq+ LifeSmart | Distribuidor Oficial Domótica Premium en Córdoba</title>
        <meta name="description" content="Nubiq+ es la línea premium de domótica llave en mano con productos LifeSmart. Distribuidor oficial en Córdoba, Argentina. Escenas, rutinas y estética de lujo." />
        <meta property="og:title" content="Nubiq+ LifeSmart | Domótica Premium en Córdoba" />
        <meta property="og:description" content="Línea premium de domótica llave en mano con productos LifeSmart. Distribuidor oficial en Córdoba." />
        <link rel="canonical" href="https://nubiqdomotica.com.ar/nubiq-plus" />
      </Helmet>
      <SeoBreadcrumb items={[{ name: 'Nubiq+ LifeSmart', path: '/nubiq-plus' }]} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-0"
      >
        <HeroSection />
        <HowItFeelsSection />
        <TurnkeySection />
        <ProductsSection />
        <LeadCaptureSection />
        <FAQSection />
      </motion.div>
    </>
  );
};

export default NubiqPlusPage;