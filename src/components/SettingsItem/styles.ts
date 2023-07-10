import { Platform } from "react-native"
import styled, { css } from "styled-components/native"

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${Platform.OS === 'ios' ? 24 : 12}px;
`

export const LeftContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Title = styled.Text`
  font-size: 18px;
  margin-left: 8px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.MEDIUM};
  `}
`