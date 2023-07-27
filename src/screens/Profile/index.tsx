import { Feather } from "@expo/vector-icons";
import { useCallback, useState } from "react";
import { useTheme } from "styled-components/native";
import { useFocusEffect } from "@react-navigation/native";
import Animated, { FadeIn } from "react-native-reanimated";

import { authRemove } from "@storage/auth/authRemove";

import { getHistory, HistoryItemProps } from "@firebaseApp/methods";

import { useAuth } from "@hooks/useAuth";

import { CategoryTypeProps } from "../../@types/categoryTypeProps";

import { findMostPresentTechnology } from "@utils/findMostPresentTechnology";

import { Toast } from "@components/Toast";
import { UserPhoto } from "@components/UserPhoto";
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
} from "./styles";
import { findMostPresentCategory } from "@utils/findMostPresentCategory";
import { capitalizeCategoryLabel } from "@utils/capitalizeCategoryLabel";

const AnimatedHeaderContainer =
  Animated.createAnimatedComponent(HeaderContainer);
const AnimatedStatisticsContainer =
  Animated.createAnimatedComponent(StatisticsContainer);

export function Profile() {
  const { COLORS } = useTheme();

  const { loggedUser, setLoggedUser } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastMode, setToastMode] = useState<ModeProps>();
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [historyData, setHistoryData] = useState<HistoryItemProps[]>();
  const [mostPresenstTechnology, setMostPresenstTechnology] = useState("");
  const [mostPresentCategory, setMostPresentCategory] =
    useState<CategoryTypeProps>();

  async function fetchHistory() {
    try {
      setIsLoading(true);

      if (loggedUser) {
        const data = await getHistory(loggedUser?.user.uid);

        setMostPresentCategory(
          findMostPresentCategory(data) as CategoryTypeProps
        );
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
            mode="error"
            iconSize={24}
            icon="log-out"
            onPress={logOut}
          />
        </AnimatedHeaderContainer>

        <AnimatedStatisticsContainer entering={FadeIn.duration(600).delay(250)}>
          <StatisticsTitle>Estatísticas</StatisticsTitle>

          <StatisticCard
            icon="terminal"
            isLoading={isLoading}
            title="Categoria favorita"
            subtitle={capitalizeCategoryLabel(mostPresentCategory) || "-"}
          />

          <StatisticCard
            icon="code"
            isLoading={isLoading}
            title="Tecnologia favorita"
            subtitle={mostPresenstTechnology || "-"}
          />

          <StatisticCard
            icon="git-branch"
            isLoading={isLoading}
            title="Exercícios respondidos"
            subtitle={historyData?.length}
          />

          <StatisticCard
            icon="clock"
            isLoading={isLoading}
            title="Tempo jogado"
            subtitle="TEMPO JOGADO"
          />
        </AnimatedStatisticsContainer>
      </Container>

      <Toast
        mode={toastMode}
        message={toastMessage}
        isVisible={isToastVisible}
      />
    </>
  );
}
