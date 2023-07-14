import { Alert } from "react-native"
import { ReactNode, createContext, useState } from "react"

import { soundEffectGetAll } from "@storage/soundEffects/soundEffectGetAll"

export type SettingsContextDataProps = {
  isSoundEffectsLoading: boolean;
  setIsSoundEffectsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isSoundEffectsEnabled: boolean;
  setIsSoundEffectsEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  fetchSoundEffectsSettings: () => Promise<void>;
}

type SettingsContextProviderProps = {
  children: ReactNode
}

export const SettingsContext = createContext<SettingsContextDataProps>({} as SettingsContextDataProps)

export function SettingsContextProvider({ children }: SettingsContextProviderProps){

  const [isSoundEffectsLoading, setIsSoundEffectsLoading] = useState(false)
  const [isSoundEffectsEnabled, setIsSoundEffectsEnabled] = useState(false)

  async function fetchSoundEffectsSettings(){
    try {
      setIsSoundEffectsLoading(true)
      
      const data = await soundEffectGetAll()
      setIsSoundEffectsEnabled(data)
      
    } catch (error) {
      Alert.alert('Efeitos sonoros', 'Não foi possível carregar as configurações de efeitos sonoros!')

    } finally {
      setIsSoundEffectsLoading(false)
    }
  }

  return(
    <SettingsContext.Provider value={{
      isSoundEffectsEnabled,
      isSoundEffectsLoading,
      setIsSoundEffectsEnabled,
      setIsSoundEffectsLoading,
      fetchSoundEffectsSettings,
    }}>
      {children}
    </SettingsContext.Provider>
  )
}