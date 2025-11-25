import React from 'react';
import { ArrowRight, Sparkles, Zap, Brain, BarChart3 } from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] text-center px-4 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-100/50 rounded-full blur-3xl -z-10 opacity-60" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-cyan-50/50 rounded-full blur-3xl -z-10 opacity-60" />
      
      <div className="mb-8 p-4 bg-white shadow-lg shadow-blue-100 rounded-2xl animate-bounce-slow border border-blue-50">
        <Sparkles className="text-blue-500" size={32} />
      </div>
      
      <h1 className="text-4xl md:text-8xl font-black mb-6 tracking-tight text-neutral-900 break-words">
        Thinking<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Mode</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl mb-12 leading-relaxed font-medium">
        The ultimate stream-of-consciousness typing platform. <br/>
        <span className="text-neutral-400">Zero latency. Pure focus.</span>
      </p>

      <div className="flex flex-col md:flex-row gap-6 items-center mb-24">
        <button 
          onClick={onStart}
          className="group relative px-10 py-5 bg-neutral-900 text-white rounded-full font-bold text-lg shadow-xl shadow-blue-200 hover:shadow-2xl hover:shadow-blue-300 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 overflow-hidden"
        >
          <span className="relative z-10">Start Typing</span>
          <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
        
        <button className="px-10 py-5 bg-white text-neutral-600 rounded-full font-bold text-lg border border-neutral-200 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300 shadow-sm hover:shadow-md">
          Learn More
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        {[
          { 
            icon: Zap,
            title: 'Zero Latency', 
            desc: 'Experience the Ghost Engine for instant feedback.',
            color: 'text-amber-500',
            bg: 'bg-amber-50'
          },
          { 
            icon: Brain,
            title: 'Flow State', 
            desc: 'Designed to keep you in the zone.',
            color: 'text-purple-500',
            bg: 'bg-purple-50'
          },
          { 
            icon: BarChart3,
            title: 'Deep Analytics', 
            desc: 'Track your WPM and accuracy over time.',
            color: 'text-blue-500',
            bg: 'bg-blue-50'
          }
        ].map((feature, i) => (
          <div key={i} className="p-8 bg-white rounded-3xl border border-neutral-100 shadow-xl shadow-neutral-100/50 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-300 hover:-translate-y-1 group">
            <div className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
              <feature.icon className={feature.color} size={28} />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3">{feature.title}</h3>
            <p className="text-neutral-500 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
