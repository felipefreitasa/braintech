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

export function SignIn() {
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

  return (
    <Container>
      <View>
        <Header onGoBack={() => navigate("welcome")} />

        <Animated.View entering={FadeInLeft}>
          <Title>Entrar</Title>

          <Subtitle>Entre agora e aumente o seu conhecimento tech!</Subtitle>
        </Animated.View>

        <Input
          label="E-mail"
          autoComplete="off"
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Digite o seu e-mail"
          style={{ marginBottom: 24 }}
        />

        <Input
          label="Senha"
          secureTextEntry
          autoComplete="off"
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Digite a sua senha"
          style={{ marginBottom: 24 }}
        />
      </View>

      <View>
        <View style={{ height: 46, width: "100%" }}>
          <Button title="Entrar" onPress={() => {}} />
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigate("signUp")}
        >
          <SignInButtonLabel>
            Ainda não possui conta?{" "}

            <SignInButtonLabelHighlight>
              Crie agora!
            </SignInButtonLabelHighlight>
          </SignInButtonLabel>
        </TouchableOpacity>
      </View>
    </Container>
  );
}
