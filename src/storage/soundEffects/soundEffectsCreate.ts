import AsyncStorage from "@react-native-async-storage/async-storage"

import { SOUND_EFFECTS_COLLECTION } from "../storageConfig"

import { soundEffectGetAll } from "./soundEffectGetAll"

export async function soundEffectsCreate() {
  try {
    const storedIsSoundEffectEnabled = await soundEffectGetAll()

    const storage = JSON.stringify(storedIsSoundEffectEnabled ? false : true)

    await AsyncStorage.setItem(SOUND_EFFECTS_COLLECTION, storage)
    
  } catch (error) {
    throw error
  }
}