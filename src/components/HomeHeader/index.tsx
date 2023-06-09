import { IconButton } from "@components/IconButton"

import { Container, LeftContainer, TextContent, Salution, UserName, UserPhoto } from "./styles"

export function HomeHeader() {
  return (
    <Container>
      <LeftContainer>
        <UserPhoto source={{ uri: 'https://github.com/felipefreitasa.png' }}/>

        <TextContent>
          <Salution>
            Bom dia!
          </Salution>

          <UserName>
            Felipe Freitas
          </UserName>
        </TextContent>
      </LeftContainer>

      <IconButton icon='search'/>
    </Container>
  )
}