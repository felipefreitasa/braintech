import { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useTheme } from "styled-components/native";
import { Alert, BackHandler, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeIn } from "react-native-reanimated";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";

import { FIREBASE_AUTH } from "../../../firebaseConfig";

import { useAuth } from "@hooks/useAuth";

import { authCreate } from "@storage/auth/authCreate";

import { handleFirebaseSignInErrors } from "@utils/handleFirebaseSignInErrors";

import { AuthNavigatorRoutesProps } from "../../routes/auth.routes";

import { Toast } from "@components/Toast";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { UserPhoto } from "@components/UserPhoto";
import { ModeProps } from "@components/Toast/styles";

import {
  Title,
  Subtitle,
  Container,
  ProfileIconContainer,
  ChoosePictureButtonLabel,
  ChoosePictureButtonContainer,
} from "./styles";

export function ProfilePictureOnboarding() {
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

  const { COLORS } = useTheme();

  const { onboardingName, setLoggedUser, onboardingEmail, onboardingPassword } =
    useAuth();

  const [userPhoto, setUserPhoto] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastMode, setToastMode] = useState<ModeProps>();
  const [isToastVisible, setIsToastVisible] = useState(false);

  const auth = FIREBASE_AUTH;

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

  async function handleUserPhotoSelect() {
    try {
      setIsLoading(true);

      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });

      if (photoSelected.canceled) {
        return;
      }

      if (photoSelected.assets[0].uri) {
        const fileExtension = photoSelected.assets[0].uri.split(".").pop();

        const photoFile = {
          name: `${onboardingName}.${fileExtension}`.toLocaleLowerCase(),
          uri: photoSelected.assets[0].uri,
          type: `${photoSelected.assets[0].type}/${fileExtension}`,
        } as any;

        setUserPhoto(photoFile.uri);

        await updateUserProfilePicture(photoFile.uri);
      }
    } catch (error) {
      setIsToastVisible(true);
      setToastMessage("Houve um erro para carregar a sua foto");
      setToastMode("error");
    } finally {
      setIsLoading(false);
    }
  }

  async function updateUserProfilePicture(photoUri: string) {
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, {
        photoURL: photoUri,
      });
    }
  }

  async function handleSignIn() {
    try {
      setIsLoading(true);

      const authData = await signInWithEmailAndPassword(
        auth,
        onboardingEmail,
        onboardingPassword
      );

      await authCreate(authData)

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
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleExitOnboarding
    );
    return () => backHandler.remove();
  }, []);

  return (
    <>
      <Container>
        <View>
          <Header
            title="Cadastro"
            titleHighlight="Foto"
            onGoBack={() => handleExitOnboarding()}
          />

          <Animated.View entering={FadeIn.delay(300).duration(600)}>
            <Title>Foto de perfil</Title>

            <Subtitle>
              Personalize o seu perfil! Faça o upload de uma foto que represente
              você.
            </Subtitle>
          </Animated.View>
        </View>

        <Animated.View entering={FadeIn.delay(600).duration(600)}>
          <View style={{ alignItems: "center" }}>
            {userPhoto ? (
              <UserPhoto source={{ uri: userPhoto }} size={180} />
            ) : (
              <ProfileIconContainer>
                <Feather name="user" size={124} color={COLORS.PRIMARY} />
              </ProfileIconContainer>
            )}

            <ChoosePictureButtonContainer onPress={handleUserPhotoSelect}>
              <Feather name="camera" size={18} color={COLORS.PRIMARY} />

              <ChoosePictureButtonLabel>{`Escolher ${
                userPhoto ? "outra" : ""
              } foto`}</ChoosePictureButtonLabel>
            </ChoosePictureButtonContainer>
          </View>
        </Animated.View>

        <View>
          <Animated.View
            style={{ height: 46, width: "100%" }}
            entering={FadeIn.delay(900).duration(600)}
          >
            <Button
              disabled={isLoading}
              isLoading={isLoading}
              onPress={handleSignIn}
              title="Finalizar cadastro"
            />
          </Animated.View>
        </View>
      </Container>

      <Toast
        mode={toastMode}
        message={toastMessage}
        isVisible={isToastVisible}
      />
    </>
  );
}
