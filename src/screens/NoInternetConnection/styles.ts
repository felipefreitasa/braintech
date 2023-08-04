import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    padding: ${theme.PADDING}px;
    background-color: ${theme.COLORS.BACKGROUND};
  `}
`;
