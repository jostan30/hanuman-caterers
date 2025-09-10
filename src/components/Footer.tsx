'use client';

import { motion } from 'framer-motion';
import {  Phone, Mail, MapPin, Clock, Award, Users, Heart } from 'lucide-react';

interface FooterProps {
  contact: {
    phone: string;
    address: string;
  };
  socialLinks: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  className?: string;
}

export default function Footer({ contact }: FooterProps) {

  const achievements = [
    { icon: Users, count: "500+", label: "Happy Clients", color: "text-blue-400" },
    { icon: Award, count: "15+", label: "Years Experience", color: "text-yellow-400" },
    { icon: Heart, count: "1000+", label: "Events Catered", color: "text-red-400" },
  ];

  const quickLinks = [
    { name: "Our Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Book Event", href: "#booking" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,146,60,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(239,68,68,0.1)_0%,transparent_50%)]"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Animated dots pattern */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Company Branding */}
        <motion.div
          className="text-center py-16 border-b border-gray-700/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center space-x-3 mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-4xl">🕉️</div>
            <div className="text-left">
              <h2 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Hanuman Caterers
              </h2>
              <p className="text-gray-300 text-sm">Divine Flavors, Exceptional Service</p>
            </div>
          </motion.div>

          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Serving authentic Indian cuisine with love and devotion for over 15 years. 
            Making every occasion memorable with our traditional recipes and professional service.
          </motion.p>

        </motion.div>

        {/* Middle Section - Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-24">
        

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-bold text-white mb-6 relative">
                Contact Info
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-400 to-orange-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '80px' }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </h4>
              
              <div className="space-y-4">
                <motion.a
                  href={`tel:${contact.phone}`}
                  className="flex items-center space-x-3 text-gray-300 hover:text-orange-400 transition-colors group"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="p-2 bg-orange-500/20 rounded-lg group-hover:bg-orange-500/30 transition-colors">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Call Us</p>
                    <p className="font-medium">{contact.phone}</p>
                  </div>
                </motion.a>


                <motion.div
                  className="flex items-start space-x-3 text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <div className="p-2 bg-orange-500/20 rounded-lg mt-1">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Visit Us</p>
                    <p className="font-medium leading-relaxed">{contact.address}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-bold text-white mb-6 relative">
                Business Hours
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100px' }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </h4>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-orange-400" />
                  <div>
                    <p className="text-sm text-gray-400">Mon - Sat</p>
                    <p className="font-medium text-white">9:00 AM - 10:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-red-400" />
                  <div>
                    <p className="text-sm text-gray-400">Sunday</p>
                    <p className="font-medium text-white">10:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>

              <motion.div
                className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 mt-4"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-300 text-sm font-medium">Currently Open</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Achievement Banner */}
        <motion.div
          className="py-8 border-t border-b border-gray-700/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center justify-center space-x-3 mb-2">
                    <Icon className={`w-6 h-6 ${achievement.color}`} />
                    <span className="text-3xl font-black text-white">{achievement.count}</span>
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors">{achievement.label}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="py-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Hanuman Caterers. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}