import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack"

import { SignIn } from "@screens/SignIn"

type AuthRoutesTypeProps = {
  signIn: undefined;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutesTypeProps>

export function AuthRoutes() {

  const { Navigator, Screen } = createNativeStackNavigator<AuthRoutesTypeProps>()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right'
      }}
    >
      <Screen
        name='signIn'
        component={SignIn}
      />
    </Navigator>
  )
}