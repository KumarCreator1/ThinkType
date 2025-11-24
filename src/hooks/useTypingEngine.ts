import { useState, useCallback, useRef, useEffect } from 'react';
import { validateWord } from '../lib/validator';

export const useTypingEngine = () => {
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [duration, setDuration] = useState(60); // Default 60 seconds
  const [timeLeft, setTimeLeft] = useState(60);
  const [isFinished, setIsFinished] = useState(false);
  const timerRef = useRef<number | null>(null);

  const [mistakes, setMistakes] = useState(0);
  const [wpmHistory, setWpmHistory] = useState<number[]>([]);

  // Update timeLeft when duration changes
  useEffect(() => {
    if (!startTime) {
      setTimeLeft(duration);
      setWpmHistory([]);
      setMistakes(0);
    }
  }, [duration, startTime]);

  const calculateStats = useCallback((text: string) => {
    if (!startTime) return;
    
    const now = Date.now();
    const elapsedSeconds = (now - startTime) / 1000;
    const durationInMinutes = elapsedSeconds / 60;
    
    // WPM = (characters / 5) / minutes
    const standardWpm = Math.round((text.length / 5) / (durationInMinutes || 0.0001));
    
    // Accuracy & Mistakes
    const wordList = text.split(' ').filter(w => w.length > 0);
    let errorCount = 0;
    
    wordList.forEach(w => {
      if (!validateWord(w).isValid) {
        errorCount++;
      }
    });

    const correctWords = wordList.length - errorCount;
    const acc = wordList.length > 0 ? Math.round((correctWords / wordList.length) * 100) : 100;

    setWpm(standardWpm);
    setAccuracy(acc);
    setMistakes(errorCount);
    return standardWpm;
  }, [startTime]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (isFinished) return; // Prevent typing when finished

    const newValue = e.target.value;
    
    if (!startTime && newValue.length > 0) {
      setStartTime(Date.now());
    }

    setUserInput(newValue);
    calculateStats(newValue);
  }, [startTime, calculateStats, isFinished]);

  // Timer for countdown
  useEffect(() => {
    if (startTime && !isFinished) {
      timerRef.current = window.setInterval(() => {
        const now = Date.now();
        const elapsed = Math.floor((now - startTime) / 1000);
        const remaining = Math.max(0, duration - elapsed);
        
        setTimeLeft(remaining);
        const currentWpm = calculateStats(userInput);
        
        if (currentWpm !== undefined) {
          setWpmHistory(prev => [...prev, currentWpm]);
        }

        if (remaining === 0) {
          setIsFinished(true);
          if (timerRef.current) clearInterval(timerRef.current);
        }
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTime, duration, userInput, calculateStats, isFinished]);

  const reset = useCallback(() => {
    setUserInput('');
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);
    setMistakes(0);
    setTimeLeft(duration);
    setIsFinished(false);
    setWpmHistory([]);
    if (timerRef.current) clearInterval(timerRef.current);
  }, [duration]);

  return {
    userInput,
    handleInputChange,
    stats: {
      wpm,
      accuracy,
      time: timeLeft,
      mistakes,
      wpmHistory
    },
    reset,
    duration,
    setDuration,
    isFinished
  };
};
