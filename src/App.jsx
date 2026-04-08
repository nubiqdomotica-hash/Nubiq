import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import NubiqPlusPage from '@/pages/NubiqPlusPage';
import WhatIsDomoticsPage from '@/pages/WhatIsDomoticsPage';
import AboutUsPage from '@/pages/AboutUsPage';
import ContactPage from '@/pages/ContactPage';
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
        </Routes>
      </Layout>
      <Toaster />
    </>
  );
}

export default App;