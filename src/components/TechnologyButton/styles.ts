import styled, { css } from 'styled-components/native'

type ContainerProps = {
  isActive: boolean;
}

export const Container = styled.Pressable<ContainerProps>`
  flex: 1;
  min-height: 80px;
  max-height: 80px;
  margin-bottom: 12px;
  flex-direction: row;
  align-items: center;
  border: 1px solid transparent;
  justify-content: space-between;

  ${({ theme, isActive }) => css`
    padding: ${theme.PADDING}px;
    border-radius: ${theme.BORDER_RADIUS}px;
    border-color: ${isActive ? theme.COLORS.PRIMARY : 'transparent'};
    background-color: ${isActive ? theme.COLORS.PRIMARY_10 : theme.COLORS.CARD};  
  `}
`;

export const ContentContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Title = styled.Text`
  font-size: 16px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.BOLD};
  `}
`

export const QuestionsQuantity = styled.Text`
  font-size: 12px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY};
    font-family: ${theme.FONTS.REGULAR};
  `}
`