import { QuizProps } from "./quizContentTypes";

import { goContent } from "./goContent";
import { vueContent } from "./vueContent";
import { nodeContent } from "./nodeContent";
import { swiftContent } from "./swiftContent";
import { reactContent } from "./reactContent";
import { kotlinContent } from "./kotlinContent";
import { springContent } from "./springContent";
import { flutterContent } from "./flutterContent";
import { angularContent } from "./angularContent";
import { reactNativeContent } from "./reactNativeContent";

export const quizContent: QuizProps[] = [
  {
    id: "1",
    category: "MOBILE",
    technologies: [
      reactNativeContent,
      swiftContent,
      flutterContent,
      kotlinContent,
    ],
  },
  {
    id: "2",
    category: "FRONT-END",
    technologies: [
      reactContent,
      vueContent,
      angularContent
    ],
  },
  {
    id: "3",
    category: "BACK-END",
    technologies: [
      nodeContent,
      springContent,
      goContent,
    ],
  },
];
