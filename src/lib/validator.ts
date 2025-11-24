import top10k from '../assets/dictionaries/top10k.json';

// Convert array to Set for O(1) lookup
const dictionary = new Set(top10k);

export interface ValidationResult {
  word: string;
  isValid: boolean;
  isFuzzyMatch: boolean;
  suggestion?: string;
}

export const validateWord = (word: string): ValidationResult => {
  const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');
  
  if (cleanWord.length === 0) {
    return { word, isValid: true, isFuzzyMatch: false };
  }

  // 1. Exact Match
  if (dictionary.has(cleanWord)) {
    return { word, isValid: true, isFuzzyMatch: false };
  }

  // 2. Fuzzy Match (Skipped for MVP optimization)
  
  return { word, isValid: false, isFuzzyMatch: false };
};

export const validateText = (text: string): ValidationResult[] => {
  return text.split(' ').map(validateWord);
};
