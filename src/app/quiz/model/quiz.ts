import { Question } from './question';

export interface Quiz {
  timed: boolean;
  title: string;
  image: string;
  description: string[];
  personalInformation?: string;
  questions?: Question[];
}
