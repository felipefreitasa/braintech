import styled, { css } from "styled-components/native"

export const Container = styled.View`
  flex: 1;

  ${({ theme }) => css`
    padding: ${theme.PADDING}px;
    background-color: ${theme.COLORS.BACKGROUND};
  `}
`

export const Title = styled.Text`
  margin: 24px 0;
  font-size: 24px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.BOLD};
  `}
`