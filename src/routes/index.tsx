import { useTheme } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

import { useAuth } from "@hooks/useAuth";

export function Routes() {
  const { loggedUser } = useAuth();

  const { COLORS } = useTheme();

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.BACKGROUND }}>
        {loggedUser?.user ? <AppRoutes /> : <AuthRoutes />}
      </SafeAreaView>
    </NavigationContainer>
  );
}
