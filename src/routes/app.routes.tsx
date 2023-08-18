import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack"

import { useAuth } from "@hooks/useAuth"

import { HomeTabsRoutes } from "./tabs.routes"

import { Quiz } from "@screens/Quiz"
import { SignIn } from "@screens/SignIn"
import { Welcome } from "@screens/Welcome"
import { QuizStatus } from "@screens/QuizStatus"
import { NameOnboarding } from "@screens/NameOnboarding"
import { EmailOnboarding } from "@screens/EmailOnboarding"
import { CategoryQuizMenu } from "@screens/CategoryQuizMenu"
import { PasswordOnboarding } from "@screens/PasswordOnboarding"

type AppRoutesTypeProps = {
  quiz: undefined;
  signIn: undefined;
  welcome: undefined;
  homeTabs: undefined;
  quizStatus: undefined;
  nameOnboarding: undefined;
  emailOnboarding: undefined;
  categoryQuizMenu: undefined;
  passwordOnboarding: undefined;
}

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutesTypeProps>

export function AppRoutes() {

  const { loggedUser } = useAuth();

  const { Navigator, Screen } = createNativeStackNavigator<AppRoutesTypeProps>()

  return (
    <Navigator
      initialRouteName={loggedUser?.user ? 'homeTabs' : 'welcome'}
      screenOptions={{
        animation: 'fade',
        headerShown: false,
      }}
    >   
      <Screen
        name="welcome" 
        component={Welcome}
      />

      <Screen
        name="signIn" 
        component={SignIn}
      />

      <Screen
        name="nameOnboarding"
        component={NameOnboarding}
        options={{ gestureEnabled: false}}
      />

      <Screen
        name="emailOnboarding"
        component={EmailOnboarding}
        options={{ gestureEnabled: false}}
      />

      <Screen
        name="passwordOnboarding"
        component={PasswordOnboarding}
        options={{ gestureEnabled: false}}
      />
      <Screen
        name='homeTabs'
        component={HomeTabsRoutes}
        options={{ gestureEnabled: false}}
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