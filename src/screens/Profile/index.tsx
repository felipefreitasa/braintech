import { Switch, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useCallback, useState } from "react";
import { useTheme } from "styled-components/native";
import { useFocusEffect } from "@react-navigation/native";
import Animated, { FadeInLeft } from "react-native-reanimated";

import { historyGetAll } from "@storage/history/historyGetAll";
import { HistoryItemProps } from "@storage/history/historyCreate";
import { soundEffectsCreate } from "@storage/soundEffects/soundEffectsCreate";

import { useAuth } from "@hooks/useAuth";
import { useSettings } from "@hooks/useSettings";

import { findMostPresentTechnology } from "@utils/findMostPresentTechnology";

import { UserPhoto } from "@components/UserPhoto";
import { IconButton } from "@components/IconButton";
import { SettingsItem } from "@components/SettingsItem";
import { StatisticCard } from "@components/StatisticCard";

import {
  Container,
  HeaderContainer,
  UserEmail,
  UserInformationsContainer,
  UserName,
  LeftContainer,
  StatisticsTitle,
  StatisticsContainer,
  ProfileIconContainer,
} from "./styles";

const AnimatedHeaderContainer =
  Animated.createAnimatedComponent(HeaderContainer);
const AnimatedStatisticsContainer =
  Animated.createAnimatedComponent(StatisticsContainer);

export function Profile() {
  const { COLORS } = useTheme();

  const { loggedUser } = useAuth();

  const {
    setIsSoundEffectsEnabled,
    isSoundEffectsEnabled,
    isSoundEffectsLoading,
  } = useSettings();

  const [isLoading, setIsLoading] = useState(false);
  const [historyData, setHistoryData] = useState<HistoryItemProps[]>();
  const [mostPresenstTechnology, setMostPresenstTechnology] = useState("");

  async function fetchHistory() {
    try {
      setIsLoading(true);

      const data = await historyGetAll();

      setMostPresenstTechnology(findMostPresentTechnology(data));

      setHistoryData(data);
    } catch (error) {
      Alert.alert("Histórico", "Não foi possível carregar o seu histórico");
    } finally {
      setIsLoading(false);
    }
  }

  async function toggleSoundAsyncStorage() {
    try {
      setIsSoundEffectsEnabled((previousState) => !previousState);

      await soundEffectsCreate();
    } catch (error) {
      Alert.alert(
        "Efeitos sonoros",
        "Não foi possível alterar as configurações de efeitos sonoros!"
      );
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchHistory();
    }, [])
  );

  return (
    <Container>
      <AnimatedHeaderContainer entering={FadeInLeft}>
        <LeftContainer>
          {loggedUser?.user.photoURL ? (
            <UserPhoto size={60} source={{ uri: loggedUser?.user.photoURL }} />
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

        <IconButton icon="edit-2" iconSize={24} />
      </AnimatedHeaderContainer>

      <AnimatedStatisticsContainer entering={FadeInLeft.delay(250)}>
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

      <Animated.View style={{ width: "100%" }} entering={FadeInLeft.delay(500)}>
        <StatisticsTitle>Configurações</StatisticsTitle>

        <SettingsItem
          icon="volume-2"
          title="Efeitos sonoros"
          rightAction={
            <Switch
              value={isSoundEffectsEnabled}
              disabled={isSoundEffectsLoading}
              onValueChange={toggleSoundAsyncStorage}
              thumbColor={isSoundEffectsEnabled ? COLORS.PRIMARY : COLORS.WHITE}
              trackColor={{ false: COLORS.GRAY, true: COLORS.PRIMARY_30 }}
            />
          }
        />
      </Animated.View>
    </Container>
  );
}
