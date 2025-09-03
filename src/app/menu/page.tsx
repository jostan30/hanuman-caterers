'use client';

import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import { ContentData } from '@/types/content';
import { MenuSidebar } from '@/components/Menu/MenuSidebar';
import { MenuContent } from '@/components/Menu/MenuContent';

export default function MenuPage() {
  const [contentData, setContentData] = useState<ContentData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('STARTERS');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch('/data/content.json');
        const data = await response.json();
        setContentData(data);
        if (data.menu.length > 0) {
          setSelectedCategory(data.menu[0].category.toUpperCase());
        }
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
      <div className="min-h-screen flex items-center justify-center bg-orange-50">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-600"></div>
      </div>
    );
  }

  if (!contentData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-orange-50">
        <p className="text-xl text-gray-600">Error loading menu. Please refresh the page.</p>
      </div>
    );
  }

  const currentCategoryData = contentData.menu.find(
    cat => cat.category.toUpperCase() === selectedCategory
  );

  const currentItems = currentCategoryData ? currentCategoryData.items : [];

  // Filter items based on search term
  const filteredItems = searchTerm
    ? currentItems.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : currentItems;

  return (
    <>
      {/* Fixed layout structure */}
      <div className="min-h-screen bg-orange-50">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="flex h-screen">
            <MenuSidebar
              categories={contentData.menu}
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
              isMobile={true}
            />
            <MenuContent
              selectedCategory={selectedCategory}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              menuItems={filteredItems}
              isMobile={true}
            />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex h-screen">
          <MenuSidebar
            categories={contentData.menu}
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
            isMobile={false}
          />
          <MenuContent
            selectedCategory={selectedCategory}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            menuItems={filteredItems}
            isMobile={false}
          />
        </div>
      </div>
     
    </>
  );
}
