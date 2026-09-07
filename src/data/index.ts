import { DictionaryData } from '../types.js';
import { typescript } from './typescript.js';
import { java } from './java.js';
import { mongodb } from './mongodb.js';
import { python } from './python.js';

export const DATA: DictionaryData = {
    'TypeScript': typescript,
    'Java': java,
    'MongoDB': mongodb,
    'Python': python,
};
