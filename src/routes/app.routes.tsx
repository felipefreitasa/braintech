import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack"

import { QuizTypeProps } from "@utils/categoriesMock"

import { HomeTabsRoutes } from "./tabs.routes"

import { Quiz } from "@screens/Quiz"
import { Search } from "@screens/Search"
import { CategoryQuizMenu } from "@screens/CategoryQuizMenu"

type AppRoutesTypeProps = {
  homeTabs: undefined;
  search: undefined;
  categoryQuizMenu: {
    category: string;
    technology: string;
    description: string;
    options: QuizTypeProps[];
  };
  quiz: {
    category: string;
    technology: string;
    subcategory: string;
    options: QuizTypeProps[];
  };
}

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutesTypeProps>

export function AppRoutes() {

  const { Navigator, Screen } = createNativeStackNavigator<AppRoutesTypeProps>()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >   
      <Screen
        name='homeTabs'
        component={HomeTabsRoutes}
      />

      <Screen
        name='categoryQuizMenu'
        component={CategoryQuizMenu}
      />

      <Screen
        name='quiz'
        component={Quiz}
      />

      <Screen
        name='search'
        component={Search}
      />
    </Navigator>
  )
}