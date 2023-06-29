import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native'

import { Container, Content, IconContainer, Subtitle, Title } from './styles'

type Props = {
  title: string;
  subtitle: string;
  icon: keyof typeof Feather.glyphMap;
}

export function StatisticCard({ icon, title, subtitle }: Props) {

  const { COLORS } = useTheme()

  return (
    <Container>
      <IconContainer>
        <Feather
          size={28}
          name={icon}
          color={COLORS.WHITE}
        />
      </IconContainer>

      <Content>
        <Title>
          {title}
        </Title>

        <Subtitle>
          {subtitle}
        </Subtitle>
      </Content>
    </Container>
  )
}