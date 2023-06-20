import { useEffect } from 'react'
import { BackHandler, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'

import { useQuiz } from '@hooks/useQuiz'

import { AppNavigatorRoutesProps } from '../../routes/app.routes'
import { capitalizeCategoryLabel } from '@utils/capitalizeCategoryLabel'

import { Button } from '@components/Button'
import { StatisticCard } from '@components/StatisticCard'

import { Container, IconContainer, StatisticsTitle, Subtitle, Title } from './styles'

export function QuizStatus() {

  const { COLORS } = useTheme()
  
  const { selectedQuiz, selectedTechnology, correctAnswers } = useQuiz()

  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  const correctAnswersPercentage = Math.round((correctAnswers/selectedQuiz.questions.length) * 100)
  const mode = correctAnswersPercentage >= 70 ? 'success' : 'error'

  function handleGoToHome(){
    navigate('homeTabs')
    return true
  }

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleGoToHome)
    return () => backHandler.remove()
  }, [])

  return (
    <Container>
      <View>
        <IconContainer mode={mode}>
          <Feather
            size={54}
            name={mode === 'success' ? 'award' : 'alert-circle'}
            color={mode === 'success' ? COLORS.SUCCESS : COLORS.ERROR}
          />
        </IconContainer>

        <Title>
          {mode === 'success' ? 'Parabéns!' : 'Não foi dessa vez...'}
        </Title>

        <Subtitle>
          {mode === 'success' ? 'Voce possui bastante conhecimento sobre essa tecnologia!' : 'Continue se aprofundando nessa tecnologia e faça novamente esse quiz.'}
        </Subtitle>

        <StatisticsTitle>
          Estatísticas do quiz  
        </StatisticsTitle>

        <StatisticCard
          icon='clock'
          title='Duração'
          subtitle='00:02:35'
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
      </View>

      <Button
        title='Finalizar quiz'
        onPress={handleGoToHome}
      />
    </Container>
  )
}