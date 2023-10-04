import { NativeStackNavigationProp,createNativeStackNavigator } from "@react-navigation/native-stack"

import { SignIn } from "@screens/SignIn"
import { Welcome } from "@screens/Welcome"
import { NameOnboarding } from "@screens/NameOnboarding";
import { EmailOnboarding } from "@screens/EmailOnboarding";
import { PasswordOnboarding } from "@screens/PasswordOnboarding";

import { HomeTabsRoutes } from "./tabs.routes";

type AuthRoutesTypeProps = {
  signIn: undefined;
  welcome: undefined;
  homeTabs: undefined;
  nameOnboarding: undefined;
  emailOnboarding: undefined;
  passwordOnboarding: undefined;
};

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutesTypeProps>

export function AuthRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator<AuthRoutesTypeProps>()

  return (
    <Navigator
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
    </Navigator>
  )
}
