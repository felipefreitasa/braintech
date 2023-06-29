import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
  justify-content: flex-start;
`

export const Title = styled.Text`
  font-size: 14px;
  margin-left: 4px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.REGULAR};
  `}
`
