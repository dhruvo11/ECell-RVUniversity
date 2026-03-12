import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface WordRotatorProps {
  words: string[];
  className?: string;
  interval?: number;
}

export default function WordRotator({ words, className = "", interval = 3000 }: WordRotatorProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <div className={`relative inline-block h-[1.1em] overflow-hidden align-bottom ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center whitespace-nowrap"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
      {/* Invisible spacer to maintain width of the longest word */}
      <span className="invisible pointer-events-none px-2">
        {words.reduce((a, b) => a.length > b.length ? a : b)}
      </span>
    </div>
  );
}
