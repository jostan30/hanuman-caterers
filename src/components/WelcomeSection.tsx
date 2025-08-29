'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Star, Sparkles } from 'lucide-react';

interface WelcomeSectionProps {
  title: string;
  subtitle: string;
  description: string;
}

export default function WelcomeSection({ title, subtitle, description }: WelcomeSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-600 via-red-600 to-orange-700">
      {/* Enhanced Background with Multiple Layers */}
              <div className="absolute inset-0">
        {/* Base gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/40" />
        
        {/* Animated background pattern */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: 'reverse',
            ease: "linear"
          }}
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,165,0,0.2) 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, rgba(220,38,127,0.2) 0%, transparent 50%)`
          }}
        />
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'bg-white/8' : 
              i % 3 === 1 ? 'bg-orange-300/15' : 'bg-red-300/12'
            }`}
            style={{
              width: `${40 + i * 15}px`,
              height: `${40 + i * 15}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 30, -10, 0],
              scale: [1, 1.1, 0.9, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + i * 2,
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
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-white font-medium">Premium Catering Experience</span>
          </motion.div>

          {/* Enhanced Rating Stars */}
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                >
                  <Star className="w-5 h-5 text-yellow-300 fill-current drop-shadow-sm" />
                </motion.div>
              ))}
              <span className="ml-2 text-white font-medium text-sm">5.0 Rating</span>
            </div>
          </motion.div>

          {/* Hero Title with Enhanced Typography */}
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            <span className="bg-gradient-to-r from-white via-orange-100 to-yellow-200 bg-clip-text text-transparent drop-shadow-2xl">
              {title}
            </span>
          </motion.h1>

          {/* Enhanced Subtitle */}
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-orange-100 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {subtitle}
          </motion.h2>

          {/* Enhanced Description */}
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-orange-50/90 font-medium"
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
                className="relative overflow-hidden bg-white text-orange-600 px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center space-x-3 group min-w-[200px]"
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
              className="relative overflow-hidden border-2 border-white/50 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 min-w-[200px]"
              whileHover={{ 
                scale: 1.05,
                y: -2,
                borderColor: 'rgba(255,255,255,0.8)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Book Now</span>
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center items-center gap-8 text-orange-200/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <div className="flex items-center space-x-2">
              <motion.div 
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-medium">500+ Events Catered</span>
            </div>
            <div className="flex items-center space-x-2">
              <motion.div 
                className="w-2 h-2 bg-blue-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <span className="text-sm font-medium">Same Day Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <motion.div 
                className="w-2 h-2 bg-purple-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
              <span className="text-sm font-medium">100% Satisfaction</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <motion.div
            className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm bg-white/5"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-4 bg-white rounded-full mt-2 shadow-lg"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          <p className="text-white/60 text-xs mt-2 font-medium tracking-wide">SCROLL DOWN</p>
        </motion.div>
      </div>
    </section>
  );
}