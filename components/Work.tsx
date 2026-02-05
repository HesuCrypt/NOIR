import React from 'react';
import Section from './ui/Section';
import { CURRENT_PROJECT } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Work: React.FC = () => {
  return (
    <Section id="work" className="bg-zinc-900/30">
      <div className="mb-12">
        <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-2">Current Project</h2>
        <h3 className="text-3xl font-bold text-white">Production Spotlight</h3>
      </div>

      <div className="group relative bg-black border border-border rounded-3xl overflow-hidden hover:border-zinc-700 transition-colors duration-500">
        <div className="grid md:grid-cols-2 gap-0">
          
          {/* Visual Placeholder for Project */}
          <div className="h-64 md:h-auto bg-zinc-900 relative flex items-center justify-center border-b md:border-b-0 md:border-r border-border p-8">
             <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black opacity-50" />
             <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-white/10 rounded-xl mx-auto mb-4 flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <span className="text-2xl font-bold">M</span>
                </div>
                <h4 className="text-2xl font-bold text-white">{CURRENT_PROJECT.name}</h4>
             </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="mb-4">
              {CURRENT_PROJECT.url ? (
                <a 
                  href={CURRENT_PROJECT.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-2xl font-bold text-white hover:text-blue-400 transition-colors group/title"
                >
                  {CURRENT_PROJECT.name}
                  <ArrowUpRight className="ml-2 w-5 h-5 text-zinc-600 group-hover/title:text-blue-400 transition-colors" />
                </a>
              ) : (
                <h4 className="text-2xl font-bold text-white flex items-center">
                  {CURRENT_PROJECT.name}
                  <ArrowUpRight className="ml-2 w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" />
                </h4>
              )}
            </div>
            
            <p className="text-zinc-400 mb-8 leading-relaxed">
              {CURRENT_PROJECT.description}
            </p>

            <div className="space-y-4">
              <h5 className="text-sm font-semibold text-zinc-200 uppercase tracking-wide">Scope of Work</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CURRENT_PROJECT.scope.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-sm text-zinc-500">
                    <span className="w-1.5 h-1.5 bg-zinc-700 rounded-full" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Work;