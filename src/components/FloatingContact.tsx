'use client'
import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, PanInfo } from 'framer-motion';
import { Phone, MessageCircle, X, Grip, Mail } from 'lucide-react';

interface FloatingContactProps {
  phoneNumber?: string;
  whatsappNumber?: string;
}

export default function FloatingContact({ 
  phoneNumber = "+91 98206 69011",
  whatsappNumber = "+919820669011"
}: FloatingContactProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();


  // Initialize position based on screen size
  useEffect(() => {
    const updatePosition = () => {
      const isMobile = window.innerWidth < 768;
      const initialX = isMobile ? window.innerWidth - 80 : window.innerWidth - 100;
      const initialY = isMobile ? window.innerHeight - 150 : window.innerHeight - 200;
      
      setPosition({ x: initialX, y: initialY });
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, []);

    // Auto-center when expanded
  useEffect(() => {
    if (isExpanded) {
      const centerPosition = () => {
        const isMobile = window.innerWidth < 768;
        const widgetWidth = isMobile ? 280 : 320;
        const widgetHeight = isMobile ? 200 : 220;
        
        const centerX = (window.innerWidth - widgetWidth) / 2;
        const centerY = (window.innerHeight - widgetHeight) / 2;
        
        setPosition({ x: centerX, y: centerY });
        controls.start({
          x: centerX,
          y: centerY,
          transition: { type: "spring", stiffness: 300, damping: 30, duration: 0.5 }
        });
      };

      centerPosition();
      window.addEventListener('resize', centerPosition);
      return () => window.removeEventListener('resize', centerPosition);
    }
  }, [isExpanded, controls]);


  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent,info: PanInfo) => {
    setIsDragging(false);
    
    // Get viewport dimensions
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    
    // Widget dimensions (approximate)
    const widgetWidth = isExpanded ? (window.innerWidth < 768 ? 280 : 320) : (window.innerWidth < 768 ? 60 : 80);
    const widgetHeight = isExpanded ? (window.innerWidth < 768 ? 200 : 220) : (window.innerWidth < 768 ? 60 : 80);
    
    // Calculate bounds
    const bounds = {
      left: 10,
      right: viewport.width - widgetWidth - 10,
      top: 10,
      bottom: viewport.height - widgetHeight - 10
    };
    
    // Constrain position within viewport
    const newX = Math.max(bounds.left, Math.min(bounds.right, position.x + info.offset.x));
    const newY = Math.max(bounds.top, Math.min(bounds.bottom, position.y + info.offset.y));
    
    setPosition({ x: newX, y: newY });
    
    // Animate to final position
    controls.start({
      x: newX,
      y: newY,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    });
  };

  const handlePhoneCall = () => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleWhatsAppChat = () => {
    const message = encodeURIComponent("Hi! I'm interested in your catering services.");
    window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${message}`, '_blank');
  };


  return (
    <>
      {/* Viewport constraints container */}
      <div ref={constraintsRef} className="fixed inset-0 pointer-events-none z-[9999]" />
      
      {/* Floating Widget */}
      <motion.div
        className="fixed z-[9999] pointer-events-auto"
        style={{ x: position.x, y: position.y }}
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.1}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
        whileDrag={{ 
          scale: 1.05,
          rotate: isDragging ? 2 : 0,
          cursor: 'grabbing'
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Collapsed State */}
        {!isExpanded && (
          <motion.div
            className="relative group cursor-grab active:cursor-grabbing"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Main Button */}
            <motion.button
              onClick={() => !isDragging && setIsExpanded(true)}
              className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#E63946] to-[#FF6B00] rounded-full shadow-xl flex items-center justify-center text-white relative overflow-hidden"
              whileHover={{ 
                boxShadow: "0 20px 40px rgba(230, 57, 70, 0.4)",
              }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              <MessageCircle className="w-6 h-6 md:w-7 md:h-7 relative z-10" />
              
              {/* Pulse effect */}
              <motion.div
                className="absolute inset-0 border-2 border-white/30 rounded-full"
                animate={{ scale: [1, 1.5], opacity: [0.7, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>

            {/* Notification badge */}
            <motion.div
              className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div 
                className="w-2 h-2 bg-white rounded-full"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        )}

        {/* Expanded State */}
        {isExpanded && (
          <motion.div
            className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden w-72 md:w-80"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#E63946] to-[#FF6B00] px-6 py-4 relative">
              <motion.div
                className="absolute inset-0 bg-white/10"
                animate={{ x: [-100, 400] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center space-x-2">
                  <Grip className="w-5 h-5 text-white/70 cursor-grab" />
                  <span className="text-white font-bold text-lg">Contact Us</span>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Contact Options */}
            <div className="p-6 space-y-4">
              {/* Phone */}
              <motion.button
                onClick={handlePhoneCall}
                className="w-full flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-2xl transition-all duration-300 group"
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-semibold text-gray-800">Call Now</p>
                  <p className="text-sm text-gray-600">{phoneNumber}</p>
                </div>
              </motion.button>

              {/* WhatsApp */}
              <motion.button
                onClick={handleWhatsAppChat}
                className="w-full flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-2xl transition-all duration-300 group"
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-semibold text-gray-800">WhatsApp</p>
                  <p className="text-sm text-gray-600">Chat instantly</p>
                </div>
                
                {/* Online indicator */}
                <motion.div
                  className="w-3 h-3 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.button>
            </div>

            {/* Footer */}
            <div className="px-6 pb-4">
              <p className="text-xs text-gray-500 text-center">
                Available 24/7 for your catering needs
              </p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}