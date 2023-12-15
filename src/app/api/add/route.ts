import { scoreCol } from "@/firebase/firebase";
import { addDoc } from "firebase/firestore";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function POST(request: Request) {
  const formdata = await request.formData();
  console.log(formdata);

  [...Array(7)].forEach(async (_, num) => {
    if (formdata.get(`player${num}`)) {
      const documentData = {
        player: formdata.get(`player${num}`),
        city: formdata.get(`city${num}`),
        military: formdata.get(`military${num}`),
        money: formdata.get(`money${num}`),
        wonder: formdata.get(`wonder${num}`),
        blue: formdata.get(`blue${num}`),
        yellow: formdata.get(`yellow${num}`),
        science: formdata.get(`science${num}`),
        guild: formdata.get(`guild${num}`),
        sum: formdata.get(`sum${num}`),
      };

      await addDoc(scoreCol, documentData);
    }
  });
  revalidatePath("/");

  return redirect("/");
}
