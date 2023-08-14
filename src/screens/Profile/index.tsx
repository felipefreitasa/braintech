import { Alert, View } from "react-native";
import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import Animated, { FadeIn } from "react-native-reanimated";

import { authRemove } from "@storage/auth/authRemove";

import {
  getHistory,
  HistoryItemProps,
} from "@firebaseApp/methods";

import { useAuth } from "@hooks/useAuth";

import { CategoryTypeProps } from "../../@types/categoryTypeProps";

import { sumStringTimes } from "@utils/sumStringTimes";
import { findMostPresentCategory } from "@utils/findMostPresentCategory";
import { capitalizeCategoryLabel } from "@utils/capitalizeCategoryLabel";
import { findMostPresentTechnology } from "@utils/findMostPresentTechnology";

import { Toast } from "@components/Toast";
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
  UserInformationsContainer,
} from "./styles";

const AnimatedHeaderContainer =
  Animated.createAnimatedComponent(HeaderContainer);
const AnimatedStatisticsContainer =
  Animated.createAnimatedComponent(StatisticsContainer);

export function Profile() {

  const { loggedUser, setLoggedUser } = useAuth();

  const [timeSpent, setTimeSpent] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [toastMode, setToastMode] = useState<ModeProps>();
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isHistoryLoading, setIsHistoryLoading] = useState(false);
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
