import { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { BackHandler, View } from "react-native";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeIn } from "react-native-reanimated";

import { useAuth } from "@hooks/useAuth";
import { useQuiz } from "@hooks/useQuiz";

import { saveQuizStatus } from "@firebaseApp/methods"

import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import { calculateTimeInterval } from "@utils/calculateTimeInterval";
import { capitalizeCategoryLabel } from "@utils/capitalizeCategoryLabel";

import { Button } from "@components/Button";
import { StatisticCard } from "@components/StatisticCard";

import {
  Title,
  Subtitle,
  Container,
  IconContainer,
  StatisticsTitle,
} from "./styles";

const AnimatedIconContainer = Animated.createAnimatedComponent(IconContainer);

export function QuizStatus() {
  const { COLORS } = useTheme();

  const {
    quizEndTime,
    selectedQuiz,
    quizStartTime,
    correctAnswers,
    selectedTechnology,
  } = useQuiz();

  const { loggedUser } = useAuth()

  const { navigate } = useNavigation<AppNavigatorRoutesProps>();

  const [isLoading, setIsLoading] = useState(false);

  const correctAnswersPercentage = Math.round(
    (correctAnswers / selectedQuiz.questions.length) * 100
  );

  const mode = correctAnswersPercentage >= 70 ? "success" : "error";

  async function handleGoToHome() {
    setIsLoading(true);

    await saveQuizStatus({
      correctAnswers,
      createdAt: new Date(),
      userId: loggedUser?.user.uid,
      category: selectedTechnology.category,
      subCategory: selectedQuiz.subcategory,
      technology: selectedTechnology.technology,
      totalQuestions: selectedQuiz.questions.length,
      timeSpent: calculateTimeInterval(quizStartTime, quizEndTime)
    });

    setIsLoading(false);

    navigate("homeTabs");

    return true;
  }

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => null
    );
    return () => backHandler.remove();
  }, []);

  return (
    <Container>
      <View>
        <AnimatedIconContainer mode={mode} entering={FadeIn}>
          <Feather
            size={54}
            name={mode === "success" ? "award" : "alert-circle"}
            color={mode === "success" ? COLORS.SUCCESS : COLORS.ERROR}
          />
        </AnimatedIconContainer>

        <Animated.View entering={FadeIn.duration(600).delay(250)}>
          <Title>
            {mode === "success" ? "Parabéns!" : "Não foi dessa vez..."}
          </Title>

          <Subtitle>
            {mode === "success"
              ? "Voce possui bastante conhecimento sobre essa tecnologia!"
              : "Continue se aprofundando nessa tecnologia e faça novamente esse quiz."}
          </Subtitle>
        </Animated.View>

        <Animated.View entering={FadeIn.duration(600).delay(500)}>
          <StatisticsTitle>Estatísticas do quiz</StatisticsTitle>

          <StatisticCard
            icon="clock"
            title="Duração"
            subtitle={calculateTimeInterval(quizStartTime, quizEndTime)}
          />

          <StatisticCard
            icon="help-circle"
            title="Respostas corretas"
            subtitle={`${correctAnswers} de ${selectedQuiz.questions.length}`}
          />

          <StatisticCard
            icon="book-open"
            title="Área"
            subtitle={capitalizeCategoryLabel(selectedTechnology.category)}
          />

          <StatisticCard
            icon="code"
            title="Tecnologia"
            subtitle={`${selectedTechnology.technology}: ${selectedQuiz.subcategory}`}
          />
        </Animated.View>
      </View>

      <Animated.View
        style={{ height: 46 }}
        entering={FadeIn.duration(600).delay(750)}
      >
        <Button
          isLoading={isLoading}
          title="Finalizar quiz"
          onPress={handleGoToHome}
        />
      </Animated.View>
    </Container>
  );
}
