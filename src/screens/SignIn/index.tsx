import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeInLeft } from "react-native-reanimated";

import { AuthNavigatorRoutesProps } from "../../routes/auth.routes";

import { Input } from "@components/Input";
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
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signInSchema),
  });

  function handleSignIn({ email, password }: FormDataProps) {
    console.log("🚀 ~ email, password:", email, password);
  }

  return (
    <Container>
      <View>
        <Header onGoBack={() => navigate("welcome")} />

        <Animated.View entering={FadeInLeft}>
          <Title>Entrar</Title>

          <Subtitle>Entre agora e aumente o seu conhecimento tech!</Subtitle>
        </Animated.View>

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
      </View>

      <View>
        <View style={{ height: 46, width: "100%" }}>
          <Button title="Entrar" onPress={handleSubmit(handleSignIn)} />
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigate("signUp")}
        >
          <SignInButtonLabel>
            Ainda não possui conta?{" "}
            <SignInButtonLabelHighlight>Crie agora!</SignInButtonLabelHighlight>
          </SignInButtonLabel>
        </TouchableOpacity>
      </View>
    </Container>
  );
}
