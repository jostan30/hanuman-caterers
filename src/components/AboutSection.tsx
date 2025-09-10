'use client';

import { motion } from 'framer-motion';
import {  Users, Award, Heart, Utensils, Clock, Shield } from 'lucide-react';

interface AboutSectionProps {
  title: string;
  description: string;
  highlights: string[];
}

export default function AboutSection({ title, description }: AboutSectionProps) {
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
    <section id="about" className="relative py-15 bg-white overflow-hidden">
      {/* Minimal Background Elements for white background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-orange-50/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-50/25 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [360, 315, 360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div 
            className="w-32 h-1.5 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />

        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
    
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

        

          <motion.p 
            className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="relative group bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className={`inline-flex p-4 bg-gradient-to-br ${feature.gradient} rounded-xl mb-4 shadow-lg`}
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Subtle hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-orange-50/0 to-red-50/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.03) 0%, rgba(239, 68, 68, 0.03) 100%)'
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}