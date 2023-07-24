import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeIn } from "react-native-reanimated";

import { AuthNavigatorRoutesProps } from "../../routes/auth.routes";

import LogoSvg from "@assets/logo.svg";
import SignInBackgroundImg from "@assets/sign-in-background.png";

import { Button } from "@components/Button";

import {
  Title,
  Content,
  Subtitle,
  Container,
  Background,
  TitleDescription,
  SignInButtonLabel,
  SignInButtonLabelHighlight,
} from "./styles";

export function Welcome() {
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

  return (
    <Container>
      <Background source={SignInBackgroundImg} resizeMode="cover">
        <Content>
          <Animated.View entering={FadeIn.duration(600)}>
            <LogoSvg width={54} height={54} />

            <Title>
              BrainTech
              <TitleDescription>: O quiz de tecnologia</TitleDescription>
            </Title>

            <Subtitle>
              Teste seus conhecimentos e domine frameworks e linguagens de
              programação!
            </Subtitle>
          </Animated.View>

          <Animated.View entering={FadeIn.delay(300).duration(600)}>
            <View style={{ height: 46, width: "100%" }}>
              <Button
                disabled={false}
                isLoading={false}
                title="Criar conta"
                onPress={() => navigate("nameOnboarding")}
              />
            </View>
            
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigate("signIn")}
            >
              <SignInButtonLabel>
                Já possui conta?{" "}
                <SignInButtonLabelHighlight>
                  Entre agora!
                </SignInButtonLabelHighlight>
              </SignInButtonLabel>
            </TouchableOpacity>
          </Animated.View>
        </Content>
      </Background>
    </Container>
  );
}
