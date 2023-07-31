import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 20px 20px 40px 20px;
  justify-content: space-between;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.BACKGROUND};
  `}
`;

export const ButtonContainer = styled.View`
  width: 100%;
  height: 46px;
`;