import { Switch } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useCallback, useState } from "react";
import { useTheme } from "styled-components/native";
import { useFocusEffect } from "@react-navigation/native";
import Animated, { FadeIn } from "react-native-reanimated";

import { authRemove } from "@storage/auth/authRemove";
import { soundEffectsCreate } from "@storage/soundEffects/soundEffectsCreate";

import { getHistory, HistoryItemProps } from "../../../firebaseConfig";

import { useAuth } from "@hooks/useAuth";
import { useSettings } from "@hooks/useSettings";

import { findMostPresentTechnology } from "@utils/findMostPresentTechnology";

import { Toast } from "@components/Toast";
import { UserPhoto } from "@components/UserPhoto";
import { IconButton } from "@components/IconButton";
import { ModeProps } from "@components/Toast/styles";
import { SettingsItem } from "@components/SettingsItem";
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
} from "./styles";

const AnimatedHeaderContainer =
  Animated.createAnimatedComponent(HeaderContainer);
const AnimatedStatisticsContainer =
  Animated.createAnimatedComponent(StatisticsContainer);

export function Profile() {
  const { COLORS } = useTheme();

  const { loggedUser, setLoggedUser } = useAuth();

  const {
    setIsSoundEffectsEnabled,
    isSoundEffectsEnabled,
    isSoundEffectsLoading,
  } = useSettings();

  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastMode, setToastMode] = useState<ModeProps>();
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [historyData, setHistoryData] = useState<HistoryItemProps[]>();
  const [mostPresenstTechnology, setMostPresenstTechnology] = useState("");

  async function fetchHistory() {
    try {
      setIsLoading(true);

      if (loggedUser) {
        const data = await getHistory(loggedUser?.user.uid);
        setMostPresenstTechnology(findMostPresentTechnology(data));
        setHistoryData(data);
      }
    } catch (error) {
      setIsToastVisible(true);
      setToastMessage(
        "Houve um erro ao carregar algumas informações do seu perfil"
      );
      setToastMode("error");
    } finally {
      setIsLoading(false);
    }
  }

  async function toggleSoundAsyncStorage() {
    try {
      setIsSoundEffectsEnabled((previousState) => !previousState);

      await soundEffectsCreate();
    } catch (error) {
      setIsToastVisible(true);
      setToastMessage(
        "Houve um erro ao carregar as suas configurações de efeitos sonoros"
      );
      setToastMode("error");
    }
  }

  async function logOut() {
    await authRemove();
    setLoggedUser(undefined);
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
        <AnimatedHeaderContainer entering={FadeIn}>
          <LeftContainer>
            {loggedUser?.user.photoURL ? (
              <UserPhoto
                size={60}
                source={{ uri: loggedUser?.user.photoURL }}
              />
            ) : (
              <ProfileIconContainer>
                <Feather name="user" size={40} color={COLORS.PRIMARY} />
              </ProfileIconContainer>
            )}

            <UserInformationsContainer>
              <UserName numberOfLines={1}>
                {loggedUser?.user.displayName}
              </UserName>

              <UserEmail numberOfLines={1}>{loggedUser?.user.email}</UserEmail>
            </UserInformationsContainer>
          </LeftContainer>

          <IconButton
            icon="log-out"
            iconSize={24}
            mode="error"
            onPress={logOut}
          />
        </AnimatedHeaderContainer>

        <AnimatedStatisticsContainer entering={FadeIn.duration(600).delay(250)}>
          <StatisticsTitle>Estatísticas</StatisticsTitle>

          <StatisticCard
            icon="code"
            isLoading={isLoading}
            subtitle={mostPresenstTechnology || "-"}
            title="Tecnologia favorita"
          />

          <StatisticCard
            icon="git-branch"
            isLoading={isLoading}
            title="Exercícios respondidos"
            subtitle={historyData?.length}
          />
        </AnimatedStatisticsContainer>

        <Animated.View
          style={{ width: "100%" }}
          entering={FadeIn.duration(600).delay(500)}
        >
          <StatisticsTitle>Configurações</StatisticsTitle>

          <SettingsItem
            icon="volume-2"
            title="Efeitos sonoros"
            rightAction={
              <Switch
                value={isSoundEffectsEnabled}
                disabled={isSoundEffectsLoading}
                onValueChange={toggleSoundAsyncStorage}
                thumbColor={
                  isSoundEffectsEnabled ? COLORS.PRIMARY : COLORS.WHITE
                }
                trackColor={{ false: COLORS.GRAY, true: COLORS.PRIMARY_30 }}
              />
            }
          />
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
