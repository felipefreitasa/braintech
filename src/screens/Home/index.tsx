import { useEffect } from "react";
import { BackHandler, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeIn } from "react-native-reanimated";

import { quizContent } from "../../quizContent/quizContent";

import { AppNavigatorRoutesProps } from "../../routes/app.routes";

import { useQuiz } from "@hooks/useQuiz";
import { SelectedCategoryProps } from "@context/QuizContext";

import { HomeHeader } from "@components/HomeHeader";
import { CategoryButton } from "@components/CategoryButton";
import { CategorySectionTitle } from "@components/CategorySectionTitle";

import { CategoryContainer, Container, Title } from "./styles";

const TitleAnimated = Animated.createAnimatedComponent(Title);

export function Home() {
  const { setSelectedTechnology } = useQuiz();

  const { navigate } = useNavigation<AppNavigatorRoutesProps>();

  function handleGoToCategoryMenu({
    options,
    category,
    technology,
    description,
  }: SelectedCategoryProps) {
    setSelectedTechnology({ category, description, options, technology });

    navigate("categoryQuizMenu");
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
      <HomeHeader />

      <TitleAnimated entering={FadeIn.delay(250)}>
        What technology do you want to learn today?
      </TitleAnimated>

      <FlatList
        data={quizContent}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          const category = item.category;

          const delay = 500 * (index + 1);

          return (
            <Animated.View entering={FadeIn.duration(600).delay(delay)}>
              <CategoryContainer>
                <CategorySectionTitle category={item.category} />

                <FlatList
                  horizontal
                  data={item.technologies}
                  keyExtractor={(item) => item.id}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => (
                    <CategoryButton
                      category={category}
                      technology={item.technology}
                      description={item.description}
                      onPress={() =>
                        handleGoToCategoryMenu({
                          category,
                          technology: item.technology,
                          options: item.quizOptions,
                          description: item.description,
                        })
                      }
                    />
                  )}
                />
              </CategoryContainer>
            </Animated.View>
          );
        }}
      />
    </Container>
  );
}
