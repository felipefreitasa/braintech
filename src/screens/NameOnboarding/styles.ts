import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 20px 20px 40px 20px;
  justify-content: space-between;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.BACKGROUND};
  `}
`;

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