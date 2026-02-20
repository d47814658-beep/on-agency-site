import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

// Fix: Cast motion components to any
const MotionA = motion.a as any;

export const ScrollToTop: React.FC = () => {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <MotionA
          href="#hero"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 left-6 z-40 p-3 bg-black text-white rounded-full shadow-xl shadow-black/20 cursor-pointer hover:bg-gray-800 transition-colors flex items-center justify-center border border-white/10"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </MotionA>
      )}
    </AnimatePresence>
  );
};