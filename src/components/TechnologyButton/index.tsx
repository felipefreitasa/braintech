import { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { PressableProps, View } from 'react-native'
import { useTheme } from 'styled-components/native'

import { CategoryTypeProps } from '../../@types/categoryTypeProps'

import { Container, ContentContainer, QuestionsQuantity, Title } from './styles'

type Props = PressableProps & {
  title: string;
  questionsQuantity: number;
  category: CategoryTypeProps;
  icon?: keyof typeof Feather.glyphMap;
}

export function TechnologyButton({ title, questionsQuantity, category, icon, ...rest }: Props) {

  const { COLORS } = useTheme()

  const [isActive, setIsActive] = useState(false)

  return (
    <Container
      isActive={isActive}
      onPressIn={() => setIsActive(true)}
      onPressOut={() => setIsActive(false)}
      {...rest}
    >
      <ContentContainer>
        <View>
          <Title>
            {title}
          </Title>

          <QuestionsQuantity>
            {`${questionsQuantity} questões`}
          </QuestionsQuantity>
        </View>
      </ContentContainer>

      <Feather
        size={20}
        name='arrow-right'
        color={COLORS.PRIMARY}
      />
    </Container>
  )
}