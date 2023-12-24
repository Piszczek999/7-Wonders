import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { DocumentData } from "firebase/firestore";

export default async function Home() {
  const gameSnapshot = await getDocs(collection(db, "games"));
  const gameList = gameSnapshot.docs.map((doc) => doc.data());

  const scoreSnapshot = await getDocs(collection(db, "scores"));
  const scoreList = scoreSnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() } as DocumentData;
  });

  return (
    <main>
      {scoreList.map((score) => (
        <h1 key={score.id}>
          {score.player} | {score.city}
        </h1>
      ))}
    </main>
  );
}
