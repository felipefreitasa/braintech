import { Feather } from '@expo/vector-icons'

import { CategoryTypeProps } from '../@types/categoryTypeProps'

const categoryIcon = {
  'BACK-END': 'server',
  'MOBILE': 'smartphone',
  'FRONT-END': 'mouse-pointer',
}

export function handleCategoryIcon(category: CategoryTypeProps){
  return categoryIcon[category] as keyof typeof Feather.glyphMap
}