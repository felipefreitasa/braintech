import styled, { css } from "styled-components/native"

export const Container = styled.View`
  flex: 1;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.BACKGROUND};
  `}
`

export const Title = styled.Text`
  margin: 24px 0;
  font-size: 24px;
  padding: 0 ${({ theme }) => theme.PADDING}px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.BOLD};
  `}
`

export const CategoryContainer = styled.View`
  margin: 0 0 24px 20px;
`