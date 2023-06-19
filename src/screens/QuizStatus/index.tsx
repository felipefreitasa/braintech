import { useEffect } from 'react'
import { BackHandler, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native'
import { useNavigation, useRoute } from '@react-navigation/native'

import { AppNavigatorRoutesProps } from '../../routes/app.routes'
import { CategoryTypeProps } from '../../@types/categoryTypeProps'
import { capitalizeCategoryLabel } from '@utils/capitalizeCategoryLabel'


import { Button } from '@components/Button'
import { StatisticCard } from '@components/StatisticCard'

import { Container, IconContainer, StatisticsTitle, Subtitle, Title } from './styles'

type RouteParams = {
  technology: string;
  subcategory: string;
  correctAnswers: number;
  totalQuestions: number;
  category: CategoryTypeProps;
}

export function QuizStatus() {

  const { COLORS } = useTheme()

  const route = useRoute()
  const { category, technology, correctAnswers, totalQuestions, subcategory } = route.params as RouteParams

  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  const correctAnswersPercentage = Math.round((correctAnswers/totalQuestions) * 100)
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
          subtitle={`${correctAnswers} de ${totalQuestions}`}
        />

        <StatisticCard
          icon='book-open'
          title='Área'
          subtitle={capitalizeCategoryLabel(category)}
        />

        <StatisticCard
          icon='code'
          title='Tecnologia'
          subtitle={`${technology}: ${subcategory}`}
        />
      </View>

      <Button
        title='Finalizar quiz'
        onPress={handleGoToHome}
      />
    </Container>
  )
}