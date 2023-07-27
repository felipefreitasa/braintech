export type QuestionTypeProps = {
  id: string;
  question: string;
  answers: string[];
  correctAnswer: string;
};

export type QuizTypeProps = {
  id: string;
  title: string;
  questions: QuestionTypeProps[];
};

export type CategoryTypes = {
  id: string;
  technology: string;
  description: string;
  quizOptions: QuizTypeProps[];
};

export type CategoryTypeProps = 'MOBILE' | 'FRONT-END' | 'BACK-END'

export type QuizProps = {
  id: string;
  category: CategoryTypeProps;
  technologies: CategoryTypes[];
};