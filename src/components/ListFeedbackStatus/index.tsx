import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native'

import { Container, IconContainer, ModeTypeProps, Subtitle, Title } from './styles'

type Props = {
  title: string;
  subtitle: string;
  mode: ModeTypeProps;
}

export function ListFeedbackStatus({ title, subtitle, mode = 'default' }: Props) {

  const { COLORS } = useTheme()

  return (
    <Container>
      <IconContainer mode={mode}>
        <Feather
          size={40}
          name={mode === 'default' ? 'coffee' : 'frown'}
          color={mode === 'default' ? COLORS.PRIMARY : COLORS.ERROR}
        />
      </IconContainer>

      <Title>
        {title}
      </Title>

      <Subtitle>
        {subtitle}
      </Subtitle>
    </Container>
  )
}