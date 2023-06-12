import { FlatList } from "react-native"

import { categoriesMock } from "@utils/categoriesMock"

import { HomeHeader } from "@components/HomeHeader"
import { CategorySectionTitle } from "@components/CategorySectionTitle"

import { Container, Title } from "./styles"

export function Home() {

  return (
    <Container>
      <HomeHeader/>

      <Title>
        Qual tecnologia você deseja aprender hoje ?
      </Title>

      <FlatList
        data={categoriesMock}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <>
            <CategorySectionTitle category={item.category} />
          </>
        )}
      />
    </Container>
  )
}