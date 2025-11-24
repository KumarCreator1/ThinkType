import { useState, useCallback, useRef, useEffect } from 'react';
import { validateWord } from '../lib/validator';

export const useTypingEngine = () => {
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [elapsedTime, setElapsedTime] = useState(0);
  const timerRef = useRef<number | null>(null);

  const calculateStats = useCallback((text: string) => {
    if (!startTime) return;
    
    const now = Date.now();
    const durationInMinutes = (now - startTime) / 60000;
    
    // WPM = (characters / 5) / minutes
    // Standard WPM calculation uses 5 characters as a "word"
    const standardWpm = Math.round((text.length / 5) / (durationInMinutes || 0.0001)); // Avoid divide by zero
    
    // Accuracy
    const wordList = text.split(' ');
    const correctWords = wordList.filter(w => validateWord(w).isValid).length;
    const acc = wordList.length > 0 ? Math.round((correctWords / wordList.length) * 100) : 100;

    setWpm(standardWpm);
    setAccuracy(acc);
    setElapsedTime(Math.floor((now - startTime) / 1000));
  }, [startTime]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    
    if (!startTime && newValue.length > 0) {
      setStartTime(Date.now());
    }

    setUserInput(newValue);
    calculateStats(newValue);
  }, [startTime, calculateStats]);

  // Timer for updating stats every second even if not typing
  useEffect(() => {
    if (startTime) {
      timerRef.current = window.setInterval(() => {
        calculateStats(userInput);
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTime, userInput, calculateStats]);

  const reset = useCallback(() => {
    setUserInput('');
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);
    setElapsedTime(0);
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  return {
    userInput,
    handleInputChange,
    stats: {
      wpm,
      accuracy,
      time: elapsedTime,
      mistakes: 0 // Placeholder for now
    },
    reset
  };
};
