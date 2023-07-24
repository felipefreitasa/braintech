import { useEffect } from "react";
import { useTheme } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

import { authGetAll } from "@storage/auth/authGetAll";

import { useAuth } from "@hooks/useAuth";

import { Loading } from "@components/Loading";

export function Routes() {
  const { loggedUser, setLoggedUser, setIsFetchingLoggedUser, isFetchingLoggedUser } = useAuth();

  const { COLORS } = useTheme();

  async function fetchLoggedUser() {
    const loggedUserData = await authGetAll();

    setLoggedUser(loggedUserData);

    setIsFetchingLoggedUser(false);
  }

  useEffect(() => {
    (async () => {
      await fetchLoggedUser();
    })();
  }, []);

  if (isFetchingLoggedUser){
    return <Loading />
  }

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.BACKGROUND }}>
        {loggedUser?.user ? <AppRoutes /> : <AuthRoutes />}
      </SafeAreaView>
    </NavigationContainer>
  );
}
