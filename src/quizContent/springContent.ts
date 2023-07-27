import { CategoryTypes } from "./quizContentTypes";

export const springContent: CategoryTypes = {
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
          answers: ["@Endpoint", "@Controller", "@Service", "@RestController"],
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
          answers: ["@Authenticated", "@Secure", "@EnableAuth", "@Secured"],
          correctAnswer: "@Secured",
        },
        {
          id: "3133",
          question:
            "Qual é a anotação usada para definir um método protegido por autorização no Spring?",
          answers: ["@Authorized", "@EnableAuth", "@Secure", "@PreAuthorize"],
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
          answers: ["@SpringApp", "@SpringBootApp", "@AppStart", "@StartApp"],
          correctAnswer: "@SpringBootApplication",
        },
        {
          id: "3142",
          question:
            "Qual é a anotação usada para definir uma propriedade de configuração externa no Spring Boot?",
          answers: ["@Value", "@ConfigProp", "@ExternalConfig", "@PropValue"],
          correctAnswer: "@Value",
        },
        {
          id: "3143",
          question:
            "Qual é a anotação usada para definir uma classe de configuração no Spring Boot?",
          answers: ["@Config", "@Configuration", "@AppConfig", "@SpringConfig"],
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
          answers: ["@RestController", "@Controller", "@Service", "@Component"],
          correctAnswer: "@RestController",
        },
      ],
    },
  ],
};
