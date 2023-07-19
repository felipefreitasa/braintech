import { ViewProps } from 'react-native'
import Animated, { FadeInLeft } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'

import { CategoryTypeProps } from '../../@types/categoryTypeProps'

import { IconButton } from '@components/IconButton'
import { ChipCategory } from '@components/ChipCategory'

import { Container, LeftContainer, Title, TitleHighlight } from './styles'

type Props = ViewProps & {
  title?: string;
  onGoBack?: () => void;
  titleHighlight?: string;
  category?: CategoryTypeProps;
  isGoBackButtonDisabled?: boolean;
}

export function Header({ title, category, onGoBack, isGoBackButtonDisabled = false, titleHighlight, ...rest }: Props) {

  const { goBack } = useNavigation()

  return (
    <Animated.View entering={FadeInLeft}>
      <Container {...rest}>
        <LeftContainer>
          <IconButton
            onPress={onGoBack ? onGoBack : goBack}
            icon='arrow-left'
            disabled={isGoBackButtonDisabled}
          />

          {titleHighlight ? (
            <TitleHighlight>
              {`${title}: `}
              <Title>
                {titleHighlight}
              </Title>
            </TitleHighlight>
          ) : (
            <Title>
              {title}
            </Title>
          )}
        </LeftContainer>

        {category && <ChipCategory category={category} />}
      </Container>
    </Animated.View>
  )
}