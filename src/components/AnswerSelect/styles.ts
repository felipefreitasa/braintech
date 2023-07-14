import { Pressable } from 'react-native';
import Animated from 'react-native-reanimated';
import styled, { css } from 'styled-components/native'

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

export const Container = styled(AnimatedPressable)`
  padding: 8px 0;
  min-height: 64px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid transparent;

  ${({ theme }) => css`
    border-radius: ${theme.BORDER_RADIUS}px;
  `}
`;


export const Title = styled.Text`
flex: 1;
  font-size: 16px;
  margin-left: -4px;
  margin-bottom: 1px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.MEDIUM};
  `}
`