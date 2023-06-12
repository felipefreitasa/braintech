import { CategoryTypeProps } from "../@types/categoryTypeProps"

type CategoryTypes = {
  name: string;
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
        name: 'React Native',
        description: 'Desenvolva apps iOS e Android com Javascript'
      },
      {
        name: 'Flutter',
        description: 'Desenvolva apps iOS e Android com Dart'
      }
    ]
  },
  {
    id: '2' ,
    category: 'FRONT-END',
    technologies: [
      {
        name: 'React JS',
        description: 'Biblioteca JS para criação de páginas web reativas'
      },
      {
        name: 'Vue JS',
        description: 'Framework JS para criação de páginas web escaláveis'
      }
    ]
  },
  {
    id: '3' ,
    category: 'BACK-END',
    technologies: [
      {
        name: 'Node JS',
        description: 'Framework JS para criação de páginas web escaláveis'
      },
      {
        name: 'Express',
        description: 'Framework JS para criação de páginas web escaláveis'
      }
    ]
  }
]