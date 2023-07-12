import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;

  ${({ theme }) => css`
    padding: ${theme.PADDING}px;
    background-color: ${theme.COLORS.BACKGROUND};
  `}
`;

export const QuestionsCounter = styled.Text`
  font-size: 14px;
  margin-top: 24px;
  margin-bottom: 8px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.MEDIUM};
  `}
`

export const ProgressBar = styled.View`
  height: 8px;
  width: 100%;
  margin-bottom: 24px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.CARD};
    border-radius: ${theme.BORDER_RADIUS}px;
  `}
`

export const ProgressIndicator = styled.View`
  height: 100%;

  ${({ theme }) => css`
    border-radius: ${theme.BORDER_RADIUS}px;
    background-color: ${theme.COLORS.PRIMARY};
  `}
`

export const Question = styled.Text`
  font-size: 24px;
  margin-bottom: 24px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.BOLD};
  `}
`