import { CategoryTypes } from "./quizContentTypes";

export const vueContent: CategoryTypes = {
  id: "23",
  technology: "Vue JS",
  description: "Progressive JavaScript framework for building user interfaces",
  quizOptions: [
    {
      id: "231",
      title: "Components",
      questions: [
        {
          id: "2311",
          question: "What directive is used to create a loop in Vue.js?",
          answers: ["v-for", "v-if", "v-switch", "v-while"],
          correctAnswer: "v-for",
        },
        {
          id: "2312",
          question: "What is the life cycle of a component in Vue.js?",
          answers: [
            "created, mounted, updated",
            "beforeCreate, created, beforeMount",
            "beforeUpdate, updated, beforeDestroy",
            "mounted, updated, destroyed",
          ],
          correctAnswer: "beforeCreate, created, beforeMount",
        },
        {
          id: "2313",
          question:
            "What hook is used to add state to a component in Vue.js?",
          answers: ["useEffect()", "useContext()", "useReducer()", "useState()"],
          correctAnswer: "useState()",
        },
        {
          id: "2314",
          question:
            "What directive is used to bind an HTML attribute to a value in Vue.js?",
          answers: ["v-bind", "v-model", "v-on", "v-text"],
          correctAnswer: "v-bind",
        },
        {
          id: "2315",
          question:
            "What library is used to make HTTP requests in Vue.js?",
          answers: ["axios", "fetch", "http", "ajax"],
          correctAnswer: "axios",
        },
      ],
    },
    {
      id: "232",
      title: "Directives",
      questions: [
        {
          id: "2321",
          question:
            "Which directive is used to show or hide elements based on a condition in Vue.js?",
          answers: ["v-if", "v-for", "v-show", "v-bind"],
          correctAnswer: "v-if",
        },
        {
          id: "2322",
          question:
            "Which directive is used to execute a function when an event is triggered in Vue.js?",
          answers: ["v-bind", "v-on", "v-model", "v-text"],
          correctAnswer: "v-on",
        },
        {
          id: "2323",
          question:
            "Which directive is used to display the value of a variable in Vue.js?",
          answers: ["v-text", "v-bind", "v-model", "v-on"],
          correctAnswer: "v-text",
        },
        {
          id: "2324",
          question:
            "Which directive is used to bind an input field to a variable in Vue.js?",
          answers: ["v-bind", "v-model", "v-on", "v-text"],
          correctAnswer: "v-model",
        },
        {
          id: "2325",
          question:
            "Which directive is used to iterate over a list in Vue.js?",
          answers: ["v-for", "v-if", "v-show", "v-bind"],
          correctAnswer: "v-for",
        },
      ],
    },
    {
      id: "233",
      title: "Computed Properties",
      questions: [
        {
          id: "2331",
          question: "What is the purpose of computed properties in Vue.js?",
          answers: [
            "Calculate values dynamically",
            "Store data in the component state",
            "Perform asynchronous tasks",
            "Manipulate DOM events",
          ],
          correctAnswer: "Calculate values dynamically",
        },
        {
          id: "2332",
          question:
            "How do computed properties differ from methods in Vue.js?",
          answers: [
            "Computed properties are cached",
            "Computed properties cannot access the component state",
            "Computed properties are executed synchronously",
            "Computed properties cannot contain conditional logic",
          ],
          correctAnswer: "Computed properties are cached",
        },
        {
          id: "2333",
          question:
            "What is the correct syntax to define a computed property in Vue.js?",
          answers: ["computed: {}", "methods: {}", "data: {}", "props: {}"],
          correctAnswer: "computed: {}",
        },
        {
          id: "2334",
          question:
            "How do you access a computed property in a Vue.js component?",
          answers: [
            "this.computedProperty",
            "this.methods.computedProperty",
            "this.data.computedProperty",
            "this.props.computedProperty",
          ],
          correctAnswer: "this.computedProperty",
        },
        {
          id: "2335",
          question:
            "What is the main advantage of computed properties in Vue.js?",
          answers: [
            "Improve application performance",
            "Simplify component logic",
            "Allow communication between components",
            "Facilitate DOM manipulation",
          ],
          correctAnswer: "Improve application performance",
        },
      ],
    },
    {
      id: "234",
      title: "Vue Router",
      questions: [
        {
          id: "2341",
          question:
            "Which package can be used to implement routing in a Vue.js application?",
          answers: ["Vue DOM", "Vue Router", "Vue Redux", "Vue Bootstrap"],
          correctAnswer: "Vue Router",
        },
        {
          id: "2342",
          question:
            "Which component is used to define a route in a Vue Router application?",
          answers: [
            "<router-link/>",
            "<router-view/>",
            "<router-switch/>",
            "<router-redirect/>",
          ],
          correctAnswer: "<router-link/>",
        },
        {
          id: "2343",
          question:
            "What is the purpose of the <router-view/> component in Vue Router?",
          answers: [
            "Redirect to a new route",
            "Switch between different routes",
            "Display the content of a route",
            "Perform conditional rendering of routes",
          ],
          correctAnswer: "Display the content of a route",
        },
        {
          id: "2344",
          question:
            "Which Vue Router hook is used to access the URL parameters?",
          answers: [
            "useURLParams()",
            "useParams()",
            "useQueryParams()",
            "useRoute()",
          ],
          correctAnswer: "useRoute()",
        },
        {
          id: "2345",
          question:
            "What is the purpose of the <router-link/> component in Vue Router?",
          answers: [
            "Navigate to a new route",
            "Display the content of a route",
            "Switch between different routes",
            "Redirect to a new route",
          ],
          correctAnswer: "Navigate to a new route",
        },
      ],
    },
  ],
};