import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Background = styled.ImageBackground`
  flex: 1;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 40px 20px;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  font-size: 34px;
  margin-top: 8px;

  ${({ theme }) => css`
    color: ${theme.COLORS.PRIMARY};
    font-family: ${theme.FONTS.BOLD};
  `}
`;

export const TitleDescription = styled(Title)`
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Subtitle = styled.Text`
  font-size: 20px;
  margin-bottom: 32px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY};
    font-family: ${theme.FONTS.REGULAR};
  `}
`;

export const SignInButtonLabel = styled.Text`
  font-size: 16px;
  margin-top: 16px;
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY};
    font-family: ${theme.FONTS.REGULAR};
  `}
`;

export const SignInButtonLabelHighlight = styled(SignInButtonLabel)`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const ButtonContainer = styled.View`
  width: 100%;
  height: 46px;
`;
