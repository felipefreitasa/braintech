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

import { ModeProps } from "@components/Toast/styles";

import { authCreate } from "@storage/auth/authCreate";

import { handleFirebaseSignInErrors } from "@utils/handleFirebaseSignInErrors";

import { FIREBASE_AUTH } from "../../../firebaseConfig";

import { AuthNavigatorRoutesProps } from "../../routes/auth.routes";

import { Input } from "@components/Input";
import { Toast } from "@components/Toast";
import { Header } from "@components/Header";
import { Button } from "@components/Button";

import {
  Title,
  Subtitle,
  Container,
  SignInButtonLabel,
  SignInButtonLabelHighlight,
} from "./styles";

type FormDataProps = {
  email: string;
  password: string;
};

const signInSchema = yup.object({
  email: yup.string().required("Informe o e-mail").email("E-mail inválido"),
  password: yup
    .string()
    .required("Informe a senha")
    .min(6, "A senha deve ter pelo menos 6 dígitos"),
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
                titleHighlight="Entrar"
                onGoBack={() => navigate("welcome")}
              />

              <Animated.View entering={FadeIn.delay(300).duration(600)}>
                <Title>Entrar</Title>

                <Subtitle>
                  Entre agora e aumente o seu conhecimento tech!
                </Subtitle>
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
                      placeholder="Digite o seu e-mail"
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
              </Animated.View>
            </View>

            <Animated.View entering={FadeIn.delay(900).duration(600)}>
              <View style={{ height: 46, width: "100%" }}>
                <Button
                  title="Entrar"
                  onPress={handleSubmit(handleSignIn)}
                  isLoading={isLoading}
                />
              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigate("nameOnboarding")}
              >
                <SignInButtonLabel>
                  Ainda não possui conta?{" "}
                  <SignInButtonLabelHighlight>
                    Crie agora!
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
