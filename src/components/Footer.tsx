'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  socialLinks: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
}

export default function Footer({ contact, socialLinks }: FooterProps) {
  const socialIcons = [
    { name: 'Facebook', icon: Facebook, url: socialLinks.facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, url: socialLinks.instagram, color: 'hover:text-pink-600' },
    { name: 'Twitter', icon: Twitter, url: socialLinks.twitter, color: 'hover:text-blue-400' },
  ];

  return (
    <footer id="footer" className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <span className="text-3xl">🕉️</span>
              <div>
                <h3 className="text-2xl font-bold text-primary-400">Hanuman Caterers</h3>
                <p className="text-gray-300">Divine Flavors, Exceptional Service</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Serving authentic Indian cuisine with love and devotion for over 15 years. 
              Making every occasion memorable with our traditional recipes and professional service.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold text-primary-400 mb-4">Contact Us</h4>
            <div className="space-y-3">
              <motion.a
                href={`tel:${contact.phone}`}
                className="flex items-center space-x-3 text-gray-300 hover:text-primary-400 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <Phone size={18} className="group-hover:text-primary-400" />
                <span>{contact.phone}</span>
              </motion.a>
              <motion.a
                href={`mailto:${contact.email}`}
                className="flex items-center space-x-3 text-gray-300 hover:text-primary-400 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <Mail size={18} className="group-hover:text-primary-400" />
                <span>{contact.email}</span>
              </motion.a>
              <motion.div
                className="flex items-start space-x-3 text-gray-300"
                whileHover={{ x: 5 }}
              >
                <MapPin size={18} className="mt-1 text-primary-400" />
                <span>{contact.address}</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold text-primary-400 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialIcons.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-700 rounded-full text-gray-300 ${social.color} transition-all duration-300 hover:bg-gray-600`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
            <div className="mt-6">
              <h5 className="text-lg font-medium text-primary-400 mb-2">Business Hours</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <p>Monday - Saturday: 9:00 AM - 10:00 PM</p>
                <p>Sunday: 10:00 AM - 9:00 PM</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-700 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-400">
            © 2025 Hanuman Caterers. All rights reserved. | Made with ❤️ for food lovers
          </p>
        </motion.div>
      </div>
    </footer>
  );
}