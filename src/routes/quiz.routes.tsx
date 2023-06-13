import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack"

import { Home } from "@screens/Home"
import { Search } from "@screens/Search"
import { CategoryQuizMenu } from "@screens/CategoryQuizMenu"

type QuizRoutesTypeProps = {
  home: undefined;
  search: undefined;
  categoryQuizMenu: {
    category: string;
    technology: string;
    description: string;
  };
}

export type QuizNavigatorRoutesProps = NativeStackNavigationProp<QuizRoutesTypeProps>

export function QuizRoutes() {

  const { Navigator, Screen } = createNativeStackNavigator<QuizRoutesTypeProps>()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right'
      }}
    >
      <Screen
        name='home'
        component={Home}
      />

      <Screen
        name='search'
        component={Search}
      />
      
      <Screen
        name='categoryQuizMenu'
        component={CategoryQuizMenu}
      />
    </Navigator>
  )
}