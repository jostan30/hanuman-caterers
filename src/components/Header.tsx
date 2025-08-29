'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#footer' },
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100/50 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 relative overflow-hidden rounded-full ring-2 ring-orange-100 group-hover:ring-orange-300 transition-all duration-300"
            >
              <Image
                src="/images/hanuman-logo.jpeg" 
                alt="Hanuman Caterers Logo"
                fill   
                className="object-cover" 
              />
            </motion.div>

            <div className="flex flex-col">
              <span className="font-bold text-2xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent group-hover:from-orange-700 group-hover:to-red-700 transition-all duration-300">
                Hanuman
              </span>
              <span className="text-sm text-gray-500 font-medium tracking-wide -mt-1">
                CATERERS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="relative px-4 py-2 text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 group rounded-lg"
                >
                  {item.name}
                  <motion.span
                    className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 group-hover:w-3/4 transition-all duration-300 transform -translate-x-1/2"
                    layoutId={`underline-${item.name}`}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
            
          {/* Call to Action */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href="tel:+919876543210"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={18} />
              <span>Call Now</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="py-6 space-y-1 border-t border-gray-100">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block py-3 px-4 text-gray-700 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 rounded-xl transition-all duration-200 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Call Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="pt-4 border-t border-gray-100 mt-4"
                >
                  <a
                    href="tel:+919876543210"
                    className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Phone size={18} />
                    <span>Call Now</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}