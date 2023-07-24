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
  justify-content: center;

  ${({ theme }) => css`
    border-radius: ${theme.BORDER_RADIUS}px;
    background-color: ${theme.COLORS.PRIMARY_5};
  `}
`;

export const ChoosePictureButtonContainer = styled.TouchableOpacity`
  margin-top: 16px;
  align-items: center;
  flex-direction: row;
  margin-bottom: 100px;
  justify-content: center;
`;

export const ChoosePictureButtonLabel = styled.Text`
  font-size: 16px;
  margin-left: 8px;

  ${({ theme }) => css`
    color: ${theme.COLORS.PRIMARY};
    font-family: ${theme.FONTS.BOLD};
  `}
`;

