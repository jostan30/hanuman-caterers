'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Star, Sparkles } from 'lucide-react';

interface WelcomeSectionProps {
  title: string;
  subtitle: string;
  description: string;
   className?: string; 
}

export default function WelcomeSection({ title, subtitle, description  }: WelcomeSectionProps) {
  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-white`}
    >
      {/* Minimal Background Elements for white background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'bg-orange-100/30' : 
              i % 3 === 1 ? 'bg-red-100/25' : 'bg-gray-100/20'
            }`}
            style={{
              width: `${30 + i * 10}px`,
              height: `${30 + i * 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, -10, 0],
              scale: [1, 1.05, 0.95, 1],
              rotate: [0, 90, 180, 360],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

     <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">

        {/* Enhanced Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Premium Badge */}
          <motion.div 
            className="inline-flex items-center space-x-2 bg-orange-50 border border-orange-200 rounded-full px-6 py-3 mb-6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Sparkles className="w-5 h-5 text-orange-500" />
            <span className="text-orange-700 font-medium">Premium Catering Experience</span>
          </motion.div>

          {/* Enhanced Rating Stars */}
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="flex items-center space-x-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                >
                  <Star className="w-5 h-5 text-yellow-500 fill-current drop-shadow-sm" />
                </motion.div>
              ))}
              <span className="ml-2 text-gray-700 font-medium text-sm">5.0 Rating</span>
            </div>
          </motion.div>

          {/* Hero Title with Enhanced Typography */}
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            <span className="bg-gradient-to-r from-gray-800 via-orange-600 to-red-600 bg-clip-text text-transparent drop-shadow-sm">
              {title}
            </span>
          </motion.h1>

          {/* Enhanced Subtitle */}
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-gray-700 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {subtitle}
          </motion.h2>

          {/* Enhanced Description */}
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-600 font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            {description}
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <Link href="/menu">
              <motion.button
                className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center space-x-3 group min-w-[200px]"
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Button shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">Explore Menu</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </motion.button>
            </Link>

            <motion.a
              href="tel:+919876543210"
              className="relative overflow-hidden border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 min-w-[200px]"
              whileHover={{ 
                scale: 1.05,
                y: -2,
                borderColor: 'rgba(156, 163, 175, 0.8)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/50 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Book Now</span>
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <div className="flex items-center space-x-2">
              <motion.div 
                className="w-2 h-2 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-medium">500+ Events Catered</span>
            </div>
            <div className="flex items-center space-x-2">
              <motion.div 
                className="w-2 h-2 bg-blue-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <span className="text-sm font-medium">Same Day Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <motion.div 
                className="w-2 h-2 bg-purple-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
              <span className="text-sm font-medium">100% Satisfaction</span>
            </div>
          </motion.div>
        </motion.div>

      
      </div>
    </section>
  );
}