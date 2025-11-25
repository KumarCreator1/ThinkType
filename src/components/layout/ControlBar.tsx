import React from 'react';
import { Timer, AlertCircle, Target, Zap, RefreshCw } from 'lucide-react';

interface ControlBarProps {
  wpm: number;
  accuracy: number;
  time: number;
  mistakes: number;
  onReset: () => void;
  duration: number;
  setDuration: (duration: number) => void;
  isTyping: boolean;
}

export const ControlBar: React.FC<ControlBarProps> = ({ 
  wpm, 
  accuracy, 
  time, 
  mistakes, 
  onReset,
  duration,
  setDuration,
  isTyping
}) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const durations = [
    { label: '15s', value: 15 },
    { label: '30s', value: 30 },
    { label: '60s', value: 60 },
    { label: '2m', value: 120 },
    { label: '5m', value: 300 },
  ];

  return (
    <div className="w-full mx-auto my-4 md:my-8 p-4 bg-neutral-800/30 rounded-2xl border border-white/5 backdrop-blur-sm flex flex-col md:flex-row gap-6 justify-between items-center animate-in fade-in slide-in-from-top-4 duration-500">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:flex items-center gap-4 md:gap-8 w-full md:w-auto">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
            <Timer size={20} />
          </div>
          <div>
            <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Time</p>
            <p className="text-xl font-bold text-white font-mono">{formatTime(time)}</p>
          </div>
        </div>

        <div className="hidden md:block w-px h-10 bg-white/5" />

        <div className="flex items-center gap-3">
          <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
            <Zap size={20} />
          </div>
          <div>
            <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">WPM</p>
            <p className="text-xl font-bold text-white font-mono">{wpm}</p>
          </div>
        </div>

        <div className="hidden md:block w-px h-10 bg-white/5" />

        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
            <Target size={20} />
          </div>
          <div>
            <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Acc</p>
            <p className="text-xl font-bold text-white font-mono">{accuracy}%</p>
          </div>
        </div>

        <div className="hidden md:block w-px h-10 bg-white/5" />

        <div className="flex items-center gap-3">
          <div className="p-2 bg-rose-500/10 rounded-lg text-rose-400">
            <AlertCircle size={20} />
          </div>
          <div>
            <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Err</p>
            <p className="text-xl font-bold text-white font-mono">{mistakes}</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
        {!isTyping && (
          <div className="flex bg-neutral-900/50 rounded-lg p-1 overflow-x-auto max-w-[200px] md:max-w-none scrollbar-hide">
            {durations.map((d) => (
              <button
                key={d.value}
                onClick={() => setDuration(d.value)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
                  duration === d.value
                    ? 'bg-neutral-700 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        )}

        <button
          onClick={onReset}
          className="p-3 text-neutral-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 ml-auto md:ml-0"
          title="Reset Session"
        >
          <RefreshCw size={20} />
        </button>
      </div>
    </div>
  );
};
