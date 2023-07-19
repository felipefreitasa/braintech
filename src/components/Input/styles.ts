import styled, { css } from "styled-components/native";

type InputProps = {
  isFocused: boolean;
  isInvalid: boolean;
};

export const Container = styled.View`
  margin-bottom: 70px;
`;

export const InputContainer = styled.TextInput<InputProps>`
  flex: 1;
  font-size: 16px;
  min-height: 50px;
  max-height: 50px;
  padding: 0px 20px;
  border: 1px solid;

  ${({ theme, isFocused, isInvalid }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.REGULAR};
    border-radius: ${theme.BORDER_RADIUS}px;
    border-color: ${isInvalid ? theme.COLORS.ERROR : (isFocused ? theme.COLORS.PRIMARY : "transparent")};
    background-color: ${isFocused
      ? theme.COLORS.PRIMARY_10
      : theme.COLORS.CARD};
  `}
`;

export const Label = styled.Text`
  font-size: 14px;
  margin-bottom: 8px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY};
    font-family: ${theme.FONTS.REGULAR};
  `}
`;

export const ErrorMessage = styled.Text`
  font-size: 14px;
  margin-top: 4px;

  ${({ theme }) => css`
    color: ${theme.COLORS.ERROR};
    font-family: ${theme.FONTS.REGULAR};
  `}
`;
