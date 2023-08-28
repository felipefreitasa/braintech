import styled, { css } from "styled-components/native";

export const Label = styled.Text`
  font-size: 16px;
  margin-top: 16px;
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY};
    font-family: ${theme.FONTS.REGULAR};
  `}
`;

export const HighlightLabel = styled(Label)`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const ButtonContainer = styled.View`
  width: 100%;
  height: 46px;
`;
