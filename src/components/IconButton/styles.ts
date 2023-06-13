import styled, { css } from 'styled-components/native'

type Props = {
  isActive: boolean;
}

export const Container = styled.Pressable<Props>`
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  padding: 8px;

  ${({ theme, isActive }) => css`
    border-radius: ${theme.BORDER_RADIUS}px;
    border-color: ${isActive ? theme.COLORS.PRIMARY : 'transparent'};
    background-color: ${isActive ? theme.COLORS.PRIMARY_10 : theme.COLORS.ACTION};
  `}
`;