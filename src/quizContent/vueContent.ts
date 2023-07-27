import { CategoryTypes } from "./quizContentTypes";

export const vueContent: CategoryTypes = {
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
          question: "Qual é a diretiva usada para criar um loop em Vue.js?",
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
          question: "Qual é o objetivo das propriedades computadas em Vue.js?",
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
          correctAnswer: "As propriedades computadas são armazenadas em cache",
        },
        {
          id: "2333",
          question:
            "Qual é a sintaxe correta para definir uma propriedade computada em Vue.js?",
          answers: ["computed: {}", "methods: {}", "data: {}", "props: {}"],
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
          answers: ["Vue DOM", "Vue Router", "Vue Redux", "Vue Bootstrap"],
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
};
