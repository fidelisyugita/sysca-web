import React from 'react';
import { motion } from 'framer-motion';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ children, className = '', id }) => {
  return (
    <section 
      id={id}
      className={`relative h-screen w-full snap-start snap-always overflow-hidden flex flex-col items-center justify-center ${className}`}
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default ParallaxSection;
