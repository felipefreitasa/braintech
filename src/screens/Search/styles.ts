import styled, { css } from 'styled-components/native'

export const Container = styled.Pressable`
  flex: 1;

  ${({ theme }) => css`
    padding: ${theme.PADDING}px;
    background-color: ${theme.COLORS.BACKGROUND};
  `}
`;