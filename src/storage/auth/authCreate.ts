import { UserCredential } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage"

import { AUTH_COLLECTION } from "../storageConfig"


export async function authCreate(userData: UserCredential){
  try {
    const storage = JSON.stringify(userData)

    await AsyncStorage.setItem(AUTH_COLLECTION, storage)
    
  } catch (error) {
    throw error
  }
}