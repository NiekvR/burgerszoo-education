import { Question } from './question';

export interface Quiz {
  title: string;
  image: string;
  description: string[];
  personalInformation?: string;
  questions?: Question[];
}
