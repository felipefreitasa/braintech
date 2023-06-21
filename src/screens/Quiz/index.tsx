import { Audio } from 'expo-av'
import * as Haptics from 'expo-haptics'
import { useEffect, useState } from 'react'
import { Alert, BackHandler, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSharedValue, withTiming } from 'react-native-reanimated'

import { useQuiz } from '@hooks/useQuiz'

import { AppNavigatorRoutesProps } from '../../routes/app.routes'

import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { AnswerSelect } from '@components/AnswerSelect'
import { AnswerFeedbackModal } from '@components/AnswerFeedbackModal'

import { Container, ProgressBar, ProgressIndicator, Question, QuestionsCounter } from './styles'

export function Quiz() {

  const { selectedTechnology, selectedQuiz, correctAnswers, setCorrectAnswers, setQuizEndTime } = useQuiz()

  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  const answerFeedback = useSharedValue(0)

  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isQuestionAnswared, setIsQuestionAnswared] = useState(false)

  const questionWasAnswared = isQuestionAnswared && selectedAnswer !== null

  const questions = selectedQuiz.questions

  const progressPercentage = Math.round((currentQuestion / questions.length) * 100)

  const isLastQuestion = currentQuestion === questions.length - 1

  const isCorrectAnswer = selectedAnswer === questions[currentQuestion].correctAnswer

  async function handleCheckAnswer(){
    setIsQuestionAnswared(true)
    answerFeedback.value = withTiming(1)

    if(isCorrectAnswer) {
      await playSound(true)
      setCorrectAnswers(correctAnswers + 1)
      
    } else {
      await playSound(false)
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
    }
  }

  function handleGoToNextQuestion(){
    setSelectedAnswer('')
    setIsQuestionAnswared(false)
    answerFeedback.value = withTiming(0)

    if(isLastQuestion){
      setQuizEndTime(new Date())

      navigate('quizStatus')
      
    } else { 
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  function handleStopQuiz() {
    Alert.alert('Tem certeza que deseja sair do quiz?', 'Se você sair, perderá o progresso do exercício atual.', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        style: 'destructive',
        onPress: () => navigate('homeTabs')
      },
    ])

    return true
  }

  async function playSound(isCorrect: boolean){
    const file = isCorrect ? require('../../assets/correct.mp3') : require('../../assets/error.mp3')
    const { sound } = await Audio.Sound.createAsync(file, { shouldPlay: true })

    await sound.setPositionAsync(0)
    await sound.playAsync()
  }

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleStopQuiz)
    return () => backHandler.remove()
  }, [])

  return (
    <>
      <Container>
        <View>
          <Header
            title={selectedTechnology.technology}
            category={selectedTechnology.category}
            isGoBackButtonDisabled={questionWasAnswared}
            titleHighlight={selectedQuiz.subcategory}
            onGoBack={handleStopQuiz}
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
        isLastQuestion={isLastQuestion}
        isAnswerCorrect={isCorrectAnswer}
        goToNextQuestion={handleGoToNextQuestion}
        correctAnswer={questions[currentQuestion].correctAnswer}
      />
    </>
  )
}