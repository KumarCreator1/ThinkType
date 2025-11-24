import React from 'react';
import { Timer, AlertCircle, Target, Zap, Save, RefreshCw } from 'lucide-react';

interface ControlBarProps {
  wpm: number;
  accuracy: number;
  time: number;
  mistakes: number;
  onReset: () => void;
  onSave: () => void;
}

export const ControlBar: React.FC<ControlBarProps> = ({ 
  wpm, 
  accuracy, 
  time, 
  mistakes, 
  onReset, 
  onSave,
}) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-8 p-4 bg-neutral-800/30 rounded-2xl border border-white/5 backdrop-blur-sm flex justify-between items-center animate-in fade-in slide-in-from-top-4 duration-500">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
            <Timer size={20} />
          </div>
          <div>
            <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Time</p>
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

      <div className="flex items-center gap-3">
        <button
          onClick={onReset}
          className="p-3 text-neutral-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
          title="Reset Session"
        >
          <RefreshCw size={20} />
        </button>
        
        <button
          onClick={onSave}
          disabled={time === 0}
          className={`
            flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200
            ${time > 0 
              ? 'bg-emerald-500 hover:bg-emerald-400 text-neutral-900 shadow-lg shadow-emerald-500/20' 
              : 'bg-neutral-800 text-neutral-500 cursor-not-allowed'}
          `}
        >
          <Save size={18} />
          <span>Finish & Save</span>
        </button>
      </div>
    </div>
  );
};
