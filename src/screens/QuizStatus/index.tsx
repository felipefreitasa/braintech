import { useEffect } from 'react'
import { Feather } from '@expo/vector-icons'
import { BackHandler, View } from 'react-native'
import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import Animated, { FadeInLeft } from 'react-native-reanimated'

import { useQuiz } from '@hooks/useQuiz'

import { uniqueId } from '@utils/uniqueId'
import { AppNavigatorRoutesProps } from '../../routes/app.routes'
import { calculateTimeInterval } from '@utils/calculateTimeInterval'
import { capitalizeCategoryLabel } from '@utils/capitalizeCategoryLabel'

import { historyCreate } from '@storage/history/historyCreate'

import { Button } from '@components/Button'
import { StatisticCard } from '@components/StatisticCard'

import { Container, IconContainer, StatisticsTitle, Subtitle, Title } from './styles'

const AnimatedIconContainer = Animated.createAnimatedComponent(IconContainer)

export function QuizStatus() {
  
  const { COLORS } = useTheme()
  
  const { selectedQuiz, selectedTechnology, correctAnswers, quizStartTime, quizEndTime } = useQuiz()
  
  const { navigate } = useNavigation<AppNavigatorRoutesProps>()
  
  const correctAnswersPercentage = Math.round((correctAnswers/selectedQuiz.questions.length) * 100)
  const mode = correctAnswersPercentage >= 70 ? 'success' : 'error'
  
  async function handleGoToHome(){

    await historyCreate({ 
      id: uniqueId(),
      correctAnswers,
      createdAt: new Date(),
      category: selectedTechnology.category,
      subCategory: selectedQuiz.subcategory,
      technology: selectedTechnology.technology,
      totalQuestions: selectedQuiz.questions.length
    })

    navigate('homeTabs')

    return true
  }

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => null)
    return () => backHandler.remove()
  }, [])

  return (
    <Container>
      <View>
        <AnimatedIconContainer
          mode={mode}
          entering={FadeInLeft}
        >
          <Feather
            size={54}
            name={mode === 'success' ? 'award' : 'alert-circle'}
            color={mode === 'success' ? COLORS.SUCCESS : COLORS.ERROR}
          />
        </AnimatedIconContainer>

        <Animated.View entering={FadeInLeft.delay(250)}>
          <Title>
            {mode === 'success' ? 'Parabéns!' : 'Não foi dessa vez...'}
          </Title>

          <Subtitle>
            {mode === 'success' ? 'Voce possui bastante conhecimento sobre essa tecnologia!' : 'Continue se aprofundando nessa tecnologia e faça novamente esse quiz.'}
          </Subtitle>
        </Animated.View>

        <Animated.View entering={FadeInLeft.delay(500)}>
          <StatisticsTitle>
            Estatísticas do quiz  
          </StatisticsTitle>

          <StatisticCard
            icon='clock'
            title='Duração'
            subtitle={calculateTimeInterval(quizStartTime, quizEndTime)}
          />

          <StatisticCard
            icon='help-circle'
            title='Respostas corretas'
            subtitle={`${correctAnswers} de ${selectedQuiz.questions.length}`}
          />

          <StatisticCard
            icon='book-open'
            title='Área'
            subtitle={capitalizeCategoryLabel(selectedTechnology.category)}
          />

          <StatisticCard
            icon='code'
            title='Tecnologia'
            subtitle={`${selectedTechnology.technology}: ${selectedQuiz.subcategory}`}
          />
        </Animated.View>
      </View>

      <Animated.View 
        style={{ height: 46 }}
        entering={FadeInLeft.delay(750)} 
      >
        <Button
          title='Finalizar quiz'
          onPress={handleGoToHome}
        />
      </Animated.View>
    </Container>
  )
}