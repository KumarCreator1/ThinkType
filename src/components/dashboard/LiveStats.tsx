import React from 'react';

interface LiveStatsProps {
  wpm: number;
  accuracy: number;
  time: number;
}

export const LiveStats: React.FC<LiveStatsProps> = ({ wpm, accuracy, time }) => {
  return (
    <div className="flex items-center justify-between w-full max-w-3xl mx-auto mb-8 text-neutral-400 font-mono text-sm">
      <div className="flex gap-8">
        <div className="flex flex-col">
          <span className="text-xs uppercase tracking-wider opacity-50">WPM</span>
          <span className="text-2xl font-bold text-emerald-400">{wpm}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs uppercase tracking-wider opacity-50">ACC</span>
          <span className="text-2xl font-bold text-blue-400">{accuracy}%</span>
        </div>
      </div>
      
      <div className="flex flex-col items-end">
        <span className="text-xs uppercase tracking-wider opacity-50">Time</span>
        <span className="text-2xl font-bold text-neutral-200">{time}s</span>
      </div>
    </div>
  );
};
