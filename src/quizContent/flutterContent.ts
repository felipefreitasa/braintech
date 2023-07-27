import { CategoryTypes } from "./quizContentTypes";

export const flutterContent: CategoryTypes = {
  id: "14",
  technology: "Flutter",
  description:
    "UI toolkit para criação de aplicativos nativos para iOS, Android e web",
  quizOptions: [
    {
      id: "141",
      title: "Fundamentos",
      questions: [
        {
          id: "1411",
          question:
            "Qual é a linguagem de programação principal usada no Flutter?",
          answers: ["JavaScript", "Kotlin", "Swift", "Dart"],
          correctAnswer: "Dart",
        },
        {
          id: "1412",
          question:
            "Qual é a biblioteca usada para criar interfaces de usuário no Flutter?",
          answers: ["UIKit", "CoreGraphics", "MaterialUI", "Widgets"],
          correctAnswer: "Widgets",
        },
        {
          id: "1413",
          question:
            "Qual é o elemento básico para construir interfaces no Flutter?",
          answers: ["Views", "Widgets", "Components", "Layouts"],
          correctAnswer: "Widgets",
        },
        {
          id: "1414",
          question:
            "Qual é a arquitetura recomendada para desenvolver aplicativos no Flutter?",
          answers: ["MVC", "MVVM", "BLoC", "Redux"],
          correctAnswer: "BLoC",
        },
        {
          id: "1415",
          question:
            "Qual é o comando usado para executar um aplicativo Flutter?",
          answers: [
            "flutter run",
            "flutter start",
            "flutter build",
            "flutter create",
          ],
          correctAnswer: "flutter run",
        },
      ],
    },
    {
      id: "142",
      title: "Widgets Avançados",
      questions: [
        {
          id: "1421",
          question: "Qual é o widget usado em Flutter para criar um botão?",
          answers: ["Button", "Touchable", "InkWell", "RaisedButton"],
          correctAnswer: "ElevatedButton",
        },
        {
          id: "1422",
          question:
            "Qual é o widget usado em Flutter para criar um campo de entrada de texto?",
          answers: ["TextField", "InputField", "TextEntry", "EditText"],
          correctAnswer: "TextField",
        },
        {
          id: "1423",
          question:
            "Qual é o widget usado em Flutter para exibir uma lista rolável?",
          answers: ["ScrollList", "List", "ListView", "ScrollView"],
          correctAnswer: "ListView",
        },
      ],
    },
    {
      id: "143",
      title: "Navegação e Roteamento",
      questions: [
        {
          id: "1431",
          question:
            "Qual é o widget usado em Flutter para navegar entre telas?",
          answers: ["Navigator", "Route", "Screen", "Page"],
          correctAnswer: "Navigator",
        },
        {
          id: "1432",
          question:
            "Qual é o método usado em Flutter para empilhar uma nova tela na pilha de navegação?",
          answers: ["push()", "pop()", "navigate()", "route()"],
          correctAnswer: "push()",
        },
        {
          id: "1433",
          question:
            "Como podemos passar parâmetros para uma nova tela durante a navegação em Flutter?",
          answers: [
            "Através de uma função callback",
            "Através de um objeto global",
            "Através de um arquivo de configuração",
            "Através de argumentos opcionais no método push()",
          ],
          correctAnswer: "Através de argumentos opcionais no método push()",
        },
      ],
    },
    {
      id: "144",
      title: "Animações e Efeitos Visuais",
      questions: [
        {
          id: "1441",
          question: "Qual é o widget usado em Flutter para criar animações?",
          answers: ["AnimatedContainer", "Animation", "Motion", "Tween"],
          correctAnswer: "AnimatedContainer",
        },
        {
          id: "1442",
          question:
            "Qual é o widget usado em Flutter para criar transições entre telas?",
          answers: [
            "FadeTransition",
            "SlideTransition",
            "ScaleTransition",
            "Transition",
          ],
          correctAnswer: "PageRouteBuilder",
        },
        {
          id: "1443",
          question:
            "Qual é o widget usado em Flutter para criar efeitos de sombra em um componente?",
          answers: ["Shadow", "BoxShadow", "Elevation", "ShadowEffect"],
          correctAnswer: "Container",
        },
      ],
    },
  ],
};
