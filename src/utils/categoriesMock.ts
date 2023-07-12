import { CategoryTypeProps } from "../@types/categoryTypeProps";

type QuestionTypeProps = {
  id: string;
  question: string;
  answers: string[];
  correctAnswer: string;
};

export type QuizTypeProps = {
  id: string;
  title: string;
  questions: QuestionTypeProps[];
};

type CategoryTypes = {
  id: string;
  technology: string;
  description: string;
  quizOptions: QuizTypeProps[];
};

type Props = {
  id: string;
  category: CategoryTypeProps;
  technologies: CategoryTypes[];
};

export const categoriesMock: Props[] = [
  {
    id: "1",
    category: "MOBILE",
    technologies: [
      {
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
      },
      {
        id: "13",
        technology: "Swift",
        description:
          "Linguagem de programação para desenvolvimento iOS, macOS, watchOS e tvOS",
        quizOptions: [
          {
            id: "131",
            title: "Fundamentos",
            questions: [
              {
                id: "1311",
                question:
                  "Qual é a palavra-chave usada para definir uma variável mutável em Swift?",
                answers: ["let", "mutable", "var", "constant"],
                correctAnswer: "var",
              },
              {
                id: "1312",
                question:
                  "Qual é a sintaxe correta para criar uma função em Swift?",
                answers: [
                  "function myFunction() { }",
                  "def myFunction() { }",
                  "func myFunction() { }",
                  "procedure myFunction() { }",
                ],
                correctAnswer: "func myFunction() { }",
              },
              {
                id: "1313",
                question:
                  "Qual é o tipo de dado usado em Swift para representar um valor nulo?",
                answers: ["null", "nil", "none", "undefined"],
                correctAnswer: "nil",
              },
              {
                id: "1314",
                question:
                  "Qual é a palavra-chave usada para fazer um loop em Swift?",
                answers: ["loop", "for", "while", "repeat"],
                correctAnswer: "for",
              },
              {
                id: "1315",
                question:
                  "Qual é a classe base para todas as exceções em Swift?",
                answers: [
                  "Exception",
                  "Error",
                  "Throwable",
                  "RuntimeException",
                ],
                correctAnswer: "Error",
              },
            ],
          },
          {
            id: "132",
            title: "Opcionais",
            questions: [
              {
                id: "1321",
                question:
                  "Qual é o operador usado em Swift para desembrulhar um valor opcional de forma segura?",
                answers: ["!", "??", "?.", "->"],
                correctAnswer: "?.",
              },
              {
                id: "1322",
                question:
                  "Qual é a diferença entre um opcional encadeado e um opcional forçado?",
                answers: [
                  "Não há diferença, ambos são usados para tratar valores nulos",
                  "O opcional encadeado usa o operador ?., enquanto o opcional forçado usa o operador !",
                  "O opcional encadeado é usado em Swift 4, enquanto o opcional forçado é usado em versões anteriores",
                  "O opcional forçado usa o operador ?., enquanto o opcional encadeado usa o operador !",
                ],
                correctAnswer:
                  "O opcional encadeado usa o operador ?., enquanto o opcional forçado usa o operador !",
              },
              {
                id: "1323",
                question:
                  "Qual é o método usado em Swift para verificar se um valor opcional contém um valor não nulo?",
                answers: [
                  "isEmpty()",
                  "isNull()",
                  "isNotNil()",
                  "isNoneEmpty()",
                ],
                correctAnswer: "isNotNil()",
              },
            ],
          },
          {
            id: "133",
            title: "Coleções",
            questions: [
              {
                id: "1331",
                question:
                  "Qual é a coleção em Swift que armazena múltiplos valores do mesmo tipo em uma ordem específica?",
                answers: ["Dictionary", "Set", "Array", "Tuple"],
                correctAnswer: "Array",
              },
              {
                id: "1332",
                question:
                  "Qual é a diferença entre um Array e um Set em Swift?",
                answers: [
                  "Não há diferença, ambos armazenam valores em uma ordem específica",
                  "O Array permite valores duplicados, enquanto o Set não permite duplicados",
                  "O Set permite valores duplicados, enquanto o Array não permite duplicados",
                  "O Set é uma coleção não ordenada, enquanto o Array é uma coleção ordenada",
                ],
                correctAnswer:
                  "O Array permite valores duplicados, enquanto o Set não permite duplicados",
              },
              {
                id: "1333",
                question:
                  "Qual é o método usado em Swift para adicionar um elemento no final de um Array?",
                answers: ["push()", "add()", "append()", "insert()"],
                correctAnswer: "append()",
              },
            ],
          },
          {
            id: "134",
            title: "Classes e Estruturas",
            questions: [
              {
                id: "1341",
                question:
                  "Qual é a diferença entre uma classe e uma estrutura em Swift?",
                answers: [
                  "Não há diferença, ambos são usados para definir objetos",
                  "As classes são passadas por referência, enquanto as estruturas são passadas por valor",
                  "As estruturas são passadas por referência, enquanto as classes são passadas por valor",
                  "As classes só podem ter métodos, enquanto as estruturas só podem ter propriedades",
                ],
                correctAnswer:
                  "As classes são passadas por referência, enquanto as estruturas são passadas por valor",
              },
              {
                id: "1342",
                question:
                  "Qual é a palavra-chave usada em Swift para definir uma classe?",
                answers: ["class", "struct", "object", "type"],
                correctAnswer: "class",
              },
              {
                id: "1343",
                question:
                  "Qual é o método usado em Swift para definir um inicializador em uma classe?",
                answers: ["init()", "constructor()", "create()", "new()"],
                correctAnswer: "init()",
              },
            ],
          },
        ],
      },
      {
        id: "14",
        technology: "Flutter",
        description:
          "UI toolkit para criação de aplicativos nativos para iOS, Android e web",
        quizOptions: [
          {
            id: "141",
            title: "Fundamentos",
            questions: [
              {
                id: "1411",
                question:
                  "Qual é a linguagem de programação principal usada no Flutter?",
                answers: ["JavaScript", "Kotlin", "Swift", "Dart"],
                correctAnswer: "Dart",
              },
              {
                id: "1412",
                question:
                  "Qual é a biblioteca usada para criar interfaces de usuário no Flutter?",
                answers: ["UIKit", "CoreGraphics", "MaterialUI", "Widgets"],
                correctAnswer: "Widgets",
              },
              {
                id: "1413",
                question:
                  "Qual é o elemento básico para construir interfaces no Flutter?",
                answers: ["Views", "Widgets", "Components", "Layouts"],
                correctAnswer: "Widgets",
              },
              {
                id: "1414",
                question:
                  "Qual é a arquitetura recomendada para desenvolver aplicativos no Flutter?",
                answers: ["MVC", "MVVM", "BLoC", "Redux"],
                correctAnswer: "BLoC",
              },
              {
                id: "1415",
                question:
                  "Qual é o comando usado para executar um aplicativo Flutter?",
                answers: [
                  "flutter run",
                  "flutter start",
                  "flutter build",
                  "flutter create",
                ],
                correctAnswer: "flutter run",
              },
            ],
          },
          {
            id: "142",
            title: "Widgets Avançados",
            questions: [
              {
                id: "1421",
                question:
                  "Qual é o widget usado em Flutter para criar um botão?",
                answers: ["Button", "Touchable", "InkWell", "RaisedButton"],
                correctAnswer: "ElevatedButton",
              },
              {
                id: "1422",
                question:
                  "Qual é o widget usado em Flutter para criar um campo de entrada de texto?",
                answers: ["TextField", "InputField", "TextEntry", "EditText"],
                correctAnswer: "TextField",
              },
              {
                id: "1423",
                question:
                  "Qual é o widget usado em Flutter para exibir uma lista rolável?",
                answers: ["ScrollList", "List", "ListView", "ScrollView"],
                correctAnswer: "ListView",
              },
            ],
          },
          {
            id: "143",
            title: "Navegação e Roteamento",
            questions: [
              {
                id: "1431",
                question:
                  "Qual é o widget usado em Flutter para navegar entre telas?",
                answers: ["Navigator", "Route", "Screen", "Page"],
                correctAnswer: "Navigator",
              },
              {
                id: "1432",
                question:
                  "Qual é o método usado em Flutter para empilhar uma nova tela na pilha de navegação?",
                answers: ["push()", "pop()", "navigate()", "route()"],
                correctAnswer: "push()",
              },
              {
                id: "1433",
                question:
                  "Como podemos passar parâmetros para uma nova tela durante a navegação em Flutter?",
                answers: [
                  "Através de uma função callback",
                  "Através de um objeto global",
                  "Através de um arquivo de configuração",
                  "Através de argumentos opcionais no método push()",
                ],
                correctAnswer:
                  "Através de argumentos opcionais no método push()",
              },
            ],
          },
          {
            id: "144",
            title: "Animações e Efeitos Visuais",
            questions: [
              {
                id: "1441",
                question:
                  "Qual é o widget usado em Flutter para criar animações?",
                answers: ["AnimatedContainer", "Animation", "Motion", "Tween"],
                correctAnswer: "AnimatedContainer",
              },
              {
                id: "1442",
                question:
                  "Qual é o widget usado em Flutter para criar transições entre telas?",
                answers: [
                  "FadeTransition",
                  "SlideTransition",
                  "ScaleTransition",
                  "Transition",
                ],
                correctAnswer: "PageRouteBuilder",
              },
              {
                id: "1443",
                question:
                  "Qual é o widget usado em Flutter para criar efeitos de sombra em um componente?",
                answers: ["Shadow", "BoxShadow", "Elevation", "ShadowEffect"],
                correctAnswer: "Container",
              },
            ],
          },
        ],
      },
      {
        id: "12",
        technology: "Kotlin",
        description:
          "Linguagem de programação moderna para desenvolvimento Android",
        quizOptions: [
          {
            id: "121",
            title: "Fundamentos",
            questions: [
              {
                id: "1211",
                question:
                  "Qual é o tipo de dado padrão para números inteiros em Kotlin?",
                answers: ["Int", "Float", "Double", "Long"],
                correctAnswer: "Int",
              },
              {
                id: "1212",
                question:
                  "Qual é o operador usado para verificar a igualdade entre duas variáveis em Kotlin?",
                answers: ["=", "==", "===", "!="],
                correctAnswer: "==",
              },
              {
                id: "1213",
                question:
                  "Qual é o tipo de dado usado em Kotlin para representar um valor nulo?",
                answers: ["Null", "Void", "None", "Nullability"],
                correctAnswer: "Null",
              },
              {
                id: "1214",
                question:
                  "Qual é a palavra-chave usada para definir uma função em Kotlin?",
                answers: ["function", "fun", "method", "proc"],
                correctAnswer: "fun",
              },
              {
                id: "1215",
                question:
                  "Qual é a classe base para todas as exceções em Kotlin?",
                answers: [
                  "Exception",
                  "Error",
                  "Throwable",
                  "RuntimeException",
                ],
                correctAnswer: "Throwable",
              },
            ],
          },
          {
            id: "122",
            title: "Classes e Objetos",
            questions: [
              {
                id: "1221",
                question:
                  "Qual é a diferença entre uma classe e um objeto em Kotlin?",
                answers: [
                  "Não há diferença, ambos são usados para definir objetos",
                  "As classes são instâncias de objetos",
                  "As classes têm estado e comportamento, enquanto os objetos são apenas instâncias de classes",
                  "Os objetos são instâncias de classes",
                ],
                correctAnswer:
                  "As classes têm estado e comportamento, enquanto os objetos são apenas instâncias de classes",
              },
              {
                id: "1222",
                question:
                  "Qual é a palavra-chave usada em Kotlin para definir uma classe?",
                answers: ["class", "struct", "object", "type"],
                correctAnswer: "class",
              },
              {
                id: "1223",
                question:
                  "Qual é o método usado em Kotlin para definir um construtor primário em uma classe?",
                answers: ["init()", "constructor()", "create()", "new()"],
                correctAnswer: "constructor()",
              },
            ],
          },
          {
            id: "123",
            title: "Coleções",
            questions: [
              {
                id: "1231",
                question:
                  "Qual é a coleção em Kotlin que armazena múltiplos valores do mesmo tipo em uma ordem específica?",
                answers: ["Dictionary", "Set", "Array", "List"],
                correctAnswer: "List",
              },
              {
                id: "1232",
                question:
                  "Qual é a diferença entre um Array e um Set em Kotlin?",
                answers: [
                  "Não há diferença, ambos armazenam valores em uma ordem específica",
                  "O Array permite valores duplicados, enquanto o Set não permite duplicados",
                  "O Set permite valores duplicados, enquanto o Array não permite duplicados",
                  "O Set é uma coleção não ordenada, enquanto o Array é uma coleção ordenada",
                ],
                correctAnswer:
                  "O Set não permite valores duplicados, enquanto o Array permite valores duplicados",
              },
              {
                id: "1233",
                question:
                  "Qual é o método usado em Kotlin para adicionar um elemento no final de uma lista?",
                answers: ["push()", "add()", "append()", "insert()"],
                correctAnswer: "add()",
              },
            ],
          },
          {
            id: "124",
            title: "Null Safety",
            questions: [
              {
                id: "1241",
                question:
                  "Qual é o operador usado em Kotlin para tratar valores nulos de forma segura?",
                answers: ["!", "??", "?.", "->"],
                correctAnswer: "?.",
              },
              {
                id: "1242",
                question:
                  "Qual é a diferença entre uma variável não anulável e uma variável anulável em Kotlin?",
                answers: [
                  "Não há diferença, ambos os tipos de variáveis podem conter valores nulos",
                  "A variável não anulável não pode conter valores nulos, enquanto a variável anulável pode",
                  "A variável anulável não pode conter valores nulos, enquanto a variável não anulável pode",
                  "A variável não anulável é usada para tipos primitivos, enquanto a variável anulável é usada para objetos",
                ],
                correctAnswer:
                  "A variável não anulável não pode conter valores nulos, enquanto a variável anulável pode",
              },
              {
                id: "1243",
                question:
                  "Qual é o método usado em Kotlin para verificar se um valor é nulo?",
                answers: [
                  "isNull()",
                  "isEmpty()",
                  "isNotNull()",
                  "isNoneEmpty()",
                ],
                correctAnswer: "isNull()",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "2",
    category: "FRONT-END",
    technologies: [
      {
        id: "21",
        technology: "React JS",
        description:
          "Biblioteca JavaScript para construção de interfaces de usuário",
        quizOptions: [
          {
            id: "211",
            title: "Componentes",
            questions: [
              {
                id: "2111",
                question:
                  "Qual componente no React.js é usado para renderizar um elemento HTML?",
                answers: [
                  "<DOMElement/>",
                  "<HTMLComponent/>",
                  "<RenderComponent/>",
                  "<div/>",
                ],
                correctAnswer: "<div/>",
              },
              {
                id: "2112",
                question:
                  "Qual método é chamado quando um componente está prestes a ser montado no DOM?",
                answers: [
                  "componentWillMount()",
                  "componentDidMount()",
                  "componentWillUpdate()",
                  "componentDidUpdate()",
                ],
                correctAnswer: "componentWillMount()",
              },
              {
                id: "2113",
                question:
                  "Qual hook do React é usado para adicionar estado a um componente funcional?",
                answers: [
                  "useEffect()",
                  "useContext()",
                  "useReducer()",
                  "useState()",
                ],
                correctAnswer: "useState()",
              },
              {
                id: "2114",
                question:
                  "Qual ciclo de vida do React é chamado imediatamente antes de um componente ser desmontado?",
                answers: [
                  "componentWillUnmount()",
                  "componentDidUnmount()",
                  "componentWillUpdate()",
                  "componentDidUpdate()",
                ],
                correctAnswer: "componentWillUnmount()",
              },
              {
                id: "2115",
                question:
                  "Qual método é chamado sempre que o estado ou as propriedades de um componente são atualizadas?",
                answers: [
                  "componentWillReceiveProps()",
                  "shouldComponentUpdate()",
                  "componentDidUpdate()",
                  "render()",
                ],
                correctAnswer: "componentDidUpdate()",
              },
            ],
          },
          {
            id: "212",
            title: "Hooks",
            questions: [
              {
                id: "2121",
                question:
                  "Qual hook do React é usado para executar efeitos colaterais após renderizar um componente?",
                answers: [
                  "useEffect()",
                  "useMemo()",
                  "useCallback()",
                  "useRef()",
                ],
                correctAnswer: "useEffect()",
              },
              {
                id: "2122",
                question:
                  "Qual hook do React é usado para acessar o contexto definido por um componente pai?",
                answers: [
                  "useEffect()",
                  "useMemo()",
                  "useContext()",
                  "useRef()",
                ],
                correctAnswer: "useContext()",
              },
              {
                id: "2123",
                question:
                  "Qual método é usado para atualizar o estado de um componente e agendar uma re-renderização?",
                answers: [
                  "setState()",
                  "updateState()",
                  "modifyState()",
                  "changeState()",
                ],
                correctAnswer: "setState()",
              },
              {
                id: "2124",
                question:
                  "Qual ciclo de vida do React é chamado após a renderização do componente?",
                answers: [
                  "componentWillReceiveProps()",
                  "shouldComponentUpdate()",
                  "componentDidUpdate()",
                  "render()",
                ],
                correctAnswer: "componentDidUpdate()",
              },
              {
                id: "2125",
                question:
                  "Qual método é usado para evitar a re-renderização desnecessária de um componente?",
                answers: [
                  "shouldComponentUpdate()",
                  "componentWillUpdate()",
                  "componentDidUpdate()",
                  "render()",
                ],
                correctAnswer: "shouldComponentUpdate()",
              },
            ],
          },
          {
            id: "213",
            title: "State Management",
            questions: [
              {
                id: "2131",
                question:
                  "Qual biblioteca popular de gerenciamento de estado pode ser usada com React JS?",
                answers: ["Redux", "Axios", "Lodash", "Moment.js"],
                correctAnswer: "Redux",
              },
              {
                id: "2132",
                question:
                  "Qual é a principal vantagem do gerenciamento de estado centralizado?",
                answers: [
                  "Melhora a performance da aplicação",
                  "Simplifica o código dos componentes",
                  "Reduz o número de dependências",
                  "Permite compartilhar dados entre componentes",
                ],
                correctAnswer: "Permite compartilhar dados entre componentes",
              },
              {
                id: "2133",
                question:
                  "Qual método é usado para despachar uma ação no Redux?",
                answers: [
                  "dispatchAction()",
                  "triggerAction()",
                  "runAction()",
                  "dispatch()",
                ],
                correctAnswer: "dispatch()",
              },
              {
                id: "2134",
                question:
                  "Qual é o nome do conceito que descreve a previsibilidade do estado em uma aplicação Redux?",
                answers: [
                  "Estado único",
                  "Imutabilidade",
                  "Middleware",
                  "Fluxo unidirecional",
                ],
                correctAnswer: "Fluxo unidirecional",
              },
              {
                id: "2135",
                question:
                  "Qual função é usada para definir a lógica de atualização do estado em uma store do Redux?",
                answers: ["reducer()", "store()", "action()", "selector()"],
                correctAnswer: "reducer()",
              },
            ],
          },
          {
            id: "214",
            title: "React Router",
            questions: [
              {
                id: "2141",
                question:
                  "Qual pacote pode ser usado para implementar o roteamento em uma aplicação React JS?",
                answers: [
                  "React DOM",
                  "React Router",
                  "React Redux",
                  "React Bootstrap",
                ],
                correctAnswer: "React Router",
              },
              {
                id: "2142",
                question:
                  "Qual componente é usado para definir uma rota em uma aplicação React Router?",
                answers: ["<Route/>", "<Link/>", "<Switch/>", "<Redirect/>"],
                correctAnswer: "<Route/>",
              },
              {
                id: "2143",
                question:
                  "Qual é a finalidade do componente <Switch/> do React Router?",
                answers: [
                  "Redirecionar para uma nova rota",
                  "Alternar entre diferentes rotas",
                  "Exibir uma rota específica",
                  "Fazer a renderização condicional de rotas",
                ],
                correctAnswer: "Alternar entre diferentes rotas",
              },
              {
                id: "2144",
                question:
                  "Qual é o hook do React Router usado para acessar os parâmetros da URL?",
                answers: [
                  "useURLParams()",
                  "useParams()",
                  "useQueryParams()",
                  "useLocation()",
                ],
                correctAnswer: "useParams()",
              },
              {
                id: "2145",
                question:
                  "Qual é a finalidade do componente <Link/> do React Router?",
                answers: [
                  "Navegar para uma nova rota",
                  "Exibir o conteúdo de uma rota",
                  "Alternar entre diferentes rotas",
                  "Redirecionar para uma nova rota",
                ],
                correctAnswer: "Navegar para uma nova rota",
              },
            ],
          },
        ],
      },
      {
        id: "23",
        technology: "Vue JS",
        description:
          "Framework JavaScript progressivo para construção de interfaces de usuário",
        quizOptions: [
          {
            id: "231",
            title: "Componentes",
            questions: [
              {
                id: "2311",
                question:
                  "Qual é a diretiva usada para criar um loop em Vue.js?",
                answers: ["v-for", "v-if", "v-switch", "v-while"],
                correctAnswer: "v-for",
              },
              {
                id: "2312",
                question: "Qual é o ciclo de vida de um componente em Vue.js?",
                answers: [
                  "created, mounted, updated",
                  "beforeCreate, created, beforeMount",
                  "beforeUpdate, updated, beforeDestroy",
                  "mounted, updated, destroyed",
                ],
                correctAnswer: "beforeCreate, created, beforeMount",
              },
              {
                id: "2313",
                question:
                  "Qual é o hook usado para adicionar estado a um componente em Vue.js?",
                answers: [
                  "useEffect()",
                  "useContext()",
                  "useReducer()",
                  "useState()",
                ],
                correctAnswer: "useState()",
              },
              {
                id: "2314",
                question:
                  "Qual é a diretiva usada para vincular um atributo HTML a um valor no Vue.js?",
                answers: ["v-bind", "v-model", "v-on", "v-text"],
                correctAnswer: "v-bind",
              },
              {
                id: "2315",
                question:
                  "Qual é a biblioteca usada para fazer solicitações HTTP no Vue.js?",
                answers: ["axios", "fetch", "http", "ajax"],
                correctAnswer: "axios",
              },
            ],
          },
          {
            id: "232",
            title: "Directives",
            questions: [
              {
                id: "2321",
                question:
                  "Qual diretiva é usada para exibir ou ocultar elementos com base em uma condição em Vue.js?",
                answers: ["v-if", "v-for", "v-show", "v-bind"],
                correctAnswer: "v-if",
              },
              {
                id: "2322",
                question:
                  "Qual diretiva é usada para executar uma função quando um evento é acionado em Vue.js?",
                answers: ["v-bind", "v-on", "v-model", "v-text"],
                correctAnswer: "v-on",
              },
              {
                id: "2323",
                question:
                  "Qual diretiva é usada para exibir o valor de uma variável em Vue.js?",
                answers: ["v-text", "v-bind", "v-model", "v-on"],
                correctAnswer: "v-text",
              },
              {
                id: "2324",
                question:
                  "Qual diretiva é usada para vincular um campo de entrada a uma variável em Vue.js?",
                answers: ["v-bind", "v-model", "v-on", "v-text"],
                correctAnswer: "v-model",
              },
              {
                id: "2325",
                question:
                  "Qual diretiva é usada para iterar sobre uma lista em Vue.js?",
                answers: ["v-for", "v-if", "v-show", "v-bind"],
                correctAnswer: "v-for",
              },
            ],
          },
          {
            id: "233",
            title: "Computed Properties",
            questions: [
              {
                id: "2331",
                question:
                  "Qual é o objetivo das propriedades computadas em Vue.js?",
                answers: [
                  "Calcular valores dinamicamente",
                  "Armazenar dados no estado do componente",
                  "Executar tarefas assíncronas",
                  "Manipular eventos do DOM",
                ],
                correctAnswer: "Calcular valores dinamicamente",
              },
              {
                id: "2332",
                question:
                  "Como as propriedades computadas diferem dos métodos em Vue.js?",
                answers: [
                  "As propriedades computadas são armazenadas em cache",
                  "As propriedades computadas não podem acessar o estado do componente",
                  "As propriedades computadas são executadas de forma síncrona",
                  "As propriedades computadas não podem conter lógica condicional",
                ],
                correctAnswer:
                  "As propriedades computadas são armazenadas em cache",
              },
              {
                id: "2333",
                question:
                  "Qual é a sintaxe correta para definir uma propriedade computada em Vue.js?",
                answers: [
                  "computed: {}",
                  "methods: {}",
                  "data: {}",
                  "props: {}",
                ],
                correctAnswer: "computed: {}",
              },
              {
                id: "2334",
                question:
                  "Como acessar uma propriedade computada em um componente Vue.js?",
                answers: [
                  "this.computedProperty",
                  "this.methods.computedProperty",
                  "this.data.computedProperty",
                  "this.props.computedProperty",
                ],
                correctAnswer: "this.computedProperty",
              },
              {
                id: "2335",
                question:
                  "Qual é a principal vantagem das propriedades computadas em Vue.js?",
                answers: [
                  "Melhoram o desempenho da aplicação",
                  "Simplificam a lógica do componente",
                  "Permitem a comunicação entre componentes",
                  "Facilitam a manipulação do DOM",
                ],
                correctAnswer: "Melhoram o desempenho da aplicação",
              },
            ],
          },
          {
            id: "234",
            title: "Vue Router",
            questions: [
              {
                id: "2341",
                question:
                  "Qual pacote pode ser usado para implementar o roteamento em uma aplicação Vue.js?",
                answers: [
                  "Vue DOM",
                  "Vue Router",
                  "Vue Redux",
                  "Vue Bootstrap",
                ],
                correctAnswer: "Vue Router",
              },
              {
                id: "2342",
                question:
                  "Qual é o componente usado para definir uma rota em uma aplicação Vue Router?",
                answers: [
                  "<router-link/>",
                  "<router-view/>",
                  "<router-switch/>",
                  "<router-redirect/>",
                ],
                correctAnswer: "<router-link/>",
              },
              {
                id: "2343",
                question:
                  "Qual é a finalidade do componente <router-view/> no Vue Router?",
                answers: [
                  "Redirecionar para uma nova rota",
                  "Alternar entre diferentes rotas",
                  "Exibir o conteúdo de uma rota",
                  "Fazer a renderização condicional de rotas",
                ],
                correctAnswer: "Exibir o conteúdo de uma rota",
              },
              {
                id: "2344",
                question:
                  "Qual é o hook do Vue Router usado para acessar os parâmetros da URL?",
                answers: [
                  "useURLParams()",
                  "useParams()",
                  "useQueryParams()",
                  "useRoute()",
                ],
                correctAnswer: "useRoute()",
              },
              {
                id: "2345",
                question:
                  "Qual é a finalidade do componente <router-link/> no Vue Router?",
                answers: [
                  "Navegar para uma nova rota",
                  "Exibir o conteúdo de uma rota",
                  "Alternar entre diferentes rotas",
                  "Redirecionar para uma nova rota",
                ],
                correctAnswer: "Navegar para uma nova rota",
              },
            ],
          },
        ],
      },
      {
        id: "22",
        technology: "Angular JS",
        description:
          "Plataforma de desenvolvimento de aplicativos web em TypeScript",
        quizOptions: [
          {
            id: "221",
            title: "Componentes",
            questions: [
              {
                id: "2211",
                question:
                  "Qual é o decorador usado para criar um componente em Angular?",
                answers: ["@Component", "@Directive", "@Module", "@Injectable"],
                correctAnswer: "@Component",
              },
              {
                id: "2212",
                question:
                  "Qual é a diretiva usada para criar um loop em Angular?",
                answers: ["*ngFor", "*ngIf", "*ngSwitch", "*ngWhile"],
                correctAnswer: "*ngFor",
              },
              {
                id: "2213",
                question:
                  "Qual é o serviço usado para fazer solicitações HTTP em Angular?",
                answers: [
                  "HttpClient",
                  "HttpService",
                  "HttpProvider",
                  "HttpRequest",
                ],
                correctAnswer: "HttpClient",
              },
              {
                id: "2214",
                question: "Qual é o ciclo de vida de um componente em Angular?",
                answers: [
                  "OnInit, OnDestroy, OnChanges",
                  "OnCreate, OnUpdate, OnDestroy",
                  "BeforeInit, OnInit, AfterInit",
                  "OnInit, AfterViewInit, OnDestroy",
                ],
                correctAnswer: "OnInit, OnDestroy, OnChanges",
              },
              {
                id: "2215",
                question: "Qual é a injeção de dependência usada em Angular?",
                answers: ["@Inject", "@Provide", "@Injectable", "@Dependency"],
                correctAnswer: "@Injectable",
              },
            ],
          },
          {
            id: "222",
            title: "Templates",
            questions: [
              {
                id: "2221",
                question:
                  "Qual é a sintaxe usada para fazer interpolação de variáveis em um template Angular?",
                answers: [
                  "{{ variable }}",
                  "[[ variable ]]",
                  "{ variable }",
                  "( variable )",
                ],
                correctAnswer: "{{ variable }}",
              },
              {
                id: "2222",
                question:
                  "Qual é a diretiva usada para exibir ou ocultar elementos com base em uma condição em Angular?",
                answers: ["*ngIf", "*ngFor", "*ngSwitch", "*ngWhile"],
                correctAnswer: "*ngIf",
              },
              {
                id: "2223",
                question:
                  "Qual é a sintaxe usada para criar um evento de ligação em Angular?",
                answers: ["(event)", "[event]", "{{ event }}", "[(event)]"],
                correctAnswer: "(event)",
              },
              {
                id: "2224",
                question:
                  "Qual é a diretiva usada para estilizar um elemento condicionalmente em Angular?",
                answers: ["[ngClass]", "[ngStyle]", "[ngIf]", "[ngSwitch]"],
                correctAnswer: "[ngClass]",
              },
              {
                id: "2225",
                question:
                  "Qual é a diretiva usada para alternar entre diferentes opções em um template Angular?",
                answers: ["*ngSwitch", "*ngIf", "*ngFor", "*ngWhile"],
                correctAnswer: "*ngSwitch",
              },
            ],
          },

          {
            id: "223",
            title: "Services",
            questions: [
              {
                id: "2231",
                question: "Qual é a finalidade dos serviços em Angular?",
                answers: [
                  "Compartilhar dados entre componentes",
                  "Manipular eventos do DOM",
                  "Estilizar elementos do template",
                  "Realizar lógica de negócio",
                ],
                correctAnswer: "Realizar lógica de negócio",
              },
              {
                id: "2232",
                question:
                  "Qual é o decorador usado para criar um serviço em Angular?",
                answers: [
                  "@Service",
                  "@Injectable",
                  "@Provider",
                  "@Dependency",
                ],
                correctAnswer: "@Injectable",
              },
              {
                id: "2233",
                question:
                  "Como um serviço é injetado em um componente em Angular?",
                answers: [
                  "Por meio do construtor do componente",
                  "Por meio do método ngOnInit() do componente",
                  "Por meio da propriedade services[] do componente",
                  "Por meio do método injectService() do componente",
                ],
                correctAnswer: "Por meio do construtor do componente",
              },
              {
                id: "2234",
                question:
                  "Qual é o método usado para fazer solicitações HTTP em um serviço Angular?",
                answers: [
                  "httpClient.post()",
                  "httpService.request()",
                  "httpRequest.send()",
                  "httpClient.get()",
                ],
                correctAnswer: "httpClient.get()",
              },
              {
                id: "2235",
                question:
                  "Qual é a finalidade do módulo HttpClientModule em Angular?",
                answers: [
                  "Importar e configurar o serviço HttpClient",
                  "Importar e configurar o serviço HttpService",
                  "Importar e configurar o provedor HttpProvider",
                  "Importar e configurar o objeto HttpRequest",
                ],
                correctAnswer: "Importar e configurar o serviço HttpClient",
              },
            ],
          },
          {
            id: "224",
            title: "Routing",
            questions: [
              {
                id: "2241",
                question:
                  "Qual pacote pode ser usado para implementar o roteamento em uma aplicação Angular?",
                answers: [
                  "@angular/core",
                  "@angular/router",
                  "@angular/http",
                  "@angular/forms",
                ],
                correctAnswer: "@angular/router",
              },
              {
                id: "2242",
                question:
                  "Qual é o componente usado para definir uma rota em uma aplicação Angular?",
                answers: [
                  "<router-link/>",
                  "<router-view/>",
                  "<router-outlet/>",
                  "<router-redirect/>",
                ],
                correctAnswer: "<router-outlet/>",
              },
              {
                id: "2243",
                question:
                  "Qual é a finalidade do componente <router-outlet/> em Angular?",
                answers: [
                  "Redirecionar para uma nova rota",
                  "Alternar entre diferentes rotas",
                  "Exibir o conteúdo de uma rota",
                  "Fazer a renderização condicional de rotas",
                ],
                correctAnswer: "Exibir o conteúdo de uma rota",
              },
              {
                id: "2244",
                question:
                  "Qual é o serviço usado para acessar os parâmetros da URL em Angular?",
                answers: [
                  "router.params",
                  "route.params",
                  "router.queryParams",
                  "route.queryParams",
                ],
                correctAnswer: "route.params",
              },
              {
                id: "2245",
                question:
                  "Qual é a finalidade do componente <router-link/> em Angular?",
                answers: [
                  "Navegar para uma nova rota",
                  "Exibir o conteúdo de uma rota",
                  "Alternar entre diferentes rotas",
                  "Redirecionar para uma nova rota",
                ],
                correctAnswer: "Navegar para uma nova rota",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "3",
    category: "BACK-END",
    technologies: [
      {
        id: "31",
        technology: "Spring",
        description: "Framework para desenvolvimento de aplicativos Java",
        quizOptions: [
          {
            id: "311",
            title: "Fundamentos",
            questions: [
              {
                id: "3111",
                question:
                  "Qual é a anotação usada para definir um ponto de extremidade de API no Spring?",
                answers: [
                  "@Endpoint",
                  "@Controller",
                  "@Service",
                  "@RestController",
                ],
                correctAnswer: "@RestController",
              },
              {
                id: "3112",
                question:
                  "Qual é a anotação usada para definir uma rota GET no Spring?",
                answers: ["@Get", "@GetRoute", "@GetMapping", "@Request"],
                correctAnswer: "@GetMapping",
              },
              {
                id: "3113",
                question:
                  "Qual é a anotação usada para definir uma rota POST no Spring?",
                answers: ["@Post", "@PostRoute", "@PostMapping", "@Request"],
                correctAnswer: "@PostMapping",
              },
              {
                id: "3114",
                question:
                  "Qual é a anotação usada para definir uma injeção de dependência no Spring?",
                answers: ["@Inject", "@Provide", "@Autowired", "@Dependency"],
                correctAnswer: "@Autowired",
              },
              {
                id: "3115",
                question:
                  "Qual é a anotação usada para definir uma transação no Spring?",
                answers: [
                  "@Transactional",
                  "@Transaction",
                  "@TransactionManager",
                  "@BeginTransaction",
                ],
                correctAnswer: "@Transactional",
              },
            ],
          },
          {
            id: "312",
            title: "Data Access",
            questions: [
              {
                id: "3121",
                question:
                  "Qual é a anotação usada para definir uma entidade persistente no Spring?",
                answers: ["@Entity", "@Persistent", "@Persist", "@Persistence"],
                correctAnswer: "@Entity",
              },
              {
                id: "3122",
                question:
                  "Qual é a anotação usada para definir uma chave primária em uma entidade no Spring?",
                answers: ["@Key", "@Id", "@PrimaryKey", "@Primary"],
                correctAnswer: "@Id",
              },
              {
                id: "3123",
                question:
                  "Qual é a anotação usada para definir uma consulta personalizada no Spring?",
                answers: ["@Query", "@CustomQuery", "@NamedQuery", "@Custom"],
                correctAnswer: "@Query",
              },
              {
                id: "3124",
                question:
                  "Qual é a anotação usada para definir uma associação entre entidades no Spring?",
                answers: ["@Association", "@Join", "@JoinTable", "@Relation"],
                correctAnswer: "@JoinTable",
              },
              {
                id: "3125",
                question:
                  "Qual é a anotação usada para definir um repositório de acesso a dados no Spring?",
                answers: [
                  "@Repository",
                  "@DataAccess",
                  "@DataRepository",
                  "@DataAccessObject",
                ],
                correctAnswer: "@Repository",
              },
            ],
          },
          {
            id: "313",
            title: "Security",
            questions: [
              {
                id: "3131",
                question:
                  "Qual é a anotação usada para definir uma configuração de segurança no Spring?",
                answers: [
                  "@SecurityConfig",
                  "@Secure",
                  "@EnableSecurity",
                  "@Configuration",
                ],
                correctAnswer: "@Configuration",
              },
              {
                id: "3132",
                question:
                  "Qual é a anotação usada para definir um método protegido por autenticação no Spring?",
                answers: [
                  "@Authenticated",
                  "@Secure",
                  "@EnableAuth",
                  "@Secured",
                ],
                correctAnswer: "@Secured",
              },
              {
                id: "3133",
                question:
                  "Qual é a anotação usada para definir um método protegido por autorização no Spring?",
                answers: [
                  "@Authorized",
                  "@EnableAuth",
                  "@Secure",
                  "@PreAuthorize",
                ],
                correctAnswer: "@PreAuthorize",
              },
              {
                id: "3134",
                question:
                  "Qual é a anotação usada para definir uma configuração de CORS (Cross-Origin Resource Sharing) no Spring?",
                answers: [
                  "@EnableCORS",
                  "@CrossOrigin",
                  "@CORSConfig",
                  "@AllowCrossOrigin",
                ],
                correctAnswer: "@CrossOrigin",
              },
              {
                id: "3135",
                question:
                  "Qual é a anotação usada para definir um provedor de autenticação personalizado no Spring?",
                answers: [
                  "@AuthenticationProvider",
                  "@AuthProvider",
                  "@CustomAuth",
                  "@AuthConfig",
                ],
                correctAnswer: "@AuthenticationProvider",
              },
            ],
          },
          {
            id: "314",
            title: "Spring Boot",
            questions: [
              {
                id: "3141",
                question:
                  "Qual é a anotação usada para iniciar uma aplicação Spring Boot?",
                answers: [
                  "@SpringApp",
                  "@SpringBootApp",
                  "@AppStart",
                  "@StartApp",
                ],
                correctAnswer: "@SpringBootApplication",
              },
              {
                id: "3142",
                question:
                  "Qual é a anotação usada para definir uma propriedade de configuração externa no Spring Boot?",
                answers: [
                  "@Value",
                  "@ConfigProp",
                  "@ExternalConfig",
                  "@PropValue",
                ],
                correctAnswer: "@Value",
              },
              {
                id: "3143",
                question:
                  "Qual é a anotação usada para definir uma classe de configuração no Spring Boot?",
                answers: [
                  "@Config",
                  "@Configuration",
                  "@AppConfig",
                  "@SpringConfig",
                ],
                correctAnswer: "@Configuration",
              },
              {
                id: "3144",
                question:
                  "Qual é a anotação usada para definir um bean no Spring Boot?",
                answers: ["@Bean", "@Component", "@Service", "@Repository"],
                correctAnswer: "@Bean",
              },
              {
                id: "3145",
                question:
                  "Qual é a anotação usada para definir um controlador REST no Spring Boot?",
                answers: [
                  "@RestController",
                  "@Controller",
                  "@Service",
                  "@Component",
                ],
                correctAnswer: "@RestController",
              },
            ],
          },
        ],
      },
      {
        id: "32",
        technology: "Go",
        description:
          "Linguagem de programação de código aberto para construção de software escalável",
        quizOptions: [
          {
            id: "321",
            title: "Fundamentos",
            questions: [
              {
                id: "3211",
                question:
                  "Qual é o tipo de dado básico para representar números inteiros em Go?",
                answers: ["int", "integer", "int32", "int64"],
                correctAnswer: "int",
              },
              {
                id: "3212",
                question:
                  "Qual é a palavra-chave usada para definir uma função em Go?",
                answers: ["function", "func", "method", "procedure"],
                correctAnswer: "func",
              },
              {
                id: "3213",
                question: "Qual é a sintaxe correta para fazer um loop em Go?",
                answers: ["loop", "for", "while", "foreach"],
                correctAnswer: "for",
              },
              {
                id: "3214",
                question:
                  "Qual é a biblioteca padrão usada em Go para fazer solicitações HTTP?",
                answers: ["http", "net", "web", "request"],
                correctAnswer: "net/http",
              },
              {
                id: "3215",
                question:
                  "Qual é a palavra-chave usada para definir uma estrutura (struct) em Go?",
                answers: ["structure", "struct", "class", "object"],
                correctAnswer: "struct",
              },
            ],
          },
          {
            id: "322",
            title: "Concurrency",
            questions: [
              {
                id: "3221",
                question:
                  "Qual é a palavra-chave usada para iniciar uma goroutine em Go?",
                answers: ["go", "goroutine", "concurrent", "async"],
                correctAnswer: "go",
              },
              {
                id: "3222",
                question:
                  "Qual é a estrutura de dados usada para realizar comunicação entre goroutines em Go?",
                answers: ["channel", "queue", "buffer", "stack"],
                correctAnswer: "channel",
              },
              {
                id: "3223",
                question:
                  "Qual é a função usada para bloquear a execução de uma goroutine até que um canal esteja pronto em Go?",
                answers: ["close()", "len()", "make()", "receive()"],
                correctAnswer: "receive()",
              },
              {
                id: "3224",
                question: "Qual é a função usada para fechar um canal em Go?",
                answers: ["close()", "len()", "make()", "receive()"],
                correctAnswer: "close()",
              },
              {
                id: "3225",
                question:
                  "Qual é a função usada para obter o tamanho de um canal em Go?",
                answers: ["close()", "len()", "make()", "receive()"],
                correctAnswer: "len()",
              },
            ],
          },
          {
            id: "323",
            title: "Error Handling",
            questions: [
              {
                id: "3231",
                question:
                  "Qual é a estrutura de dados usada para representar um erro em Go?",
                answers: ["Error", "Exception", "Fault", "Panic"],
                correctAnswer: "Error",
              },
              {
                id: "3232",
                question: "Qual é a função usada para retornar um erro em Go?",
                answers: ["throw", "raise", "panic", "errors.New"],
                correctAnswer: "errors.New",
              },
              {
                id: "3233",
                question:
                  "Qual é a função usada para recuperar o valor de um erro em Go?",
                answers: ["catch", "recover", "try", "handle"],
                correctAnswer: "recover",
              },
              {
                id: "3234",
                question:
                  "Qual é a função usada para verificar se um erro ocorreu em Go?",
                answers: ["checkError", "hasError", "isError", "ifError"],
                correctAnswer: "ifError",
              },
              {
                id: "3235",
                question:
                  "Qual é a função usada para exibir uma mensagem de erro e encerrar a execução do programa em Go?",
                answers: [
                  "fmt.PrintError",
                  "fmt.Println",
                  "log.Fatal",
                  "os.Exit",
                ],
                correctAnswer: "log.Fatal",
              },
            ],
          },
          {
            id: "324",
            title: "Testing",
            questions: [
              {
                id: "3241",
                question:
                  "Qual é a biblioteca usada para escrever testes em Go?",
                answers: ["testing", "testgo", "gotest", "gocheck"],
                correctAnswer: "testing",
              },
              {
                id: "3242",
                question:
                  "Qual é o comando usado para executar testes em um pacote Go?",
                answers: ["go run", "go test", "go check", "go execute"],
                correctAnswer: "go test",
              },
              {
                id: "3243",
                question:
                  "Qual é a função usada para verificar se um resultado é igual a um valor esperado em um teste Go?",
                answers: ["assert", "equal", "check", "if"],
                correctAnswer: "assert",
              },
              {
                id: "3244",
                question:
                  "Qual é a função usada para registrar um teste em Go?",
                answers: ["test", "register", "run", "execute"],
                correctAnswer: "test",
              },
              {
                id: "3245",
                question:
                  "Qual é a função usada para exibir uma mensagem de erro em um teste Go?",
                answers: [
                  "fmt.PrintError",
                  "fmt.Println",
                  "t.Error",
                  "t.Errorf",
                ],
                correctAnswer: "t.Error",
              },
            ],
          },
        ],
      },
      {
        id: "33",
        technology: "Node JS",
        description:
          "Ambiente de tempo de execução JavaScript assíncrono baseado no V8 do Chrome",
        quizOptions: [
          {
            id: "331",
            title: "Fundamentos",
            questions: [
              {
                id: "3311",
                question:
                  "Qual é o módulo usado para criar um servidor HTTP em Node.js?",
                answers: ["http", "fs", "path", "url"],
                correctAnswer: "http",
              },
              {
                id: "3312",
                question:
                  "Qual é o comando usado para iniciar um aplicativo Node.js?",
                answers: ["node start", "node run", "node app", "node index"],
                correctAnswer: "node app",
              },
              {
                id: "3313",
                question:
                  "Qual é o módulo usado para acessar o sistema de arquivos em Node.js?",
                answers: ["http", "fs", "path", "url"],
                correctAnswer: "fs",
              },
              {
                id: "3314",
                question:
                  "Qual é o módulo usado para fazer solicitações HTTP em Node.js?",
                answers: ["http", "fs", "path", "request"],
                correctAnswer: "http",
              },
              {
                id: "3315",
                question:
                  "Qual é o módulo usado para gerenciar dependências em Node.js?",
                answers: ["npm", "yarn", "bower", "gulp"],
                correctAnswer: "npm",
              },
            ],
          },
          {
            id: "332",
            title: "Modules",
            questions: [
              {
                id: "3321",
                question:
                  "Qual é a função usada para exportar um módulo em Node.js?",
                answers: [
                  "export",
                  "module.exports",
                  "exports",
                  "module.export",
                ],
                correctAnswer: "module.exports",
              },
              {
                id: "3322",
                question:
                  "Qual é a função usada para importar um módulo em Node.js?",
                answers: ["require", "import", "include", "importModule"],
                correctAnswer: "require",
              },
              {
                id: "3323",
                question:
                  "Qual é o objeto usado para acessar argumentos da linha de comando em Node.js?",
                answers: [
                  "process.argv",
                  "commandLine.args",
                  "cli.arguments",
                  "args.process",
                ],
                correctAnswer: "process.argv",
              },
              {
                id: "3324",
                question:
                  "Qual é o módulo usado para lidar com caminhos de arquivos em Node.js?",
                answers: ["http", "fs", "path", "url"],
                correctAnswer: "path",
              },
              {
                id: "3325",
                question:
                  "Qual é o módulo usado para trabalhar com URLs em Node.js?",
                answers: ["http", "fs", "path", "url"],
                correctAnswer: "url",
              },
            ],
          },
          {
            id: "333",
            title: "Asynchronous Programming",
            questions: [
              {
                id: "3331",
                question:
                  "Qual é o conceito principal usado para lidar com operações assíncronas em Node.js?",
                answers: ["Promises", "Callbacks", "Async/Await", "Generators"],
                correctAnswer: "Callbacks",
              },
              {
                id: "3332",
                question:
                  "Qual é a função usada para executar uma função após um determinado tempo em Node.js?",
                answers: [
                  "setInterval()",
                  "setTimeout()",
                  "setImmediate()",
                  "process.nextTick()",
                ],
                correctAnswer: "setTimeout()",
              },
              {
                id: "3333",
                question:
                  "Qual é a função usada para ler dados de entrada do usuário em Node.js?",
                answers: [
                  "readline.question()",
                  "console.log()",
                  "process.stdout.write()",
                  "process.stdin.on()",
                ],
                correctAnswer: "readline.question()",
              },
              {
                id: "3334",
                question:
                  "Qual é a função usada para escrever dados de saída em Node.js?",
                answers: [
                  "console.log()",
                  "readline.question()",
                  "process.stdout.write()",
                  "process.stdin.on()",
                ],
                correctAnswer: "console.log()",
              },
              {
                id: "3335",
                question:
                  "Qual é o módulo usado para lidar com fluxo de dados em Node.js?",
                answers: ["http", "fs", "stream", "buffer"],
                correctAnswer: "stream",
              },
            ],
          },
          {
            id: "334",
            title: "Package Management",
            questions: [
              {
                id: "3341",
                question:
                  "Qual é o gerenciador de pacotes padrão usado em Node.js?",
                answers: ["npm", "yarn", "bower", "gulp"],
                correctAnswer: "npm",
              },
              {
                id: "3342",
                question:
                  "Qual é o comando usado para instalar um pacote em Node.js?",
                answers: ["npm install", "npm add", "npm get", "npm require"],
                correctAnswer: "npm install",
              },
              {
                id: "3343",
                question:
                  "Qual é o comando usado para iniciar um aplicativo Node.js com o npm?",
                answers: ["npm run start", "npm start", "npm run", "npm init"],
                correctAnswer: "npm start",
              },
              {
                id: "3344",
                question:
                  "Qual é o arquivo usado para definir as dependências de um projeto Node.js?",
                answers: [
                  "package.json",
                  "dependencies.json",
                  "node.json",
                  "app.json",
                ],
                correctAnswer: "package.json",
              },
              {
                id: "3345",
                question:
                  "Qual é o comando usado para atualizar os pacotes instalados em Node.js?",
                answers: [
                  "npm update",
                  "npm upgrade",
                  "npm install",
                  "npm refresh",
                ],
                correctAnswer: "npm update",
              },
            ],
          },
        ],
      },
    ],
  },
];
