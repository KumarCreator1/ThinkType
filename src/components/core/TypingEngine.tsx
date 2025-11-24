import React, { useRef, useEffect } from 'react';
import { useTypingEngine } from '@/hooks/useTypingEngine';
import { useUserStore } from '@/store/userStore';
import { Renderer } from './Renderer';
import { InputLayer } from './InputLayer';
import { ControlBar } from '@/components/layout/ControlBar';

export const TypingEngine: React.FC = () => {
  const { userInput, handleInputChange, stats, reset } = useTypingEngine();
  const { addSession } = useUserStore();
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Focus input on mount and click
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  const handleFinish = (e?: React.MouseEvent) => {
    e?.stopPropagation(); // Prevent focusing input
    if (stats.time > 0) {
      addSession({
        id: crypto.randomUUID(),
        timestamp: Date.now(),
        durationSeconds: stats.time,
        wpm: stats.wpm,
        accuracy: stats.accuracy,
        mistakes: stats.mistakes
      });
      reset();
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col h-full">
      <ControlBar 
        wpm={stats.wpm} 
        accuracy={stats.accuracy} 
        time={stats.time} 
        mistakes={stats.mistakes}
        onReset={reset}
        onSave={() => handleFinish()}
      />
      
      <div 
        className="relative w-full flex-1 min-h-[50vh] font-mono text-3xl leading-relaxed outline-none mt-8"
        onClick={handleContainerClick}
      >
        {/* Layer Z-0: The Renderer (Visible) */}
        <Renderer text={userInput} />

        {/* Layer Z-10: The Input (Invisible) */}
        <InputLayer 
          inputRef={inputRef}
          value={userInput}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};
