import styled from "styled-components/native"

type UserPhotoProps = {
  size: number;
}

export const Container = styled.Image<UserPhotoProps>`
  border-radius: 200px;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`