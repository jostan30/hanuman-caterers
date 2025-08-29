'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/Footer';
import LogoAnimation from '@/components/LogoAnimation';
import Header from '@/components/Header';
import WelcomeSection from '@/components/WelcomeSection';
import AboutSection from '@/components/AboutSection';
import AdvertisingSection from '@/components/AdvertisingSection';
import { ContentData

 } from '@/types/content';
export default function Home() {
  const [showLogoAnimation, setShowLogoAnimation] = useState(true);
  const [contentData, setContentData] = useState<ContentData|null>(null);
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
        <p className="text-xl text-gray-600">Error loading content. Please refresh the page.</p>
      </div>
    );
  }
  
  return (
    <>
      <AnimatePresence>
        {showLogoAnimation && (
          <LogoAnimation  onComplete={handleLogoAnimationComplete}/>
        )}
      </AnimatePresence>

       <AnimatePresence>
         {!showLogoAnimation && (
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.8 }}
           >
             <Header/>
            
             <main>
               <WelcomeSection
                 title={contentData.landingPage.welcome.title}
                 subtitle={contentData.landingPage.welcome.subtitle}
                 description={contentData.landingPage.welcome.description}
               />
              
               <AboutSection
                 title={contentData.landingPage.aboutUs.title}
                 description={contentData.landingPage.aboutUs.description}
                 highlights={contentData.landingPage.aboutUs.highlights}
               />
              
               <AdvertisingSection
                 title={contentData.landingPage.advertising.title}
                 mainOffer={contentData.landingPage.advertising.mainOffer}
                 services={contentData.landingPage.advertising.services}
               />
             </main>

             <Footer
               contact={contentData.landingPage.footer.contact}
               socialLinks={contentData.landingPage.footer.socialLinks}
             />
          </motion.div>
         )}
       </AnimatePresence>
     </>
  );
}







