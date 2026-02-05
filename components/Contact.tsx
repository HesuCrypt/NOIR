import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="pb-32">
      <div className="relative rounded-3xl bg-zinc-900/50 border border-border p-12 md:p-24 text-center overflow-hidden">
        
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-900/5 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let’s talk about your project.
            </h2>
            <p className="text-xl text-zinc-400 mb-10">
            We are currently accepting new projects. <br/> Get in touch to discuss how we can help build your vision.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="mailto:louissebertillo2004@gmail.com">
                    Email Us
                </Button>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;