import { Audio } from "expo-av";
import * as Haptics from "expo-haptics";
import { useEffect, useState } from "react";
import { Alert, BackHandler, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  FadeIn,
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

import { useQuiz } from "@hooks/useQuiz";

import { AppNavigatorRoutesProps } from "../../routes/app.routes";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { AnswerSelect } from "@components/AnswerSelect";
import { AnswerFeedbackModal } from "@components/AnswerFeedbackModal";

import {
  Question,
  Container,
  ProgressBar,
  QuestionsCounter,
  ProgressIndicator,
} from "./styles";

const AnimatedQuestion = Animated.createAnimatedComponent(Question);
const AnimatedProgressIndicator =
  Animated.createAnimatedComponent(ProgressIndicator);

export function Quiz() {
  const {
    selectedTechnology,
    selectedQuiz,
    correctAnswers,
    setCorrectAnswers,
    setQuizEndTime,
  } = useQuiz();

  const { navigate } = useNavigation<AppNavigatorRoutesProps>();

  const progress = useSharedValue(0);
  const answerFeedback = useSharedValue(0);

  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuestionAnswared, setIsQuestionAnswared] = useState(false);

  const questionWasAnswared = isQuestionAnswared && selectedAnswer !== null;

  const questions = selectedQuiz.questions;

  const progressPercentage = Math.round(
    (currentQuestion / questions.length) * 100
  );

  const isLastQuestion = currentQuestion === questions.length - 1;

  const isCorrectAnswer =
    selectedAnswer === questions[currentQuestion].correctAnswer;

  async function handleCheckAnswer() {
    setIsQuestionAnswared(true);
    answerFeedback.value = withTiming(1);

    if (isCorrectAnswer) {
      await playSound(true);
      setCorrectAnswers(correctAnswers + 1);
    } else {
      await playSound(false);
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
  }

  function handleGoToNextQuestion() {
    if (isLastQuestion) {
      setQuizEndTime(new Date());

      navigate("quizStatus");
    } else {
      const duration = 1000;

      answerFeedback.value = withTiming(0, { duration: duration });

      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);

        setSelectedAnswer("");
        setIsQuestionAnswared(false);
      }, duration * 0.2);
    }
  }

  function handleStopQuiz() {
    Alert.alert(
      "Are you shure you want exit quiz?",
      "If you leave, you will lose the progress made.",
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Yes",
          style: "destructive",
          onPress: () => navigate("homeTabs"),
        },
      ]
    );

    return true;
  }

  async function playSound(isCorrect: boolean) {
    const file = isCorrect
      ? require("../../assets/correct.mp3")
      : require("../../assets/error.mp3");
    const { sound } = await Audio.Sound.createAsync(file, { shouldPlay: true });

    await sound.setPositionAsync(0);
    await sound.playAsync();
  }

  const progressAnimatedStyles = useAnimatedStyle(() => {
    return { width: `${progress.value}%` };
  });

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleStopQuiz
    );
    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    progress.value = withTiming(progressPercentage);
  }, [currentQuestion]);

  return (
    <>
      <Container>
        <View>
          <Header
            title={selectedTechnology.technology}
            category={selectedTechnology.category}
            isGoBackButtonDisabled={questionWasAnswared}
            titleHighlight={selectedQuiz.subcategory}
            onGoBack={handleStopQuiz}
          />

          <Animated.View entering={FadeIn.duration(600).delay(250)}>
            <QuestionsCounter>
              {`${currentQuestion}/${questions.length} completed questions`}
            </QuestionsCounter>

            <ProgressBar>
              <AnimatedProgressIndicator style={progressAnimatedStyles} />
            </ProgressBar>
          </Animated.View>

          <AnimatedQuestion entering={FadeIn.duration(600).delay(500)}>
            {`${currentQuestion + 1}. ${questions[currentQuestion].question}`}
          </AnimatedQuestion>

          <Animated.View entering={FadeIn.duration(600).delay(750)}>
            {questions[currentQuestion].answers.map((question) => (
              <AnswerSelect
                key={question}
                title={question}
                disabled={questionWasAnswared}
                isSelected={selectedAnswer === question}
                onPress={() => setSelectedAnswer(question)}
              />
            ))}
          </Animated.View>
        </View>

        <Animated.View
          style={{ height: 46 }}
          entering={FadeIn.duration(600).delay(1000)}
        >
          <Button
            title="Verify"
            disabled={!selectedAnswer}
            onPress={handleCheckAnswer}
          />
        </Animated.View>
      </Container>

      <AnswerFeedbackModal
        sharedValue={answerFeedback}
        isLastQuestion={isLastQuestion}
        isAnswerCorrect={isCorrectAnswer}
        goToNextQuestion={handleGoToNextQuestion}
        correctAnswer={questions[currentQuestion].correctAnswer}
      />
    </>
  );
}
