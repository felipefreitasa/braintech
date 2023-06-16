import { useState } from 'react'
import { View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useSharedValue, withTiming } from 'react-native-reanimated'

import { QuizTypeProps } from '@utils/categoriesMock'
import { CategoryTypeProps } from '../../@types/categoryTypeProps'

import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { AnswerSelect } from '@components/AnswerSelect'
import { AnswerFeedbackModal } from '@components/AnswerFeedbackModal'

import { Container, ProgressBar, ProgressIndicator, Question, QuestionsCounter } from './styles'

type RouteParams = {
  technology: string;
  subcategory: string;
  options: QuizTypeProps[];
  category: CategoryTypeProps;
}

export function Quiz() {

  const answerFeedback = useSharedValue(0)

  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isQuestionAnswared, setIsQuestionAnswared] = useState(false)

  const route = useRoute()
  const { category, technology, options, subcategory } = route.params as RouteParams

  const questions = options[0].questions

  const questionWasAnswared = isQuestionAnswared && selectedAnswer !== null

  const progressPercentage = Math.round((currentQuestion / questions.length) * 100)

  function handleCheckAnswer(){
    setIsQuestionAnswared(true)
    answerFeedback.value = withTiming(1)
  }

  function handleGoToNextQuestion(){
    setSelectedAnswer('')
    setIsQuestionAnswared(false)
    answerFeedback.value = withTiming(0)
    setCurrentQuestion(currentQuestion + 1)
  }

  return (
    <>
      <Container>
        <View>
          <Header
            title={technology}
            category={category}
            isGoBackButtonDisabled={questionWasAnswared}
            titleHighlight={subcategory}
          />

          <QuestionsCounter>
            {`${currentQuestion}/${questions.length} questões concluídas`}
          </QuestionsCounter>

          <ProgressBar>
            <ProgressIndicator percentage={progressPercentage}/>
          </ProgressBar>

          <Question>
            {`${currentQuestion + 1}. ${questions[currentQuestion].question}`}
          </Question>

          {questions[currentQuestion].answers.map((question) => (
            <AnswerSelect
              key={question}
              title={question}
              disabled={questionWasAnswared}
              isSelected={selectedAnswer === question}
              onPress={() => setSelectedAnswer(question)}
            />
          ))}
        </View>

        <Button
          title='Verificar'
          disabled={!selectedAnswer}
          onPress={handleCheckAnswer}
        />
      </Container>

      <AnswerFeedbackModal 
        sharedValue={answerFeedback}
        correctAnswer={questions[currentQuestion].correctAnswer}
        isAnswerCorrect={selectedAnswer === questions[currentQuestion].correctAnswer}
        goToNextQuestion={handleGoToNextQuestion}
      />
    </>
  )
}