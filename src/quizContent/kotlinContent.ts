import { CategoryTypes } from "./quizContentTypes";

export const kotlinContent: CategoryTypes = {
  id: "12",
  technology: "Kotlin",
  description: "Linguagem de programação moderna para desenvolvimento Android",
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
          question: "Qual é a classe base para todas as exceções em Kotlin?",
          answers: ["Exception", "Error", "Throwable", "RuntimeException"],
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
          question: "Qual é a diferença entre um Array e um Set em Kotlin?",
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
          answers: ["isNull()", "isEmpty()", "isNotNull()", "isNoneEmpty()"],
          correctAnswer: "isNull()",
        },
      ],
    },
  ],
};
