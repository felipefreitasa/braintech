import { Audio } from 'expo-av'
import * as Haptics from 'expo-haptics'
import { useEffect, useState } from 'react'
import { Alert, BackHandler, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Animated, { FadeInLeft, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

import { useQuiz } from '@hooks/useQuiz'
import { useSettings } from '@hooks/useSettings'

import { AppNavigatorRoutesProps } from '../../routes/app.routes'

import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { AnswerSelect } from '@components/AnswerSelect'
import { AnswerFeedbackModal } from '@components/AnswerFeedbackModal'

import { Container, ProgressBar, ProgressIndicator, Question, QuestionsCounter } from './styles'

const AnimatedQuestion = Animated.createAnimatedComponent(Question)
const AnimatedProgressIndicator = Animated.createAnimatedComponent(ProgressIndicator)

export function Quiz() {

  const { isSoundEffectsEnabled } = useSettings()
  const { selectedTechnology, selectedQuiz, correctAnswers, setCorrectAnswers, setQuizEndTime } = useQuiz()

  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  const progress = useSharedValue(0)
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
    if(isLastQuestion){
      setQuizEndTime(new Date())

      navigate('quizStatus')
      
    } else {
      const duration = 1000

      answerFeedback.value = withTiming(0, { duration: duration })

      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1)

        setSelectedAnswer('')
        setIsQuestionAnswared(false)
      }, (duration * 0.2)) 
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
    if(isSoundEffectsEnabled){
      const file = isCorrect ? require('../../assets/correct.mp3') : require('../../assets/error.mp3')
      const { sound } = await Audio.Sound.createAsync(file, { shouldPlay: true })
      
      await sound.setPositionAsync(0)
      await sound.playAsync()
    }
  }

  const progressAnimatedStyles = useAnimatedStyle(() => {
    return { width: `${progress.value}%`}
  })

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleStopQuiz)
    return () => backHandler.remove()
  }, [])

  useEffect(() => {
    progress.value = withTiming(progressPercentage)
  }, [currentQuestion])
  
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
          
          <Animated.View entering={FadeInLeft.delay(250)}>
            <QuestionsCounter>
              {`${currentQuestion}/${questions.length} questões concluídas`}
            </QuestionsCounter>

            <ProgressBar>
              <AnimatedProgressIndicator style={progressAnimatedStyles} />
            </ProgressBar>
          </Animated.View>
        
          <AnimatedQuestion entering={FadeInLeft.delay(500)}>
            {`${currentQuestion + 1}. ${questions[currentQuestion].question}`}
          </AnimatedQuestion>

          <Animated.View entering={FadeInLeft.delay(750)}>
            {questions[currentQuestion].answers.map((question) => (
              <AnswerSelect
                key={question}
                title={question}
                disabled={questionWasAnswared}
                isSelected={selectedAnswer === question}
                onPress={() => setSelectedAnswer(question)}
              />
            ))}
          </Animated.View>
        </View>

        <Animated.View 
          style={{ height: 46 }}
          entering={FadeInLeft.delay(1000)} 
        >
          <Button
            title='Verificar'
            disabled={!selectedAnswer}
            onPress={handleCheckAnswer}
          />
        </Animated.View>
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