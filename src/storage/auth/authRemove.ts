import AsyncStorage from "@react-native-async-storage/async-storage"

import { AUTH_COLLECTION } from "../storageConfig"


export async function authRemove(){
  try {
    await AsyncStorage.removeItem(AUTH_COLLECTION)
    
  } catch (error) {
    throw error
  }
}