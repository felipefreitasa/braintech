import { useCallback, useState } from "react"
import { Alert, SectionList } from "react-native"
import { useFocusEffect } from "@react-navigation/native"

import { historyGetAll } from "@storage/historyGetAll"
import { HistoryItemProps } from "@storage/historyCreate"

import { groupItemsByDate } from "@utils/groupItemsByDate"

import { Loading } from "@components/Loading"
import { HistoryItem } from "@components/HistoryItem"
import { ListFeedbackStatus } from "@components/ListFeedbackStatus"

import { Container, Data, ItemSeparator, SectionHeaderSeparator, SectionSeparator, Subtitle, Title } from "./styles"

export function History() {

  const [isLoading, setIsLoading] = useState(false)
  const [historyData, setHistoryData] = useState<HistoryItemProps[]>()

  async function fetchHistory(){
    try {
      setIsLoading(true)

      const data = await historyGetAll()

      setHistoryData(data)

    } catch (error) {
      Alert.alert('Histórico', 'Não foi possível carregar o seu histórico')
      
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(useCallback(() => {
    fetchHistory()
  }, []))  

  return (
    <Container>
      <Title>
        Histórico de exercícios
      </Title>

      <Subtitle>
        Reveja seus exercícios anteriores e acompanhe seu desempenho no app
      </Subtitle>

      {isLoading ? <Loading/> : (
        <SectionList
          sections={groupItemsByDate(historyData)}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <HistoryItem 
              category={item.category}
              subCategory={item.subCategory}
              correctAnswers={item.correctAnswers}
              totalQuestions={item.totalQuestions}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <>
              <SectionHeaderSeparator/>
              <Data>{title}</Data>
            </>
          )}
          ListEmptyComponent={() => (
            <ListFeedbackStatus
              mode='default'
              title='Nenhum exercício realizado'
              subtitle='Escolha uma tecnologia e começe a se aprofundar agora mesmo!'
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={groupItemsByDate(historyData).length < 1 && { flex: 1 }}
          ItemSeparatorComponent={() => <ItemSeparator/>}
          SectionSeparatorComponent={() => <SectionSeparator/>}

        />
      )} 
    </Container>
  )
}