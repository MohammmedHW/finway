import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Moon, Sun } from 'lucide-react';
import { Button } from '../ui/Button';
import { useTheme } from '../../context/ThemeContext';

import logo from '../../../public/favicon.svg';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const ticking = useRef(false);

  // Smooth optimized scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Services',
      path: '/services',
      hasDropdown: true,
    },
    { name: 'Industries', path: '/industries' },
  ];

  const serviceCategories = [
    { name: 'Online Food Orders', path: '/services/food' },
    { name: 'Grocery & Delivery', path: '/services/delivery' },
    { name: 'Credit Cards', path: '/services/credit-cards' },
    { name: 'Travel & Booking', path: '/services/travel' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-out
      ${
        isScrolled
          ? 'bg-white/75 dark:bg-slate-950/70 backdrop-blur-xl shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-[76px] items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Finway Logo"
              className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-105"
            />

            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-900 to-purple-900 dark:from-white dark:to-slate-300">
              Finway
              <span className="font-light">Ecosystem</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() =>
                  link.hasDropdown && setServicesDropdownOpen(true)
                }
                onMouseLeave={() =>
                  link.hasDropdown && setServicesDropdownOpen(false)
                }
              >
                {link.hasDropdown ? (
                  <>
                    <button className="flex items-center gap-1 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors py-2">
                      {link.name}

                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          servicesDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-4"
                        >
                          <div className="rounded-2xl border border-white/10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-2xl overflow-hidden">
                            <div className="p-3 border-b border-slate-200 dark:border-slate-800">
                              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                Ecosystem Services
                              </p>
                            </div>

                            <div className="p-2">
                              {serviceCategories.map((service) => (
                                <Link
                                  key={service.name}
                                  to={service.path}
                                  className="block rounded-xl px-4 py-3 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </div>

                            <div className="p-2 pt-0">
                              <Link
                                to="/services"
                                className="block w-full rounded-xl bg-indigo-50 dark:bg-indigo-900/30 py-2 text-center text-sm font-semibold text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors"
                              >
                                View all services →
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <Link
              to="/contact"
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Contact Sales
            </Link>

            <Button size="sm">Get Started</Button>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-800 dark:text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/10 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-4 px-4 py-6">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="border-b border-slate-200 dark:border-slate-800 pb-4"
                >
                  <Link
                    to={link.path}
                    className="block text-lg font-medium text-slate-800 dark:text-white"
                  >
                    {link.name}
                  </Link>

                  {link.hasDropdown && (
                    <div className="mt-4 ml-2 flex flex-col gap-3 border-l-2 border-indigo-100 pl-4 dark:border-slate-700">
                      {serviceCategories.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="text-slate-600 dark:text-slate-400"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="flex flex-col gap-4 pt-2">
                <Button className="w-full">Get Started</Button>

                <Button variant="outline" className="w-full">
                  Contact Sales
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};