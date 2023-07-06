import { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { PressableProps } from 'react-native'
import { useTheme } from 'styled-components/native'

import { Container, ModeProps } from './styles'

type Props = PressableProps & {
  mode?: ModeProps;
  iconSize?: number;
  icon: keyof typeof Feather.glyphMap;
}

export function IconButton({ icon, iconSize = 20, mode = 'default',...rest }: Props) {

  const { COLORS } = useTheme()

  const [isActive, setIsActive] = useState(false)

  return (
    <Container
      mode={mode}
      isActive={isActive}
      onPressIn={() => setIsActive(true)}
      onPressOut={() => setIsActive(false)}
      {...rest}
    >
      <Feather 
        name={icon}
        size={iconSize} 
        color={mode === 'error' ? COLORS.ERROR : COLORS.PRIMARY} 
      />
    </Container>
  )
}