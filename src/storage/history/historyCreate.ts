import AsyncStorage from "@react-native-async-storage/async-storage"

import { CategoryTypeProps } from "../../@types/categoryTypeProps"

import { HISTORY_COLLECTION } from "../storageConfig"

import { historyGetAll } from "./historyGetAll"

export type HistoryItemProps = {
  id: number;
  createdAt: Date;
  technology: string;
  subCategory: string;
  correctAnswers: number;
  totalQuestions: number;
  category: CategoryTypeProps;
}

export async function historyCreate(newHistoryItem: HistoryItemProps){
  try {
    const storedHistory = await historyGetAll()

    const storage = JSON.stringify([...storedHistory, newHistoryItem])

    await AsyncStorage.setItem(HISTORY_COLLECTION, storage)
    
  } catch (error) {
    throw error
  }
}