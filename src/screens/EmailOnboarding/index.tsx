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

import { Title, Subtitle, Container } from "./styles";

type FormDataProps = {
  email: string;
};

const emailOnboardingSchema = yup.object({
  email: yup.string().required("Informe o e-mail").email("E-mail inválido"),
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
              title="Cadastro"
              titleHighlight="E-mail"
              onGoBack={() => handleExitOnboarding()}
            />

            <Animated.View entering={FadeIn.delay(300).duration(600)}>
              <Title>E-mail</Title>

              <Subtitle>
                Para uma experiência completa, insira seu e-mail no campo
                abaixo.
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
                    onSubmitEditing={handleSubmit(handleGoToPasswordScreen)}
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
                onPress={handleSubmit(handleGoToPasswordScreen)}
              />
            </Animated.View>
          </View>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
