import { CategoryTypes } from "./quizContentTypes";

export const kotlinContent: CategoryTypes = {
  id: "12",
  technology: "Kotlin",
  description: "Modern programming language for Android development",
  quizOptions: [
    {
      id: "121",
      title: "Fundamentals",
      questions: [
        {
          id: "1211",
          question: "What is the default data type for integers in Kotlin?",
          answers: ["Int", "Float", "Double", "Long"],
          correctAnswer: "Int",
        },
        {
          id: "1212",
          question:
            "What operator is used to check equality between two variables in Kotlin?",
          answers: ["=", "==", "===", "!="],
          correctAnswer: "==",
        },
        {
          id: "1213",
          question:
            "What data type is used in Kotlin to represent a null value?",
          answers: ["Null", "Void", "None", "Nullability"],
          correctAnswer: "Null",
        },
        {
          id: "1214",
          question:
            "What keyword is used to define a function in Kotlin?",
          answers: ["function", "fun", "method", "proc"],
          correctAnswer: "fun",
        },
        {
          id: "1215",
          question: "What is the base class for all exceptions in Kotlin?",
          answers: ["Exception", "Error", "Throwable", "RuntimeException"],
          correctAnswer: "Throwable",
        },
      ],
    },
    {
      id: "122",
      title: "Classes and Objects",
      questions: [
        {
          id: "1221",
          question: "What is the difference between a class and an object in Kotlin?",
          answers: [
            "There is no difference, both are used to define objects",
            "Classes are instances of objects",
            "Classes have state and behavior, while objects are just instances of classes",
            "Objects are instances of classes",
          ],
          correctAnswer:
            "Classes have state and behavior, while objects are just instances of classes",
        },
        {
          id: "1222",
          question:
            "What keyword is used in Kotlin to define a class?",
          answers: ["class", "struct", "object", "type"],
          correctAnswer: "class",
        },
        {
          id: "1223",
          question:
            "What method is used in Kotlin to define a primary constructor in a class?",
          answers: ["init()", "constructor()", "create()", "new()"],
          correctAnswer: "constructor()",
        },
      ],
    },
    {
      id: "123",
      title: "Collections",
      questions: [
        {
          id: "1231",
          question:
            "What is the collection in Kotlin that stores multiple values of the same type in a specific order?",
          answers: ["Dictionary", "Set", "Array", "List"],
          correctAnswer: "List",
        },
        {
          id: "1232",
          question: "What is the difference between an Array and a Set in Kotlin?",
          answers: [
            "There is no difference, both store values in a specific order",
            "The Array allows duplicate values, while the Set does not allow duplicates",
            "The Set allows duplicate values, while the Array does not allow duplicates",
            "The Set is an unordered collection, while the Array is an ordered collection",
          ],
          correctAnswer:
            "The Set does not allow duplicate values, while the Array allows duplicate values",
        },
        {
          id: "1233",
          question:
            "What method is used in Kotlin to add an element at the end of a list?",
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
            "What operator is used in Kotlin to handle null values safely?",
          answers: ["!", "??", "?.", "->"],
          correctAnswer: "?.",
        },
        {
          id: "1242",
          question:
            "What is the difference between a non-nullable variable and a nullable variable in Kotlin?",
          answers: [
            "There is no difference, both types of variables can hold null values",
            "The non-nullable variable cannot hold null values, while the nullable variable can",
            "The nullable variable cannot hold null values, while the non-nullable variable can",
            "The non-nullable variable is used for primitive types, while the nullable variable is used for objects",
          ],
          correctAnswer:
            "The non-nullable variable cannot hold null values, while the nullable variable can",
        },
        {
          id: "1243",
          question:
            "What method is used in Kotlin to check if a value is null?",
          answers: ["isNull()", "isEmpty()", "isNotNull()", "isNoneEmpty()"],
          correctAnswer: "isNull()",
        },
      ],
    },
  ],
};