import { scoreCol } from "@/firebase/firebase";
import { addDoc } from "firebase/firestore";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function POST(request: Request) {
  const formdata = await request.formData();

  [1, 2, 3, 4, 5, 6, 7].forEach(async (num) => {
    if (formdata.get(`player${num}`)) {
      await addDoc(scoreCol, {
        // console.log({
        player: formdata.get(`player${num}`),
        city: formdata.get(`city${num}`),
        military: formdata.get(`military${num}`),
        money: formdata.get(`money${num}`),
        wonder: formdata.get(`wonder${num}`),
        blue: formdata.get(`blue${num}`),
        yellow: formdata.get(`yellow${num}`),
        science: formdata.get(`science${num}`),
        guild: formdata.get(`guild${num}`),
      });
    }
  });
  revalidatePath("/");

  return redirect("/");
}
