'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';

interface MenuItemCardProps {
  name: string;
  image: string;
  description: string;
  price: string;
  index: number;
}

export default function MenuItemCard({ name, image, description, price, index }: MenuItemCardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover-glow group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -8,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
      }}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <motion.div
          className="w-full h-full relative"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
        
        {/* Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        {/* Price Badge */}
        <motion.div
          className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full font-bold shadow-lg"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          whileHover={{ scale: 1.1 }}
        >
          {price}
        </motion.div>

        {/* Rating */}
        <motion.div
          className="absolute top-4 left-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
        >
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium text-gray-700">4.8</span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <motion.h3 
          className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
        >
          {name}
        </motion.h3>
        
        <motion.p 
          className="text-gray-600 text-sm leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
        >
          {description}
        </motion.p>

        {/* Add to Cart Button */}
        <motion.button
          className="mt-4 w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-2 px-4 rounded-lg font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 hover:shadow-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Order Now
        </motion.button>
      </div>
    </motion.div>
  );
}