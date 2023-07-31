import { CategoryTypes } from "./quizContentTypes";

export const nodeContent: CategoryTypes = {
  id: "33",
  technology: "Node JS",
  description:
    "Asynchronous JavaScript runtime environment based on Chrome's V8 engine",
  quizOptions: [
    {
      id: "331",
      title: "Fundamentals",
      questions: [
        {
          id: "3311",
          question:
            "Which module is used to create an HTTP server in Node.js?",
          answers: ["http", "fs", "path", "url"],
          correctAnswer: "http",
        },
        {
          id: "3312",
          question:
            "Which command is used to start a Node.js application?",
          answers: ["node start", "node run", "node app", "node index"],
          correctAnswer: "node app",
        },
        {
          id: "3313",
          question:
            "Which module is used to access the file system in Node.js?",
          answers: ["http", "fs", "path", "url"],
          correctAnswer: "fs",
        },
        {
          id: "3314",
          question:
            "Which module is used to make HTTP requests in Node.js?",
          answers: ["http", "fs", "path", "request"],
          correctAnswer: "http",
        },
        {
          id: "3315",
          question:
            "Which module is used to manage dependencies in Node.js?",
          answers: ["npm", "yarn", "bower", "gulp"],
          correctAnswer: "npm",
        },
      ],
    },
    {
      id: "332",
      title: "Modules",
      questions: [
        {
          id: "3321",
          question: "What function is used to export a module in Node.js?",
          answers: ["export", "module.exports", "exports", "module.export"],
          correctAnswer: "module.exports",
        },
        {
          id: "3322",
          question: "What function is used to import a module in Node.js?",
          answers: ["require", "import", "include", "importModule"],
          correctAnswer: "require",
        },
        {
          id: "3323",
          question:
            "What object is used to access command line arguments in Node.js?",
          answers: [
            "process.argv",
            "commandLine.args",
            "cli.arguments",
            "args.process",
          ],
          correctAnswer: "process.argv",
        },
        {
          id: "3324",
          question:
            "Which module is used to handle file paths in Node.js?",
          answers: ["http", "fs", "path", "url"],
          correctAnswer: "path",
        },
        {
          id: "3325",
          question: "Which module is used to work with URLs in Node.js?",
          answers: ["http", "fs", "path", "url"],
          correctAnswer: "url",
        },
      ],
    },
    {
      id: "333",
      title: "Asynchronous Programming",
      questions: [
        {
          id: "3331",
          question:
            "What is the main concept used to handle asynchronous operations in Node.js?",
          answers: ["Promises", "Callbacks", "Async/Await", "Generators"],
          correctAnswer: "Callbacks",
        },
        {
          id: "3332",
          question:
            "What function is used to execute a function after a certain time in Node.js?",
          answers: [
            "setInterval()",
            "setTimeout()",
            "setImmediate()",
            "process.nextTick()",
          ],
          correctAnswer: "setTimeout()",
        },
        {
          id: "3333",
          question:
            "What function is used to read user input data in Node.js?",
          answers: [
            "readline.question()",
            "console.log()",
            "process.stdout.write()",
            "process.stdin.on()",
          ],
          correctAnswer: "readline.question()",
        },
        {
          id: "3334",
          question:
            "What function is used to write output data in Node.js?",
          answers: [
            "console.log()",
            "readline.question()",
            "process.stdout.write()",
            "process.stdin.on()",
          ],
          correctAnswer: "console.log()",
        },
        {
          id: "3335",
          question:
            "Which module is used to handle data streams in Node.js?",
          answers: ["http", "fs", "stream", "buffer"],
          correctAnswer: "stream",
        },
      ],
    },
    {
      id: "334",
      title: "Package Management",
      questions: [
        {
          id: "3341",
          question: "What is the default package manager used in Node.js?",
          answers: ["npm", "yarn", "bower", "gulp"],
          correctAnswer: "npm",
        },
        {
          id: "3342",
          question:
            "What command is used to install a package in Node.js?",
          answers: ["npm install", "npm add", "npm get", "npm require"],
          correctAnswer: "npm install",
        },
        {
          id: "3343",
          question:
            "What command is used to start a Node.js application with npm?",
          answers: ["npm run start", "npm start", "npm run", "npm init"],
          correctAnswer: "npm start",
        },
        {
          id: "3344",
          question:
            "What file is used to define project dependencies in Node.js?",
          answers: [
            "package.json",
            "dependencies.json",
            "node.json",
            "app.json",
          ],
          correctAnswer: "package.json",
        },
        {
          id: "3345",
          question:
            "What command is used to update installed packages in Node.js?",
          answers: ["npm update", "npm upgrade", "npm install", "npm refresh"],
          correctAnswer: "npm update",
        },
      ],
    },
  ],
};
