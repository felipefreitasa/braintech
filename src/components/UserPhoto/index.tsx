import { ImageProps } from "react-native"

import { Container } from "./styles"

type Props = ImageProps & {
  size: number;
}

export function UserPhoto({ size, ...rest }: Props){
  return (
    <Container
      size={size}
      {...rest}
    />
  )
}