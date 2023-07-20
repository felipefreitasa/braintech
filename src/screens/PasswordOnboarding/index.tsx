import * as yup from "yup";
import { useEffect } from "react";
import { Alert, BackHandler, View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";

import { useAuth } from "@hooks/useAuth";

import { AuthNavigatorRoutesProps } from "../../routes/auth.routes";

import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { Button } from "@components/Button";

import { Title, Subtitle, Container } from "./styles";

type FormDataProps = {
  password: string;
  password_confirm: string;
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

  const { setOnboardingPassword } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(passwordOnboardingSchema),
  });

  function handleGoToProfilePictureScreen({ password }: FormDataProps) {
    setOnboardingPassword(password);
    navigate("profilePictureOnboarding");
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
    <Container>
      <View>
        <Header
          title="Cadastro"
          titleHighlight="Senha"
          onGoBack={() => handleExitOnboarding()}
        />

        <View>
          <Title>Senha</Title>

          <Subtitle>Escolha uma senha segura para proteger sua conta.</Subtitle>
        </View>

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
      </View>

      <View>
        <View style={{ height: 46, width: "100%" }}>
          <Button
            title="Continuar"
            onPress={handleSubmit(handleGoToProfilePictureScreen)}
          />
        </View>
      </View>
    </Container>
  );
}
