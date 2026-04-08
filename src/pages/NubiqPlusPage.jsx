import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/nubiq-plus/HeroSection';
import HowItFeelsSection from '@/components/nubiq-plus/HowItFeelsSection';
import TurnkeySection from '@/components/nubiq-plus/TurnkeySection';
import ProductsSection from '@/components/nubiq-plus/ProductsSection';
import LeadCaptureSection from '@/components/nubiq-plus/LeadCaptureSection';
import FAQSection from '@/components/nubiq-plus/FAQSection';

const NubiqPlusPage = () => {
  return (
    <>
      <Helmet>
        <title>Nubiq+ LifeSmart | Distribuidor Oficial Domótica Premium</title>
        <meta name="description" content="Nubiq+ es la línea premium de domótica llave en mano con productos LifeSmart. Distribuidor oficial en Córdoba. Escenas, rutinas y estética de lujo." />
      </Helmet>
      
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