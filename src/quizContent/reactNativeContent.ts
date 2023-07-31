import { CategoryTypes } from "./quizContentTypes";

export const reactNativeContent: CategoryTypes = {
  id: "11",
  technology: "React Native",
  description: "Develop iOS and Android apps with JavaScript",
  quizOptions: [
    {
      id: "111",
      title: "Components",
      questions: [
        {
          id: "1111",
          question:
            "Which component in React Native is used to create a text input field?",
          answers: [
            "<TextEntry/>",
            "<TextInput/>",
            "<Input/>",
            "<TextField/>",
          ],
          correctAnswer: "<TextInput/>",
        },
        {
          id: "1112",
          question:
            "Which component in React Native is used to display text?",
          answers: ["<p/>", "<Paragraph/>", "<Text/>", "<View/>"],
          correctAnswer: "<Text/>",
        },
        {
          id: "1113",
          question:
            "Which component in React Native is used to display images?",
          answers: ["<Image/>", "<Img/>", "<Photo/>", "<Background/>"],
          correctAnswer: "<Image/>",
        },
        {
          id: "1114",
          question:
            "Which component in React Native is used to indicate a loading state?",
          answers: [
            "<ProgressBar/>",
            "<ProgressIndicator/>",
            "<ActivityIndicator/>",
            "<Loader/>",
          ],
          correctAnswer: "<ActivityIndicator/>",
        },
        {
          id: "1115",
          question:
            "Which component in React Native is used to create a high-performance, optimized list of items?",
          answers: [
            "<VirtualizedList/>",
            "<FlatList/>",
            "<FastList/>",
            "<List/>",
          ],
          correctAnswer: "<FlatList/>",
        },
      ],
    },
    {
      id: "112",
      title: "Navigation",
      questions: [
        {
          id: "1121",
          question:
            "Which component in React Native is used to create a navigation stack?",
          answers: [
            "<NavigationStack/>",
            "<StackNavigator/>",
            "<NavigationContainer/>",
            "<NavStack/>",
          ],
          correctAnswer: "<NavigationStack/>",
        },
        {
          id: "1122",
          question:
            "Which method is used to navigate to another screen in React Native?",
          answers: [
            "navigateTo()",
            "navigate()",
            "goToScreen()",
            "pushScreen()",
          ],
          correctAnswer: "navigate()",
        },
        {
          id: "1123",
          question:
            "How can we pass parameters to another screen during navigation?",
          answers: [
            "Through the navigate() function",
            "Through a global object",
            "Through a callback",
            "Through the Redux Store",
          ],
          correctAnswer: "Through the navigate() function",
        },
      ],
    },
    {
      id: "113",
      title: "Styling",
      questions: [
        {
          id: "1131",
          question:
            "Which property in React Native is used to define the background color of a component?",
          answers: [
            "background-color",
            "background",
            "color",
            "backgroundColor",
          ],
          correctAnswer: "backgroundColor",
        },
        {
          id: "1132",
          question:
            "Which property is used to define the margin of a component in React Native?",
          answers: [
            "margin",
            "margin-horizontal",
            "margin-vertical",
            "padding",
          ],
          correctAnswer: "margin",
        },
        {
          id: "1133",
          question:
            "How can we style components individually in React Native?",
          answers: [
            "Only through CSS classes",
            "Only through IDs",
            "Only inline in the component itself",
            "Through external styles",
          ],
          correctAnswer: "Only inline in the component itself",
        },
      ],
    },
    {
      id: "114",
      title: "State Management",
      questions: [
        {
          id: "1141",
          question:
            "Which library is commonly used for state management in React Native?",
          answers: ["Redux", "MobX", "Flux", "React Context"],
          correctAnswer: "Redux",
        },
        {
          id: "1142",
          question: "What is the main purpose of Redux?",
          answers: [
            "Managing navigation between screens",
            "Managing the global state of the application",
            "Performing asynchronous API calls",
            "Creating smooth animations",
          ],
          correctAnswer: "Managing the global state of the application",
        },
        {
          id: "1143",
          question: "What are the three fundamental principles of Redux?",
          answers: [
            "Action, Reduction, State",
            "Action, Reduction, Immutability",
            "State, Immutability, Components",
            "Components, Action, Reduction",
          ],
          correctAnswer: "Action, Reduction, State",
        },
      ],
    },
  ],
};