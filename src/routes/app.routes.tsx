import { Platform } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native'
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

import { Home } from '@screens/Home'
import { History } from '@screens/History'
import { Profile } from '@screens/Profile'

type AppRoutesTypeProps = {
  home: undefined;
  history: undefined;
  profile: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutesTypeProps>

export function AppRoutes() {

  const { COLORS } = useTheme()

  const { Navigator, Screen } = createBottomTabNavigator<AppRoutesTypeProps>()
  
  return (
    <Navigator 
      screenOptions={{  
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: COLORS.GRAY,
        tabBarActiveTintColor: COLORS.PRIMARY,
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: COLORS.TAB_BAR,
          height: Platform.OS  === 'ios' ? 90 : 70,
          paddingTop: Platform.OS === 'ios' ? 20 : 0
        } 
      }}
    >
        <Screen
          name='home'
          component={Home}
          options={{
            tabBarIcon: ({ color }) => <Feather name='home' size={24} color={color}/>
          }}
        />

        <Screen
          name='history'
          component={History}
          options={{
            tabBarIcon: ({ color }) => <Feather name='clock' size={24} color={color}/>
          }}
        />

        <Screen
          name='profile'
          component={Profile}
          options={{
            tabBarIcon: ({ color }) => <Feather name='user' size={24} color={color}/>
          }}
        />
    </Navigator>
  )
}