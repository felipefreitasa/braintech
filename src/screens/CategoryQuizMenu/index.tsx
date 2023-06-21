import { FlatList } from 'react-native'
import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSharedValue, withTiming } from 'react-native-reanimated'

import { AppNavigatorRoutesProps } from '../../routes/app.routes'

import { useQuiz } from '@hooks/useQuiz'

import { Modal } from '@components/Modal'
import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { TechnologyButton } from '@components/TechnologyButton'

import { Container, Description, ModalConfirmationDescription, ModalConfirmationDescriptionHighligth } from './styles'

export function CategoryQuizMenu() {

  const { selectedTechnology, setSelectedQuiz, setQuizStartTime, setCorrectAnswers } = useQuiz()

  const { navigate } = useNavigation<AppNavigatorRoutesProps>()

  const [selectedQuizName, setSelectedQuizName] = useState('')
  const [isActionDisabled, setIsActionDisabled] = useState(false)

  const modalBottomPosition = useSharedValue(0)

  function handleOpenConfirmationModal(quizName: string) {
    setIsActionDisabled(true)
    setSelectedQuizName(quizName)

    modalBottomPosition.value = withTiming(1)
  }

  function handleCloseConfirmationModal(){
    setIsActionDisabled(false)

    modalBottomPosition.value = withTiming(0)
  }

  function handleGoToQuiz(){
    handleCloseConfirmationModal()

    setQuizStartTime(new Date())

    navigate('quiz')
  }

  useEffect(() => {
    setCorrectAnswers(0)
  }, [])

  return (
    <>
      <Container>
        <Header
          title={selectedTechnology?.technology}
          category={selectedTechnology?.category}
          isGoBackButtonDisabled={isActionDisabled}
        />

        <Description>
          {selectedTechnology?.description}
        </Description>

        <FlatList
          data={selectedTechnology?.options}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {

            return (
              <TechnologyButton
                icon={item.icon}
                title={item.title}
                category={selectedTechnology?.category}
                questionsQuantity={item.questions.length}
                onPress={() => { 
                  setSelectedQuiz({ questions: item.questions, subcategory: item.title })
                  handleOpenConfirmationModal(item.title)
                }}
                disabled={isActionDisabled}
              />
            )
          }}
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
            {selectedQuizName}
          </ModalConfirmationDescriptionHighligth>
          .
        </ModalConfirmationDescription>

        <Button
          title='Iniciar quiz'
          onPress={handleGoToQuiz}
        />
      </Modal>  
    </>
  )
}