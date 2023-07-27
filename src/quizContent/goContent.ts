import { CategoryTypes } from "./quizContentTypes";

export const goContent: CategoryTypes = {
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
          answers: ["fmt.PrintError", "fmt.Println", "log.Fatal", "os.Exit"],
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
          question: "Qual é a biblioteca usada para escrever testes em Go?",
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
          question: "Qual é a função usada para registrar um teste em Go?",
          answers: ["test", "register", "run", "execute"],
          correctAnswer: "test",
        },
        {
          id: "3245",
          question:
            "Qual é a função usada para exibir uma mensagem de erro em um teste Go?",
          answers: ["fmt.PrintError", "fmt.Println", "t.Error", "t.Errorf"],
          correctAnswer: "t.Error",
        },
      ],
    },
  ],
};
