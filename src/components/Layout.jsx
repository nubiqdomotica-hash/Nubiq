import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  const showFloatingButton = location.pathname !== '/contacto';
  const lucasWhatsAppNumber = "543512326814";

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
      {showFloatingButton && <FloatingWhatsAppButton phoneNumber={lucasWhatsAppNumber} />}
    </div>
  );
};

export default Layout;