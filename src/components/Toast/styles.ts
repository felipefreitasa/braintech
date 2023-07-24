import Animated from "react-native-reanimated";
import styled, { css } from "styled-components/native";

export type ModeProps = "success" | "error";

type Props = {
  mode: ModeProps;
};

export const Container = styled.View<Props>`
  width: 90%;
  padding: 12px;
  position: absolute;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;

  ${({ theme, mode }) => css`
    border-radius: ${theme.BORDER_RADIUS}px;
    background-color: ${mode === "success"
      ? theme.COLORS.SUCCESS_10_SOLID
      : theme.COLORS.ERROR_10_SOLID};
  `}
`;

export const Message = styled.Text<Props>`
  font-size: 14px;
  margin-left: 8px;

  ${({ theme, mode }) => css`
    font-family: ${theme.FONTS.REGULAR};
    color: ${mode === "success" ? theme.COLORS.SUCCESS : theme.COLORS.ERROR};
  `}
`;
