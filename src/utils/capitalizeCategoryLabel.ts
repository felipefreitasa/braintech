import { CategoryTypeProps } from '../@types/categoryTypeProps'

const categoryLabels = {
  'MOBILE': 'Mobile',
  'BACK-END': 'Back-end',
  'FRONT-END': 'Front-end',
}

export function capitalizeCategoryLabel(category: CategoryTypeProps | undefined){
  if(category){
    return categoryLabels[category]
  }
}