import { useNavigation } from "@react-navigation/native"
import { AppNavigatorRoutesProps } from "../../routes/app.routes"

import { IconButton } from "@components/IconButton"

import { Container, LeftContainer, TextContent, Salution, UserName, UserPhoto } from "./styles"

export function HomeHeader() {

  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

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

      <IconButton 
        icon='search'
        onPress={() => navigate('search')}
      />
    </Container>
  )
}