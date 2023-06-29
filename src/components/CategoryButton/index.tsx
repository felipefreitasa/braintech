import { useState } from 'react'
import { PressableProps } from 'react-native'

import { CategoryTypeProps } from '../../@types/categoryTypeProps'

import { handleTechnologyIcon } from '@utils/handleTechnologyIcon'

import { Container, IconContainer, Subtitle, Title } from './styles'

type Props = PressableProps & {
  technology: string;
  description: string;
  category: CategoryTypeProps;
}

export function CategoryButton({ technology, description, category, ...rest }: Props) {

  const [isActive, setIsActive] = useState(false)

  return (
    <Container
      isActive={isActive}
      onPressIn={() => setIsActive(true)}
      onPressOut={() => setIsActive(false)}
      {...rest}
    >
      <IconContainer category={category}>
        {handleTechnologyIcon(technology)}
      </IconContainer>

      <Title>
        {technology}
      </Title>

      <Subtitle>
        {description}
      </Subtitle>
    </Container>
  )
}