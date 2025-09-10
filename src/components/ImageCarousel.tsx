"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Star } from "lucide-react";
import clsx from "clsx";

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
}

interface ImageCarouselProps {
  className?: string;
}

const cards: Card[] = [
  {
    id: 1,
    title: "Buffet Catering",
    description: "Delicious spreads designed for every occasion with an extensive variety of dishes.",
    image: "/images/test/buffet.jpg",
    features: ["Multi-cuisine options", "Live serving counters", "Customizable portions"]
  },
  {
    id: 2,
    title: "Live Counters",
    description: "Interactive food counters with live cooking that brings theater to your dining experience.",
    image: "/images/test/foodCounter.jpg",
    features: ["Fresh preparations", "Chef interaction", "Made-to-order dishes"]
  },
  {
    id: 3,
    title: "Wedding Catering",
    description: "Elegant catering setups for grand celebrations that make your special day unforgettable.",
    image: "/images/test/wedding.jpg",
    features: ["Customized menus", "Elegant presentation", "Full-service setup"]
  },
  {
    id: 4,
    title: "Corporate Events",
    description: "Professional catering for business events with sophisticated service standards.",
    image: "/images/test/corporate.jpg",
    features: ["Professional service", "Flexible timings", "Business-friendly setup"]
  },
  {
    id: 5,
    title: "Outdoor Catering",
    description: "Perfect setups for garden parties & open-air events with weather-resistant solutions.",
    image: "/images/test/outdoor.jpg",
    features: ["Weather adaptable", "Portable equipment", "Scenic presentations"]
  },
  {
    id: 6,
    title: "Custom Menus",
    description: "Tailor-made menus to suit your unique taste preferences and dietary requirements.",
    image: "/images/test/menu.jpg",
    features: ["Dietary accommodations", "Regional specialties", "Personalized recipes"]
  },
];

export default function ImageCarousel({ className }: ImageCarouselProps) {
  const [currentCard, setCurrentCard] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform scroll progress to card index
  const cardProgress = useTransform(
    scrollYProgress, 
    [0, 1], 
    [0, cards.length - 1]
  );

  useEffect(() => {
    const unsubscribe = cardProgress.onChange((latest) => {
      const newIndex = Math.round(latest);
      setCurrentCard(Math.max(0, Math.min(cards.length - 1, newIndex)));
    });
    return unsubscribe;
  }, [cardProgress]);

  // Background parallax effect
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  // Image and content animations based on scroll
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0.8]);

  return (
    <section
      ref={containerRef}
      className={clsx(
        "relative",
        className
      )}
      style={{ height: `${cards.length *38}vh` }} // Make section tall enough for all cards
    >
      {/* Absolute Background (contained within section) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E63946] via-[#FF6B00] to-[#FFF8F0]">
        <motion.div
          className="absolute inset-0"
          style={{ y: backgroundY }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08)_0%,transparent_50%)]" />
          
          {/* Animated background elements */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${10 + (i * 8)}%`,
                top: `${15 + (i % 4) * 20}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            >
              <div className={`w-2 h-2 ${i % 2 ? 'bg-white/10' : 'bg-white/5'} ${i % 3 ? 'rounded-full' : 'rotate-45'}`} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Sticky Content Container */}
      <div className="sticky top-0 h-screen flex items-center justify-center py-4 sm:py-8">
        <div className="w-full max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
          
          {/* Left Side - Image */}
          <motion.div 
            className="relative order-2 lg:order-1"
            style={{ opacity: contentOpacity }}
          >
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
              {cards.map((card, index) => (
                <motion.div
                  key={`image-${card.id}-${index}`}
                  className="absolute inset-0"
                  animate={{ 
                    opacity: index === currentCard ? 1 : 0,
                    scale: index === currentCard ? 1 : 1.05,
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    priority={index < 2}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </motion.div>
              ))}
            </div>

            {/* Image indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {cards.map((_, index) => (
                <motion.div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentCard 
                      ? 'w-6 bg-white' 
                      : 'w-1.5 bg-white/50'
                  }`}
                  layout
                />
              ))}
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            className="text-white order-1 lg:order-2"
            style={{ opacity: contentOpacity }}
          >
            {/* Service Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-3 py-1.5 mb-4"
              key={`badge-${currentCard}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Star className="w-3 h-3 text-yellow-300" />
              <span className="text-xs font-medium">Service #{currentCard + 1}</span>
            </motion.div>

            {/* Title */}
            <motion.h3
              className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3 sm:mb-4 leading-tight"
              key={`title-${currentCard}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {cards[currentCard].title}
            </motion.h3>

            {/* Description */}
            <motion.p
              className="text-sm sm:text-base lg:text-lg text-white/90 mb-4 sm:mb-6 leading-relaxed"
              key={`desc-${currentCard}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {cards[currentCard].description}
            </motion.p>

            {/* Features */}
            <motion.div
              className="space-y-2 mb-4 sm:mb-6"
              key={`features-${currentCard}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {cards[currentCard].features.map((feature, featureIndex) => (
                <motion.div
                  key={featureIndex}
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + featureIndex * 0.1 }}
                >
                  <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full flex-shrink-0" />
                  <span className="text-white/80 font-medium text-xs sm:text-sm">{feature}</span>
                </motion.div>
              ))}
            </motion.div>


          </motion.div>
        </div>
      </div>

      {/* Progress indicator - only visible within section */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        style={{ opacity: contentOpacity }}
      >
        <div className="flex items-center space-x-2 sm:space-x-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-3 sm:px-6 py-2 sm:py-3">
          <span className="text-white/80 text-xs sm:text-sm font-medium">
            {currentCard + 1} / {cards.length}
          </span>
          <div className="w-16 sm:w-24 h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white rounded-full"
              style={{
                width: `${((currentCard + 1) / cards.length) * 100}%`
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </motion.div>

      {/* Scroll hint - only visible within section */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 z-20"
        style={{ opacity: contentOpacity }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex items-center space-x-1 sm:space-x-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-2 sm:px-4 py-1.5 sm:py-2">
          <span className="text-white/80 text-xs sm:text-sm hidden sm:inline">Scroll to explore</span>
          <span className="text-white/80 text-xs sm:hidden">Scroll</span>
          <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-white/70" />
        </div>
      </motion.div>
    </section>
  );
}