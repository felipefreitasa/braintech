import { handleTechnologyIcon } from '@utils/handleTechnologyIcon'
import { CategoryTypeProps } from '../../@types/categoryTypeProps'

import { Container, IconContainer, QuestionsQuantity, Technology, TextContainer, Subcategory, TitleContainer } from './styles'

type Props = {
  technology: string;
  subCategory: string;
  correctAnswers: number;
  totalQuestions: number;
  category: CategoryTypeProps;
}

export function HistoryItem({ category, technology, correctAnswers, subCategory, totalQuestions }: Props) {
  return (
    <Container>
      <IconContainer category={category}>
        {handleTechnologyIcon(technology)}
      </IconContainer>

      <TextContainer>
        <TitleContainer>
          <Technology>
            {technology}: 
          </Technology>

          <Subcategory>
            {subCategory}
          </Subcategory>
        </TitleContainer>

        <QuestionsQuantity>
          {`Você acertou ${correctAnswers} de ${totalQuestions} questões`}
        </QuestionsQuantity>
      </TextContainer>
    </Container>
  )
}