import { Feather } from "@expo/vector-icons"

import { CategoryTypeProps } from "../@types/categoryTypeProps"

type QuestionTypeProps = {
  id: string;
  question: string;
  answers: string[];
  correctAnswer: string;
}

export type QuizTypeProps = {
  id: string;
  title: string;
  questions: QuestionTypeProps[]
  icon: keyof typeof Feather.glyphMap;
}

type CategoryTypes = {
  id: string,
  technology: string;
  description: string;
  quizOptions: QuizTypeProps[]
}

type Props = {
  id: string;
  category: CategoryTypeProps;
  technologies: CategoryTypes[];
}

export const categoriesMock: Props[] = [
  {
    id: '1' ,
    category: 'MOBILE',
    technologies: [
      {
        id: '11',
        technology: 'React Native',
        description: 'Desenvolva apps iOS e Android com Javascript',
        quizOptions: [
          {
            id: '111',
            icon: 'toggle-left',
            title: 'Componentes',
            questions: [
              {
                id: '1111',
                question: 'Qual componente no React Native é usado para criar um campo de entrada de texto?',
                answers: ['<TextEntry/>', '<TextInput/>', '<Input/>', '<TextField/>'],
                correctAnswer: '<TextInput/>'
              },
              {
                id: '1112',
                question: 'Qual componente no React Native é usado para exibir texto?',
                answers: ['<p/>', '<Paragraph/>', '<Text/>', '<View/>'],
                correctAnswer: '<Text/>'
              },
              {
                id: '1113',
                question: 'Qual componente no React Native é usado para exibir imagens?',
                answers: ['<Image/>', '<Img/>', '<Photo/>', '<Background/>'],
                correctAnswer: '<Image/>'
              },
              {
                id: '1114',
                question: 'Qual componente no React Native é usado para indicar um carregamento?',
                answers: ['<ProgressBar/>', '<ProgressIndicator/>', '<ActivityIndicator/>', '<Loader/>'],
                correctAnswer: '<ActivityIndicator/>'
              },
              {
                id: '1115',
                question: 'Qual componente no React Native é usado para criar uma lista de itens otimizada para alto desempenho?',
                answers: ['<VirtualizedList/>', '<FlatList/>', '<FastList/>', '<List/>'],
                correctAnswer: '<FlatList/>'
              }
            ]
          }
        ]
      }
    ]
  },
]