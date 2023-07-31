import { CategoryTypes } from "./quizContentTypes";

export const swiftContent: CategoryTypes = {
  id: "13",
  technology: "Swift",
  description:
    "Programming language for iOS, macOS, watchOS, and tvOS development",
  quizOptions: [
    {
      id: "131",
      title: "Fundamentals",
      questions: [
        {
          id: "1311",
          question:
            "What is the keyword used to define a mutable variable in Swift?",
          answers: ["let", "mutable", "var", "constant"],
          correctAnswer: "var",
        },
        {
          id: "1312",
          question: "What is the correct syntax to create a function in Swift?",
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
            "What data type is used in Swift to represent a null value?",
          answers: ["null", "nil", "none", "undefined"],
          correctAnswer: "nil",
        },
        {
          id: "1314",
          question: "What keyword is used to create a loop in Swift?",
          answers: ["loop", "for", "while", "repeat"],
          correctAnswer: "for",
        },
        {
          id: "1315",
          question: "What is the base class for all exceptions in Swift?",
          answers: ["Exception", "Error", "Throwable", "RuntimeException"],
          correctAnswer: "Error",
        },
      ],
    },
    {
      id: "132",
      title: "Optionals",
      questions: [
        {
          id: "1321",
          question:
            "What operator is used in Swift to safely unwrap an optional value?",
          answers: ["!", "??", "?.", "->"],
          correctAnswer: "?.",
        },
        {
          id: "1322",
          question:
            "What is the difference between optional chaining and forced unwrapping?",
          answers: [
            "There is no difference, both are used to handle null values",
            "Optional chaining uses the ? operator, while forced unwrapping uses the ! operator",
            "Optional chaining is used in Swift 4, while forced unwrapping is used in earlier versions",
            "Forced unwrapping uses the ? operator, while optional chaining uses the ! operator",
          ],
          correctAnswer:
            "Optional chaining uses the ? operator, while forced unwrapping uses the ! operator",
        },
        {
          id: "1323",
          question:
            "What method is used in Swift to check if an optional value contains a non-nil value?",
          answers: ["isEmpty()", "isNull()", "isNotNil()", "isNoneEmpty()"],
          correctAnswer: "isNotNil()",
        },
      ],
    },
    {
      id: "133",
      title: "Collections",
      questions: [
        {
          id: "1331",
          question:
            "What collection in Swift stores multiple values of the same type in a specific order?",
          answers: ["Dictionary", "Set", "Array", "Tuple"],
          correctAnswer: "Array",
        },
        {
          id: "1332",
          question: "What is the difference between an Array and a Set in Swift?",
          answers: [
            "There is no difference, both store values in a specific order",
            "Array allows duplicate values, while Set does not allow duplicates",
            "Set allows duplicate values, while Array does not allow duplicates",
            "Set is an unordered collection, while Array is an ordered collection",
          ],
          correctAnswer:
            "Array allows duplicate values, while Set does not allow duplicates",
        },
        {
          id: "1333",
          question:
            "What method is used in Swift to add an element to the end of an Array?",
          answers: ["push()", "add()", "append()", "insert()"],
          correctAnswer: "append()",
        },
      ],
    },
    {
      id: "134",
      title: "Classes and Structures",
      questions: [
        {
          id: "1341",
          question:
            "What is the difference between a class and a structure in Swift?",
          answers: [
            "There is no difference, both are used to define objects",
            "Classes are passed by reference, while structures are passed by value",
            "Structures are passed by reference, while classes are passed by value",
            "Classes can only have methods, while structures can only have properties",
          ],
          correctAnswer:
            "Classes are passed by reference, while structures are passed by value",
        },
        {
          id: "1342",
          question:
            "What keyword is used in Swift to define a class?",
          answers: ["class", "struct", "object", "type"],
          correctAnswer: "class",
        },
        {
          id: "1343",
          question:
            "What method is used in Swift to define an initializer in a class?",
          answers: ["init()", "constructor()", "create()", "new()"],
          correctAnswer: "init()",
        },
      ],
    },
  ],
};