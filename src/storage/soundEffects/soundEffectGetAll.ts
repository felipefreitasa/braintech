import AsyncStorage from "@react-native-async-storage/async-storage"

import { SOUND_EFFECTS_COLLECTION } from "../storageConfig"

export async function soundEffectGetAll(){
  try {
    const storage = await AsyncStorage.getItem(SOUND_EFFECTS_COLLECTION)

    const isSoundEffectsEnabled: boolean = storage ? JSON.parse(storage) : true

    return isSoundEffectsEnabled

  } catch (error) {
    throw error
  }
}