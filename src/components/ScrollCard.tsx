'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const demoCards = [
  {
    id: 1,
    title: "Delicious Buffets",
    description: "Wide variety of cuisines curated for your special day",
    color: "bg-gradient-to-r from-orange-500 to-red-500"
  },
  {
    id: 2,
    title: "Live Counters",
    description: "Interactive food stations for a premium experience",
    color: "bg-gradient-to-r from-blue-500 to-indigo-500"
  },
  {
    id: 3,
    title: "Elegant Setup",
    description: "Aesthetic presentation that elevates your event",
    color: "bg-gradient-to-r from-green-500 to-emerald-500"
  }
];

export default function ScrollCards() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("left");

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault(); // stop normal scroll
      if (e.deltaY > 0) {
        // Scroll down → next card
        if (index < demoCards.length - 1) {
          setDirection("left");
          setIndex((prev) => prev + 1);
        }
      } else if (e.deltaY < 0) {
        // Scroll up → previous card
        if (index > 0) {
          setDirection("right");
          setIndex((prev) => prev - 1);
        }
      }
    };

    // Attach scroll listener
    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [index]);

  const variants = {
    enter: (dir: "left" | "right") => ({
      x: dir === "left" ? "100%" : "-100%",
      opacity: 0,
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "absolute",
    },
    exit: (dir: "left" | "right") => ({
      x: dir === "left" ? "-100%" : "100%",
      opacity: 0,
      position: "absolute",
    }),
  };

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={demoCards[index].id}
          className={`w-full h-full flex flex-col items-center justify-center text-white text-center px-6 ${demoCards[index].color}`}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">{demoCards[index].title}</h2>
          <p className="text-lg md:text-2xl max-w-2xl">{demoCards[index].description}</p>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
