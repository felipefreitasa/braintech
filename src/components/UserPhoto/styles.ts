import styled from "styled-components/native"

type UserPhotoProps = {
  size: number;
}

export const Container = styled.Image<UserPhotoProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS}px;
`