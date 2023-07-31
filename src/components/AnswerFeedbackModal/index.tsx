import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native'
import { SharedValue, interpolate, useAnimatedStyle } from 'react-native-reanimated'

import { Button } from '@components/Button'

import { AnswerCorrectionTitle, AnswerStatus, AnswerStatusContainer, Container, CorrectAnswer } from './styles'

type Props = {
  correctAnswer: string;
  isLastQuestion: boolean;
  isAnswerCorrect: boolean;
  goToNextQuestion: () => void;
  sharedValue: SharedValue<number>;
}

export function AnswerFeedbackModal({ sharedValue, isAnswerCorrect, correctAnswer, isLastQuestion, goToNextQuestion }: Props) {

  const { COLORS } = useTheme()

  const confirmationModalAnimatedStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(sharedValue.value, [0, 1], [0, 1]),
      bottom: interpolate(sharedValue.value, [0, 1], [-1000, 0])
    }
  })

  return (
    <Container style={confirmationModalAnimatedStyles}>
      <AnswerStatusContainer>
        <Feather
          size={24}
          name={isAnswerCorrect ? 'check' : 'alert-triangle'}
          color={isAnswerCorrect ? COLORS.SUCCESS : COLORS.ERROR}
        />

        <AnswerStatus isAnswerCorrect={isAnswerCorrect}>
          {isAnswerCorrect ? 'Correct!' : 'Incorrect!'}
        </AnswerStatus>
      </AnswerStatusContainer>

      {!isAnswerCorrect && (
        <>
          <AnswerCorrectionTitle>
            Correct answer:
          </AnswerCorrectionTitle>

          <CorrectAnswer>
            {correctAnswer}
          </CorrectAnswer>
        </>
      )}

      <Button
        title={isLastQuestion ? 'End quiz' : 'Next question'}
        onPress={goToNextQuestion}
        style={{ marginTop: 24 }}
      />
    </Container>
  )
}