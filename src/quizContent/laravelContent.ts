import { CategoryTypes } from "./quizContentTypes";

export const laravelContent: CategoryTypes = {
  id: "34",
  technology: "Laravel",
  description:
   "A PHP framework designed for web artisans",
  quizOptions: [
    {
      id: "341",
      title: "Introduction",
      questions: [
        {
          id: "3411",
          question:
            "What is Laravel?",
          answers: [
            "A JavaScript framework",
            "A Python framework",
            "A PHP framework",
            "A Ruby framework",
          ],
          correctAnswer: "A PHP framework",
        },
        {
          id: "3412",
          question:
            "What does Laravel use as its default template engine?",
          answers: [
            "React",
            "Angular",
            "Blade",
            "Vue.js",
          ],
          correctAnswer: "Blade",
        },
        {
          id: "3413",
          question:
            "Which architectural pattern does Laravel follow?",
          answers: [
            "MVC",
            "MVVM",
            "MVP",
            "MVT",
          ],
          correctAnswer: "MVC",
        },
        {
          id: "3414",
          question:
            "What is Laravel's command-line tool called?",
          answers: [
            "Artisan",
            "Craftsman",
            "Wizard",
            "Composer",
          ],
          correctAnswer: "Artisan",
        },
        {
          id: "3415",
          question:
            "In Artisan, what is the purpose of the 'migrate' command?",
          answers: [
            "To create new Laravel projects",
            "To manage PHP dependencies and packages",
            "To run database migrations",
            "To generate code templates",
          ],
          correctAnswer: "To run database migrations",
        },
      ],
    },
    {
      id: "342",
      title: "Routing",
      questions: [
        {
          id: "3421",
          question: "What is Laravel's routing system used for?",
          answers: [
            "Database management",
            "URL handling",
            "Authentication",
            "Template rendering",
          ],
          correctAnswer: "URL handling",
        },
        {
          id: "3422",
          question: "Which of the files below is used to define routes in Laravel?",
          answers: [
            "routes.js",
            "route_config.php",
            "routes.php",
            "web.php",
          ],
          correctAnswer: "web.php",
        },
        {
          id: "3423",
          question:
            "What is a route parameter in Laravel?",
          answers: [
            "A required HTTP parameter",
            "A wildcard segment in a URL",
            "A database column",
            "A middleware function",
          ],
          correctAnswer: "A wildcard segment in a URL",
        },
        {
          id: "3424",
          question:
            "How can you define a named route in Laravel?",
          answers: [
            "Using the 'name' method",
            "Using the 'url' method",
            "Using the 'route' method",
            "Using the 'alias' method",
          ],
          correctAnswer: "Using the 'name' method",
        },
        {
          id: "3425",
          question:
            "Which of the following represents a route model binding in Laravel?",
          answers: [
            "Route::get('/users/{user}', 'UserController@show');",
            "Route::post('/products/{id}', 'ProductController@create;",
            "Route::get('/categories/{cat}', 'CategoryController@show');",
            "Route::get('/posts/{comment}', 'PostController@index');",
          ],
          correctAnswer: "Route::get('/users/{user}', 'UserController@show');",
        },
      ],
    },
    {
      id: "343",
      title: "Middleware",
      questions: [
        {
          id: "3431",
          question:
            "What is the primary purpose of middleware in a Laravel application?",
          answers: [
            "To manage front-end assets",
            "To handle HTTP requests and responses",
            "To manage database migrations",
            "To create RESTful APIs",
          ],
          correctAnswer: "To handle HTTP requests and responses",
        },
        {
          id: "3432",
          question:
            "How can you apply a middleware to a specific route in Laravel?",
          answers: [
            "Using the 'middleware' key in the route's controller",
            "By modifying the 'config/middleware.php' file",
            "Using the 'applyMiddleware' method in the 'routes/web.php' file",
            "By adding the middleware to the 'App\Http\Kernel' class",
          ],
          correctAnswer: "Using the 'middleware' key in the route's controller",
        },
        {
          id: "3433",
          question:
            "What is the purpose of the 'auth' middleware in Laravel?",
          answers: [
            "To authenticate users and guard routes",
            "To handle database migrations",
            "To create API routes",
            "To guard routes",
          ],
          correctAnswer: "To authenticate users and guard routes",
        },
        {
          id: "3434",
          question:
            "Can you create custom middleware in Laravel, and if so, how?",
          answers: [
            "No, Laravel only supports built-in middleware",
            "Yes, by modifying the 'config/middleware.php' file",
            "Yes, by extending the 'Illuminate\Http\Middleware' class",
            "Yes, by adding a new route with middleware parameters",
          ],
          correctAnswer: "Yes, by extending the 'Illuminate\Http\Middleware' class",
        },
        {
          id: "3435",
          question:
            "What is the purpose of the 'csrf' middleware in Laravel?",
          answers: [
            "To handle authentication",
            "To protect against cross-site request forgery attacks",
            "To serve blade forms",
            "To handle form inputs",
          ],
          correctAnswer: "To protect against cross-site request forgery attacks",
        },
      ],
    },
    {
      id: "344",
      title: "Collections",
      questions: [
        {
          id: "3441",
          question:
            "What is a Laravel collection?",
          answers: [
            "A Laravel database table",
            "A data structure for storing a set of PHP objects",
            "A front-end design component",
            "A Laravel package for working with databases",
          ],
          correctAnswer: "A data structure for storing a set of PHP objects",
        },
        {
          id: "3442",
          question:
            "How do you create a new Laravel collection from an array?",
          answers: [
            "Using the 'new Collection($array)' constructor",
            "By directly casting the array to a collection",
            "There is no way to create a collection from an array",
            "Using the 'makeCollection($array)' function",
          ],
          correctAnswer: "By directly casting the array to a collection",
        },
        {
          id: "3443",
          question:
            "What methods can you use to filter a Laravel collection?",
          answers: [
            "filterBy() and sort()",
            "map() and reduce()",
            "filter() and reject()",
            "groupBy() and sortBy()",
          ],
          correctAnswer: "filter() and reject()",
        },
        {
          id: "3444",
          question:
            "How can you sort a Laravel collection in ascending order by a specific attribute?",
          answers: [
            "$collection->sortBy('attribute')",
            "$collection->sort('attribute', 'asc')",
            "$collection->order('attribute', 'asc')",
            "$collection->ascSort('attribute')",
          ],
          correctAnswer: "$collection->sortBy('attribute')",
        },
        {
          id: "3445",
          question:
            "What is the purpose of the 'pluck' method in Laravel collections?",
          answers: [
            "To retrieve a specific value from each item in the collection",
            "To remove items from the collection",
            "To merge two collections",
            "To create a new collection",
          ],
          correctAnswer: "To retrieve a specific value from each item in the collection",
        },
      ],
    },
    {
      id: "345",
      title: "Helpers",
      questions: [
        {
          id: "3451",
          question:
            "What are Laravel helpers?",
          answers: [
            "External packages for Laravel applications",
            "Built-in functions for common tasks in Laravel",
            "Laravel's official documentation",
            "Middleware classes in Laravel",
          ],
          correctAnswer: "Built-in functions for common tasks in Laravel",
        },
        {
          id: "3452",
          question:
            "How can you use the 'url' helper function in Laravel?",
          answers: [
            "To create URLs for named routes",
            "To define middleware in routes",
            "To generate CSS styles for web pages",
            "To send HTTP requests to external APIs",
          ],
          correctAnswer: "To create URLs for named routes",
        },
        {
          id: "3453",
          question:
            "What is the purpose of the 'env' helper function in Laravel?",
          answers: [
            "To encrypt data in Laravel applications",
            "To manage environment variables",
            "To define routes in Laravel",
            "To delete environment variables",
          ],
          correctAnswer: "To manage environment variables",
        },
        {
          id: "3454",
          question:
            "How do you generate a random string using the 'str_random' helper in Laravel?",
          answers: [
            "str_random('length')",
            "randomString('length')",
            "generateRandom('length')",
            "random('length')",
          ],
          correctAnswer: "str_random('length')",
        },
        {
          id: "3455",
          question:
            "What is the purpose of the 'config' helper function in Laravel?",
          answers: [
            "To create configuration files",
            "To configure database queries",
            "To define routes in Laravel",
            "To load configuration values from files",
          ],
          correctAnswer: "To load configuration values from files",
        },
      ],
    },
    {
      id: "346",
      title: "Eloquent ORM",
      questions: [
        {
          id: "3461",
          question:
            "What is Laravel's Eloquent ORM ",
          answers: [
            "Eloquent is Laravel's object-relational mapping system.",
            "Eloquent is Laravel's template engine for rendering views.",
            "Eloquent is Laravel's authentication system.",
            "Eloquent is Laravel's command-line tool for creating boilerplate code.",
          ],
          correctAnswer: "Eloquent is Laravel's object-relational mapping system.",
        },
        {
          id: "3462",
          question:
            "Which Eloquent method is used to retrieve all records from a table?",
          answers: [
            "findAll()",
            "get()",
            "all()",
            "fetch()",
          ],
          correctAnswer: "all()",
        },
        {
          id: "3463",
          question:
            "What is 'mass assignment' in Laravel's Eloquent?",
          answers: [
            "Assigning multiple values to a single variable",
            "Assigning values to multiple variables in one statement",
            "A security feature that restricts which fields can be modified in a model",
            "A method for joining multiple database tables in a single query",
          ],
          correctAnswer: "A security feature that restricts which fields can be modified in a model",
        },
        {
          id: "3464",
          question:
            "In Eloquent, how do you define a one-to-many relationship between two models?",
          answers: [
            "By using the 'hasOne' method",
            "By using the 'belongsTo' method",
            "By using the 'hasMany' method",
            "By using the 'belongsToMany' method",
          ],
          correctAnswer: "By using the 'hasMany' method",
        },
        {
          id: "3465",
          question:
            "What is the purpose of the 'with' method in Eloquent?",
          answers: [
            "To create a new record",
            "To retrieve related records with eager loading",
            "To update existing records",
            "To get records from the database using lazy loading",
          ],
          correctAnswer: "To retrieve related records with eager loading",
        },

      ],
    },
  ],
};