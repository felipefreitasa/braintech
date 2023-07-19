import styled, { css } from 'styled-components/native'

type Props = {
  isFocused: boolean;
}

export const Container = styled.TextInput<Props>`
  flex: 1;
  font-size: 16px;
  min-height: 50px;
  max-height: 50px;
  padding: 0px 20px;
  border: 1px solid;

  ${({ theme, isFocused }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.REGULAR};
    border-radius: ${theme.BORDER_RADIUS}px;
    border-color: ${isFocused ? theme.COLORS.PRIMARY : 'transparent'};
    background-color: ${isFocused ? theme.COLORS.PRIMARY_10 : theme.COLORS.CARD};
  `}
`;

export const Label = styled.Text`
  font-size: 14px;
  margin-bottom: 8px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY};
    font-family: ${theme.FONTS.REGULAR};
  `}
`