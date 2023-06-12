import { Feather } from '@expo/vector-icons'

import { CategoryTypeProps } from '../../@types/categoryTypeProps'

import { handleCategoryIcon } from '@utils/handleCategoryIcon'
import { handleCategoryColor } from '@utils/handleCategoryColor'
import { capitalizeCategoryLabel } from '@utils/capitalizeCategoryLabel'

import { Container, Title } from './styles'

type Props = {
  category: CategoryTypeProps;
}

export function CategorySectionTitle({ category }: Props) {
  return (
    <Container>
      <Feather
        size={14}
        name={handleCategoryIcon(category)}
        color={handleCategoryColor(category)}
      />

      <Title>
        {capitalizeCategoryLabel(category)}
      </Title>
    </Container>
  );
}