'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { StepBack, Coffee, Utensils, Pizza, Cookie,  ChefHat, MessageCircle, Mail, Phone, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { MenuCat } from '@/types/content';
import { useState } from 'react';

const categoryIcons = {
  'Starters': Utensils,
  'Main Course': Pizza,
  'Desserts': Cookie,
  'Beverages': Coffee,
  'Default': Utensils,
  'CustomMenu':ChefHat
};

interface MenuSidebarProps {
  categories: MenuCat[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
  isMobile?: boolean;
}

export function MenuSidebar({ 
  categories, 
  selectedCategory, 
  onCategorySelect, 
  isMobile = false 
}: MenuSidebarProps) {
  const router = useRouter();
  const sidebarWidth = isMobile ? "w-20" : "w-24";
  const iconSize = isMobile ? "w-10 h-10" : "w-12 h-12";
  const iconInnerSize = isMobile ? "w-5 h-5" : "w-6 h-6";
  const buttonSpacing = isMobile ? "mb-4" : "mb-6";
  const padding = isMobile ? "p-4" : "p-6";
  const [showCustomMenuCard, setShowCustomMenuCard] = useState(false);
  const phoneNumber = "+91 98206 69011";
  const whatsappNumber = "+919820669011";

  // ADD this function
  const handleCategoryClick = (category: string) => {
    if (category === 'CUSTOM MENU') {
      setShowCustomMenuCard(true);
    } else {
      onCategorySelect(category);
    }
  };
   const handleContactClick = (method: string) => {
    switch (method) {
      case 'phone':
        window.open(`tel:${phoneNumber}`, '_self');
        break;
      case 'whatsapp':
      const message = encodeURIComponent("Hi! I'm interested in your catering services and would like to discuss a custom menu.");
      window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${message}`, '_blank');
        break;
    }
    setShowCustomMenuCard(false);
  };


  const allCategories = [...categories, { category: 'Custom Menu' }];


   return (
    <>
      <div className={`${sidebarWidth} bg-gradient-to-b from-orange-600 to-red-700 flex flex-col relative z-10`}>
        {/* Your existing back button code stays exactly the same */}
        <div className={`${padding} border-b border-orange-500`}>
          <div className={`${isMobile ? 'w-12 h-12' : 'w-14 h-14'} bg-orange-800/30 rounded-xl flex items-center justify-center cursor-pointer hover:bg-orange-800/50 transition-all duration-200`}>
            <button className="w-6 h-6 text-white">
              <StepBack onClick={() => router.push('/')} />
            </button>
          </div>
        </div>

        {/* REPLACE your existing categories.map with this: */}
        <div className={`flex-1 ${isMobile ? 'py-6' : 'py-8'}`}>
          {allCategories.map((category: MenuCat | { category: string }, index: number) => {
            const IconComponent = categoryIcons[category.category as keyof typeof categoryIcons] || categoryIcons.Default;
            const isSelected = selectedCategory === category.category.toUpperCase();
            const isCustomMenu = category.category === 'Custom Menu';

            return (
              <motion.button
                key={category.category}
                onClick={() => handleCategoryClick(category.category.toUpperCase())} // Changed this line
                className={`w-full p-4 ${buttonSpacing} flex flex-col items-center transition-all duration-200 relative ${
                  isSelected && !isCustomMenu ? 'bg-orange-800/40' : 'hover:bg-orange-700/30'
                } ${isCustomMenu ? 'border-t border-orange-500/50 mt-4 pt-6' : ''}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isCustomMenu && (
                  <motion.div
                    className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                )}
                
                <div className={`${iconSize} rounded-xl flex items-center justify-center ${isMobile ? 'mb-1' : 'mb-2'} ${
                  isSelected && !isCustomMenu
                    ? 'bg-white text-orange-600 shadow-lg'
                    : isCustomMenu
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-orange-800/30 text-white'
                }`}>
                  <IconComponent className={iconInnerSize} />
                </div>
                <span className="text-xs text-white font-medium text-center leading-tight">
                  {category.category.split(' ').map(word =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                  ).join(' ')}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* ADD this modal after your existing div */}
      <AnimatePresence>
        {showCustomMenuCard && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setShowCustomMenuCard(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
            >
              <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-red-600 p-6 text-white relative">
                  <button
                    onClick={() => setShowCustomMenuCard(false)}
                    className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                      <ChefHat className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Custom Menu</h2>
                      <p className="text-orange-100">We serve everything!</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      We Serve Everything You Demand
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Can&apos;t find what you&apos;re looking for? No problem! Our chefs can prepare 
                      any dish you desire. Contact us directly and we&apos;ll make it happen.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleContactClick('phone')}
                      className="w-full flex items-center justify-center p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors group"
                    >
                      <Phone className="w-5 h-5 text-blue-600 mr-3 group-hover:scale-110 transition-transform" />
                      <span className="font-medium text-blue-800">Call Us Now</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleContactClick('whatsapp')}
                      className="w-full flex items-center justify-center p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors group"
                    >
                      <MessageCircle className="w-5 h-5 text-green-600 mr-3 group-hover:scale-110 transition-transform" />
                      <span className="font-medium text-green-800">WhatsApp</span>
                    </motion.button>
                  </div>

                  <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                    <p className="text-sm text-gray-600 text-center">
                      <span className="font-medium">Quick Response:</span> We typically respond within 15 minutes during business hours
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
