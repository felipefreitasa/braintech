import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 20px 20px 40px 20px;
  justify-content: space-between;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.BACKGROUND};
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
`

export const SignInButtonLabelHighlight = styled(SignInButtonLabel)`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`

export const ButtonContainer = styled.View`
  width: 100%;
  height: 46px;
`;

export const InputsContainer = styled.View`
  flex: 1;
  justify-content: space-between;
`