import { ViewProps } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { IconButton } from '@components/IconButton'

import { Container, Title } from './styles'

type Props = ViewProps & {
  title: string;
}

export function Header({ title, ...rest }: Props) {

  const { goBack } = useNavigation()

  return (
    <Container {...rest}>
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