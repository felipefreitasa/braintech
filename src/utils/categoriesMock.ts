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
    id: '1',
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
      },
      {
        id: '12',
        technology: 'Flutter',
        description: 'Framework para desenvolvimento de aplicativos multiplataforma',
        quizOptions: [
          {
            id: '121',
            icon: 'smartphone',
            title: 'Widgets',
            questions: [
              {
                id: '1211',
                question: 'Qual widget no Flutter é usado para criar um campo de entrada de texto?',
                answers: ['TextField', 'TextEntry', 'Input', 'TextWidget'],
                correctAnswer: 'TextField'
              },
              {
                id: '1212',
                question: 'Qual widget no Flutter é usado para exibir texto?',
                answers: ['Text', 'Paragraph', 'TextView', 'View'],
                correctAnswer: 'Text'
              },
              {
                id: '1213',
                question: 'Qual widget no Flutter é usado para exibir imagens?',
                answers: ['Image', 'Img', 'Photo', 'Background'],
                correctAnswer: 'Image'
              },
              {
                id: '1214',
                question: 'Qual widget no Flutter é usado para indicar um carregamento?',
                answers: ['CircularProgressIndicator', 'ProgressBar', 'ActivityIndicator', 'Loader'],
                correctAnswer: 'CircularProgressIndicator'
              },
              {
                id: '1215',
                question: 'Qual widget no Flutter é usado para criar uma lista de itens otimizada para alto desempenho?',
                answers: ['ListView', 'FlatList', 'FastList', 'List'],
                correctAnswer: 'ListView'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '2',
    category: 'FRONT-END',
    technologies: [
      {
        id: '21',
        technology: 'React.js',
        description: 'Biblioteca JavaScript para construção de interfaces de usuário',
        quizOptions: [
          {
            id: '211',
            icon: 'globe',
            title: 'Componentes',
            questions: [
              {
                id: '2111',
                question: 'Qual componente no React.js é usado para renderizar um elemento HTML?',
                answers: ['<DOMElement/>', '<HTMLComponent/>', '<RenderComponent/>', '<div/>'],
                correctAnswer: '<div/>'
              },
              {
                id: '2112',
                question: 'Qual método é chamado quando um componente está prestes a ser montado no DOM?',
                answers: ['componentWillMount()', 'componentDidMount()', 'componentWillUpdate()', 'componentDidUpdate()'],
                correctAnswer: 'componentWillMount()'
              },
              {
                id: '2113',
                question: 'Qual hook do React é usado para adicionar estado a um componente funcional?',
                answers: ['useEffect()', 'useContext()', 'useReducer()', 'useState()'],
                correctAnswer: 'useState()'
              },
              {
                id: '2114',
                question: 'Qual ciclo de vida do React é chamado imediatamente antes de um componente ser desmontado?',
                answers: ['componentWillUnmount()', 'componentDidUnmount()', 'componentWillUpdate()', 'componentDidUpdate()'],
                correctAnswer: 'componentWillUnmount()'
              },
              {
                id: '2115',
                question: 'Qual método é chamado sempre que o estado ou as propriedades de um componente são atualizadas?',
                answers: ['componentWillReceiveProps()', 'shouldComponentUpdate()', 'componentDidUpdate()', 'render()'],
                correctAnswer: 'componentDidUpdate()'
              }
            ]
          }
        ]
      },
      {
        id: '22',
        technology: 'Vue.js',
        description: 'Framework JavaScript progressivo para construção de interfaces de usuário',
        quizOptions: [
          {
            id: '221',
            icon: 'globe',
            title: 'Componentes',
            questions: [
              {
                id: '2211',
                question: 'Qual componente no Vue.js é usado para renderizar um elemento HTML?',
                answers: ['<div/>', '<vue-element/>', '<html-render/>', '<DOMElement/>'],
                correctAnswer: '<div/>'
              },
              {
                id: '2212',
                question: 'Qual ciclo de vida do Vue.js é chamado imediatamente após um componente ser montado no DOM?',
                answers: ['created', 'mounted', 'updated', 'destroyed'],
                correctAnswer: 'mounted'
              },
              {
                id: '2213',
                question: 'Qual diretiva no Vue.js é usada para manipular eventos?',
                answers: ['v-bind', 'v-on', 'v-if', 'v-for'],
                correctAnswer: 'v-on'
              },
              {
                id: '2214',
                question: 'Qual hook do Vue.js é usado para adicionar estado a um componente funcional?',
                answers: ['created', 'mounted', 'updated', 'computed'],
                correctAnswer: 'computed'
              },
              {
                id: '2215',
                question: 'Qual componente no Vue.js é usado para criar uma lista de itens otimizada para alto desempenho?',
                answers: ['<v-list/>', '<vue-list/>', '<list-view/>', '<v-for/>'],
                correctAnswer: '<v-for/>'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '3',
    category: 'BACK-END',
    technologies: [
      {
        id: '31',
        technology: 'Node.js',
        description: 'Ambiente de execução JavaScript assíncrono orientado a eventos',
        quizOptions: [
          {
            id: '311',
            icon: 'server',
            title: 'Fundamentos',
            questions: [
              {
                id: '3111',
                question: 'Qual módulo do Node.js é usado para criar um servidor HTTP?',
                answers: ['http', 'server', 'fs', 'path'],
                correctAnswer: 'http'
              },
              {
                id: '3112',
                question: 'Qual módulo do Node.js é usado para interagir com o sistema de arquivos?',
                answers: ['fs', 'http', 'path', 'url'],
                correctAnswer: 'fs'
              },
              {
                id: '3113',
                question: 'Qual módulo do Node.js é usado para lidar com caminhos de arquivos?',
                answers: ['path', 'fs', 'http', 'url'],
                correctAnswer: 'path'
              },
              {
                id: '3114',
                question: 'Qual módulo do Node.js é usado para fazer solicitações HTTP?',
                answers: ['http', 'fs', 'path', 'url'],
                correctAnswer: 'http'
              },
              {
                id: '3115',
                question: 'Qual módulo do Node.js é usado para trabalhar com URLs?',
                answers: ['url', 'http', 'fs', 'path'],
                correctAnswer: 'url'
              }
            ]
          }
        ]
      },
      {
        id: '32',
        technology: 'Java',
        description: 'Linguagem de programação de propósito geral',
        quizOptions: [
          {
            id: '321',
            icon: 'coffee',
            title: 'Fundamentos',
            questions: [
              {
                id: '3211',
                question: 'Qual palavra-chave em Java é usada para definir uma classe?',
                answers: ['class', 'interface', 'package', 'method'],
                correctAnswer: 'class'
              },
              {
                id: '3212',
                question: 'Qual tipo de dado em Java é usado para representar números inteiros?',
                answers: ['int', 'boolean', 'float', 'char'],
                correctAnswer: 'int'
              },
              {
                id: '3213',
                question: 'Qual tipo de dado em Java é usado para representar números decimais?',
                answers: ['float', 'double', 'string', 'byte'],
                correctAnswer: 'double'
              },
              {
                id: '3214',
                question: 'Qual palavra-chave em Java é usada para criar uma nova instância de um objeto?',
                answers: ['new', 'create', 'instance', 'instantiate'],
                correctAnswer: 'new'
              },
              {
                id: '3215',
                question: 'Qual estrutura de controle em Java é usada para executar um bloco de código repetidamente?',
                answers: ['for', 'if', 'while', 'switch'],
                correctAnswer: 'while'
              }
            ]
          }
        ]
      }
    ]
  }
];
