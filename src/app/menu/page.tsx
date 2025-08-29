'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MenuCategory from '@/components/MenuCategory';
import { Search, Filter } from 'lucide-react';
import { ContentData ,MenuItem ,MenuCat } from '@/types/content';



export default function MenuPage() {
  const [contentData, setContentData] = useState<ContentData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch('/data/content.json');
        const data = await response.json();
        setContentData(data);
      } catch (error) {
        console.error('Error loading content:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadContent();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loader"></div>
      </div>
    );
  }

  if (!contentData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Error loading menu. Please refresh the page.</p>
      </div>
    );
  }

  const categories = ['All', ...contentData.menu.map((cat: MenuCat) => cat.category)];

  const filteredMenu = contentData.menu.filter((category: MenuCat) => {
    if (selectedCategory !== 'All' && category.category !== selectedCategory) {
      return false;
    }
    
    if (searchTerm) {
      return category.items.some((item: MenuItem) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return true;
  }).map((category: MenuCat) => ({
    ...category,
    items: searchTerm 
      ? category.items.filter((item: MenuItem) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : category.items
  }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Header />

      {/* Hero Section */}
<section className="relative flex items-center justify-center min-h-[60vh] bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 overflow-hidden px-4 py-16 sm:py-24">
  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

 <div className="relative z-10 max-w-7xl mx-auto text-center sm:mt-20 px-4 pt-16 sm:pt-20">
  <motion.h1 
    className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-6 text-glow break-words"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    Our Menu
  </motion.h1>

    
    <motion.p 
      className="text-base sm:text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto break-words"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      Explore our delicious collection of authentic Indian dishes crafted with traditional recipes and fresh ingredients
    </motion.p>

    {/* Search and Filter */}
    <motion.div 
      className="max-w-2xl mx-auto w-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search dishes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-full bg-white/90 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-gray-800 placeholder-gray-500"
          />
        </div>

        {/* Category Filter */}
        <div className="relative w-full sm:w-auto">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full sm:w-auto pl-10 pr-8 py-3 rounded-full bg-white/90 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-gray-800 appearance-none cursor-pointer"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
    </motion.div>
  </div>
</section>


      {/* Menu Content */}
      <main className="py-20 bg-gradient-to-br from-orange-50 to-orange-100 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredMenu.length > 0 ? (
            filteredMenu.map((category: MenuCat, categoryIndex: number) => (
              <MenuCategory
                key={category.category}
                category={category.category}
                items={category.items}
                categoryIndex={categoryIndex}
              />
            ))
          ) : (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-2xl text-gray-600 mb-4">No items found</p>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </main>

      <Footer
        contact={contentData.landingPage.footer.contact}
        socialLinks={contentData.landingPage.footer.socialLinks}
      />
    </motion.div>
  );
}