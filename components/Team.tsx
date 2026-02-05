import React from 'react';
import Section from './ui/Section';
import { TEAM_MEMBERS } from '../constants';
import { ExternalLink } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <Section id="team">
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">The Team</h2>
        <p className="text-zinc-400 max-w-2xl">
          Experts in their respective fields, working together to deliver excellence.
        </p>
      </div>

      <div className="grid gap-8">
        {TEAM_MEMBERS.map((member, idx) => (
          <div 
            key={idx} 
            className="group p-8 rounded-3xl border border-border bg-black hover:border-zinc-800 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row gap-8">
              {/* Avatar Placeholder */}
              <div className="shrink-0">
                <div className="w-20 h-20 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xl font-bold text-zinc-600">
                    {member.name.charAt(0)}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <span className="text-sm font-medium text-zinc-500 bg-zinc-900/50 px-3 py-1 rounded-full border border-zinc-800 mt-2 md:mt-0 w-fit">
                    {member.role}
                  </span>
                </div>
                
                <p className="text-zinc-400 leading-relaxed mb-4">
                  {member.description}
                </p>

                {member.portfolioUrl && (
                  <a 
                    href={member.portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-medium text-zinc-500 hover:text-white transition-colors mb-6 group/link"
                  >
                    <ExternalLink size={14} className="mr-2" />
                    <span className="border-b border-transparent group-hover/link:border-white transition-colors">View Portfolio</span>
                  </a>
                )}

                {member.expertise && (
                  <div className="pt-6 border-t border-border">
                    <h4 className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-3">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, sIdx) => (
                        <span 
                          key={sIdx} 
                          className="text-xs font-medium text-zinc-400 bg-zinc-900/80 px-3 py-1.5 rounded-full border border-zinc-800/60 hover:border-zinc-700 hover:text-zinc-200 hover:bg-zinc-900 transition-all cursor-default shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Team;