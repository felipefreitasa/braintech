import { Feather } from '@expo/vector-icons'

import { CategoryTypeProps } from '../../@types/categoryTypeProps'

import { handleCategoryIcon } from '@utils/handleCategoryIcon'
import { handleCategoryColor } from '@utils/handleCategoryColor'
import { capitalizeCategoryLabel } from '@utils/capitalizeCategoryLabel'

import { Container, Title } from './styles'

type Props =  {
  category: CategoryTypeProps;
}

export function ChipCategory({ category }: Props) {
  return (
    <Container category={category}>
      <Feather
        size={10}
        name={handleCategoryIcon(category)}
        color={handleCategoryColor(category)}
      />

      <Title category={category}>
        {capitalizeCategoryLabel(category)}
      </Title>
    </Container>
  )
}