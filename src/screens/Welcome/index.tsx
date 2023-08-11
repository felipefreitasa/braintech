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
  ButtonContainer,
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
              <TitleDescription>: Quiz for developers</TitleDescription>
            </Title>

            <Subtitle>
              Test your knowledge and master frameworks and programming
              languages.
            </Subtitle>
          </Animated.View>

          <Animated.View entering={FadeIn.delay(300).duration(600)}>
            <ButtonContainer>
              <Button
                disabled={false}
                isLoading={false}
                title="Sign up"
                onPress={() => navigate("nameOnboarding")}
              />
            </ButtonContainer>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigate("signIn")}
            >
              <SignInButtonLabel>
                Already have account ?{" "}
                <SignInButtonLabelHighlight>
                  Sign in!
                </SignInButtonLabelHighlight>
              </SignInButtonLabel>
            </TouchableOpacity>
          </Animated.View>
        </Content>
      </Background>
    </Container>
  );
}
