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
        id: '13',
        technology: 'Swift',
        description: 'Linguagem de programação para desenvolvimento iOS, macOS, watchOS e tvOS',
        quizOptions: [
          {
            id: '131',
            title: 'Fundamentos',
            questions: [
              {
                id: '1311',
                question: 'Qual é a palavra-chave usada para definir uma variável mutável em Swift?',
                answers: ['let', 'mutable', 'var', 'constant'],
                correctAnswer: 'var'
              },
              {
                id: '1312',
                question: 'Qual é a sintaxe correta para criar uma função em Swift?',
                answers: ['function myFunction() { }', 'def myFunction() { }', 'func myFunction() { }', 'procedure myFunction() { }'],
                correctAnswer: 'func myFunction() { }'
              },
              {
                id: '1313',
                question: 'Qual é o tipo de dado usado em Swift para representar um valor nulo?',
                answers: ['null', 'nil', 'none', 'undefined'],
                correctAnswer: 'nil'
              },
              {
                id: '1314',
                question: 'Qual é a palavra-chave usada para fazer um loop em Swift?',
                answers: ['loop', 'for', 'while', 'repeat'],
                correctAnswer: 'for'
              },
              {
                id: '1315',
                question: 'Qual é a classe base para todas as exceções em Swift?',
                answers: ['Exception', 'Error', 'Throwable', 'RuntimeException'],
                correctAnswer: 'Error'
              }
            ]
          }
        ]
      },
      {
        id: '14',
        technology: 'Flutter',
        description: 'UI toolkit para criação de aplicativos nativos para iOS, Android e web',
        quizOptions: [
          {
            id: '141',
            title: 'Fundamentos',
            questions: [
              {
                id: '1411',
                question: 'Qual é a linguagem de programação principal usada no Flutter?',
                answers: ['JavaScript', 'Kotlin', 'Swift', 'Dart'],
                correctAnswer: 'Dart'
              },
              {
                id: '1412',
                question: 'Qual é a biblioteca usada para criar interfaces de usuário no Flutter?',
                answers: ['UIKit', 'CoreGraphics', 'MaterialUI', 'Widgets'],
                correctAnswer: 'Widgets'
              },
              {
                id: '1413',
                question: 'Qual é o elemento básico para construir interfaces no Flutter?',
                answers: ['Views', 'Widgets', 'Components', 'Layouts'],
                correctAnswer: 'Widgets'
              },
              {
                id: '1414',
                question: 'Qual é a arquitetura recomendada para desenvolver aplicativos no Flutter?',
                answers: ['MVC', 'MVVM', 'BLoC', 'Redux'],
                correctAnswer: 'BLoC'
              },
              {
                id: '1415',
                question: 'Qual é o comando usado para executar um aplicativo Flutter?',
                answers: ['flutter run', 'flutter start', 'flutter build', 'flutter create'],
                correctAnswer: 'flutter run'
              }
            ]
          }
        ]
      },
      {
        id: '12',
        technology: 'Kotlin',
        description: 'Linguagem de programação moderna para desenvolvimento Android',
        quizOptions: [
          {
            id: '121',
            title: 'Fundamentos',
            questions: [
              {
                id: '1211',
                question: 'Qual é o tipo de dado padrão para números inteiros em Kotlin?',
                answers: ['Int', 'Float', 'Double', 'Long'],
                correctAnswer: 'Int'
              },
              {
                id: '1212',
                question: 'Qual é o operador usado para verificar a igualdade entre duas variáveis em Kotlin?',
                answers: ['=', '==', '===', '!='],
                correctAnswer: '=='
              },
              {
                id: '1213',
                question: 'Qual é o tipo de dado usado em Kotlin para representar um valor nulo?',
                answers: ['Null', 'Void', 'None', 'Nullability'],
                correctAnswer: 'Null'
              },
              {
                id: '1214',
                question: 'Qual é a palavra-chave usada para definir uma função em Kotlin?',
                answers: ['function', 'fun', 'method', 'proc'],
                correctAnswer: 'fun'
              },
              {
                id: '1215',
                question: 'Qual é a classe base para todas as exceções em Kotlin?',
                answers: ['Exception', 'Error', 'Throwable', 'RuntimeException'],
                correctAnswer: 'Throwable'
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
        technology: 'React JS',
        description: 'Biblioteca JavaScript para construção de interfaces de usuário',
        quizOptions: [
          {
            id: '211',
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
        id: '23',
        technology: 'Vue JS',
        description: 'Framework JavaScript progressivo para construção de interfaces de usuário',
        quizOptions: [
          {
            id: '231',
            title: 'Componentes',
            questions: [
             {
                id: '2311',
                question: 'Qual é a diretiva usada para criar um loop em Vue.js?',
                answers: ['v-for', 'v-if', 'v-switch', 'v-while'],
                correctAnswer: 'v-for'
              },
              {
                id: '2312',
                question: 'Qual é o ciclo de vida de um componente em Vue.js?',
                answers: ['created, mounted, updated', 'beforeCreate, created, beforeMount', 'beforeUpdate, updated, beforeDestroy', 'mounted, updated, destroyed'],
                correctAnswer: 'beforeCreate, created, beforeMount'
              },
              {
                id: '2313',
                question: 'Qual é o hook usado para adicionar estado a um componente em Vue.js?',
                answers: ['useEffect()', 'useContext()', 'useReducer()', 'useState()'],
                correctAnswer: 'useState()'
              },
              {
                id: '2314',
                question: 'Qual é a diretiva usada para vincular um atributo HTML a um valor no Vue.js?',
                answers: ['v-bind', 'v-model', 'v-on', 'v-text'],
                correctAnswer: 'v-bind'
              },
              {
                id: '2315',
                question: 'Qual é a biblioteca usada para fazer solicitações HTTP no Vue.js?',
                answers: ['axios', 'fetch', 'http', 'ajax'],
                correctAnswer: 'axios'
              }
            ]
          }
        ]
      },
      {
        id: '22',
        technology: 'Angular JS',
        description: 'Plataforma de desenvolvimento de aplicativos web em TypeScript',
        quizOptions: [
          {
            id: '221',
            title: 'Componentes',
            questions: [
              {
                id: '2211',
                question: 'Qual é o decorador usado para criar um componente em Angular?',
                answers: ['@Component', '@Directive', '@Module', '@Injectable'],
                correctAnswer: '@Component'
              },
              {
                id: '2212',
                question: 'Qual é a diretiva usada para criar um loop em Angular?',
                answers: ['*ngFor', '*ngIf', '*ngSwitch', '*ngWhile'],
                correctAnswer: '*ngFor'
              },
              {
                id: '2213',
                question: 'Qual é o serviço usado para fazer solicitações HTTP em Angular?',
                answers: ['HttpClient', 'HttpService', 'HttpProvider', 'HttpRequest'],
                correctAnswer: 'HttpClient'
              },
              {
                id: '2214',
                question: 'Qual é o ciclo de vida de um componente em Angular?',
                answers: ['OnInit, OnDestroy, OnChanges', 'OnCreate, OnUpdate, OnDestroy', 'BeforeInit, OnInit, AfterInit', 'OnInit, AfterViewInit, OnDestroy'],
                correctAnswer: 'OnInit, OnDestroy, OnChanges'
              },
              {
                id: '2215',
                question: 'Qual é a injeção de dependência usada em Angular?',
                answers: ['@Inject', '@Provide', '@Injectable', '@Dependency'],
                correctAnswer: '@Injectable'
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
        technology: 'Spring',
        description: 'Framework para desenvolvimento de aplicativos Java',
        quizOptions: [
          {
            id: '311',
            title: 'Fundamentos',
            questions: [
              {
                id: '3111',
                question: 'Qual é a anotação usada para definir um ponto de extremidade de API no Spring?',
                answers: ['@Endpoint', '@Controller', '@Service', '@RestController'],
                correctAnswer: '@RestController'
              },
              {
                id: '3112',
                question: 'Qual é a anotação usada para definir uma rota GET no Spring?',
                answers: ['@Get', '@GetRoute', '@GetMapping', '@Request'],
                correctAnswer: '@GetMapping'
              },
              {
                id: '3113',
                question: 'Qual é a anotação usada para definir uma rota POST no Spring?',
                answers: ['@Post', '@PostRoute', '@PostMapping', '@Request'],
                correctAnswer: '@PostMapping'
              },
              {
                id: '3114',
                question: 'Qual é a anotação usada para definir uma injeção de dependência no Spring?',
                answers: ['@Inject', '@Provide', '@Autowired', '@Dependency'],
                correctAnswer: '@Autowired'
              },
              {
                id: '3115',
                question: 'Qual é a anotação usada para definir uma transação no Spring?',
                answers: ['@Transactional', '@Transaction', '@TransactionManager', '@BeginTransaction'],
                correctAnswer: '@Transactional'
              }
            ]
          }
        ]
      },
      {
        id: '32',
        technology: 'Go',
        description: 'Linguagem de programação de código aberto para construção de software escalável',
        quizOptions: [
          {
            id: '321',
            title: 'Fundamentos',
            questions: [
              {
                id: '3211',
                question: 'Qual é o tipo de dado básico para representar números inteiros em Go?',
                answers: ['int', 'integer', 'int32', 'int64'],
                correctAnswer: 'int'
              },
              {
                id: '3212',
                question: 'Qual é a palavra-chave usada para definir uma função em Go?',
                answers: ['function', 'func', 'method', 'procedure'],
                correctAnswer: 'func'
              },
              {
                id: '3213',
                question: 'Qual é a sintaxe correta para fazer um loop em Go?',
                answers: ['loop', 'for', 'while', 'foreach'],
                correctAnswer: 'for'
              },
              {
                id: '3214',
                question: 'Qual é a biblioteca padrão usada em Go para fazer solicitações HTTP?',
                answers: ['http', 'net', 'web', 'request'],
                correctAnswer: 'net/http'
              },
              {
                id: '3215',
                question: 'Qual é a palavra-chave usada para definir uma estrutura (struct) em Go?',
                answers: ['structure', 'struct', 'class', 'object'],
                correctAnswer: 'struct'
              }
            ]
          }
        ]
      },
      {
        id: '33',
        technology: 'Node JS',
        description: 'Ambiente de tempo de execução JavaScript assíncrono baseado no V8 do Chrome',
        quizOptions: [
          {
            id: '331',
            title: 'Fundamentos',
            questions: [
              {
                id: '3311',
                question: 'Qual é o módulo usado para criar um servidor HTTP em Node.js?',
                answers: ['http', 'fs', 'path', 'url'],
                correctAnswer: 'http'
              },
              {
                id: '3312',
                question: 'Qual é o comando usado para iniciar um aplicativo Node.js?',
                answers: ['node start', 'node run', 'node app', 'node index'],
                correctAnswer: 'node app'
              },
              {
                id: '3313',
                question: 'Qual é o módulo usado para acessar o sistema de arquivos em Node.js?',
                answers: ['http', 'fs', 'path', 'url'],
                correctAnswer: 'fs'
              },
              {
                id: '3314',
                question: 'Qual é o módulo usado para fazer solicitações HTTP em Node.js?',
                answers: ['http', 'fs', 'path', 'request'],
                correctAnswer: 'http'
              },
              {
                id: '3315',
                question: 'Qual é o módulo usado para gerenciar dependências em Node.js?',
                answers: ['npm', 'yarn', 'bower', 'gulp'],
                correctAnswer: 'npm'
              }
            ]
          }
        ]
      }
    ]
  }
];

