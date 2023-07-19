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
  name: string;
  email: string;
  password: string;
  password_confirm: string;
};

const signUpSchema = yup.object({
  name: yup.string().required("Informe o nome"),
  email: yup.string().required("Informe o e-mail").email("E-mail inválido"),
  password: yup
    .string()
    .required("Informe a senha")
    .min(6, "A senha deve ter pelo menos 6 dígitos"),
  password_confirm: yup
    .string()
    .required("Confirme a senha")
    .oneOf([yup.ref("password"), ""], "A confirmação da senha não confere"),
});

export function SignUp() {
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  function handleSignUp({ name, email, password }: FormDataProps) {
    console.log("🚀 ~ name, email, password:", name, email, password);
  }

  return (
    <Container>
      <View>
        <Header onGoBack={() => navigate("welcome")} />
        <Animated.View entering={FadeInLeft}>
          <Title>Criar conta</Title>

          <Subtitle>
            Crie sua conta e comece a aprofundar o seu conhecimento tech!
          </Subtitle>
        </Animated.View>

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
          <Button title="Criar conta" onPress={handleSubmit(handleSignUp)} />
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigate("signIn")}
        >
          <SignInButtonLabel>
            Já possui conta?{" "}
            <SignInButtonLabelHighlight>
              Entre agora!
            </SignInButtonLabelHighlight>
          </SignInButtonLabel>
        </TouchableOpacity>
      </View>
    </Container>
  );
}
