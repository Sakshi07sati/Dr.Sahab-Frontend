import React, { useState } from 'react';
import { Menu, X, Calendar, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      hasDropdown: true,
      submenu: [
        { name: 'Cosmetic Dentistry', href: '/services/cosmetic' },
        { name: 'Orthodontics', href: '/services/orthodontics' },
        { name: 'Precision Dentures', href: '/services/dentures' },
        { name: 'Restorative Dentistry', href: '/services/restorative' },
        { name: 'Teeth Whitening', href: '/services/whitening' },
        { name: 'Dental Implants', href: '/services/implants' }
      ]
    },
    { name: 'Contact', href: '/contact' },
    { name: 'Admin', href: '/admin' }
  ];

  return (
    <nav className="py-5 sticky top-0 z-50">
      <div className="max-w-7xl bg-blue-50 rounded-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-black">LOGO</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
              >
                <a
                  href={link.href}
                  className="text-gray-700 text-lg hover:text-indigo-600 font-medium transition-colors flex items-center gap-1 cursor-pointer"
                >
                  {link.name}
                  {link.hasDropdown && (
                    <motion.div
                      animate={{ rotate: isServicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  )}
                </a>

                {/* Dropdown Menu */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                      >
                        <div className="py-2">
                          {link.submenu.map((item, index) => (
                            <motion.a
                              key={item.name}
                              href={item.href}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              className="block px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium"
                            >
                              {item.name}
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Book Appointment Button - Desktop */}
          <div className="hidden md:block">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all hover:scale-105 flex items-center gap-2 font-semibold shadow-lg">
              <Calendar size={18} />
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pb-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className="w-full text-left text-gray-700 hover:text-indigo-600 font-medium py-2 transition-colors flex items-center justify-between"
                        >
                          {link.name}
                          <motion.div
                            animate={{ rotate: isServicesOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown size={18} />
                          </motion.div>
                        </button>
                        
                        <AnimatePresence>
                          {isServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pl-4 space-y-1"
                            >
                              {link.submenu.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="block text-gray-600 hover:text-indigo-600 py-2 text-sm"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {item.name}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a
                        href={link.href}
                        className="text-gray-700 hover:text-indigo-600 font-medium py-2 transition-colors block"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    )}
                  </div>
                ))}
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 font-medium mt-4">
                  <Calendar size={18} />
                  Book Appointment
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;