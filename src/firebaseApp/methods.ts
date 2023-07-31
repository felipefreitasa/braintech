import { updateProfile } from "firebase/auth";
import { addDoc, collection, getDocs } from "firebase/firestore";

import { FIREBASE_AUTH, FIREBASE_FIRESTORE } from "./config";

export type HistoryItemProps = {
  id?: string;
  userId?: string;
  createdAt: Date;
  timeSpent?: string;
  technology: string;
  subCategory: string;
  correctAnswers: number;
  totalQuestions: number;
  category: "MOBILE" | "FRONT-END" | "BACK-END";
};

type HistoryProps = HistoryItemProps & {
  userId: string;
}

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
          userId: data.userId,
          category: data.category,
          timeSpent: data.timeSpent,
          technology: data.technology,
          subCategory: data.subCategory,
          createdAt: data.createdAt.toDate(),
          correctAnswers: data.correctAnswers,
          totalQuestions: data.totalQuestions,
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

export async function updateUserProfilePicture(photoUri: string) {
  if (FIREBASE_AUTH.currentUser) {
    await updateProfile(FIREBASE_AUTH.currentUser, {
      photoURL: photoUri,
    });
  }
}