import * as yup from "yup";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeIn } from "react-native-reanimated";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {
  View,
  Alert,
  ScrollView,
  BackHandler,
  KeyboardAvoidingView,
} from "react-native";

import { handleFirebaseSignUpErrors } from "@utils/handleFirebaseSignUpErrors";

import { FIREBASE_AUTH } from "../../firebaseApp/config";

import { useAuth } from "@hooks/useAuth";

import { authCreate } from "@storage/auth/authCreate";

import { AuthNavigatorRoutesProps } from "../../routes/auth.routes";

import { Input } from "@components/Input";
import { Toast } from "@components/Toast";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { ModeProps } from "@components/Toast/styles";
import { TitleAndSubtitle } from "@components/TitleAndSubtitle";

import { ButtonContainer, Container } from "./styles";

const AnimatedButtonContainer =
  Animated.createAnimatedComponent(ButtonContainer);

type FormDataProps = {
  password: string;
  password_confirm: string;
};

type SignUpProps = {
  name: string;
  email: string;
  password: string;
};

const passwordOnboardingSchema = yup.object({
  password: yup
    .string()
    .required("Inform the password")
    .min(6, "The password must have at least 6 digits"),
  password_confirm: yup
    .string()
    .required("Confirm the password")
    .oneOf([yup.ref("password"), ""], "Password confirmation does not match"),
});

export function PasswordOnboarding() {
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

  const { setOnboardingPassword, onboardingName, onboardingEmail, setLoggedUser } = useAuth();

  const auth = FIREBASE_AUTH;

  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastMode, setToastMode] = useState<ModeProps>();
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordConfirmationVisible, setIsPasswordConfirmationVisible] =
    useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(passwordOnboardingSchema),
  });

  async function handleGoToProfilePictureScreen({ password }: FormDataProps) {
    setOnboardingPassword(password);

    await handleSignUp({
      password,
      name: onboardingName,
      email: onboardingEmail,
    });
  }

  async function handleSignUp({ name, email, password }: SignUpProps) {
    try {
      setIsLoading(true);

      const authData = await createUserWithEmailAndPassword(auth, email, password);
      await updateUserName(name);

      await authCreate(authData);

      setLoggedUser(authData);

    } catch (error: any) {
      setIsToastVisible(true);
      setToastMessage(handleFirebaseSignUpErrors(error.code));
      setToastMode("error");
    } finally {
      setIsLoading(false);
    }
  }

  async function updateUserName(name: string) {
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
    }
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
    if (isToastVisible) {
      setTimeout(() => {
        setIsToastVisible(false);
        setToastMessage("");
      }, 3000);
    }
  }, [isToastVisible]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleExitOnboarding
    );
    return () => backHandler.remove();
  }, []);

  return (
    <>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Container>
            <View>
              <Header
                title="Register"
                titleHighlight="Password"
                onGoBack={() => handleExitOnboarding()}
              />

              <Animated.View entering={FadeIn.delay(300).duration(600)}>
                <TitleAndSubtitle
                  title="Password"
                  subtitle="Choose a secure password to protect your account."
                />
              </Animated.View>

              <Animated.View entering={FadeIn.delay(600).duration(600)}>
                <Controller
                  control={control}
                  name="password"
                  render={({ field: { onChange, value } }) => (
                    <Input
                      isPassword
                      value={value}
                      label="Password"
                      autoComplete="off"
                      autoCorrect={false}
                      autoCapitalize="none"
                      onChangeText={onChange}
                      handlePasswordVisibility={() =>
                        setIsPasswordVisible(isPasswordVisible ? false : true)
                      }
                      isPasswordVisible={isPasswordVisible}
                      secureTextEntry={!isPasswordVisible}
                      placeholder="Enter your password"
                      errorMessage={errors.password?.message}
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="password_confirm"
                  render={({ field: { onChange, value } }) => (
                    <Input
                      isPassword
                      value={value}
                      autoComplete="off"
                      autoCorrect={false}
                      autoCapitalize="none"
                      onChangeText={onChange}
                      label="Password confirmation"
                      placeholder="Enter the password confirmation"
                      secureTextEntry={!isPasswordConfirmationVisible}

                      handlePasswordVisibility={() =>
                        setIsPasswordConfirmationVisible(
                          isPasswordConfirmationVisible ? false : true
                        )
                      }
                      isPasswordVisible={isPasswordConfirmationVisible}
                      errorMessage={errors.password_confirm?.message}
                      onSubmitEditing={handleSubmit(
                        handleGoToProfilePictureScreen
                      )}
                    />
                  )}
                />
              </Animated.View>
            </View>

            <View>
              <AnimatedButtonContainer
                entering={FadeIn.delay(900).duration(600)}
              >
                <Button
                  title="Continue"
                  isLoading={isLoading}
                  onPress={handleSubmit(handleGoToProfilePictureScreen)}
                />
              </AnimatedButtonContainer>
            </View>
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
