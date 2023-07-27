import { CategoryTypes } from "./quizContentTypes";

export const reactContent: CategoryTypes = {
  id: "21",
  technology: "React JS",
  description: "Biblioteca JavaScript para construção de interfaces de usuário",
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
          answers: ["useEffect()", "useMemo()", "useCallback()", "useRef()"],
          correctAnswer: "useEffect()",
        },
        {
          id: "2122",
          question:
            "Qual hook do React é usado para acessar o contexto definido por um componente pai?",
          answers: ["useEffect()", "useMemo()", "useContext()", "useRef()"],
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
          question: "Qual método é usado para despachar uma ação no Redux?",
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
}
