import LogoSvg from '@assets/logo.svg'
import SignInBackgroundImg from '@assets/sign-in-background.png'

import { Button } from '@components/Button'

import { Background, Container, Content, Subtitle, Title, TitleDescription } from "./styles"

export function SignIn() {
  return (
    <Container>
      <Background 
        source={SignInBackgroundImg} 
        resizeMode="cover" 
      >
        <Content>
          <LogoSvg width={54} height={54}/>

          <Title>
            BrainTech
            <TitleDescription>
              : O quiz de tecnologia
            </TitleDescription>
          </Title>

          <Subtitle>
            Teste seus conhecimentos e domine frameworks e linguagens de programação!
          </Subtitle>

          <Button 
            icon='google'
            disabled={false}
            isLoading={false}
            title='Entrar com o Google'
          />
        </Content>
      </Background>
    </Container>
  )
}