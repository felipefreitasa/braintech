import { ViewProps } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { CategoryTypeProps } from '../../@types/categoryTypeProps'

import { IconButton } from '@components/IconButton'
import { ChipCategory } from '@components/ChipCategory'

import { Container, LeftContainer, Title } from './styles'

type Props = ViewProps & {
  title: string;
  category?: CategoryTypeProps;
}

export function Header({ title, category, ...rest }: Props) {

  const { goBack } = useNavigation()

  return (
    <Container {...rest}>
      <LeftContainer>
        <IconButton
          onPress={goBack}
          icon='arrow-left'
        />

        <Title>
          {title}
        </Title>
      </LeftContainer>

      {category && <ChipCategory category={category} />}
    </Container>
  )
}