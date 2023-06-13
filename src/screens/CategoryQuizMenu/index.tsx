import { useRoute } from '@react-navigation/native'

import { CategoryTypeProps } from '../../@types/categoryTypeProps'

import { Header } from '@components/Header'

import { Container } from './styles'

type RouteParams = {
  technology: string;
  description: string;
  category: CategoryTypeProps;
}

export function CategoryQuizMenu() {

  const route = useRoute()
  const { category, technology, description } = route.params as RouteParams

  return (
    <Container>
      <Header
        title={technology}
        category={category}
      />
    </Container>
  )
}