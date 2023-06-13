import { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { PressableProps } from 'react-native'
import { useTheme } from 'styled-components/native'

import { handleTechnologyIcon } from '@utils/handleTechnologyIcon'

import { CategoryTypeProps } from '../../@types/categoryTypeProps'

import { Container, ContentContainer, IconContainer, QuestionsQuantity, TextContainer, Title } from './styles'

type Props = PressableProps & {
  title: string;
  questionsQuantity: number;
  category: CategoryTypeProps;
}

export function TechnologyButton({ title, questionsQuantity, category }: Props) {

  const { COLORS } = useTheme()

  const [isActive, setIsActive] = useState(false)

  return (
    <Container
      isActive={isActive}
      onPressIn={() => setIsActive(true)}
      onPressOut={() => setIsActive(false)}
    >
      <ContentContainer>
        <IconContainer category={category}>
          {handleTechnologyIcon(title)}
        </IconContainer>

        <TextContainer>
          <Title>
            {title}
          </Title>

          <QuestionsQuantity>
            {`${questionsQuantity} questões`}
          </QuestionsQuantity>
        </TextContainer>
      </ContentContainer>

      <Feather
        size={20}
        name='arrow-right'
        color={COLORS.PRIMARY}
      />
    </Container>
  )
}