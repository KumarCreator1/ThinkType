import React from 'react';
import { cn } from '../../lib/utils';

interface InputLayerProps {
  inputRef: React.RefObject<HTMLTextAreaElement | null>;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const InputLayer: React.FC<InputLayerProps> = ({ inputRef, value, onChange }) => {
  return (
    <textarea
      ref={inputRef}
      value={value}
      onChange={onChange}
      className={cn(
        "absolute inset-0 w-full h-full",
        "bg-transparent text-transparent caret-white resize-none outline-none",
        "font-mono leading-relaxed",
        "z-10"
      )}
      spellCheck={false}
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
    />
  );
};
