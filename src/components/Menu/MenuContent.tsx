'use client';

import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { MenuItem } from '@/types/content';

interface MenuContentProps {
  selectedCategory: string;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  menuItems: MenuItem[];
  isMobile?: boolean;
}

export function MenuContent({ 
  selectedCategory, 
  searchTerm, 
  onSearchChange, 
  menuItems,
  isMobile = false 
}: MenuContentProps) {
  return (
    <div className="flex-1 bg-white flex flex-col">
      {/* Header with Logo and Search */}
      <div className={`bg-white ${isMobile ? 'p-6' : 'p-8'} text-center border-b border-gray-100`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex flex-col items-center group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-20 h-20 relative overflow-hidden rounded-full ring-2 ring-orange-100 group-hover:ring-orange-300 transition-all duration-300 mb-4 shadow-lg"
            >
              <Image
                src="/images/hanuman-logo.jpeg"
                alt="Hanuman Caterers Logo"
                fill
                className="object-cover"
              />
            </motion.div>

            <h1 className={`${isMobile ? 'text-2xl mb-3' : 'text-2xl mb-4'} font-bold text-gray-800 group-hover:text-orange-700 transition-all duration-300`}>
              Hanuman CATERERS
            </h1>
          </Link>

          {/* Search Bar */}
          <div className={`relative ${isMobile ? 'max-w-sm' : 'max-w-md'} mx-auto`}>
            <Search className={`absolute ${isMobile ? 'left-3 w-4 h-4' : 'left-4 w-5 h-5'} top-1/2 transform -translate-y-1/2 text-gray-400`} />
            <input
              type="text"
              placeholder={`Search ${selectedCategory} items...`}
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className={`w-full ${isMobile ? 'pl-10 py-2 text-sm' : 'pl-12 py-3'} pr-4 rounded-full border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all duration-200 placeholder-gray-400`}
            />
          </div>
        </motion.div>
      </div>

      {/* Menu Items */}
      <div className={`flex-1 overflow-y-auto ${isMobile ? 'p-4' : 'p-8'}`}>
        {isMobile ? (
          <div className="space-y-4">
            {menuItems.map((item: MenuItem, index: number) => (
              <MenuItemCard key={index} item={item} index={index} isMobile={true} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {menuItems.map((item: MenuItem, index: number) => (
              <MenuItemCard key={index} item={item} index={index} isMobile={false} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Menu Item Card Component
function MenuItemCard({ item, index, isMobile }: { item: MenuItem; index: number; isMobile: boolean }) {
  return (
    <motion.div
      className="bg-white rounded-3xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -2 }}
    >
      {/* Item Image */}
      <div className="relative w-20 h-20 mx-auto mb-4">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover rounded-full"
          sizes="80px"
        />
        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-full border-2 border-white"></div>
      </div>

      {/* Item Info */}
      <div className="text-center">
        <h3 className="text-lg font-bold text-gray-800 mb-1">{item.name}</h3>
        <p className="text-orange-600 font-bold text-lg mb-3">{item.price}</p>
        <p className="text-gray-600 text-xs leading-relaxed line-clamp-2 px-2">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}