import { CategoryTypeProps } from '../../@types/categoryTypeProps'

import styled, { css } from 'styled-components/native'

type Props = {
  category: CategoryTypeProps;
}

export const Container = styled.View<Props>`
  padding: 4px 8px;
  border-radius: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${({ category }) => {
    switch (category) {
      case 'FRONT-END':
        return css`
          background-color: ${({ theme }) => theme.COLORS.FRONT_END_10};
        `;

      case 'BACK-END':
        return css`
          background-color: ${({ theme }) => theme.COLORS.BACK_END_10};
        `;

      case 'MOBILE':
        return css`
          background-color: ${({ theme }) => theme.COLORS.MOBILE_10};
        `;

      default:
    }
  }}
`;

export const Title = styled.Text<Props>`
  font-size: 10px;
  margin-left: 4px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};

  ${({ category }) => {
    switch (category) {
      case 'FRONT-END':
        return css`
          color: ${({ theme }) => theme.COLORS.FRONT_END};
        `;

        case 'BACK-END':
          return css`
            color: ${({ theme }) => theme.COLORS.BACK_END};
          `;

        case 'MOBILE':
          return css`
            color: ${({ theme }) => theme.COLORS.MOBILE};
          `;

        default:
      }
  }}
`