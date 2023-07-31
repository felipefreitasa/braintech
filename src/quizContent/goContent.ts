import { CategoryTypes } from "./quizContentTypes";

export const goContent: CategoryTypes = {
  id: "32",
  technology: "Go",
  description:
    "Open-source programming language for building scalable software",
  quizOptions: [
    {
      id: "321",
      title: "Fundamentals",
      questions: [
        {
          id: "3211",
          question:
            "What is the basic data type used to represent integers in Go?",
          answers: ["int", "integer", "int32", "int64"],
          correctAnswer: "int",
        },
        {
          id: "3212",
          question:
            "What keyword is used to define a function in Go?",
          answers: ["function", "func", "method", "procedure"],
          correctAnswer: "func",
        },
        {
          id: "3213",
          question: "What is the correct syntax for creating a loop in Go?",
          answers: ["loop", "for", "while", "foreach"],
          correctAnswer: "for",
        },
        {
          id: "3214",
          question:
            "What is the standard library used in Go to make HTTP requests?",
          answers: ["http", "net", "web", "request"],
          correctAnswer: "net/http",
        },
        {
          id: "3215",
          question:
            "What keyword is used to define a structure (struct) in Go?",
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
            "What keyword is used to start a goroutine in Go?",
          answers: ["go", "goroutine", "concurrent", "async"],
          correctAnswer: "go",
        },
        {
          id: "3222",
          question:
            "What data structure is used to perform communication between goroutines in Go?",
          answers: ["channel", "queue", "buffer", "stack"],
          correctAnswer: "channel",
        },
        {
          id: "3223",
          question:
            "What function is used to block the execution of a goroutine until a channel is ready in Go?",
          answers: ["close()", "len()", "make()", "receive()"],
          correctAnswer: "receive()",
        },
        {
          id: "3224",
          question: "What function is used to close a channel in Go?",
          answers: ["close()", "len()", "make()", "receive()"],
          correctAnswer: "close()",
        },
        {
          id: "3225",
          question:
            "What function is used to get the size of a channel in Go?",
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
            "What data structure is used to represent an error in Go?",
          answers: ["Error", "Exception", "Fault", "Panic"],
          correctAnswer: "Error",
        },
        {
          id: "3232",
          question: "What function is used to return an error in Go?",
          answers: ["throw", "raise", "panic", "errors.New"],
          correctAnswer: "errors.New",
        },
        {
          id: "3233",
          question:
            "What function is used to recover the value of an error in Go?",
          answers: ["catch", "recover", "try", "handle"],
          correctAnswer: "recover",
        },
        {
          id: "3234",
          question:
            "What function is used to check if an error occurred in Go?",
          answers: ["checkError", "hasError", "isError", "ifError"],
          correctAnswer: "ifError",
        },
        {
          id: "3235",
          question:
            "What function is used to display an error message and terminate the program execution in Go?",
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
          question: "What library is used to write tests in Go?",
          answers: ["testing", "testgo", "gotest", "gocheck"],
          correctAnswer: "testing",
        },
        {
          id: "3242",
          question:
            "What command is used to run tests in a Go package?",
          answers: ["go run", "go test", "go check", "go execute"],
          correctAnswer: "go test",
        },
        {
          id: "3243",
          question:
            "What function is used to check if a result is equal to an expected value in a Go test?",
          answers: ["assert", "equal", "check", "if"],
          correctAnswer: "assert",
        },
        {
          id: "3244",
          question: "What function is used to register a test in Go?",
          answers: ["test", "register", "run", "execute"],
          correctAnswer: "test",
        },
        {
          id: "3245",
          question:
            "What function is used to display an error message in a Go test?",
          answers: ["fmt.PrintError", "fmt.Println", "t.Error", "t.Errorf"],
          correctAnswer: "t.Error",
        },
      ],
    },
  ],
};