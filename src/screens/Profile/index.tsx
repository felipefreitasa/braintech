import { Alert, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useCallback, useState } from "react";
import { UserCredential } from "firebase/auth";
import * as ImagePicker from "expo-image-picker";
import { useTheme } from "styled-components/native";
import { useFocusEffect } from "@react-navigation/native";
import Animated, { FadeIn } from "react-native-reanimated";

import { authRemove } from "@storage/auth/authRemove";
import { authCreate } from "@storage/auth/authCreate";

import {
  getHistory,
  HistoryItemProps,
  updateUserProfilePicture,
} from "@firebaseApp/methods";

import { useAuth } from "@hooks/useAuth";

import { CategoryTypeProps } from "../../@types/categoryTypeProps";

import { sumStringTimes } from "@utils/sumStringTimes";
import { findMostPresentCategory } from "@utils/findMostPresentCategory";
import { capitalizeCategoryLabel } from "@utils/capitalizeCategoryLabel";
import { findMostPresentTechnology } from "@utils/findMostPresentTechnology";

import { Toast } from "@components/Toast";
import { Skeleton } from "@components/Skeleton";
import { UserPhoto } from "@components/UserPhoto";
import { AppVersion } from "@components/AppVersion";
import { IconButton } from "@components/IconButton";
import { ModeProps } from "@components/Toast/styles";
import { StatisticCard } from "@components/StatisticCard";

import {
  UserName,
  UserEmail,
  Container,
  LeftContainer,
  StatisticsTitle,
  HeaderContainer,
  StatisticsContainer,
  ProfileIconContainer,
  UserInformationsContainer,
  ChoosePictureButtonContainer,
} from "./styles";

const AnimatedHeaderContainer =
  Animated.createAnimatedComponent(HeaderContainer);
const AnimatedStatisticsContainer =
  Animated.createAnimatedComponent(StatisticsContainer);

export function Profile() {
  const { COLORS } = useTheme();

  const { loggedUser, setLoggedUser } = useAuth();

  const [timeSpent, setTimeSpent] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [toastMode, setToastMode] = useState<ModeProps>();
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isHistoryLoading, setIsHistoryLoading] = useState(false);
  const [isPictureLoading, setIsPictureLoading] = useState(false);
  const [historyData, setHistoryData] = useState<HistoryItemProps[]>();
  const [mostPresenstTechnology, setMostPresenstTechnology] = useState("");
  const [mostPresentCategory, setMostPresentCategory] =
    useState<CategoryTypeProps>();

  async function fetchHistory() {
    try {
      setIsHistoryLoading(true);

      if (loggedUser) {
        const data = await getHistory(loggedUser?.user.uid);

        setMostPresentCategory(
          findMostPresentCategory(data) as CategoryTypeProps
        );
        setMostPresenstTechnology(findMostPresentTechnology(data));

        if (data) {
          const allTimeSpentArray = data.map((item) => item.timeSpent);
          setTimeSpent(sumStringTimes(allTimeSpentArray as string[]));
        }

        setHistoryData(data);
      }
    } catch (error) {
      setIsToastVisible(true);
      setToastMessage(
        "There was an error loading some of your profile information"
      );
      setToastMode("error");
    } finally {
      setIsHistoryLoading(false);
    }
  }

  async function handleLogout() {
    Alert.alert("Logout", "Do you really want to exit the application?", [
      {
        text: "Yes",
        onPress: logOut,
        style: "destructive",
      },
      {
        text: "No",
      },
    ]);
  }

  async function logOut() {
    await authRemove();
    setLoggedUser(undefined);
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
          name: `${loggedUser?.user.displayName}.${fileExtension}`.toLocaleLowerCase(),
          uri: photoSelected.assets[0].uri,
          type: `${photoSelected.assets[0].type}/${fileExtension}`,
        } as any;

        await updateUserProfilePicture(photoFile.uri);

        const updatedUserProfile = {
          ...loggedUser,
          user: {
            ...loggedUser?.user,
            photoURL: photoFile.uri,
          },
        };

        setLoggedUser(updatedUserProfile as UserCredential);

        await authCreate(updatedUserProfile as UserCredential);
      }
    } catch (error) {
      setIsToastVisible(true);
      setToastMessage("There was an error uploading your photo");
      setToastMode("error");
    } finally {
      setIsPictureLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchHistory();
    }, [])
  );

  useFocusEffect(
    useCallback(() => {
      if (isToastVisible) {
        setTimeout(() => {
          setIsToastVisible(false);
          setToastMessage("");
        }, 3000);
      }
    }, [isToastVisible])
  );

  return (
    <>
      <Container>
        <View>
          <AnimatedHeaderContainer entering={FadeIn}>
            <LeftContainer>
              {isPictureLoading ? (
                <Skeleton width={60} height={60} borderRadius={60} />
              ) : (
                <>
                  {loggedUser?.user.photoURL ? (
                    <View>
                      <UserPhoto
                        size={60}
                        source={{ uri: loggedUser?.user.photoURL }}
                      />

                      <ChoosePictureButtonContainer
                        onPress={handleUserPhotoSelect}
                      >
                        <Feather name="edit-2" size={12} color={COLORS.WHITE} />
                      </ChoosePictureButtonContainer>
                    </View>
                  ) : (
                    <View>
                      <ProfileIconContainer>
                        <Feather name="user" size={40} color={COLORS.PRIMARY} />
                      </ProfileIconContainer>

                      <ChoosePictureButtonContainer
                        onPress={handleUserPhotoSelect}
                      >
                        <Feather name="edit-2" size={12} color={COLORS.WHITE} />
                      </ChoosePictureButtonContainer>
                    </View>
                  )}
                </>
              )}
              <UserInformationsContainer>
                <UserName numberOfLines={1}>
                  {loggedUser?.user.displayName}
                </UserName>

                <UserEmail numberOfLines={1}>
                  {loggedUser?.user.email}
                </UserEmail>
              </UserInformationsContainer>
            </LeftContainer>

            <IconButton
              mode="error"
              iconSize={24}
              icon="log-out"
              onPress={handleLogout}
            />
          </AnimatedHeaderContainer>

          <AnimatedStatisticsContainer
            entering={FadeIn.duration(600).delay(250)}
          >
            <StatisticsTitle>Stats</StatisticsTitle>

            <StatisticCard
              icon="terminal"
              isLoading={isHistoryLoading}
              title="Favorite category"
              subtitle={capitalizeCategoryLabel(mostPresentCategory) || "-"}
            />

            <StatisticCard
              icon="code"
              isLoading={isHistoryLoading}
              title="Favorite technology"
              subtitle={mostPresenstTechnology || "-"}
            />

            <StatisticCard
              icon="git-branch"
              isLoading={isHistoryLoading}
              title="Answered exercises"
              subtitle={historyData?.length}
            />

            <StatisticCard
              icon="clock"
              title="Time played"
              isLoading={isHistoryLoading}
              subtitle={timeSpent}
            />
          </AnimatedStatisticsContainer>
        </View>

        <Animated.View entering={FadeIn.duration(600).delay(500)}>
          <AppVersion />
        </Animated.View>
      </Container>

      <Toast
        mode={toastMode}
        message={toastMessage}
        isVisible={isToastVisible}
      />
    </>
  );
}
