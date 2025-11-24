import React, { useMemo } from 'react';
import { cn } from '../../lib/utils';
import { validateText } from '../../lib/validator';

interface RendererProps {
  text: string;
}

export const Renderer: React.FC<RendererProps> = ({ text }) => {
  const validatedWords = useMemo(() => validateText(text), [text]);

  return (
    <div className={cn(
      "absolute inset-0 w-full h-full",
      "pointer-events-none select-none",
      "whitespace-pre-wrap break-words",
      "z-0"
    )}>
      {text.length === 0 && (
        <span className="text-neutral-600 opacity-50">Start typing your thoughts...</span>
      )}
      {validatedWords.map((result, index) => (
        <span 
          key={index} 
          className={cn(
            "inline-block mr-3 transition-colors duration-200",
            result.isValid ? "text-emerald-400" : "text-rose-400 shake-animation"
          )}
        >
          {result.word}
        </span>
      ))}
    </div>
  );
};
