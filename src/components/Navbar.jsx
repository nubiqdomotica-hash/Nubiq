import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Home as HomeIcon, Users, Mail, Menu, X, Settings, HelpCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Inicio', path: '/', icon: <HomeIcon className="w-5 h-5" /> },
  { name: 'Servicios', path: '/servicios', icon: <Settings className="w-5 h-5" /> },
  { name: 'Nubiq+', subtitle: 'LifeSmart', path: '/nubiq-plus', icon: <Sparkles className="w-5 h-5" /> },
  { name: '¿Domótica?', path: '/que-es-domotica', icon: <HelpCircle className="w-5 h-5" /> },
  { name: 'Nosotros', path: '/nosotros', icon: <Users className="w-5 h-5" /> },
  { name: 'Contacto', path: '/contacto', icon: <Mail className="w-5 h-5" /> },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const NavLinkItem = ({ path, name, subtitle, icon, onClick }) => (
    <NavLink
      to={path}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out
        ${isActive ? 'bg-primary/10 text-primary' : 'text-foreground/70 hover:text-primary hover:bg-primary/5'}`
      }
    >
      {icon}
      <span className="ml-2 flex flex-col">
        <span>{name}</span>
        {subtitle && <span className="text-xs opacity-70">{subtitle}</span>}
      </span>
    </NavLink>
  );

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: "easeInOut" } }
  };

  return (
    <nav className="bg-card/70 backdrop-blur-xl border-b border-white/5 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src="https://horizons-cdn.hostinger.com/399f02cf-d238-442b-8230-bd06d51cc905/9e5b49882bef04eec3f5e8e3e52180ac.png" alt="Nubiq Domótica Logo" className="h-12 w-auto" />
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <NavLinkItem key={item.name} {...item} />
            ))}
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="md:hidden bg-card/95 backdrop-blur-md absolute top-full left-0 right-0 shadow-lg pb-4"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <NavLinkItem key={item.name} {...item} onClick={() => setMobileMenuOpen(false)} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;