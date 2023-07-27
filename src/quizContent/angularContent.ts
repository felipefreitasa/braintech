import { CategoryTypes } from "./quizContentTypes";

export const angularContent: CategoryTypes = {
  id: "22",
  technology: "Angular JS",
  description: "Plataforma de desenvolvimento de aplicativos web em TypeScript",
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
          question: "Qual é a diretiva usada para criar um loop em Angular?",
          answers: ["*ngFor", "*ngIf", "*ngSwitch", "*ngWhile"],
          correctAnswer: "*ngFor",
        },
        {
          id: "2213",
          question:
            "Qual é o serviço usado para fazer solicitações HTTP em Angular?",
          answers: ["HttpClient", "HttpService", "HttpProvider", "HttpRequest"],
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
          answers: ["@Service", "@Injectable", "@Provider", "@Dependency"],
          correctAnswer: "@Injectable",
        },
        {
          id: "2233",
          question: "Como um serviço é injetado em um componente em Angular?",
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
};
