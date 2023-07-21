import { UserCredential } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage"

import { AUTH_COLLECTION } from "../storageConfig"

export async function authGetAll(){
  try {
    const storage = await AsyncStorage.getItem(AUTH_COLLECTION)

    const auth: UserCredential = storage ? JSON.parse(storage) : {}

    return auth

  } catch (error) {
    throw error
  }
}