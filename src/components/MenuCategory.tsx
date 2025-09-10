'use client';

import { motion } from 'framer-motion';
import MenuItemCard from './MenuItemCard';

interface MenuItem {
  name: string;
  image: string;
  description: string;
}

interface MenuCategoryProps {
  category: string;
  items: MenuItem[];
  categoryIndex: number;
}

export default function MenuCategory({ category, items, categoryIndex }: MenuCategoryProps) {
  const categoryColors = [
    'from-red-500 to-pink-500',
    'from-green-500 to-emerald-500',
    'from-purple-500 to-indigo-500',
    'from-blue-500 to-cyan-500',
  ];

  const gradientClass = categoryColors[categoryIndex % categoryColors.length];

  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
    >
      {/* Category Header */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: categoryIndex * 0.2 + 0.2 }}
      >
        <motion.h2 
          className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent mb-4`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {category}
        </motion.h2>
        <motion.div 
          className={`w-32 h-1 bg-gradient-to-r ${gradientClass} mx-auto rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          transition={{ duration: 0.8, delay: categoryIndex * 0.2 + 0.4 }}
        />
        <p className="text-gray-600 mt-4 text-lg">
          Discover our carefully crafted {category.toLowerCase()} selection
        </p>
      </motion.div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {items.map((item, itemIndex) => (
          <MenuItemCard
            key={itemIndex}
            name={item.name}
            image={item.image}
            description={item.description}
            index={itemIndex}
          />
        ))}
      </div>
    </motion.div>
  );
}