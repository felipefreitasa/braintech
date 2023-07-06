import styled, { css } from 'styled-components/native'

export type ModeProps = 'default' | 'error'

type Props = {
  mode?: ModeProps;
  isActive: boolean;
}

export const Container = styled.Pressable<Props>`
  padding: 8px;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;

  ${({ theme, isActive, mode }) => css`
    border-radius: ${theme.BORDER_RADIUS}px;
    border-color: ${isActive ? (mode === 'error' ? theme.COLORS.ERROR : theme.COLORS.PRIMARY) : 'transparent'};
    background-color: ${isActive ? (mode === 'error' ? theme.COLORS.ERROR_5 : theme.COLORS.PRIMARY_10) : (mode === 'error' ? theme.COLORS.ERROR_10 : theme.COLORS.ACTION)};
  `}
`;