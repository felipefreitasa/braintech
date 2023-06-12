import { useNavigation } from '@react-navigation/native'

import { IconButton } from '@components/IconButton'

import { Container, Title } from './styles'

type Props = {
  title: string;
}

export function Header({ title }: Props) {

  const { goBack } = useNavigation()

  return (
    <Container>
      <IconButton
        onPress={goBack}
        icon='arrow-left'
      />

      <Title>
        {title}
      </Title>
    </Container>
  )
}