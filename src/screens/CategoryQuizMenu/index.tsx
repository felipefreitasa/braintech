import { useRoute } from '@react-navigation/native'

import { Header } from '@components/Header'

import { Container } from './styles'

type RouteParams = {
  category: string;
  technology: string;
  description: string;
}

export function CategoryQuizMenu() {

  const route = useRoute()
  const { category, technology, description } = route.params as RouteParams

  return (
    <Container>
      <Header
        title={technology}
      />
    </Container>
  )
}