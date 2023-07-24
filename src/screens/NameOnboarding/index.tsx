import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeIn } from "react-native-reanimated";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";

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
            <Header title="Cadastro" titleHighlight="Nome" onGoBack={goBack} />

            <Animated.View entering={FadeIn.delay(300).duration(600)}>
              <Title>Bem-vindo ao BrainTech!</Title>

              <Subtitle>
                Vamos começar seu cadastro com o seu nome e sobrenome.
              </Subtitle>
            </Animated.View>

            <Animated.View entering={FadeIn.delay(600).duration(600)}>
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
            </Animated.View>
          </View>

          <View>
            <Animated.View
              style={{ height: 46, width: "100%" }}
              entering={FadeIn.delay(900).duration(600)}
            >
              <Button
                title="Continuar"
                onPress={handleSubmit(handleGoToEmailScreen)}
              />
            </Animated.View>
          </View>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
