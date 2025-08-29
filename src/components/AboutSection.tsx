'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, Heart, Utensils, Clock, Shield } from 'lucide-react';

interface AboutSectionProps {
  title: string;
  description: string;
  highlights: string[];
}

export default function AboutSection({ title, description, highlights }: AboutSectionProps) {
  const features = [
    {
      icon: Users,
      title: "Expert Chefs",
      description: "Our skilled chefs bring years of culinary expertise to every event",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Award,
      title: "Quality Service", 
      description: "Award-winning catering service with proven excellence",
      gradient: "from-red-500 to-orange-600"
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every dish prepared with passion, care and authentic flavors",
      gradient: "from-orange-600 to-red-600"
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Punctual service ensuring your events run seamlessly",
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Hygiene Standards",
      description: "Maintaining the highest food safety and cleanliness protocols",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Utensils,
      title: "Fresh Ingredients",
      description: "Only the finest, freshest ingredients in every preparation",
      gradient: "from-red-600 to-orange-600"
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-red-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-orange-200/20 to-red-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [360, 270, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
              About Us
            </span>
          </motion.div>

          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-gray-900 via-orange-600 to-red-600 bg-clip-text text-transparent">
              {title}
            </span>
          </motion.h2>

          <motion.div 
            className="w-32 h-1.5 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />

          <motion.p 
            className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {description}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-start">
          {/* Left Content - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span>Why Choose Us</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3 p-4 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle className="w-6 h-6 text-orange-500 mt-1 group-hover:text-red-600 transition-colors" />
                    </motion.div>
                    <span className="text-gray-700 font-medium leading-relaxed group-hover:text-gray-900 transition-colors">
                      {highlight}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Enhanced Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 cursor-pointer"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -8,
                      rotate: [0, 1, -1, 0]
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg`}
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1 
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <h4 className="text-lg font-bold text-gray-900 mb-3 text-center group-hover:text-orange-600 transition-colors">
                      {feature.title}
                    </h4>
                    
                    <p className="text-gray-600 text-center text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                      {feature.description}
                    </p>

                    {/* Hover overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Create Something Amazing?</h3>
            <p className="text-xl text-orange-100 mb-6 max-w-2xl mx-auto">
              Let us bring our culinary expertise to your next special occasion
            </p>
            <motion.a
              href="tel:+919876543210"
              className="inline-block bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Your Free Quote
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}