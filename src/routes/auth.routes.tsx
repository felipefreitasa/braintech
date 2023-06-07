import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack"

import { SignIn } from "@screens/SignIn"

type AppRoutesTypeProps = {
  signIn: undefined;
}

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutesTypeProps>

export function AuthRoutes() {

  const { Navigator, Screen } = createNativeStackNavigator<AppRoutesTypeProps>()

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