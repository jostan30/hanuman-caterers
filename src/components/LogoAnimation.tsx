'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from "next/image";


interface LogoAnimationProps {
  onComplete: () => void;
}

export default function LogoAnimation({ onComplete }: LogoAnimationProps) {
  const controls = useAnimation();
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const animateSequence = async () => {
      // Logo pops up from bottom
      await controls.start({
        y: 0,
        scale: 1,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 1.5
        }
      });

      // Wait a moment
      await new Promise(resolve => setTimeout(resolve, 800));

      // Create particles
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }));
      setParticles(newParticles);

      // Scale up and fade out
      await controls.start({
        scale: 3,
        opacity: 0,
        transition: {
          duration: 1,
          ease: "easeInOut"
        }
      });

      // Complete animation
      setTimeout(onComplete, 500);
    };

    animateSequence();
  }, [controls, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-yellow-300 rounded-full"
          initial={{
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            scale: 0,
            opacity: 1
          }}
          animate={{
            x: particle.x,
            y: particle.y,
            scale: [0, 1, 0],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
            times: [0, 0.2, 1]
          }}
        />
      ))}

      {/* Main Logo */}
      <motion.div
        initial={{
          y: 100,
          scale: 0.5,
          opacity: 0
        }}
        animate={controls}
        className="text-center"
      >
        <motion.div
          className="mb-4"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 360 }}
          transition={{
            duration: 2,
            repeat: 1,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <Image
            src="/images/hanuman-logo.jpeg"   
            alt="Hanuman Caterers Logo"
            width={120}       
            height={120}
            className="mx-auto rounded-full" 
          />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white text-glow"
          initial={{ letterSpacing: "0.5em", opacity: 0 }}
          animate={{ letterSpacing: "0.1em", opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          HANUMAN
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl text-orange-100 font-medium"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          CATERERS
        </motion.h2>
        <motion.div
          className="w-24 h-1 bg-yellow-300 mx-auto mt-4 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 1, delay: 1.2 }}
        />
      </motion.div>
    </motion.div>
  );
}