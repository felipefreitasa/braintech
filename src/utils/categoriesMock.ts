import { CategoryTypeProps } from "../@types/categoryTypeProps"

type CategoryTypes = {
  id: string,
  technology: string;
  description: string;
}

type Props = {
  id: string;
  category: CategoryTypeProps,
  technologies: CategoryTypes[]
}

export const categoriesMock: Props[] = [
  {
    id: '1' ,
    category: 'MOBILE',
    technologies: [
      {
        id: '11',
        technology: 'React Native',
        description: 'Desenvolva apps iOS e Android com Javascript'
      },
      {
        id: '12',
        technology: 'Flutter',
        description: 'Desenvolva apps iOS e Android com Dart'
      }
    ]
  },
  {
    id: '2' ,
    category: 'FRONT-END',
    technologies: [
      {
        id: '13',
        technology: 'React JS',
        description: 'Biblioteca JS para criação de páginas web reativas'
      },
      {
        id: '14',
        technology: 'Vue JS',
        description: 'Framework JS para criação de páginas web escaláveis'
      }
    ]
  },
  {
    id: '3' ,
    category: 'BACK-END',
    technologies: [
      {
        id: '15',
        technology: 'Node JS',
        description: 'Framework JS para criação de páginas web escaláveis'
      },
      {
        id: '16',
        technology: 'Go',
        description: 'Framework JS para criação de páginas web escaláveis'
      }
    ]
  }
]