import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  containerClass?: string;
}

const Section: React.FC<SectionProps> = ({ id, className = '', containerClass = '', children }) => {
  return (
    <section id={id} className={`py-20 md:py-32 relative overflow-hidden ${className}`}>
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClass}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;