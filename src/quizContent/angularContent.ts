import { CategoryTypes } from "./quizContentTypes";

export const angularContent: CategoryTypes = {
  id: "22",
  technology: "Angular JS",
  description: "Platform for developing web applications in TypeScript",
  quizOptions: [
    {
      id: "221",
      title: "Components",
      questions: [
        {
          id: "2211",
          question: "What decorator is used to create a component in Angular?",
          answers: ["@Component", "@Directive", "@Module", "@Injectable"],
          correctAnswer: "@Component",
        },
        {
          id: "2212",
          question: "What directive is used to create a loop in Angular?",
          answers: ["*ngFor", "*ngIf", "*ngSwitch", "*ngWhile"],
          correctAnswer: "*ngFor",
        },
        {
          id: "2213",
          question: "What service is used to make HTTP requests in Angular?",
          answers: ["HttpClient", "HttpService", "HttpProvider", "HttpRequest"],
          correctAnswer: "HttpClient",
        },
        {
          id: "2214",
          question: "What is the lifecycle of a component in Angular?",
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
          question: "What dependency injection is used in Angular?",
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
          question: "What syntax is used to perform variable interpolation in an Angular template?",
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
          question: "What directive is used to show or hide elements based on a condition in Angular?",
          answers: ["*ngIf", "*ngFor", "*ngSwitch", "*ngWhile"],
          correctAnswer: "*ngIf",
        },
        {
          id: "2223",
          question: "What syntax is used to create an event binding in Angular?",
          answers: ["(event)", "[event]", "{{ event }}", "[(event)]"],
          correctAnswer: "(event)",
        },
        {
          id: "2224",
          question: "What directive is used to conditionally style an element in Angular?",
          answers: ["[ngClass]", "[ngStyle]", "[ngIf]", "[ngSwitch]"],
          correctAnswer: "[ngClass]",
        },
        {
          id: "2225",
          question: "What directive is used to switch between different options in an Angular template?",
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
          question: "What is the purpose of services in Angular?",
          answers: [
            "Share data between components",
            "Handle DOM events",
            "Style template elements",
            "Perform business logic",
          ],
          correctAnswer: "Perform business logic",
        },
        {
          id: "2232",
          question: "What decorator is used to create a service in Angular?",
          answers: ["@Service", "@Injectable", "@Provider", "@Dependency"],
          correctAnswer: "@Injectable",
        },
        {
          id: "2233",
          question: "How is a service injected into a component in Angular?",
          answers: [
            "Through the component's constructor",
            "Through the component's ngOnInit() method",
            "Through the component's services[] property",
            "Through the component's injectService() method",
          ],
          correctAnswer: "Through the component's constructor",
        },
        {
          id: "2234",
          question: "What method is used to make HTTP requests in an Angular service?",
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
          question: "What is the purpose of the HttpClientModule in Angular?",
          answers: [
            "Import and configure the HttpClient service",
            "Import and configure the HttpService service",
            "Import and configure the HttpProvider service",
            "Import and configure the HttpRequest object",
          ],
          correctAnswer: "Import and configure the HttpClient service",
        },
      ],
    },
    {
      id: "224",
      title: "Routing",
      questions: [
        {
          id: "2241",
          question: "Which package can be used to implement routing in an Angular application?",
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
          question: "What component is used to define a route in an Angular application?",
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
          question: "What is the purpose of the <router-outlet/> component in Angular?",
          answers: [
            "Redirect to a new route",
            "Switch between different routes",
            "Display the content of a route",
            "Conditional rendering of routes",
          ],
          correctAnswer: "Display the content of a route",
        },
        {
          id: "2244",
          question: "What service is used to access URL parameters in Angular?",
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
          question: "What is the purpose of the <router-link/> component in Angular?",
          answers: [
            "Navigate to a new route",
            "Display the content of a route",
            "Switch between different routes",
            "Redirect to a new route",
          ],
          correctAnswer: "Navigate to a new route",
        },
      ],
    },
  ],
};
