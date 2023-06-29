import styled, { css } from "styled-components/native"

export const Container = styled.View`
  flex: 1;

  ${({ theme }) => css`
    padding: ${theme.PADDING}px;
    background-color: ${theme.COLORS.BACKGROUND};
  `}
`

export const Title = styled.Text`
  font-size: 24px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.BOLD};
  `}
`

export const Subtitle = styled.Text`
  font-size: 18px;
  margin-bottom: 8px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY};
    font-family: ${theme.FONTS.REGULAR};
  `}
`

export const Data = styled.Text`
  font-size: 12px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.REGULAR};
  `}
`

export const SectionHeaderSeparator = styled.View`
  height: 16px;
`

export const ItemSeparator = styled.View`
  margin-top: -16px;
  margin-bottom: -16px;
`

export const SectionSeparator = styled.View`
  margin-top: -8px;
`