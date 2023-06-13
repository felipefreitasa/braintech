import { FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'

import { CategoryTypeProps } from '../../@types/categoryTypeProps'

import { QuizTypeProps } from '@utils/categoriesMock'

import { Header } from '@components/Header'
import { TechnologyButton } from '@components/TechnologyButton'

import { Container, Description } from './styles'

type RouteParams = {
  technology: string;
  description: string;
  options: QuizTypeProps[];
  category: CategoryTypeProps;
}

export function CategoryQuizMenu() {

  const route = useRoute()
  const { category, technology, description, options } = route.params as RouteParams

  return (
    <>
      <Container>
        <Header
          title={technology}
          category={category}
        />

        <Description>
          {description}
        </Description>

        <FlatList
          data={options}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TechnologyButton
              icon={item.icon}
              title={item.title}
              category={category}
              questionsQuantity={item.questions.length}
            />
          )}
        />
      </Container>     
    </>
  )
}