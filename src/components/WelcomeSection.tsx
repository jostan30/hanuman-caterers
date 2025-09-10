'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface WelcomeSectionProps {
  title: string;
  subtitle: string;
  description: string;
  className?: string;
}

const carouselImages = [
  {
    src: "/images/welcomeSection/1.png",
    alt: "Elegant catering setup"
  },
  {
    src: "/images/welcomeSection/2.png",
    alt: "Delicious food spread"
  },
  {
    src: "/images/welcomeSection/3.png",
    alt: "Professional kitchen"
  },
  {
    src: "/images/welcomeSection/4.png",
    alt: "Gourmet dishes"
  },
  {
    src: "/images/welcomeSection/5.png",
    alt: "Gourmet dishes"
  }
];

export default function WelcomeSection({ title, subtitle, description }: WelcomeSectionProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextImage = () => {
    setIsAutoPlaying(false);
    setCurrentImage((prev) => (prev + 1) % carouselImages.length);

    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevImage = () => {
    setIsAutoPlaying(false);
    setCurrentImage((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);

    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToImage = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentImage(index);

    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }

    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Minimal Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-orange-100/20"
            style={{
              width: `${40 + i * 15}px`,
              height: `${40 + i * 15}px`,
              left: `${20 + i * 30}%`,
              top: `${20 + i * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 mt-15">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">

          {/* Left Side - Minimal Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Veg Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 text-black font-bold justify-center lg:justify-start">
              <Image
                src="/images/veg-logo.jpeg"
                alt="Pure Veg Logo"
                width={28}
                height={28}
                className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 object-contain"
              />
              <span className="text-sm sm:text-base lg:text-lg font-semibold sm:font-bold">
                Pure Veg
              </span>
            </div>

            {/* Rating */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-500 fill-current" />
                ))}
                <span className="ml-2 text-gray-600 text-xs sm:text-sm">4.8</span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <span className="bg-gradient-to-r from-gray-800 via-orange-600 to-red-600 bg-clip-text text-transparent">
                {title}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              className="text-base sm:text-xl lg:text-2xl font-medium text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {subtitle}
            </motion.h2>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center lg:justify-start lg:items-start pt-2 sm:pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <Link href="/menu" className="w-full sm:w-auto">
                <motion.button
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 sm:px-8 py-3 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 justify-center group min-h-[44px] sm:min-h-[48px]"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Explore Menu</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <motion.a
                href="tel:+919876543210"
                className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-50 transition-all duration-300 text-center flex items-center justify-center min-h-[44px] sm:min-h-[48px]"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Now
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="relative order-2 lg:order-2 w-full"
          >
            <div
              ref={carouselRef}
              className="relative w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] xl:aspect-[3/2] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl group"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >

              {/* Images */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={carouselImages[currentImage].src}
                  alt={carouselImages[currentImage].alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.7 }}
                />
              </AnimatePresence>

              {/* Desktop Navigation Buttons */}
              <div className="hidden md:block">
                <button
                  onClick={prevImage}
                  className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-1.5 lg:p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                >
                  <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-1.5 lg:p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                >
                  <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
                </button>
              </div>

              {/* Image Indicators */}
              <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${index === currentImage ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                      }`}
                  />
                ))}
              </div>

              {/* Auto-play indicator */}
              {isAutoPlaying && (
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                  Auto
                </div>
              )}

              {/* Gradient Overlay for better text readability on mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent lg:hidden" />
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}