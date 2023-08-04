import styled, { css } from "styled-components/native";

export const Version = styled.Text`
  font-size: 12px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY};
    font-family: ${theme.FONTS.REGULAR};
  `}
`