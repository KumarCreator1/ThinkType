import React, { useRef, useEffect } from 'react';
import { useTypingEngine } from '@/hooks/useTypingEngine';
import { useUserStore } from '@/store/userStore';
import { Renderer } from './Renderer';
import { InputLayer } from './InputLayer';
import { ControlBar } from '@/components/layout/ControlBar';
import { SidebarStats } from '@/components/dashboard/SidebarStats';
import { ResultScreen } from './ResultScreen';

interface TypingEngineProps {
  onShowDashboard?: () => void;
}

export const TypingEngine: React.FC<TypingEngineProps> = ({ onShowDashboard }) => {
  const { userInput, handleInputChange, stats, reset, duration, setDuration, isFinished } = useTypingEngine();
  const addSession = useUserStore(state => state.addSession);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const savedRef = useRef(false);

  // Reset saved state when resetting
  useEffect(() => {
    if (!isFinished) {
      savedRef.current = false;
    }
  }, [isFinished]);

  // Focus input on mount and click
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Auto-save when finished
  useEffect(() => {
    if (isFinished && !savedRef.current) {
      console.log('Session finished, saving results...');
      addSession({
        id: Date.now().toString(),
        timestamp: Date.now(),
        durationSeconds: duration,
        wpm: stats.wpm,
        accuracy: stats.accuracy,
        mistakes: stats.mistakes
      });
      savedRef.current = true;
    }
  }, [isFinished, addSession, duration, stats]);

  const handleContainerClick = () => {
    if (!isFinished) {
      inputRef.current?.focus();
    }
  };

  return (
    <div className="w-full h-full flex flex-col relative">
      {isFinished && (
        <ResultScreen 
          wpm={stats.wpm}
          accuracy={stats.accuracy}
          time={duration}
          mistakes={stats.mistakes}
          wpmHistory={stats.wpmHistory}
          onRestart={reset}
          onDashboard={() => onShowDashboard?.()}
        />
      )}

      <ControlBar 
        wpm={stats.wpm} 
        accuracy={stats.accuracy} 
        time={stats.time} 
        mistakes={stats.mistakes}
        onReset={reset}
        duration={duration}
        setDuration={setDuration}
        isTyping={userInput.length > 0}
      />
      
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
        {/* Main Typing Area - Spans 3 columns */}
        <div 
          className="lg:col-span-3 relative min-h-[50vh] font-mono text-3xl leading-relaxed outline-none"
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

        {/* Sidebar Stats - Spans 1 column */}
        <div className="lg:col-span-1 hidden lg:block">
          <SidebarStats />
        </div>
      </div>
    </div>
  );
};
