import { ReactNode } from "react"
import { ViewProps } from "react-native"
import { Feather } from "@expo/vector-icons"
import { useTheme } from "styled-components/native"

import { Container, LeftContainer, Title } from "./styles"

type Props = ViewProps & {
  title: string;
  rightAction: ReactNode;
  icon: keyof typeof Feather.glyphMap;
}

export function SettingsItem({ title, icon, rightAction, ...rest }: Props){

  const { COLORS } = useTheme()

  return (
    <Container {...rest}>
      <LeftContainer>
        <Feather
          name={icon}
          size={18}
          color={COLORS.WHITE}
        />

        <Title>
          {title}
        </Title>
      </LeftContainer>

      {rightAction}
    </Container>
  )
}