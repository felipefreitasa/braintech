import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 20px 20px 40px 20px;
  justify-content: space-between;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.BACKGROUND};
  `}
`;

export const Title = styled.Text`
  font-size: 24px;
  margin-top: 24px;
  margin-bottom: 4px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.BOLD};
  `}
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  margin-bottom: 32px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY};
    font-family: ${theme.FONTS.REGULAR};
  `}
`;

export const ProfileIconContainer = styled.View`
  width: 180px;
  height: 180px;
  align-items: center;
  border-radius: 200px;
  justify-content: center;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.PRIMARY_5};
  `}
`;

export const ChoosePictureButtonContainer = styled.TouchableOpacity`
  right: 0px;
  width: 42px;
  bottom: 0px;
  height: 42px;
  position: absolute;
  align-items: center;
  border-radius: 32px;
  flex-direction: row;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const SignInButtonContainer = styled.View`
  width: 100%;
  height: 46px;
  margin-top: 100px;
`;