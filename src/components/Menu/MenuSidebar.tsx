'use client';

import { motion } from 'framer-motion';
import { StepBack, Coffee, Utensils, Pizza, Cookie, Sandwich, IceCream, Martini } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { MenuCat } from '@/types/content';

const categoryIcons = {
  'Starters': Utensils,
  'Main Course': Pizza,
  'Desserts': Cookie,
  'Beverages': Coffee,
  'Default': Utensils
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

  return (
    <div className={`${sidebarWidth} bg-gradient-to-b from-orange-600 to-red-700 flex flex-col`}>
      {/* Back Button */}
      <div className={`${padding} border-b border-orange-500`}>
        <div className={`${isMobile ? 'w-12 h-12' : 'w-14 h-14'} bg-orange-800/30 rounded-xl flex items-center justify-center cursor-pointer hover:bg-orange-800/50 transition-all duration-200`}>
          <StepBack
            className="w-6 h-6 text-white"
            onClick={() => router.push('/')}
          />
        </div>
      </div>

      {/* Category Icons */}
      <div className={`flex-1 ${isMobile ? 'py-6' : 'py-8'}`}>
        {categories.map((category: MenuCat, index: number) => {
          const IconComponent = categoryIcons[category.category as keyof typeof categoryIcons] || categoryIcons.Default;
          const isSelected = selectedCategory === category.category.toUpperCase();

          return (
            <motion.button
              key={category.category}
              onClick={() => onCategorySelect(category.category.toUpperCase())}
              className={`w-full p-4 ${buttonSpacing} flex flex-col items-center transition-all duration-200 ${
                isSelected ? 'bg-orange-800/40' : 'hover:bg-orange-700/30'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`${iconSize} rounded-xl flex items-center justify-center ${isMobile ? 'mb-1' : 'mb-2'} ${
                isSelected
                  ? 'bg-white text-orange-600 shadow-lg'
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
  );
}