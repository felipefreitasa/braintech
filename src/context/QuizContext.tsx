import { ReactNode, createContext, useState } from "react"

import { CategoryTypeProps } from "../@types/categoryTypeProps"

type QuestionTypeProps = {
  id: string;
  question: string;
  answers: string[];
  correctAnswer: string;
}

export type QuizTypeProps = {
  id: string;
  title: string;
  questions: QuestionTypeProps[]
}

export type SelectedCategoryProps = {
  technology: string;
  description: string;
  options: QuizTypeProps[];
  category: CategoryTypeProps;
}

export type SelectedQuizProps = {
  subcategory: string;
  questions: QuestionTypeProps[];
}

export type QuizContextDataProps = {
  quizEndTime: Date;
  quizStartTime: Date;
  correctAnswers: number;
  selectedQuiz: SelectedQuizProps;
  selectedTechnology: SelectedCategoryProps;
  setQuizEndTime: React.Dispatch<React.SetStateAction<Date>>;
  setQuizStartTime: React.Dispatch<React.SetStateAction<Date>>;
  setCorrectAnswers: React.Dispatch<React.SetStateAction<number>>;
  setSelectedQuiz: React.Dispatch<React.SetStateAction<SelectedQuizProps>>;
  setSelectedTechnology: React.Dispatch<React.SetStateAction<SelectedCategoryProps>>;
}

type QuizContextProviderProps = {
  children: ReactNode
}

export const QuizContext = createContext<QuizContextDataProps>({} as QuizContextDataProps)

export function QuizContextProvider({ children }: QuizContextProviderProps){
  
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [selectedQuiz, setSelectedQuiz] = useState<SelectedQuizProps>({} as SelectedQuizProps)
  const [selectedTechnology, setSelectedTechnology] = useState<SelectedCategoryProps>({} as SelectedCategoryProps)
  const [quizStartTime, setQuizStartTime] = useState<Date>({} as Date)
  const [quizEndTime, setQuizEndTime] = useState<Date>({} as Date)

  return(
    <QuizContext.Provider value={{
      quizEndTime,
      selectedQuiz, 
      quizStartTime,
      correctAnswers, 
      selectedTechnology, 
      setQuizEndTime,
      setSelectedQuiz,
      setQuizStartTime,
      setCorrectAnswers,
      setSelectedTechnology,
    }}>
      {children}
    </QuizContext.Provider>
  )
}