import { SharedValue, interpolate, useAnimatedStyle } from 'react-native-reanimated'

import { IconButton } from '@components/IconButton'

import { Container, Header, Title } from './styles'

type Props = {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  sharedValue: SharedValue<number>;
}

export function Modal({ title, onClose, children, sharedValue }: Props) {

  const confirmationModalAnimatedStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(sharedValue.value, [0, 1], [0, 1]),
      bottom: interpolate(sharedValue.value, [0, 1], [-100, 0]),
    }
  })

  return (
    <Container style={confirmationModalAnimatedStyles}>
      <Header>
        <Title>
          {title}
        </Title>

        <IconButton
          icon='x'
          iconSize={14}
          onPress={onClose}
        />
      </Header>

      {children}
    </Container>
  )
}