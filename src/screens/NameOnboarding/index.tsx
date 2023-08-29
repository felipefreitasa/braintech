import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeIn } from "react-native-reanimated";
import { KeyboardAvoidingView, ScrollView, TouchableOpacity, View } from "react-native";

import { useAuth } from "@hooks/useAuth";

import { AuthNavigatorRoutesProps } from "../../routes/auth.routes";

import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { TitleAndSubtitle } from "@components/TitleAndSubtitle";

import { ButtonContainer, Container, SignInButtonLabel, SignInButtonLabelHighlight } from "./styles";

const AnimatedButtonContainer =
  Animated.createAnimatedComponent(ButtonContainer);

type FormDataProps = {
  name: string;
  lastName: string;
};

const nameOnboardingSchema = yup.object({
  name: yup.string().required("Inform your name"),
  lastName: yup.string().required("Inform your last name"),
});

export function NameOnboarding() {
  const { navigate, goBack } = useNavigation<AuthNavigatorRoutesProps>();

  const { setOnboardingName } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(nameOnboardingSchema),
  });

  function handleGoToEmailScreen({ name, lastName }: FormDataProps) {
    setOnboardingName(`${name} ${lastName}`);
    navigate("emailOnboarding");
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Container>
          <View>
            <Header title="Register" titleHighlight="Name" onGoBack={goBack} />

            <Animated.View entering={FadeIn.delay(300).duration(600)}>
              <TitleAndSubtitle
                title="Welcome to BrainTech"
                subtitle="Let's start your registration with your first and last name."
              />
            </Animated.View>

            <Animated.View entering={FadeIn.delay(600).duration(600)}>
              <Controller
                control={control}
                name="name"
                render={({ field: { onChange, value } }) => (
                  <Input
                    label="Name"
                    value={value}
                    autoComplete="off"
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={onChange}
                    placeholder="Enter your name"
                    errorMessage={errors.name?.message}
                  />
                )}
              />

              <Controller
                control={control}
                name="lastName"
                render={({ field: { onChange, value } }) => (
                  <Input
                    label="Last name"
                    value={value}
                    autoComplete="off"
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={onChange}
                    placeholder="Enter your last name"
                    errorMessage={errors.lastName?.message}
                    onSubmitEditing={handleSubmit(handleGoToEmailScreen)}
                  />
                )}
              />
            </Animated.View>
          </View>

          <View>
            <AnimatedButtonContainer entering={FadeIn.delay(900).duration(600)}>
              <Button
                title="Continue"
                onPress={handleSubmit(handleGoToEmailScreen)}
              />

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
            </AnimatedButtonContainer>
          </View>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
