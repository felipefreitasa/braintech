import { BackHandler, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeIn } from "react-native-reanimated";

import { AppNavigatorRoutesProps } from "../../routes/app.routes";

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
import { useEffect } from "react";

export function Welcome() {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>();

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => null
    );
    return () => backHandler.remove();
  }, []);

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
              languages!
            </Subtitle>
          </Animated.View>

          <Animated.View entering={FadeIn.delay(300).duration(600)}>
            <ButtonContainer>
              <Button
                disabled={false}
                isLoading={false}
                title="Get started"
                onPress={() => navigate("homeTabs")}
              />
            </ButtonContainer>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigate("nameOnboarding")}
            >
              <SignInButtonLabel>
                Dont’t have an account yet ?{" "}
                <SignInButtonLabelHighlight>
                  Create now!
                </SignInButtonLabelHighlight>
              </SignInButtonLabel>
            </TouchableOpacity>
          </Animated.View>
        </Content>
      </Background>
    </Container>
  );
}
