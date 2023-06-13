import { useState } from 'react'
import { FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useSharedValue, withTiming } from 'react-native-reanimated'

import { CategoryTypeProps } from '../../@types/categoryTypeProps'

import { QuizTypeProps } from '@utils/categoriesMock'

import { Modal } from '@components/Modal'
import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { TechnologyButton } from '@components/TechnologyButton'

import { Container, Description, ModalConfirmationDescription, ModalConfirmationDescriptionHighligth } from './styles'

type RouteParams = {
  technology: string;
  description: string;
  options: QuizTypeProps[];
  category: CategoryTypeProps;
}

export function CategoryQuizMenu() {

  const route = useRoute()
  const { category, technology, description, options } = route.params as RouteParams

  const [selectedQuiz, setSelectedQuiz] = useState('')
  const [isActionDisabled, setIsActionDisabled] = useState(false)

  const modalBottomPosition = useSharedValue(0)

  function handleOpenConfirmationModal(quizName: string) {
    setIsActionDisabled(true)
    setSelectedQuiz(quizName)

    modalBottomPosition.value = withTiming(1)
  }

  function handleCloseConfirmationModal(){
    setIsActionDisabled(false)

    modalBottomPosition.value = withTiming(0)
  }

  return (
    <>
      <Container>
        <Header
          title={technology}
          category={category}
          isGoBackButtonDisabled={isActionDisabled}
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
              onPress={() => handleOpenConfirmationModal(item.title)}
              disabled={isActionDisabled}
            />
          )}
        />
      </Container>  

      <Modal
        title='Quiz selecionado'
        sharedValue={modalBottomPosition}
        onClose={handleCloseConfirmationModal}
      >
        <ModalConfirmationDescription>
          Voce está prestes a iniciar os exercícios sobre
          {' '}
          <ModalConfirmationDescriptionHighligth>
            {selectedQuiz}
          </ModalConfirmationDescriptionHighligth>
          .
        </ModalConfirmationDescription>

        <Button
          title='Iniciar quiz'
          onPress={() => {}}
        />
      </Modal>  
    </>
  )
}