import { Platform } from "react-native"
import styled, { css } from "styled-components/native"

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${Platform.OS === 'ios' ? 50 : 20}px 20px 0 20px;
`

export const LeftContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const TextContent = styled.View`
  margin-left: 8px;
`

export const Salution = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY};
    font-family: ${theme.FONTS.REGULAR};
  `}
`

export const UserName = styled.Text`
  font-size: 18px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.BOLD};
  `}
`