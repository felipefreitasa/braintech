import Animated, { FadeInLeft  } from "react-native-reanimated"

import { UserPhoto } from "@components/UserPhoto"

import { Container, LeftContainer, TextContent, Salution, UserName } from "./styles"

export function HomeHeader() {
  return (
    <Container>
      <Animated.View entering={FadeInLeft}>
        <LeftContainer>
          <UserPhoto 
            size={40} 
            source={{ uri: 'https://github.com/felipefreitasa.png' }}
          />

          <TextContent>
            <Salution>
              Bom dia!
            </Salution>

            <UserName>
              Felipe Freitas
            </UserName>
          </TextContent>
        </LeftContainer>
      </Animated.View>
    </Container>
  )
}