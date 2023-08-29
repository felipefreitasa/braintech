import { FlatList } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  FadeIn,
  withTiming,
  useSharedValue,
} from "react-native-reanimated";

import { AppNavigatorRoutesProps } from "../../routes/app.routes";

import { useQuiz } from "@hooks/useQuiz";
import { useAuth } from "@hooks/useAuth";

import { Modal } from "@components/Modal";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { TechnologyButton } from "@components/TechnologyButton";
import { UnlockFullExperience } from "@components/UnlockFullExperience";

import {
  Container,
  Description,
  ModalConfirmationDescription,
  ModalConfirmationDescriptionHighligth,
} from "./styles";

const AnimatedDescription = Animated.createAnimatedComponent(Description);

export function CategoryQuizMenu() {
  const {
    selectedTechnology,
    setSelectedQuiz,
    setQuizStartTime,
    setCorrectAnswers,
  } = useQuiz();

  const { loggedUser } = useAuth();

  const { navigate } = useNavigation<AppNavigatorRoutesProps>();

  const [selectedQuizName, setSelectedQuizName] = useState("");
  const [isActionDisabled, setIsActionDisabled] = useState(false);

  const modalBottomPosition = useSharedValue(0);

  function handleOpenConfirmationModal(quizName: string) {
    setIsActionDisabled(true);
    setSelectedQuizName(quizName);

    modalBottomPosition.value = withTiming(1);
  }

  function handleCloseConfirmationModal() {
    setIsActionDisabled(false);

    modalBottomPosition.value = withTiming(0);
  }

  function handleGoToQuiz() {
    handleCloseConfirmationModal();

    setQuizStartTime(new Date());

    navigate("quiz");
  }

  useEffect(() => {
    setCorrectAnswers(0);
  }, []);

  return (
    <>
      <Container>
        <Header
          title={selectedTechnology?.technology}
          category={selectedTechnology?.category}
          isGoBackButtonDisabled={isActionDisabled}
        />

        <AnimatedDescription entering={FadeIn.duration(600).delay(250)}>
          {selectedTechnology?.description}
        </AnimatedDescription>

        <Animated.View entering={FadeIn.duration(600).delay(500)}>
          <FlatList
            data={selectedTechnology?.options}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <TechnologyButton
                  title={item.title}
                  category={selectedTechnology?.category}
                  questionsQuantity={item.questions.length}
                  onPress={() => {
                    setSelectedQuiz({
                      questions: item.questions,
                      subcategory: item.title,
                    });
                    handleOpenConfirmationModal(item.title);
                  }}
                  disabled={isActionDisabled}
                />
              );
            }}
          />
        </Animated.View>
      </Container>

      <Modal
        title="Selected quiz"
        sharedValue={modalBottomPosition}
        onClose={handleCloseConfirmationModal}
      >
        <ModalConfirmationDescription>
          You are about to start the exercises about{" "}
          <ModalConfirmationDescriptionHighligth>
            {selectedQuizName}
          </ModalConfirmationDescriptionHighligth>
          .
        </ModalConfirmationDescription>

        <Button title="Start quiz" onPress={handleGoToQuiz} />
      </Modal>
    </>
  );
}
