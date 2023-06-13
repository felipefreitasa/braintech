import styled, { css } from 'styled-components/native'

export const Container = styled.Pressable`
  flex: 1;

  ${({ theme }) => css`
    padding: ${theme.PADDING}px;
    background-color: ${theme.COLORS.BACKGROUND};
  `}
`;

export const SearchResultTitle = styled.Text`
  font-size: 12px;
  margin-top: 24px;
  margin-bottom: 12px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.REGULAR};
  `}
`;