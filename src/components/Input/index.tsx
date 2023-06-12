import { useState } from 'react'
import { TextInputProps } from 'react-native'
import { useTheme } from 'styled-components/native'

import { Container } from './styles'

export function Input({ ...rest }: TextInputProps) {
  const { COLORS } = useTheme()

  const [isFocused, setIsFocused] = useState(false)

  return (
    <Container 
      isFocused={isFocused}
      placeholderTextColor={COLORS.GRAY}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...rest}
    />
  )
}