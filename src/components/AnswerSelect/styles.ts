import styled, { css } from 'styled-components/native'

type Props = {
  isSelected: boolean;
}

export const Container = styled.Pressable<Props>`
  flex: 1;
  padding: 16px;
  min-height: 52px;
  max-height: 52px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid transparent;

  ${({ theme, isSelected }) => css`
    border-radius: ${theme.BORDER_RADIUS}px;
    border-color: ${isSelected ? theme.COLORS.PRIMARY : 'transparent'};
    background-color: ${isSelected ? theme.COLORS.PRIMARY_10 : theme.COLORS.CARD};
  `}
`;


export const Title = styled.Text`
  font-size: 14px;
  margin-left: 8px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.MEDIUM};
  `}
`