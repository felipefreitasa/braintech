import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: ${Platform.OS === 'ios' ? 50 : 0}px;
`;

export const LeftContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const TitleHighlight = styled.Text`
  font-size: 14px;
  margin-left: 8px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.LIGHT};
  `}
`

export const Title = styled.Text`
  font-size: 14px;
  margin-left: 8px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.BOLD};
  `}
`