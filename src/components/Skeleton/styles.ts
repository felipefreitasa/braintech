import styled, { css } from "styled-components/native";

type Props = {
  width: number;
  height: number;
  borderRadius: number;
}

export const Container = styled.View<Props>`
  width: 100%;
  overflow: hidden;
  align-items: center;
  justify-content: center;

  ${({ height, width, theme, borderRadius }) => css`
    width: ${width}px;
    height: ${height}px;
    background-color: ${theme.COLORS.ACTION};
    border-radius: ${borderRadius ? borderRadius : theme.BORDER_RADIUS}px;
  `}
`