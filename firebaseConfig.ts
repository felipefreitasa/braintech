import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore";

import {
  FIREBASE_APP_ID,
  FIREBASE_API_KEY,
  FIREBASE_PROJECT_ID,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
} from "@env";

export type HistoryItemProps = {
  id?: string;
  createdAt: Date;
  technology: string;
  subCategory: string;
  correctAnswers: number;
  totalQuestions: number;
  category: "MOBILE" | "FRONT-END" | "BACK-END";
};

type HistoryProps = HistoryItemProps & {
  userId: string;
}

const firebaseConfig = {
  appId: FIREBASE_APP_ID,
  apiKey: FIREBASE_API_KEY,
  projectId: FIREBASE_PROJECT_ID,
  authDomain: FIREBASE_AUTH_DOMAIN,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_FIRESTORE = getFirestore(FIREBASE_APP);

export async function saveQuizStatus(historyItem: HistoryItemProps) {
  try {
    await addDoc(collection(FIREBASE_FIRESTORE, "history"), historyItem);
  } catch (error) {
    throw error;
  }
}

export async function getHistory(loggedUserId: string): Promise<HistoryProps[]> {
  try {
    const querySnapshot = await getDocs(
      collection(FIREBASE_FIRESTORE, "history")
    );

    const historyData: HistoryProps[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();

      if (data) {
        const historyItem: HistoryProps = {
          id: doc.id,
          createdAt: data.createdAt.toDate(),
          technology: data.technology,
          subCategory: data.subCategory,
          correctAnswers: data.correctAnswers,
          totalQuestions: data.totalQuestions,
          category: data.category,
          userId: data.userId,
        };

        if (data.userId === loggedUserId) {
          historyData.push(historyItem);
        }
      }
    });

    return historyData;
  } catch (error) {
    throw error;
  }
}
