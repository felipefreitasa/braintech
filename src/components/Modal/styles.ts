import Animated from 'react-native-reanimated';
import styled, { css } from 'styled-components/native'

export const Container = styled(Animated.View)`
  bottom: 0;
  width: 100%;
  position: absolute;
  
  ${({ theme }) => css`
    padding: ${theme.PADDING}px;
    padding-bottom: 40px;
    background-color: ${theme.COLORS.ACTION};
    border-top-left-radius: ${theme.BORDER_RADIUS}px;
    border-top-right-radius: ${theme.BORDER_RADIUS}px;
  `}
`;

export const Header = styled.View`
  width: 100%;
  margin-bottom: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.MEDIUM};
  `}
`