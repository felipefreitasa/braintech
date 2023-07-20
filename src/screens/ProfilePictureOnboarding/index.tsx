import { useEffect } from "react";
import { Alert, BackHandler, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AuthNavigatorRoutesProps } from "../../routes/auth.routes";

import { Header } from "@components/Header";
import { Button } from "@components/Button";

import { Title, Subtitle, Container } from "./styles";

export function ProfilePictureOnboarding() {
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

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
          titleHighlight="Foto"
          onGoBack={() => handleExitOnboarding()}
        />

        <View>
          <Title>Foto de perfil</Title>

          <Subtitle>
            Personalize o seu perfil! Faça o upload de uma foto que represente
            você.
          </Subtitle>
        </View>
      </View>

      <View>
        <View style={{ height: 46, width: "100%" }}>
          <Button
            title="Finalizar cadastro"
            onPress={() => {}}
          />
        </View>
      </View>
    </Container>
  );
}
