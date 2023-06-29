import { handleTechnologyIcon } from '@utils/handleTechnologyIcon'
import { CategoryTypeProps } from '../../@types/categoryTypeProps'

import { Container, IconContainer, QuestionsQuantity, TextContainer, Title } from './styles'

type Props = {
  subCategory: string;
  correctAnswers: number;
  totalQuestions: number;
  category: CategoryTypeProps;
}

export function HistoryItem({ category, correctAnswers, subCategory, totalQuestions }: Props) {
  return (
    <Container>
      <IconContainer category={category}>
        {handleTechnologyIcon(subCategory)}
      </IconContainer>

      <TextContainer>
        <Title>
          {subCategory}
        </Title>

        <QuestionsQuantity>
          {`Você acertou ${correctAnswers} de ${totalQuestions} questões`}
        </QuestionsQuantity>
      </TextContainer>
    </Container>
  )
}