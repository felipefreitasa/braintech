import { SectionList } from "react-native";
import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import Animated, { FadeIn } from "react-native-reanimated";

import { getHistory, HistoryItemProps } from "@firebaseApp/methods";

import { useAuth } from "@hooks/useAuth";

import { groupItemsByDate } from "@utils/groupItemsByDate";

import { Toast } from "@components/Toast";
import { HistoryLoading } from "./HistoryLoading";
import { HistoryItem } from "@components/HistoryItem";
import { ModeProps } from "@components/Toast/styles";
import { ListFeedbackStatus } from "@components/ListFeedbackStatus";

import {
  Data,
  Title,
  Subtitle,
  Container,
  ItemSeparator,
  SectionHeader,
  SectionSeparator,
  SectionHeaderSeparator,
} from "./styles";

export function History() {
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastMode, setToastMode] = useState<ModeProps>();
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [historyData, setHistoryData] = useState<HistoryItemProps[]>();

  const { loggedUser } = useAuth();

  async function fetchHistory() {
    try {
      setIsLoading(true);

      if (loggedUser) {
        const data = await getHistory(loggedUser?.user.uid);
        setHistoryData(data);
      }
    } catch (error) {
      setIsToastVisible(true);
      setToastMessage("Unable to load your history");
      setToastMode("error");
    } finally {
      setIsLoading(false);
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
        <Animated.View entering={FadeIn}>
          <Title>Exercise history</Title>

          <Subtitle>
            Review your past quizzes and track your performance in the app
          </Subtitle>
        </Animated.View>

        {isLoading ? (
          <HistoryLoading />
        ) : (
          <Animated.View entering={FadeIn}>
            <SectionList
              sections={groupItemsByDate(historyData)}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <HistoryItem
                  category={item.category}
                  technology={item.technology}
                  subCategory={item.subCategory}
                  correctAnswers={item.correctAnswers}
                  totalQuestions={item.totalQuestions}
                />
              )}
              renderSectionHeader={({ section: { title } }) => (
                <SectionHeader>
                  <SectionHeaderSeparator />
                  <Data>{title}</Data>
                </SectionHeader>
              )}
              ListEmptyComponent={() => (
                <ListFeedbackStatus
                  icon="coffee"
                  mode="default"
                  title="No quiz answered"
                  subtitle="Choose a technology and start digging right now!"
                />
              )}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={[
                { paddingBottom: 180 },
                groupItemsByDate(historyData).length < 1 && {
                  width: "100%",
                  height: "100%",
                },
              ]}
              ItemSeparatorComponent={() => <ItemSeparator />}
              SectionSeparatorComponent={() => <SectionSeparator />}
            />
          </Animated.View>
        )}
      </Container>

      <Toast
        mode={toastMode}
        message={toastMessage}
        isVisible={isToastVisible}
      />
    </>
  );
}
