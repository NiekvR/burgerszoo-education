export interface Result {
  id?: string;
  date: Date;
  answers: ResultAnswer;
  name: string;
  address: string;
  email: string;
  comments: string;
  score: number;
  total: number;
  quiz?: string;
}

export interface ResultAnswer {
  [ question: number]: number | string;
}
