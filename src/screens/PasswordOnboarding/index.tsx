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

import { FIREBASE_AUTH } from "../../../firebaseConfig";

import { useAuth } from "@hooks/useAuth";

import { AuthNavigatorRoutesProps } from "../../routes/auth.routes";

import { Input } from "@components/Input";
import { Toast } from "@components/Toast";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { ModeProps } from "@components/Toast/styles";

import { Title, Subtitle, Container } from "./styles";

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
    .required("Informe a senha")
    .min(6, "A senha deve ter pelo menos 6 dígitos"),
  password_confirm: yup
    .string()
    .required("Confirme a senha")
    .oneOf([yup.ref("password"), ""], "A confirmação da senha não confere"),
});

export function PasswordOnboarding() {
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

  const { setOnboardingPassword, onboardingName, onboardingEmail } = useAuth();

  const auth = FIREBASE_AUTH;

  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastMode, setToastMode] = useState<ModeProps>();
  const [isToastVisible, setIsToastVisible] = useState(false);

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
      name: onboardingName,
      email: onboardingEmail,
      password,
    });
  }

  async function handleSignUp({ name, email, password }: SignUpProps) {
    try {
      setIsLoading(true);

      await createUserWithEmailAndPassword(auth, email, password);
      await updateUserName(name);

      navigate("profilePictureOnboarding");
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
      "Tem certeza que deseja sair do cadastro?",
      "Se você sair, perderá o progresso realizado.",
      [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim",
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
                title="Cadastro"
                titleHighlight="Senha"
                onGoBack={() => handleExitOnboarding()}
              />

              <Animated.View entering={FadeIn.delay(300).duration(600)}>
                <Title>Senha</Title>

                <Subtitle>
                  Escolha uma senha segura para proteger sua conta.
                </Subtitle>
              </Animated.View>

              <Animated.View entering={FadeIn.delay(600).duration(600)}>
                <Controller
                  control={control}
                  name="password"
                  render={({ field: { onChange, value } }) => (
                    <Input
                      value={value}
                      label="Senha"
                      secureTextEntry
                      autoComplete="off"
                      autoCorrect={false}
                      autoCapitalize="none"
                      onChangeText={onChange}
                      placeholder="Digite a sua senha"
                      errorMessage={errors.password?.message}
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="password_confirm"
                  render={({ field: { onChange, value } }) => (
                    <Input
                      value={value}
                      label="Confirmação da senha"
                      secureTextEntry
                      autoComplete="off"
                      autoCorrect={false}
                      autoCapitalize="none"
                      onChangeText={onChange}
                      placeholder="Digite a confirmação da senha"
                      errorMessage={errors.password_confirm?.message}
                    />
                  )}
                />
              </Animated.View>
            </View>

            <View>
              <Animated.View
                style={{ height: 46, width: "100%" }}
                entering={FadeIn.delay(900).duration(600)}
              >
                <Button
                  title="Continuar"
                  isLoading={isLoading}
                  onPress={handleSubmit(handleGoToProfilePictureScreen)}
                />
              </Animated.View>
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
