import styled, { css } from 'styled-components/native'

type IconContainerProps = {
  mode: 'success' | 'error';
}

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;

  ${({ theme }) => css`
    padding: ${theme.PADDING}px;
    padding-top: 60px;
    background-color: ${theme.COLORS.BACKGROUND};
  `}
`;

export const IconContainer = styled.View<IconContainerProps>`
  width: 80px;
  height: 80px;
  margin-bottom: 8px;
  align-items: center;
  justify-content: center;

  ${({ theme, mode }) => css`
    border-radius: ${theme.BORDER_RADIUS}px;
    background-color: ${mode === 'success' ? theme.COLORS.SUCCESS_5 : theme.COLORS.ERROR_5};
  `}
`

export const Title = styled.Text`
  font-size: 30px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.BOLD};
  `}
`;

export const Subtitle = styled.Text`
  font-size: 20px;
  margin-bottom: 24px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY};
    font-family: ${theme.FONTS.REGULAR};
  `}
`;

export const StatisticsTitle = styled.Text`
  font-size: 16px;
  margin-bottom: 12px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.REGULAR};
  `}
`;