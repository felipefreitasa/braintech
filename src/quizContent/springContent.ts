import { CategoryTypes } from "./quizContentTypes";

export const springContent: CategoryTypes = {
  id: "31",
  technology: "Spring",
  description: "Framework for Java application development",
  quizOptions: [
    {
      id: "311",
      title: "Fundamentals",
      questions: [
        {
          id: "3111",
          question:
            "What annotation is used to define an API endpoint in Spring?",
          answers: ["@Endpoint", "@Controller", "@Service", "@RestController"],
          correctAnswer: "@RestController",
        },
        {
          id: "3112",
          question: "What annotation is used to define a GET route in Spring?",
          answers: ["@Get", "@GetRoute", "@GetMapping", "@Request"],
          correctAnswer: "@GetMapping",
        },
        {
          id: "3113",
          question: "What annotation is used to define a POST route in Spring?",
          answers: ["@Post", "@PostRoute", "@PostMapping", "@Request"],
          correctAnswer: "@PostMapping",
        },
        {
          id: "3114",
          question: "What annotation is used to define dependency injection in Spring?",
          answers: ["@Inject", "@Provide", "@Autowired", "@Dependency"],
          correctAnswer: "@Autowired",
        },
        {
          id: "3115",
          question: "What annotation is used to define a transaction in Spring?",
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
          question: "What annotation is used to define a persistent entity in Spring?",
          answers: ["@Entity", "@Persistent", "@Persist", "@Persistence"],
          correctAnswer: "@Entity",
        },
        {
          id: "3122",
          question: "What annotation is used to define a primary key in an entity in Spring?",
          answers: ["@Key", "@Id", "@PrimaryKey", "@Primary"],
          correctAnswer: "@Id",
        },
        {
          id: "3123",
          question: "What annotation is used to define a custom query in Spring?",
          answers: ["@Query", "@CustomQuery", "@NamedQuery", "@Custom"],
          correctAnswer: "@Query",
        },
        {
          id: "3124",
          question: "What annotation is used to define an association between entities in Spring?",
          answers: ["@Association", "@Join", "@JoinTable", "@Relation"],
          correctAnswer: "@JoinTable",
        },
        {
          id: "3125",
          question: "What annotation is used to define a data access repository in Spring?",
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
          question: "What annotation is used to define a security configuration in Spring?",
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
          question: "What annotation is used to define a method protected by authentication in Spring?",
          answers: ["@Authenticated", "@Secure", "@EnableAuth", "@Secured"],
          correctAnswer: "@Secured",
        },
        {
          id: "3133",
          question: "What annotation is used to define a method protected by authorization in Spring?",
          answers: ["@Authorized", "@EnableAuth", "@Secure", "@PreAuthorize"],
          correctAnswer: "@PreAuthorize",
        },
        {
          id: "3134",
          question: "What annotation is used to define a Cross-Origin Resource Sharing (CORS) configuration in Spring?",
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
          question: "What annotation is used to define a custom authentication provider in Spring?",
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
          question: "What annotation is used to start a Spring Boot application?",
          answers: ["@SpringApp", "@SpringBootApp", "@AppStart", "@StartApp"],
          correctAnswer: "@SpringBootApplication",
        },
        {
          id: "3142",
          question: "What annotation is used to define an external configuration property in Spring Boot?",
          answers: ["@Value", "@ConfigProp", "@ExternalConfig", "@PropValue"],
          correctAnswer: "@Value",
        },
        {
          id: "3143",
          question: "What annotation is used to define a configuration class in Spring Boot?",
          answers: ["@Config", "@Configuration", "@AppConfig", "@SpringConfig"],
          correctAnswer: "@Configuration",
        },
        {
          id: "3144",
          question: "What annotation is used to define a bean in Spring Boot?",
          answers: ["@Bean", "@Component", "@Service", "@Repository"],
          correctAnswer: "@Bean",
        },
        {
          id: "3145",
          question: "What annotation is used to define a REST controller in Spring Boot?",
          answers: ["@RestController", "@Controller", "@Service", "@Component"],
          correctAnswer: "@RestController",
        },
      ],
    },
  ],
};
