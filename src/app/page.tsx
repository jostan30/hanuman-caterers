'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/Footer';
import LogoAnimation from '@/components/LogoAnimation';
import WelcomeSection from '@/components/WelcomeSection';
import AboutSection from '@/components/AboutSection';
import {
  ContentData
} from '@/types/content';
import FindUs from '@/components/FindUs';
import ImageCarousel from '@/components/ImageCarousel';

export default function Home() {
  const [showLogoAnimation, setShowLogoAnimation] = useState(true);
  const [contentData, setContentData] = useState<ContentData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleLogoAnimationComplete = () => {
    setShowLogoAnimation(false);
  };

  useEffect(() => {
    // Load content data
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

  // Enhanced loading screen
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-500">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.p
            className="text-white text-lg font-medium"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Loading delicious content...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  // Enhanced error screen
  if (!contentData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <motion.div
          className="text-center max-w-md mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl">⚠️</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Oops! Something went wrong</h2>
          <p className="text-gray-600 mb-6">We couldn&apos;t load the page content. Please try refreshing the page.</p>
          <motion.button
            onClick={() => window.location.reload()}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Refresh Page
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {showLogoAnimation && (
          <LogoAnimation onComplete={handleLogoAnimationComplete} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!showLogoAnimation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Enhanced Header with scroll detection */}
           

            <main className="relative">
              {/* Section 1: Welcome & About - Pure White Background */}
              <motion.div 
                className="bg-white relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {/* Welcome Section */}
                <WelcomeSection
                  title={contentData.landingPage.welcome.title}
                  subtitle={contentData.landingPage.welcome.subtitle}
                  description={contentData.landingPage.welcome.description}
                />

                {/* About Section */}
                <AboutSection
                  title={contentData.landingPage.aboutUs.title}
                  description={contentData.landingPage.aboutUs.description}
                  highlights={contentData.landingPage.aboutUs.highlights}
                />
              </motion.div>

              {/* Section 2: Services Carousel - Orange-Red Gradient */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <ImageCarousel />
              </motion.div>

              {/* Section 3: Find Us - Pure White Background */}
              <motion.div 
                className="bg-white relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <FindUs />
              </motion.div>

              {/* Section 4: Footer - Dark Gradient */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Footer
                  contact={contentData.landingPage.footer.contact}
                  socialLinks={contentData.landingPage.footer.socialLinks}
                />
              </motion.div>
            </main>

            {/* Scroll to Top Button */}
            <motion.button
              className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 2 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ↑
              </motion.div>
            </motion.button>

            {/* Page transition overlay */}
            <motion.div
              className="fixed inset-0 bg-white z-40 pointer-events-none"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}