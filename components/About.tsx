import React from 'react';
import Section from './ui/Section';
import { VALUES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">About NOIR</h2>
          <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
            <p>
              We are a three-person web development agency specializing in building <strong className="text-white">clean, scalable, and high-performance websites and web applications</strong>.
            </p>
            <p>
              Our work combines strong engineering fundamentals with thoughtful UI/UX execution. We don’t ship bloated systems or short-term solutions — we build products designed to perform, scale, and last.
            </p>
            <p>
              We work closely with clients, keeping communication direct and development intentional from concept to deployment.
            </p>
          </div>
        </div>

        <div className="bg-surface border border-border rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-white mb-6">How We Work</h3>
          <ul className="space-y-4">
            {VALUES.map((value, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-zinc-500 mt-1 shrink-0" />
                <span className="text-zinc-300">{value.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default About;