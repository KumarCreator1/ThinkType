import React from 'react';
import { RefreshCw, LayoutDashboard, Share2 } from 'lucide-react';

interface ResultScreenProps {
  wpm: number;
  accuracy: number;
  time: number;
  mistakes: number;
  wpmHistory?: number[];
  onRestart: () => void;
  onDashboard: () => void;
  isHistoryView?: boolean;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  wpm,
  accuracy,
  time,
  mistakes,
  wpmHistory = [],
  onRestart,
  onDashboard,
  isHistoryView = false
}) => {
  // Calculate graph points
  // Ensure we have at least one point and valid numbers
  const safeHistory = wpmHistory.length > 0 ? wpmHistory : [0];
  const maxWpm = Math.max(...safeHistory, wpm, 60);
  
  const points = safeHistory.map((val, i) => {
    const x = (i / (safeHistory.length - 1 || 1)) * 100;
    const y = 100 - ((val || 0) / maxWpm) * 100;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-2 md:p-4 animate-fade-in overflow-y-auto">
      <div className="w-full max-w-5xl bg-[#111] border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row my-auto">
        {/* Left Side: Stats */}
        <div className="flex-1 p-6 md:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
          <div className="mb-6 md:mb-8">
            <p className="text-neutral-400 text-sm md:text-lg font-medium mb-1">wpm</p>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-none">{wpm}</h1>
          </div>
          
          <div className="mb-8 md:mb-12">
            <p className="text-neutral-400 text-sm md:text-lg font-medium mb-1">acc</p>
            <h1 className="text-5xl md:text-8xl font-black text-emerald-400 leading-none">{accuracy}%</h1>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
            <div>
              <p className="text-neutral-500 font-bold uppercase text-xs tracking-wider mb-1">Test Type</p>
              <p className="text-yellow-400 font-mono text-sm">time {time}</p>
              <p className="text-yellow-400 font-mono text-sm">english</p>
            </div>
            <div>
              <p className="text-neutral-500 font-bold uppercase text-xs tracking-wider mb-1">Characters</p>
              <p className="text-white font-mono text-sm md:text-xl">{Math.round(wpm * 5)}/{mistakes}/0/0</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-8">
             <div>
              <p className="text-neutral-500 font-bold uppercase text-xs tracking-wider mb-1">Mistakes</p>
              <p className="text-rose-400 font-mono text-xl md:text-2xl">{mistakes}</p>
            </div>
            <div>
              <p className="text-neutral-500 font-bold uppercase text-xs tracking-wider mb-1">Time</p>
              <p className="text-white font-mono text-xl md:text-2xl">{time}s</p>
            </div>
          </div>
        </div>

        {/* Right Side: Graph & Actions */}
        <div className="flex-[1.5] p-6 md:p-12 flex flex-col bg-[#0a0a0a]">
          <div className="flex-1 relative min-h-[200px] md:min-h-[300px] mb-6 md:mb-8 bg-neutral-900/30 rounded-2xl border border-white/5 p-4">
            {/* Graph Grid */}
            <div className="absolute inset-4 grid grid-cols-6 grid-rows-4 gap-4 opacity-10 pointer-events-none">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="border-r border-b border-white"></div>
              ))}
            </div>
            
            {/* SVG Graph */}
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#eab308" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#eab308" stopOpacity="0" />
                </linearGradient>
              </defs>
              {points && (
                <>
                  <polyline
                    fill="none"
                    stroke="#eab308"
                    strokeWidth="3"
                    points={points}
                    vectorEffect="non-scaling-stroke"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polygon
                    fill="url(#gradient)"
                    points={`0,100 ${points} 100,100`}
                    opacity="0.5"
                  />
                </>
              )}
            </svg>
            
            {/* Y-Axis Labels */}
            <div className="absolute left-2 top-2 bottom-2 flex flex-col justify-between text-xs text-neutral-600 font-mono pointer-events-none">
              <span>{maxWpm}</span>
              <span>{Math.round(maxWpm / 2)}</span>
              <span>0</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-4">
            <button
              onClick={onRestart}
              className="group relative px-6 md:px-8 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg font-mono transition-all overflow-hidden text-sm md:text-base"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <RefreshCw size={18} className="group-hover:rotate-180 transition-transform duration-500" />
                {isHistoryView ? 'Close' : 'Start Again'}
              </span>
              <div className="absolute inset-0 bg-emerald-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>

            {!isHistoryView && (
              <button
                onClick={onDashboard}
                className="px-6 md:px-8 py-3 text-neutral-400 hover:text-white font-mono transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <LayoutDashboard size={18} />
                Dashboard
              </button>
            )}
            
            <button className="px-6 md:px-8 py-3 text-neutral-400 hover:text-white font-mono transition-colors flex items-center justify-center gap-2 text-sm md:text-base">
              <Share2 size={18} />
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
