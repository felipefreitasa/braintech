import AsyncStorage from "@react-native-async-storage/async-storage"

import { HistoryItemProps } from "./historyCreate"

import { HISTORY_COLLECTION } from "../storageConfig"

export async function historyGetAll(){
  try {
    const storage = await AsyncStorage.getItem(HISTORY_COLLECTION)

    const history: HistoryItemProps[] = storage ? JSON.parse(storage) : []

    return history

  } catch (error) {
    throw error
  }
}