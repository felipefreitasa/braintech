import { SectionList } from "react-native";
import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import Animated, { FadeIn } from "react-native-reanimated";

import { historyGetAll } from "@storage/history/historyGetAll";
import { HistoryItemProps } from "@storage/history/historyCreate";

import { groupItemsByDate } from "@utils/groupItemsByDate";

import { Toast } from "@components/Toast";
import { Loading } from "@components/Loading";
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

  async function fetchHistory() {
    try {
      setIsLoading(true);

      const data = await historyGetAll();

      setHistoryData(data);
    } catch (error) {
      setIsToastVisible(true);
      setToastMessage("Não foi possível carregar o seu histórico");
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
          <Title>Histórico de exercícios</Title>

          <Subtitle>
            Reveja seus exercícios anteriores e acompanhe seu desempenho no app
          </Subtitle>
        </Animated.View>

        {isLoading ? (
          <Loading />
        ) : (
          <Animated.View entering={FadeIn.duration(600).delay(250)}>
            <SectionList
              sections={groupItemsByDate(historyData)}
              keyExtractor={(item) => item.id.toString()}
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
                  mode="default"
                  title="Nenhum exercício realizado"
                  subtitle="Escolha uma tecnologia e começe a se aprofundar agora mesmo!"
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
