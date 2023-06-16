import { PressableProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native'

import { Container, Title } from './styles'

type Props = PressableProps & {
  title: string;
  isSelected: boolean;
}

export function AnswerSelect({ title, isSelected, ...rest }: Props) {

  const { COLORS } = useTheme()

  return (
    <Container 
      isSelected={isSelected}
      {...rest}
    >
      <MaterialIcons
        size={20}
        color={COLORS.PRIMARY}
        name={isSelected ? 'radio-button-on' : 'radio-button-off'}
      />

      <Title>
        {title}
      </Title>
    </Container>
  )
}