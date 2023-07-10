import { useNavigation } from "@react-navigation/native"
import { AppNavigatorRoutesProps } from "../../routes/app.routes"

import { UserPhoto } from "@components/UserPhoto"

import { Container, LeftContainer, TextContent, Salution, UserName } from "./styles"

export function HomeHeader() {

  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

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