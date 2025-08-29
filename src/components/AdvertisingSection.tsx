'use client';

import { motion } from 'framer-motion';
import { Sparkles, Calendar, Gift, Users, Utensils, Home, Star, Phone, CheckCircle } from 'lucide-react';

interface AdvertisingSectionProps {
  title: string;
  mainOffer: {
    title: string;
    description: string;
    validity: string;
  };
  services: string[];
}

export default function AdvertisingSection({ title, mainOffer, services }: AdvertisingSectionProps) {
  const serviceIcons = [
    { name: 'Corporate Events', icon: Users, color: 'from-blue-500 to-indigo-500' },
    { name: 'Wedding Catering', icon: Gift, color: 'from-pink-500 to-rose-500' },
    { name: 'Birthday Parties', icon: Calendar, color: 'from-purple-500 to-violet-500' },
    { name: 'Religious Ceremonies', icon: Sparkles, color: 'from-yellow-500 to-orange-500' },
    { name: 'Home Delivery', icon: Home, color: 'from-green-500 to-emerald-500' },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
        {/* Animated mesh gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(255,165,0,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(220,38,127,0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 20%, rgba(255,165,0,0.3) 0%, transparent 50%), radial-gradient(circle at 60% 80%, rgba(220,38,127,0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 30%, rgba(255,165,0,0.3) 0%, transparent 50%), radial-gradient(circle at 20% 70%, rgba(220,38,127,0.3) 0%, transparent 50%)'
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Star className="w-5 h-5 text-yellow-300" />
            <span className="text-white font-medium">Special Offers</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-orange-200 to-yellow-300 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          
          <motion.div 
            className="w-32 h-1.5 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 1, delay: 0.4 }}
          />
        </motion.div>

        {/* Enhanced Main Offer Card */}
        <motion.div
          className="relative mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl overflow-hidden">
            {/* Card background effects */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <div className="relative text-center">
              <motion.div
                className="inline-block p-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mb-8 shadow-2xl"
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1 
                }}
                transition={{ duration: 0.6 }}
                animate={{
                  boxShadow: [
                    "0 0 0 0px rgba(251, 191, 36, 0.4)",
                    "0 0 0 20px rgba(251, 191, 36, 0)",
                    "0 0 0 0px rgba(251, 191, 36, 0)"
                  ]
                }}
              >
                <Gift className="w-12 h-12 text-white" />
              </motion.div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  {mainOffer.title}
                </span>
              </h3>
              
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
                {mainOffer.description}
              </p>
              
              <motion.div
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-black text-lg shadow-xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 10px 30px rgba(251, 191, 36, 0.3)",
                    "0 20px 40px rgba(251, 191, 36, 0.4)",
                    "0 10px 30px rgba(251, 191, 36, 0.3)"
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.1 }}
              >
                <Sparkles className="w-5 h-5" />
                <span>{mainOffer.validity}</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Our Premium Services
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we cater to every occasion with excellence
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, index) => {
              const serviceIcon = serviceIcons.find(s => s.name === service);
              const Icon = serviceIcon?.icon || Utensils;
              const gradient = serviceIcon?.color || 'from-orange-500 to-red-500';
              
              return (
                <motion.div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer overflow-hidden"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -8,
                  }}
                  viewport={{ once: true }}
                >
                  {/* Hover background effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-500`}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1 
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h4 className="font-bold text-white text-lg mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                    {service}
                  </h4>
                  
                  <motion.div
                    className="w-12 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Enhanced Contact CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-3xl blur-xl"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl">
              <motion.div
                className="flex justify-center mb-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, rotate: -180 }}
                      whileInView={{ opacity: 1, rotate: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    >
                      <Star className="w-6 h-6 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <h3 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
                Ready to Create 
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"> Magic</span>?
              </h3>
              
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform your special moments into unforgettable experiences with our exceptional catering services
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="tel:+919876543210"
                  className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-10 py-5 rounded-full font-black text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center space-x-3 min-w-[250px] justify-center"
                  whileHover={{ 
                    scale: 1.05,
                    y: -3,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Button shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <Phone className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">Get Free Quote</span>
                </motion.a>

                <motion.div
                  className="flex items-center space-x-2 text-gray-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <motion.div 
                    className="w-3 h-3 bg-green-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-sm font-medium">Available 24/7</span>
                </motion.div>
              </div>

              {/* Trust badges */}
              <motion.div
                className="mt-8 flex flex-wrap justify-center gap-6 text-gray-400 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>No Hidden Charges</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Same Day Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>100% Satisfaction</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}