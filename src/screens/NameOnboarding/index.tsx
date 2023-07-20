import * as yup from "yup";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, BackHandler, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useAuth } from "@hooks/useAuth";

import { AuthNavigatorRoutesProps } from "../../routes/auth.routes";

import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { Button } from "@components/Button";

import { Title, Subtitle, Container } from "./styles";

type FormDataProps = {
  name: string;
  lastName: string;
};

const nameOnboardingSchema = yup.object({
  name: yup.string().required("Informe o seu nome"),
  lastName: yup.string().required("Informe o seu sobrenome"),
});

export function NameOnboarding() {
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

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
          titleHighlight="Nome"
          onGoBack={() => handleExitOnboarding()}
        />

        <View>
          <Title>Bem-vindo ao BrainTech!</Title>

          <Subtitle>
            Vamos começar seu cadastro com o seu nome e sobrenome.
          </Subtitle>
        </View>

        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <Input
              label="Nome"
              value={value}
              autoComplete="off"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={onChange}
              placeholder="Digite o seu nome"
              errorMessage={errors.name?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="lastName"
          render={({ field: { onChange, value } }) => (
            <Input
              label="Sobrenome"
              value={value}
              autoComplete="off"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={onChange}
              placeholder="Digite o seu sobrenome"
              errorMessage={errors.lastName?.message}
            />
          )}
        />
      </View>

      <View>
        <View style={{ height: 46, width: "100%" }}>
          <Button
            title="Continuar"
            onPress={handleSubmit(handleGoToEmailScreen)}
          />
        </View>
      </View>
    </Container>
  );
}
