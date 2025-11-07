import { Answer } from './answer';
import { Category } from './category';

export interface Question {
  category: Category;
  type: 'sound' | 'video' | 'text' | 'open';
  question?: string;
  sound?: string;
  video?: string;
  image?: string;
  answers?: Answer[];
  answer?: string;
  timed?: number;
}
