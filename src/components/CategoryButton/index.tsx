import { useState } from 'react'
import { PressableProps } from 'react-native'

import { CategoryTypeProps } from '../../@types/categoryTypeProps'

import { Container, IconContainer, Subtitle, Title } from './styles'

type Props = PressableProps & {
  title: string;
  subtitle: string;
  category: CategoryTypeProps;
}

export function CategoryButton({ title, subtitle, category, ...rest }: Props) {

  const [isActive, setIsActive] = useState(false)

  return (
    <Container
      isActive={isActive}
      onPressIn={() => setIsActive(true)}
      onPressOut={() => setIsActive(false)}
      {...rest}
    >
      <IconContainer category={category}/>

      <Title>
        {title}
      </Title>

      <Subtitle>
        {subtitle}
      </Subtitle>
    </Container>
  )
}