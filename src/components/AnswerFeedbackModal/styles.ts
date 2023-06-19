import Animated from 'react-native-reanimated'
import styled, { css } from 'styled-components/native'

type AnswerStatusProps = {
  isAnswerCorrect: boolean;
}

export const Container = styled(Animated.View)`
  bottom: 0;
  width: 100%;
  position: absolute;
  
  ${({ theme }) => css`
    padding: ${theme.PADDING}px;
    background-color: ${theme.COLORS.ACTION};
    border-top-left-radius: ${theme.BORDER_RADIUS}px;
    border-top-right-radius: ${theme.BORDER_RADIUS}px;
  `}
`;

export const AnswerStatusContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const AnswerStatus = styled.Text<AnswerStatusProps>`
  font-size: 22px;
  margin-left: 4px;
  
  ${({ theme, isAnswerCorrect }) => css`
    font-family: ${theme.FONTS.BOLD};
    color: ${isAnswerCorrect ? theme.COLORS.SUCCESS : theme.COLORS.ERROR};
  `}
`

export const AnswerCorrectionTitle = styled.Text`
  font-size: 18px;
  margin-top: 8px;
  
  ${({ theme }) => css`
    color: ${theme.COLORS.ERROR};
    font-family: ${theme.FONTS.MEDIUM};
  `}
`

export const CorrectAnswer = styled.Text`
  font-size: 16px;
  
  ${({ theme }) => css`
    color: ${theme.COLORS.ERROR};
    font-family: ${theme.FONTS.REGULAR};
  `}
`