import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack"

import { HomeTabsRoutes } from "./tabs.routes"

import { Quiz } from "@screens/Quiz"
import { QuizStatus } from "@screens/QuizStatus"
import { CategoryQuizMenu } from "@screens/CategoryQuizMenu"

type AppRoutesTypeProps = {
  quiz: undefined;
  homeTabs: undefined;
  quizStatus: undefined;
  categoryQuizMenu: undefined;
}

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutesTypeProps>

export function AppRoutes() {

  const { Navigator, Screen } = createNativeStackNavigator<AppRoutesTypeProps>()

  return (
    <Navigator
      screenOptions={{
        animation: 'fade',
        headerShown: false,
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
        options={{ gestureEnabled: false}}
      />

      <Screen
        name='quizStatus'
        component={QuizStatus}
        options={{ gestureEnabled: false}}
      />
    </Navigator>
  )
}