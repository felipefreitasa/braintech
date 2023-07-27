import { CategoryTypes } from "./quizContentTypes";

export const nodeContent: CategoryTypes = {
  id: "33",
  technology: "Node JS",
  description:
    "Ambiente de tempo de execução JavaScript assíncrono baseado no V8 do Chrome",
  quizOptions: [
    {
      id: "331",
      title: "Fundamentos",
      questions: [
        {
          id: "3311",
          question:
            "Qual é o módulo usado para criar um servidor HTTP em Node.js?",
          answers: ["http", "fs", "path", "url"],
          correctAnswer: "http",
        },
        {
          id: "3312",
          question:
            "Qual é o comando usado para iniciar um aplicativo Node.js?",
          answers: ["node start", "node run", "node app", "node index"],
          correctAnswer: "node app",
        },
        {
          id: "3313",
          question:
            "Qual é o módulo usado para acessar o sistema de arquivos em Node.js?",
          answers: ["http", "fs", "path", "url"],
          correctAnswer: "fs",
        },
        {
          id: "3314",
          question:
            "Qual é o módulo usado para fazer solicitações HTTP em Node.js?",
          answers: ["http", "fs", "path", "request"],
          correctAnswer: "http",
        },
        {
          id: "3315",
          question:
            "Qual é o módulo usado para gerenciar dependências em Node.js?",
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
          question: "Qual é a função usada para exportar um módulo em Node.js?",
          answers: ["export", "module.exports", "exports", "module.export"],
          correctAnswer: "module.exports",
        },
        {
          id: "3322",
          question: "Qual é a função usada para importar um módulo em Node.js?",
          answers: ["require", "import", "include", "importModule"],
          correctAnswer: "require",
        },
        {
          id: "3323",
          question:
            "Qual é o objeto usado para acessar argumentos da linha de comando em Node.js?",
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
            "Qual é o módulo usado para lidar com caminhos de arquivos em Node.js?",
          answers: ["http", "fs", "path", "url"],
          correctAnswer: "path",
        },
        {
          id: "3325",
          question: "Qual é o módulo usado para trabalhar com URLs em Node.js?",
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
            "Qual é o conceito principal usado para lidar com operações assíncronas em Node.js?",
          answers: ["Promises", "Callbacks", "Async/Await", "Generators"],
          correctAnswer: "Callbacks",
        },
        {
          id: "3332",
          question:
            "Qual é a função usada para executar uma função após um determinado tempo em Node.js?",
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
            "Qual é a função usada para ler dados de entrada do usuário em Node.js?",
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
            "Qual é a função usada para escrever dados de saída em Node.js?",
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
            "Qual é o módulo usado para lidar com fluxo de dados em Node.js?",
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
          question: "Qual é o gerenciador de pacotes padrão usado em Node.js?",
          answers: ["npm", "yarn", "bower", "gulp"],
          correctAnswer: "npm",
        },
        {
          id: "3342",
          question:
            "Qual é o comando usado para instalar um pacote em Node.js?",
          answers: ["npm install", "npm add", "npm get", "npm require"],
          correctAnswer: "npm install",
        },
        {
          id: "3343",
          question:
            "Qual é o comando usado para iniciar um aplicativo Node.js com o npm?",
          answers: ["npm run start", "npm start", "npm run", "npm init"],
          correctAnswer: "npm start",
        },
        {
          id: "3344",
          question:
            "Qual é o arquivo usado para definir as dependências de um projeto Node.js?",
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
            "Qual é o comando usado para atualizar os pacotes instalados em Node.js?",
          answers: ["npm update", "npm upgrade", "npm install", "npm refresh"],
          correctAnswer: "npm update",
        },
      ],
    },
  ],
};
