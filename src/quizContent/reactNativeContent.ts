import { CategoryTypes } from "./quizContentTypes";

export const reactNativeContent: CategoryTypes = {
  id: "11",
  technology: "React Native",
  description: "Desenvolva apps iOS e Android com Javascript",
  quizOptions: [
    {
      id: "111",
      title: "Componentes",
      questions: [
        {
          id: "1111",
          question:
            "Qual componente no React Native é usado para criar um campo de entrada de texto?",
          answers: [
            "<TextEntry/>",
            "<TextInput/>",
            "<Input/>",
            "<TextField/>",
          ],
          correctAnswer: "<TextInput/>",
        },
        {
          id: "1112",
          question:
            "Qual componente no React Native é usado para exibir texto?",
          answers: ["<p/>", "<Paragraph/>", "<Text/>", "<View/>"],
          correctAnswer: "<Text/>",
        },
        {
          id: "1113",
          question:
            "Qual componente no React Native é usado para exibir imagens?",
          answers: ["<Image/>", "<Img/>", "<Photo/>", "<Background/>"],
          correctAnswer: "<Image/>",
        },
        {
          id: "1114",
          question:
            "Qual componente no React Native é usado para indicar um carregamento?",
          answers: [
            "<ProgressBar/>",
            "<ProgressIndicator/>",
            "<ActivityIndicator/>",
            "<Loader/>",
          ],
          correctAnswer: "<ActivityIndicator/>",
        },
        {
          id: "1115",
          question:
            "Qual componente no React Native é usado para criar uma lista de itens otimizada para alto desempenho?",
          answers: [
            "<VirtualizedList/>",
            "<FlatList/>",
            "<FastList/>",
            "<List/>",
          ],
          correctAnswer: "<FlatList/>",
        },
      ],
    },
    {
      id: "112",
      title: "Navegação",
      questions: [
        {
          id: "1121",
          question:
            "Qual componente no React Native é usado para criar uma pilha de navegação?",
          answers: [
            "<NavigationStack/>",
            "<StackNavigator/>",
            "<NavigationContainer/>",
            "<NavStack/>",
          ],
          correctAnswer: "<NavigationStack/>",
        },
        {
          id: "1122",
          question:
            "Qual método é usado para navegar para outra tela no React Native?",
          answers: [
            "navigateTo()",
            "navigate()",
            "goToScreen()",
            "pushScreen()",
          ],
          correctAnswer: "navigate()",
        },
        {
          id: "1123",
          question:
            "Como podemos passar parâmetros para outra tela durante a navegação?",
          answers: [
            "Através da função navigate()",
            "Através de um objeto global",
            "Através de um callback",
            "Através do Redux Store",
          ],
          correctAnswer: "Através da função navigate()",
        },
      ],
    },
    {
      id: "113",
      title: "Estilização",
      questions: [
        {
          id: "1131",
          question:
            "Qual propriedade no React Native é usada para definir a cor de fundo de um componente?",
          answers: [
            "background-color",
            "background",
            "color",
            "backgroundColor",
          ],
          correctAnswer: "backgroundColor",
        },
        {
          id: "1132",
          question:
            "Qual propriedade é usada para definir a margem de um componente no React Native?",
          answers: [
            "margin",
            "margin-horizontal",
            "margin-vertical",
            "padding",
          ],
          correctAnswer: "margin",
        },
        {
          id: "1133",
          question:
            "Como podemos estilizar componentes individualmente no React Native?",
          answers: [
            "Apenas através de classes CSS",
            "Apenas através de IDs",
            "Apenas inline no próprio componente",
            "Através de estilos externos",
          ],
          correctAnswer: "Apenas inline no próprio componente",
        },
      ],
    },
    {
      id: "114",
      title: "Gerenciamento de Estado",
      questions: [
        {
          id: "1141",
          question:
            "Qual biblioteca é comumente usada para gerenciamento de estado no React Native?",
          answers: ["Redux", "MobX", "Flux", "React Context"],
          correctAnswer: "Redux",
        },
        {
          id: "1142",
          question: "Qual é o objetivo principal do Redux?",
          answers: [
            "Gerenciar a navegação entre telas",
            "Gerenciar o estado global da aplicação",
            "Realizar chamadas de API assíncronas",
            "Criar animações fluidas",
          ],
          correctAnswer: "Gerenciar o estado global da aplicação",
        },
        {
          id: "1143",
          question: "Quais são os três princípios fundamentais do Redux?",
          answers: [
            "Ação, Redução, Estado",
            "Ação, Redução, Imutabilidade",
            "Estado, Imutabilidade, Componentes",
            "Componentes, Ação, Redução",
          ],
          correctAnswer: "Ação, Redução, Estado",
        },
      ],
    },
  ],
}