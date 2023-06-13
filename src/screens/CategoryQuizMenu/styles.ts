import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  ${({ theme }) => css`
    padding: ${theme.PADDING}px;
    background-color: ${theme.COLORS.BACKGROUND};
  `}
`;

export const Description = styled.Text`
  font-size: 16px;
  margin-top: 16px;
  margin-bottom: 24px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY};
    font-family: ${theme.FONTS.REGULAR};
  `}
`