import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnkZY1FRCTKtW6nq__uIQ5UgcJHDQtnCM",
  authDomain: "wonders-notes.firebaseapp.com",
  projectId: "wonders-notes",
  storageBucket: "wonders-notes.appspot.com",
  messagingSenderId: "656690311055",
  appId: "1:656690311055:web:140d319eedea277934e5fa",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export const scoreCol = collection(db, "scores");
export const gameCol = collection(db, "games");
