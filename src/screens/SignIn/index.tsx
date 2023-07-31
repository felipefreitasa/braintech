import * as yup from "yup";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import Animated, { FadeIn } from "react-native-reanimated";
import {
  View,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import { useAuth } from "@hooks/useAuth";

import { authCreate } from "@storage/auth/authCreate";

import { handleFirebaseSignInErrors } from "@utils/handleFirebaseSignInErrors";

import { FIREBASE_AUTH } from "../../firebaseApp/config";

import { AuthNavigatorRoutesProps } from "../../routes/auth.routes";

import { Input } from "@components/Input";
import { Toast } from "@components/Toast";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { ModeProps } from "@components/Toast/styles";
import { TitleAndSubtitle } from "@components/TitleAndSubtitle";

import {
  Container,
  SignInButtonLabel,
  SignInButtonLabelHighlight,
  ButtonContainer,
} from "./styles";

const AnimatedButtonContainer =
  Animated.createAnimatedComponent(ButtonContainer);

type FormDataProps = {
  email: string;
  password: string;
};

const signInSchema = yup.object({
  email: yup.string().required("Inform the email").email("Invalid email"),
  password: yup
    .string()
    .required("Inform the password")
    .min(6, "The password must be at least 6 characters"),
});

export function SignIn() {
  const { setLoggedUser } = useAuth();

  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signInSchema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastMode, setToastMode] = useState<ModeProps>();
  const [isToastVisible, setIsToastVisible] = useState(false);

  const auth = FIREBASE_AUTH;

  async function handleSignIn({ email, password }: FormDataProps) {
    try {
      setIsLoading(true);

      const authData = await signInWithEmailAndPassword(auth, email, password);

      await authCreate(authData);

      setLoggedUser(authData);
    } catch (error: any) {
      setIsToastVisible(true);
      setToastMessage(handleFirebaseSignInErrors(error.code));
      setToastMode("error");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (isToastVisible) {
      setTimeout(() => {
        setIsToastVisible(false);
        setToastMessage("");
      }, 3000);
    }
  }, [isToastVisible]);

  return (
    <>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Container>
            <View>
              <Header
                title="BrainTech"
                titleHighlight="Sing in"
                onGoBack={() => navigate("welcome")}
              />

              <Animated.View entering={FadeIn.delay(300).duration(600)}>
                <TitleAndSubtitle
                  title="Sign in"
                  subtitle="Join now and increase your tech knowledge!"
                />
              </Animated.View>

              <Animated.View entering={FadeIn.delay(600).duration(600)}>
                <Controller
                  control={control}
                  name="email"
                  render={({ field: { onChange, value } }) => (
                    <Input
                      value={value}
                      label="Email"
                      autoComplete="off"
                      autoCorrect={false}
                      autoCapitalize="none"
                      onChangeText={onChange}
                      keyboardType="email-address"
                      placeholder="Enter your email"
                      errorMessage={errors.email?.message}
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="password"
                  render={({ field: { onChange, value } }) => (
                    <Input
                      value={value}
                      label="Password"
                      secureTextEntry
                      autoComplete="off"
                      autoCorrect={false}
                      autoCapitalize="none"
                      onChangeText={onChange}
                      placeholder="Enter your password"
                      errorMessage={errors.password?.message}
                      onSubmitEditing={handleSubmit(handleSignIn)}
                    />
                  )}
                />
              </Animated.View>
            </View>

            <Animated.View entering={FadeIn.delay(900).duration(600)}>
              <AnimatedButtonContainer>
                <Button
                  title="Sign in"
                  onPress={handleSubmit(handleSignIn)}
                  isLoading={isLoading}
                />
              </AnimatedButtonContainer>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigate("nameOnboarding")}
              >
                <SignInButtonLabel>
                  Don't have an account yet?{" "}
                  <SignInButtonLabelHighlight>
                    Create now!
                  </SignInButtonLabelHighlight>
                </SignInButtonLabel>
              </TouchableOpacity>
            </Animated.View>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <Toast
        mode={toastMode}
        message={toastMessage}
        isVisible={isToastVisible}
      />
    </>
  );
}
