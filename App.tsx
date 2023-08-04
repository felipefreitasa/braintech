import "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";
import { ThemeProvider } from "styled-components/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  useFonts,
  SpaceGrotesk_700Bold,
  SpaceGrotesk_300Light,
  SpaceGrotesk_500Medium,
  SpaceGrotesk_400Regular,
} from "@expo-google-fonts/space-grotesk";

import { QuizContextProvider } from "@context/QuizContext";
import { AuthContextProvider } from "@context/AuthContext";

import { useAuth } from "@hooks/useAuth";

import theme from "./src/theme";

import { Routes } from "./src/routes";

import { NoInternetConnection } from "@screens/NoInternetConnection";

import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    SpaceGrotesk_700Bold,
    SpaceGrotesk_300Light,
    SpaceGrotesk_500Medium,
    SpaceGrotesk_400Regular,
  });

  const { isFetchingLoggedUser } = useAuth();

  const [isConnected, setIsConnected] = useState<boolean | null>(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthContextProvider>
        <QuizContextProvider>
          <ThemeProvider theme={theme}>
            <StatusBar
              translucent
              barStyle="light-content"
              backgroundColor="transparent"
            />

            {fontsLoaded && !isFetchingLoggedUser ? (
              isConnected ? (
                <Routes />
              ) : (
                <NoInternetConnection />
              )
            ) : (
              <Loading />
            )}
          </ThemeProvider>
        </QuizContextProvider>
      </AuthContextProvider>
    </GestureHandlerRootView>
  );
}
