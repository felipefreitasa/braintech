import { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native'
import { PressableProps, ActivityIndicator } from 'react-native'

import { Container, Title } from './styles'

type Props = PressableProps & {
  title: string;
  disabled?: boolean;
  isLoading?: boolean;
  icon?: keyof typeof Feather.glyphMap
}

export function Button({ title, disabled, isLoading, icon, ...rest }: Props) {

  const { COLORS } = useTheme()

  const [isActive, setIsActive] = useState(false)

  return (
    <Container
      isActive={isActive}
      disabled={disabled || isLoading}
      onPressIn={() => setIsActive(true)}
      onPressOut={() => setIsActive(false)}
      {...rest}
    >
      {isLoading ? <ActivityIndicator color={COLORS.GRAY_60}/> : (
        <>
          {icon && (
            <Feather 
              name={icon}
              size={18} 
              color={disabled ? COLORS.GRAY_60 : COLORS.WHITE} 
              style={{ marginRight: 8 }}
            />
          )}

          <Title disabled={disabled}>
            {title}
          </Title>
        </>
      )}
    </Container>
  )
}