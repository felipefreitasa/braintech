import { CategoryTypes } from "./quizContentTypes";

export const flutterContent: CategoryTypes = {
  id: "14",
  technology: "Flutter",
  description:
    "UI toolkit for creating native apps for iOS, Android, and the web",
  quizOptions: [
    {
      id: "141",
      title: "Fundamentals",
      questions: [
        {
          id: "1411",
          question:
            "What is the main programming language used in Flutter?",
          answers: ["JavaScript", "Kotlin", "Swift", "Dart"],
          correctAnswer: "Dart",
        },
        {
          id: "1412",
          question:
            "What library is used to create user interfaces in Flutter?",
          answers: ["UIKit", "CoreGraphics", "MaterialUI", "Widgets"],
          correctAnswer: "Widgets",
        },
        {
          id: "1413",
          question:
            "What is the basic element for building interfaces in Flutter?",
          answers: ["Views", "Widgets", "Components", "Layouts"],
          correctAnswer: "Widgets",
        },
        {
          id: "1414",
          question:
            "What is the recommended architecture for developing apps in Flutter?",
          answers: ["MVC", "MVVM", "BLoC", "Redux"],
          correctAnswer: "BLoC",
        },
        {
          id: "1415",
          question:
            "What command is used to run a Flutter application?",
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
      title: "Advanced Widgets",
      questions: [
        {
          id: "1421",
          question: "What widget is used in Flutter to create a button?",
          answers: ["Button", "Touchable", "InkWell", "RaisedButton"],
          correctAnswer: "ElevatedButton",
        },
        {
          id: "1422",
          question:
            "What widget is used in Flutter to create a text input field?",
          answers: ["TextField", "InputField", "TextEntry", "EditText"],
          correctAnswer: "TextField",
        },
        {
          id: "1423",
          question:
            "What widget is used in Flutter to display a scrollable list?",
          answers: ["ScrollList", "List", "ListView", "ScrollView"],
          correctAnswer: "ListView",
        },
      ],
    },
    {
      id: "143",
      title: "Navigation and Routing",
      questions: [
        {
          id: "1431",
          question:
            "What widget is used in Flutter to navigate between screens?",
          answers: ["Navigator", "Route", "Screen", "Page"],
          correctAnswer: "Navigator",
        },
        {
          id: "1432",
          question:
            "What method is used in Flutter to push a new screen onto the navigation stack?",
          answers: ["push()", "pop()", "navigate()", "route()"],
          correctAnswer: "push()",
        },
        {
          id: "1433",
          question:
            "How can we pass parameters to a new screen during navigation in Flutter?",
          answers: [
            "Through a callback function",
            "Through a global object",
            "Through a configuration file",
            "Through optional arguments in the push() method",
          ],
          correctAnswer: "Through optional arguments in the push() method",
        },
      ],
    },
    {
      id: "144",
      title: "Animations and Visual Effects",
      questions: [
        {
          id: "1441",
          question: "What widget is used in Flutter to create animations?",
          answers: ["AnimatedContainer", "Animation", "Motion", "Tween"],
          correctAnswer: "AnimatedContainer",
        },
        {
          id: "1442",
          question:
            "What widget is used in Flutter to create transitions between screens?",
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
            "What widget is used in Flutter to create shadow effects on a component?",
          answers: ["Shadow", "BoxShadow", "Elevation", "ShadowEffect"],
          correctAnswer: "Container",
        },
      ],
    },
  ],
};