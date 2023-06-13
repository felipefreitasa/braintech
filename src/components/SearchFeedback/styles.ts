import styled, { css } from 'styled-components/native'

export type ModeTypeProps = 'default' | 'error'

type IconContainerProps = {
  mode: ModeTypeProps;
}

export const Container = styled.View`
  flex: 1;
  align-self: center;
  align-items: center;
  justify-content: center;
`;

export const IconContainer = styled.View<IconContainerProps>`
  width: 64px;
  height: 64px;
  margin-bottom: 16px;
  align-items: center;
  justify-content: center;

  ${({ theme, mode }) => css`
    border-radius: ${theme.BORDER_RADIUS}px;
    background-color: ${mode === 'default' ? theme.COLORS.PRIMARY_5 : theme.COLORS.ERROR_5};
  `}
`

export const Title = styled.Text`
  font-size: 20px;
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.BOLD};
  `}
`

export const Subtitle = styled.Text`
  font-size: 16px;
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY};
    font-family: ${theme.FONTS.REGULAR};
  `}
`