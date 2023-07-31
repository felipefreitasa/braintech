import styled, { css } from "styled-components/native"

export const Title = styled.Text`
  font-size: 24px;
  margin-top: 24px;
  margin-bottom: 4px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.BOLD};
  `}
`

export const Subtitle = styled.Text`
  font-size: 18px;
  margin-bottom: 32px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY};
    font-family: ${theme.FONTS.REGULAR};
  `}
`