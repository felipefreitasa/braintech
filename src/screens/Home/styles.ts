import styled, { css } from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`

export const Title = styled.Text`
  font-size: 24px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.REGULAR};
    color: ${theme.COLORS.PRIMARY};
  `}
`