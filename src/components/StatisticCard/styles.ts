import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  justify-content: flex-start;
`;

export const IconContainer = styled.View`
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    border-radius: ${theme.BORDER_RADIUS}px;
    background-color: ${theme.COLORS.ACTION};
  `}
`

export const Content = styled.View`
  margin-left: 8px;
`

export const Title = styled.Text`
  font-size: 18px;
  margin-bottom: 4px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.BOLD};
  `}
`;

export const Subtitle = styled.Text`
  font-size: 16px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY};
    font-family: ${theme.FONTS.REGULAR};
  `}
`;