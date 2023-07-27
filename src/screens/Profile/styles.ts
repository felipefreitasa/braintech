import { Platform } from "react-native"
import styled, { css } from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`

export const HeaderContainer = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 24px;
  align-items: center;
  justify-content: space-between;
  padding-top: ${Platform.OS === 'ios' ? 50 : 20}px;
`

export const LeftContainer = styled.View`
  flex: 1;
  flex-direction: row;
`

export const UserInformationsContainer = styled.View`
  flex: 1;
  margin-left: 8px;
`

export const UserName = styled.Text`
  font-size: 24px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.BOLD};
  `}
`

export const UserEmail = styled.Text`
  font-size: 16px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY};
    font-family: ${theme.FONTS.REGULAR};
  `}
`

export const StatisticsTitle = styled.Text`
  font-size: 16px;
  margin-bottom: 12px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.REGULAR};
  `}
`;

export const StatisticsContainer = styled.View`
  width: 100%;
  margin-bottom: 24px;
`
  
export const ProfileIconContainer = styled.View`
  width: 60px;
  height: 60px;
  align-items: center;
  border-radius: 60px;
  justify-content: center;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.PRIMARY_5};
  `}
`;
