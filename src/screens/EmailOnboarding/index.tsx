import * as yup from "yup";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeIn } from "react-native-reanimated";
import {
  View,
  Alert,
  ScrollView,
  BackHandler,
  KeyboardAvoidingView,
} from "react-native";

import { useAuth } from "@hooks/useAuth";

import { AuthNavigatorRoutesProps } from "../../routes/auth.routes";

import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { TitleAndSubtitle } from "@components/TitleAndSubtitle";

import { ButtonContainer, Container } from "./styles";

const AnimatedButtonContainer =
  Animated.createAnimatedComponent(ButtonContainer);

type FormDataProps = {
  email: string;
};

const emailOnboardingSchema = yup.object({
  email: yup.string().required("Inform the email").email("Invalid email"),
});

export function EmailOnboarding() {
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

  const { setOnboardingEmail } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(emailOnboardingSchema),
  });

  function handleGoToPasswordScreen({ email }: FormDataProps) {
    setOnboardingEmail(email);
    navigate("passwordOnboarding");
  }

  function handleExitOnboarding() {
    Alert.alert(
      "Are you sure you want to unsubscribe?",
      "If you leave, you will lose the progress made.",
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Yes",
          style: "destructive",
          onPress: () => navigate("welcome"),
        },
      ]
    );

    return true;
  }

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleExitOnboarding
    );
    return () => backHandler.remove();
  }, []);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Container>
          <View>
            <Header
              title="Register"
              titleHighlight="Email"
              onGoBack={() => handleExitOnboarding()}
            />

            <Animated.View entering={FadeIn.delay(300).duration(600)}>
              <TitleAndSubtitle
                title="Email"
                subtitle="For a complete experience, enter your email in the field below."
              />
            </Animated.View>

            <Animated.View entering={FadeIn.delay(600).duration(600)}>
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value } }) => (
                  <Input
                    value={value}
                    label="E-mail"
                    autoComplete="off"
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={onChange}
                    keyboardType="email-address"
                    placeholder="Enter your email"
                    errorMessage={errors.email?.message}
                    onSubmitEditing={handleSubmit(handleGoToPasswordScreen)}
                  />
                )}
              />
            </Animated.View>
          </View>

          <View>
            <AnimatedButtonContainer entering={FadeIn.delay(900).duration(600)}>
              <Button
                title="Continue"
                onPress={handleSubmit(handleGoToPasswordScreen)}
              />
            </AnimatedButtonContainer>
          </View>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
