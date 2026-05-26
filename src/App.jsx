import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import NubiqPlusPage from '@/pages/NubiqPlusPage';
import WhatIsDomoticsPage from '@/pages/WhatIsDomoticsPage';
import AboutUsPage from '@/pages/AboutUsPage';
import ContactPage from '@/pages/ContactPage';
import PartnersPage from '@/pages/PartnersPage';
import NuevaCordobaPage from '@/pages/zonas/NuevaCordobaPage';
import CerroDeLasRosasPage from '@/pages/zonas/CerroDeLasRosasPage';
import VillaAllendePage from '@/pages/zonas/VillaAllendePage';
import ValleEscondidoPage from '@/pages/zonas/ValleEscondidoPage';
import { Toaster } from '@/components/ui/toaster';
import ScrollToTop from '@/components/ScrollToTop';
import GoogleAnalytics from '@/components/GoogleAnalytics';

function App() {
  return (
    <>
      <ScrollToTop />
      <GoogleAnalytics />
      <Layout>
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
      </Layout>
      <Toaster />
    </>
  );
}

export default App;
