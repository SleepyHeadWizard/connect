export type QuestionCategory = 
  | 'engagement'
  | 'emotional'
  | 'comparison'
  | 'cognitive'
  | 'relationships'
  | 'coping'
  | 'values';

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    value: number;
    label: string;
  }[];
  category: QuestionCategory;
  section: string;
}

export interface CategoryResult {
  category: QuestionCategory;
  score: number;
  totalPossible: number;
  percentage: number;
  level: 'minimal' | 'low' | 'moderate' | 'high' | 'significant';
  feedback: string;
  recommendations: string[];
}

export interface QuizResult {
  totalScore: number;
  maxPossible: number;
  overallLevel: 'minimal' | 'low' | 'moderate' | 'high' | 'significant';
  categoryResults: CategoryResult[];
  generalRecommendations: string[];
}

export interface QuizState {
  currentQuestion: number;
  answers: Record<number, number>;
  isComplete: boolean;
  results: QuizResult | null;
} 