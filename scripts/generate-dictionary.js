import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const url = 'https://raw.githubusercontent.com/first20hours/google-10000-english/master/google-10000-english-no-swears.txt';
const outputPath = path.join(__dirname, '../src/assets/dictionaries/top10k.json');

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const words = data.split('\n').filter(word => word.trim().length > 0);
    // Add the missing common words manually
    const commonWords = [
      "hello", "fine", "trip", "india", "cool", "awesome", "amazing", "bad", "sad", "happy", 
      "angry", "tired", "sleepy", "hungry", "thirsty", "bored", "excited", "nervous", "scared", 
      "confused", "surprised", "proud", "ashamed", "guilty", "lonely", "loved", "hated", "liked", 
      "disliked", "wanted", "needed", "used", "tried", "helped", "played", "worked", "lived", 
      "died", "killed", "saved", "stopped", "started", "opened", "closed", "moved", "stayed", 
      "walked", "ran", "jumped", "swam", "flew", "drove", "rode", "ate", "drank", "slept", 
      "woke", "spoke", "talked", "said", "told", "asked", "answered", "thought", "knew", 
      "understood", "forgot", "remembered", "learned", "taught", "wrote", "read", "saw", 
      "heard", "smelled", "tasted", "touched", "felt", "bought", "sold", "paid", "gave", 
      "took", "kept", "lost", "found", "made", "built", "fixed", "broke", "cut", "hit", 
      "hurt", "threw", "caught", "pushed", "pulled", "lifted", "dropped", "fell", "stood", 
      "sat", "lay", "waited", "watched", "listened", "looked", "smiled", "laughed", "cried", 
      "shouted", "whispered", "sang", "danced", "played", "won", "lost", "failed", "succeeded", 
      "passed", "missed"
    ];
    
    const allWords = Array.from(new Set([...words, ...commonWords])); // Deduplicate
    
    fs.writeFileSync(outputPath, JSON.stringify(allWords, null, 2));
    console.log(`Dictionary generated with ${allWords.length} words at ${outputPath}`);
  });
}).on('error', (err) => {
  console.error('Error fetching dictionary:', err);
});
