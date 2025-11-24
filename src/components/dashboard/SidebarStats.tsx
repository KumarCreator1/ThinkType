import React from 'react';
import { Activity, Brain, Trophy } from 'lucide-react';

export const SidebarStats: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
      {/* Focus Score Card */}
      <div className="p-6 bg-neutral-800/30 rounded-2xl border border-white/5 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
            <Brain size={20} />
          </div>
          <h3 className="font-bold text-white">Focus Score</h3>
        </div>
        
        <div className="relative w-32 h-32 mx-auto mb-4 flex items-center justify-center">
          {/* Simple CSS Circular Progress */}
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="currentColor"
              strokeWidth="12"
              fill="transparent"
              className="text-neutral-700"
            />
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="currentColor"
              strokeWidth="12"
              fill="transparent"
              strokeDasharray={351.86}
              strokeDashoffset={351.86 * 0.25} // 75% filled
              className="text-purple-500"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-white">92</span>
            <span className="text-xs text-neutral-500">POINTS</span>
          </div>
        </div>
        
        <p className="text-center text-sm text-neutral-400">
          You're in the top <span className="text-white font-bold">8%</span> of focused typists today.
        </p>
      </div>

      {/* Daily Streak Card */}
      <div className="p-6 bg-neutral-800/30 rounded-2xl border border-white/5 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400">
            <Trophy size={20} />
          </div>
          <h3 className="font-bold text-white">Daily Streak</h3>
        </div>
        
        <div className="flex justify-between items-end h-24 mb-2 gap-2">
          {[40, 65, 30, 85, 50, 90, 70].map((height, i) => (
            <div key={i} className="w-full flex flex-col items-center gap-2 group">
              <div 
                className={`w-full rounded-t-sm transition-all duration-500 ${i === 5 ? 'bg-amber-500' : 'bg-neutral-700 group-hover:bg-neutral-600'}`}
                style={{ height: `${height}%` }}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs text-neutral-500 font-mono">
          <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="p-6 bg-neutral-800/30 rounded-2xl border border-white/5 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
            <Activity size={20} />
          </div>
          <h3 className="font-bold text-white">Activity</h3>
        </div>
        
        <div className="space-y-4">
          {[
            { label: 'Morning Flow', time: '2h ago', val: '+450 words' },
            { label: 'Late Night', time: '8h ago', val: '+1.2k words' },
            { label: 'Quick Burst', time: 'Yesterday', val: '+300 words' }
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center text-sm">
              <div>
                <p className="text-white font-medium">{item.label}</p>
                <p className="text-neutral-500 text-xs">{item.time}</p>
              </div>
              <span className="text-emerald-400 font-mono">{item.val}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
