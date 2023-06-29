import { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { PressableProps } from 'react-native'
import { useTheme } from 'styled-components/native'

import { Container } from './styles'

type Props = PressableProps & {
  iconSize?: number;
  icon: keyof typeof Feather.glyphMap;
}

export function IconButton({ icon, iconSize = 20, ...rest }: Props) {

  const { COLORS } = useTheme()

  const [isActive, setIsActive] = useState(false)

  return (
    <Container
      isActive={isActive}
      onPressIn={() => setIsActive(true)}
      onPressOut={() => setIsActive(false)}
      {...rest}
    >
      <Feather 
        name={icon}
        size={iconSize} 
        color={COLORS.PRIMARY} 
      />
    </Container>
  )
}