import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dictPath = path.join(__dirname, '../src/assets/dictionaries/top10k.json');
const dict = JSON.parse(fs.readFileSync(dictPath, 'utf-8'));

const filtered = dict.filter(word => word !== 'll');

fs.writeFileSync(dictPath, JSON.stringify(filtered, null, 2));
console.log(`Removed "ll". Total words: ${filtered.length}`);
