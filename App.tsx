import 'react-native-gesture-handler'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useFonts, SpaceGrotesk_300Light, SpaceGrotesk_400Regular, SpaceGrotesk_500Medium, SpaceGrotesk_700Bold } from '@expo-google-fonts/space-grotesk' 

import { QuizContextProvider } from '@context/QuizContext'

import theme from './src/theme'

import { Routes } from './src/routes'

import { Loading } from '@components/Loading'

export default function App() {

  const [fontsLoaded] = useFonts({ SpaceGrotesk_300Light, SpaceGrotesk_400Regular, SpaceGrotesk_500Medium, SpaceGrotesk_700Bold })

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QuizContextProvider>
        <ThemeProvider theme={theme}>
          <StatusBar
            translucent
            barStyle="light-content"
            backgroundColor="transparent"
          />
          
          {fontsLoaded ? <Routes/> : <Loading/>}
        </ThemeProvider>
      </QuizContextProvider>
    </GestureHandlerRootView>
  )
}