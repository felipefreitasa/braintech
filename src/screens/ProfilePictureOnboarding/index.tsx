import { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useTheme } from "styled-components/native";
import { Alert, BackHandler, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeIn } from "react-native-reanimated";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";

import { FIREBASE_AUTH } from "../../firebaseApp/config";

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
  SignInButtonContainer,
  ChoosePictureButtonContainer,
} from "./styles";

const AnimatedSignInButtonContainer = Animated.createAnimatedComponent(SignInButtonContainer)

export function ProfilePictureOnboarding() {
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

  const { COLORS } = useTheme();

  const { onboardingName, setLoggedUser, onboardingEmail, onboardingPassword } =
    useAuth();

  const [userPhoto, setUserPhoto] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [toastMode, setToastMode] = useState<ModeProps>();
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isSignInLoading, setIsSignInLoading] = useState(false);
  const [isPictureLoading, setIsPictureLoading] = useState(false);

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
      setIsPictureLoading(true);

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
      setIsPictureLoading(false);
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
      setIsSignInLoading(true);

      const authData = await signInWithEmailAndPassword(
        auth,
        onboardingEmail,
        onboardingPassword
      );

      await authCreate(authData);

      setLoggedUser(authData);
    } catch (error: any) {
      setIsToastVisible(true);
      setToastMessage(handleFirebaseSignInErrors(error.code));
      setToastMode("error");
    } finally {
      setIsSignInLoading(false);
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
              <View>
                <UserPhoto source={{ uri: userPhoto }} size={180} />

                <ChoosePictureButtonContainer onPress={handleUserPhotoSelect}>
                  <Feather name="edit-2" size={20} color={COLORS.WHITE} />
                </ChoosePictureButtonContainer>
              </View>
            ) : (
              <View>
                <ProfileIconContainer>
                  <Feather name="user" size={110} color={COLORS.PRIMARY} />
                </ProfileIconContainer>

                <ChoosePictureButtonContainer onPress={handleUserPhotoSelect}>
                  <Feather name="edit-2" size={20} color={COLORS.WHITE} />
                </ChoosePictureButtonContainer>
              </View>
            )}
          </View>
        </Animated.View>

        <View>
          <AnimatedSignInButtonContainer
            entering={FadeIn.delay(900).duration(600)}
          >
            <Button
              onPress={handleSignIn}
              title="Finalizar cadastro"
              disabled={isPictureLoading}
              isLoading={isSignInLoading}
            />
          </AnimatedSignInButtonContainer>
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
