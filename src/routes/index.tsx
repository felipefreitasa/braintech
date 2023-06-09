import { useTheme } from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context"
import { NavigationContainer } from "@react-navigation/native"

import { AppRoutes } from "./app.routes"

export function Routes() {
  
  const { COLORS } = useTheme()

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.BACKGROUND }}>
        <AppRoutes/>
      </SafeAreaView>
    </NavigationContainer>
  )
}