import { CategoryTypes } from "./quizContentTypes";

export const swiftContent: CategoryTypes = {
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
          question: "Qual é a sintaxe correta para criar uma função em Swift?",
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
          question: "Qual é a palavra-chave usada para fazer um loop em Swift?",
          answers: ["loop", "for", "while", "repeat"],
          correctAnswer: "for",
        },
        {
          id: "1315",
          question: "Qual é a classe base para todas as exceções em Swift?",
          answers: ["Exception", "Error", "Throwable", "RuntimeException"],
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
          answers: ["isEmpty()", "isNull()", "isNotNil()", "isNoneEmpty()"],
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
          question: "Qual é a diferença entre um Array e um Set em Swift?",
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
};
