import { getDocs } from "firebase/firestore";
import { gameCol, scoreCol } from "../firebase/firebase";
import { DocumentData } from "firebase/firestore";

export default async function Home() {
  const gameSnapshot = await getDocs(gameCol);
  const gameList = gameSnapshot.docs.map((doc) => doc.data());

  const scoreSnapshot = await getDocs(scoreCol);
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
