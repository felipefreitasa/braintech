import theme from '../theme'

import { CategoryTypeProps } from '../@types/categoryTypeProps'

const categoryColor = {
  'MOBILE': theme.COLORS.MOBILE,
  'BACK-END': theme.COLORS.BACK_END,
  'FRONT-END': theme.COLORS.FRONT_END,
}

export function handleCategoryColor(category: CategoryTypeProps){
  return categoryColor[category]
}