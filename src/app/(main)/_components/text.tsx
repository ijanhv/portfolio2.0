"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const TextAnimation = () => {
  const words = ["websites", "interfaces", "experiences", "brands"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change the interval duration as needed

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="relative h-32 overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentWordIndex}
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute text-white"
        >
          {words[currentWordIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
