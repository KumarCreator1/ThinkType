import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <div className="mb-8 p-4 bg-emerald-500/10 rounded-full animate-pulse">
        <Sparkles className="text-emerald-400" size={48} />
      </div>
      
      <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-500 to-purple-500">
        ThinkingMode
      </h1>
      
      <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mb-12 leading-relaxed">
        The ultimate stream-of-consciousness typing platform. <br/>
        <span className="text-neutral-500">Zero latency. Pure focus.</span>
      </p>

      <div className="flex flex-col md:flex-row gap-6 items-center">
        <button 
          onClick={onStart}
          className="group relative px-8 py-4 bg-white text-neutral-900 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
        >
          Start Typing
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
        </button>
        
        <button className="px-8 py-4 bg-neutral-800 text-white rounded-full font-bold text-lg border border-white/10 hover:bg-neutral-700 transition-all duration-300">
          Learn More
        </button>
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full">
        {[
          { title: 'Zero Latency', desc: 'Experience the Ghost Engine for instant feedback.' },
          { title: 'Flow State', desc: 'Designed to keep you in the zone.' },
          { title: 'Analytics', desc: 'Track your WPM and accuracy over time.' }
        ].map((feature, i) => (
          <div key={i} className="p-6 bg-neutral-800/30 rounded-2xl border border-white/5 backdrop-blur-sm">
            <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-neutral-400">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
