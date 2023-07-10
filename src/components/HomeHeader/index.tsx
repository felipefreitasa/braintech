import { UserPhoto } from "@components/UserPhoto"

import { Container, LeftContainer, TextContent, Salution, UserName } from "./styles"

export function HomeHeader() {
  return (
    <Container>
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
    </Container>
  )
}