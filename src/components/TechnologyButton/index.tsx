import { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { PressableProps } from 'react-native'
import { useTheme } from 'styled-components/native'

import { handleTechnologyIcon } from '@utils/handleTechnologyIcon'

import { CategoryTypeProps } from '../../@types/categoryTypeProps'

import { Container, ContentContainer, IconContainer, QuestionsQuantity, TextContainer, Title } from './styles'
import { handleCategoryColor } from '@utils/handleCategoryColor'

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
        <IconContainer category={category}>
          {icon ? (
            <Feather
              size={22}
              name={icon}
              color={handleCategoryColor(category)}
            />
          ) : 
            handleTechnologyIcon(title)
          }
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