import { NativeStackNavigationProp,createNativeStackNavigator } from "@react-navigation/native-stack"

import { SignIn } from "@screens/SignIn"
import { SignUp } from "@screens/SignUp"
import { Welcome } from "@screens/Welcome"

type AuthRoutesTypeProps = {
  signIn: undefined;
  signUp: undefined;
  welcome: undefined;
};

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutesTypeProps>

export function AuthRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator<AuthRoutesTypeProps>()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
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
        name="signUp" 
        component={SignUp}
      />
    </Navigator>
  )
}
