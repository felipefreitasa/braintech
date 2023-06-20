import { Feather } from "@expo/vector-icons"
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
  icon: keyof typeof Feather.glyphMap;
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
  correctAnswers: number;
  selectedQuiz: SelectedQuizProps;
  selectedTechnology: SelectedCategoryProps;
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

  return(
    <QuizContext.Provider value={{
      selectedQuiz, 
      correctAnswers, 
      selectedTechnology, 
      setSelectedQuiz,
      setCorrectAnswers,
      setSelectedTechnology,
    }}>
      {children}
    </QuizContext.Provider>
  )
}