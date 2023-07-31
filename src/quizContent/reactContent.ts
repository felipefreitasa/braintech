import { CategoryTypes } from "./quizContentTypes";

export const reactContent: CategoryTypes = {
  id: "21",
  technology: "React JS",
  description: "JavaScript library for building user interfaces",
  quizOptions: [
    {
      id: "211",
      title: "Components",
      questions: [
        {
          id: "2111",
          question:
            "Which component in React.js is used to render an HTML element?",
          answers: [
            "<DOMElement/>",
            "<HTMLComponent/>",
            "<RenderComponent/>",
            "<div/>",
          ],
          correctAnswer: "<div/>",
        },
        {
          id: "2112",
          question:
            "Which method is called when a component is about to be mounted in the DOM?",
          answers: [
            "componentWillMount()",
            "componentDidMount()",
            "componentWillUpdate()",
            "componentDidUpdate()",
          ],
          correctAnswer: "componentWillMount()",
        },
        {
          id: "2113",
          question:
            "Which React hook is used to add state to a functional component?",
          answers: [
            "useEffect()",
            "useContext()",
            "useReducer()",
            "useState()",
          ],
          correctAnswer: "useState()",
        },
        {
          id: "2114",
          question:
            "Which React lifecycle method is called immediately before a component is unmounted?",
          answers: [
            "componentWillUnmount()",
            "componentDidUnmount()",
            "componentWillUpdate()",
            "componentDidUpdate()",
          ],
          correctAnswer: "componentWillUnmount()",
        },
        {
          id: "2115",
          question:
            "Which method is called whenever the state or props of a component are updated?",
          answers: [
            "componentWillReceiveProps()",
            "shouldComponentUpdate()",
            "componentDidUpdate()",
            "render()",
          ],
          correctAnswer: "componentDidUpdate()",
        },
      ],
    },
    {
      id: "212",
      title: "Hooks",
      questions: [
        {
          id: "2121",
          question:
            "Which React hook is used to perform side effects after rendering a component?",
          answers: ["useEffect()", "useMemo()", "useCallback()", "useRef()"],
          correctAnswer: "useEffect()",
        },
        {
          id: "2122",
          question:
            "Which React hook is used to access the context defined by a parent component?",
          answers: ["useEffect()", "useMemo()", "useContext()", "useRef()"],
          correctAnswer: "useContext()",
        },
        {
          id: "2123",
          question:
            "Which method is used to update the state of a component and schedule a re-render?",
          answers: [
            "setState()",
            "updateState()",
            "modifyState()",
            "changeState()",
          ],
          correctAnswer: "setState()",
        },
        {
          id: "2124",
          question:
            "Which React lifecycle method is called after a component has rendered?",
          answers: [
            "componentWillReceiveProps()",
            "shouldComponentUpdate()",
            "componentDidUpdate()",
            "render()",
          ],
          correctAnswer: "componentDidUpdate()",
        },
        {
          id: "2125",
          question:
            "Which method is used to prevent unnecessary re-rendering of a component?",
          answers: [
            "shouldComponentUpdate()",
            "componentWillUpdate()",
            "componentDidUpdate()",
            "render()",
          ],
          correctAnswer: "shouldComponentUpdate()",
        },
      ],
    },
    {
      id: "213",
      title: "State Management",
      questions: [
        {
          id: "2131",
          question:
            "Which popular state management library can be used with React JS?",
          answers: ["Redux", "Axios", "Lodash", "Moment.js"],
          correctAnswer: "Redux",
        },
        {
          id: "2132",
          question:
            "What is the main advantage of centralized state management?",
          answers: [
            "Improves application performance",
            "Simplifies component code",
            "Reduces the number of dependencies",
            "Allows sharing data between components",
          ],
          correctAnswer: "Allows sharing data between components",
        },
        {
          id: "2133",
          question: "Which method is used to dispatch an action in Redux?",
          answers: [
            "dispatchAction()",
            "triggerAction()",
            "runAction()",
            "dispatch()",
          ],
          correctAnswer: "dispatch()",
        },
        {
          id: "2134",
          question:
            "What is the name of the concept that describes the predictability of state in a Redux application?",
          answers: [
            "Single state",
            "Immutability",
            "Middleware",
            "Unidirectional flow",
          ],
          correctAnswer: "Unidirectional flow",
        },
        {
          id: "2135",
          question:
            "Which function is used to define the state update logic in a Redux store?",
          answers: ["reducer()", "store()", "action()", "selector()"],
          correctAnswer: "reducer()",
        },
      ],
    },
    {
      id: "214",
      title: "React Router",
      questions: [
        {
          id: "2141",
          question:
            "Which package can be used to implement routing in a React JS application?",
          answers: [
            "React DOM",
            "React Router",
            "React Redux",
            "React Bootstrap",
          ],
          correctAnswer: "React Router",
        },
        {
          id: "2142",
          question:
            "Which component is used to define a route in a React Router application?",
          answers: ["<Route/>", "<Link/>", "<Switch/>", "<Redirect/>"],
          correctAnswer: "<Route/>",
        },
        {
          id: "2143",
          question:
            "What is the purpose of the <Switch/> component in React Router?",
          answers: [
            "Redirect to a new route",
            "Toggle between different routes",
            "Display a specific route",
            "Conditional rendering of routes",
          ],
          correctAnswer: "Toggle between different routes",
        },
        {
          id: "2144",
          question:
            "Which React Router hook is used to access URL parameters?",
          answers: [
            "useURLParams()",
            "useParams()",
            "useQueryParams()",
            "useLocation()",
          ],
          correctAnswer: "useParams()",
        },
        {
          id: "2145",
          question:
            "What is the purpose of the <Link/> component in React Router?",
          answers: [
            "Navigate to a new route",
            "Display the content of a route",
            "Toggle between different routes",
            "Redirect to a new route",
          ],
          correctAnswer: "Navigate to a new route",
        },
      ],
    },
  ],
};