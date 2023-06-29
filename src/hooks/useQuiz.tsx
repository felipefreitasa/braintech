import { useContext } from "react"

import { QuizContext, QuizContextDataProps } from "@context/QuizContext"

export function useQuiz(): QuizContextDataProps {
  const context = useContext(QuizContext)

  return context
}