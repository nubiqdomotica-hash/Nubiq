import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Toaster } from '@/components/ui/toaster';
import ScrollToTop from '@/components/ScrollToTop';
import GoogleAnalytics from '@/components/GoogleAnalytics';

// Code-splitting por ruta: cada pagina se carga solo cuando el usuario
// navega a ella, en lugar de incluirse en el bundle inicial.
const HomePage = lazy(() => import('@/pages/HomePage'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
const NubiqPlusPage = lazy(() => import('@/pages/NubiqPlusPage'));
const WhatIsDomoticsPage = lazy(() => import('@/pages/WhatIsDomoticsPage'));
const AboutUsPage = lazy(() => import('@/pages/AboutUsPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const PartnersPage = lazy(() => import('@/pages/PartnersPage'));
const NuevaCordobaPage = lazy(() => import('@/pages/zonas/NuevaCordobaPage'));
const CerroDeLasRosasPage = lazy(() => import('@/pages/zonas/CerroDeLasRosasPage'));
const VillaAllendePage = lazy(() => import('@/pages/zonas/VillaAllendePage'));
const ValleEscondidoPage = lazy(() => import('@/pages/zonas/ValleEscondidoPage'));

const PageFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center" aria-hidden="true">
    <div className="w-10 h-10 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <>
      <ScrollToTop />
      <GoogleAnalytics />
      <Layout>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/nubiq-plus" element={<NubiqPlusPage />} />
            <Route path="/que-es-domotica" element={<WhatIsDomoticsPage />} />
            <Route path="/nosotros" element={<AboutUsPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/domotica-nueva-cordoba" element={<NuevaCordobaPage />} />
            <Route path="/domotica-cerro-de-las-rosas" element={<CerroDeLasRosasPage />} />
            <Route path="/domotica-villa-allende" element={<VillaAllendePage />} />
            <Route path="/domotica-valle-escondido" element={<ValleEscondidoPage />} />
          </Routes>
        </Suspense>
      </Layout>
      <Toaster />
    </>
  );
}

export default App;
