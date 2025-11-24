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
    <div className="w-full mx-auto my-8 p-4 bg-neutral-800/30 rounded-2xl border border-white/5 backdrop-blur-sm flex flex-wrap gap-4 justify-between items-center animate-in fade-in slide-in-from-top-4 duration-500">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
            <Timer size={20} />
          </div>
          <div>
            <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Time Left</p>
            <p className="text-xl font-bold text-white font-mono">{formatTime(time)}</p>
          </div>
        </div>

        <div className="w-px h-10 bg-white/5" />

        <div className="flex items-center gap-3">
          <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
            <Zap size={20} />
          </div>
          <div>
            <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">WPM</p>
            <p className="text-xl font-bold text-white font-mono">{wpm}</p>
          </div>
        </div>

        <div className="w-px h-10 bg-white/5" />

        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
            <Target size={20} />
          </div>
          <div>
            <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Accuracy</p>
            <p className="text-xl font-bold text-white font-mono">{accuracy}%</p>
          </div>
        </div>

        <div className="w-px h-10 bg-white/5" />

        <div className="flex items-center gap-3">
          <div className="p-2 bg-rose-500/10 rounded-lg text-rose-400">
            <AlertCircle size={20} />
          </div>
          <div>
            <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Mistakes</p>
            <p className="text-xl font-bold text-white font-mono">{mistakes}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {!isTyping && (
          <div className="flex bg-neutral-900/50 rounded-lg p-1">
            {durations.map((d) => (
              <button
                key={d.value}
                onClick={() => setDuration(d.value)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
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
          className="p-3 text-neutral-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
          title="Reset Session"
        >
          <RefreshCw size={20} />
        </button>
      </div>
    </div>
  );
};
