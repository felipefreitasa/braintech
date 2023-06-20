import { FlatList } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { categoriesMock } from "@utils/categoriesMock"

import { AppNavigatorRoutesProps } from "../../routes/app.routes"

import { useQuiz } from "@hooks/useQuiz"
import { SelectedCategoryProps } from "@context/QuizContext"

import { HomeHeader } from "@components/HomeHeader"
import { CategoryButton } from "@components/CategoryButton"
import { CategorySectionTitle } from "@components/CategorySectionTitle"

import { CategoryContainer, Container, Title } from "./styles"

export function Home() {

  const { setSelectedTechnology } = useQuiz()

  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  function handleGoToCategoryMenu({ category, description, options, technology }: SelectedCategoryProps){
    setSelectedTechnology({ category, description, options, technology })

    navigate('categoryQuizMenu')
  }

  return (
    <Container>
      <HomeHeader />

      <Title>
        Qual tecnologia você deseja aprender hoje ?
      </Title>

      <FlatList
        data={categoriesMock}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {

          const category = item.category

          return (
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
                    onPress={() => handleGoToCategoryMenu({ 
                      category, 
                      technology: 
                      item.technology, 
                      options: item.quizOptions,
                      description: item.description, 
                    })}
                  />
                )}
              />
            </CategoryContainer>
          )
        }}
      />
    </Container>
  )
}