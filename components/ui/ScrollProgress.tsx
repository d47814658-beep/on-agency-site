import React from 'react';
import { motion, useScroll } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      // Fix: Cast style to any to allow scaleX motion value
      style={{ scaleX: scrollYProgress } as any}
      className="fixed top-0 left-0 right-0 h-1 bg-black origin-left z-[100]"
    />
  );
};