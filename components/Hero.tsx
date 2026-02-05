import React from 'react';
import Button from './ui/Button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center space-x-2 bg-surface border border-border rounded-full px-3 py-1 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-zinc-400 font-medium tracking-wide uppercase">Available for new projects</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
            We build reliable, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">
              design-driven
            </span> web systems.
          </h1>

          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            A small web development agency focused on modern interfaces, scalable systems, and production-ready solutions for real businesses.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>
              View Our Work
            </Button>
            <Button 
              variant="outline" 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-zinc-600 animate-bounce"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;