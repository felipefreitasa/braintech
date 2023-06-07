import styled, { css } from 'styled-components/native'

type ButtonProps = {
  isActive: boolean;
}

type TitleProps = {
  disabled?: boolean;
}

export const Container = styled.Pressable<ButtonProps>`
  flex: 1;
  min-height: 46px;
  max-height: 46px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  ${({ theme, isActive, disabled }) => css`
    border-radius: ${theme.BORDER_RADIUS}px;
    background-color: ${disabled ? theme.COLORS.GRAY : (isActive ? theme.COLORS.PRIMARY_ACTIVE : theme.COLORS.PRIMARY)};
  `}
`;

export const Title = styled.Text<TitleProps>`
  font-size: 16px;
  line-height: 20px;

  ${({ theme, disabled }) => css`
  font-family: ${theme.FONTS.BOLD};
    color: ${disabled ? theme.COLORS.GRAY_60 : theme.COLORS.WHITE};
  `}
`