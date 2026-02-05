import React from 'react';
import Section from './ui/Section';
import { SERVICES } from '../constants';
import { Layers, Smartphone, LayoutTemplate, Database, Gauge, Wrench } from 'lucide-react';

const icons = [LayoutTemplate, Database, Smartphone, Layers, Gauge, Wrench];

const Services: React.FC = () => {
  return (
    <Section id="services">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Comprehensive development solutions tailored to your business needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <div 
              key={idx} 
              className="p-6 rounded-2xl bg-surface border border-border hover:bg-surfaceHover hover:border-zinc-700 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-border flex items-center justify-center mb-6 text-zinc-400 group-hover:text-white transition-colors">
                <Icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors">
                {service.title}
              </h3>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Services;