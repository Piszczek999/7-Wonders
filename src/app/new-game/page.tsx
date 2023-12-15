"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Input from "./Input";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = searchParams.get("count");
  const [count, setCount] = useState(7);

  return (
    <main>
      <div className="max-w-lg mx-auto">
        {params ? (
          <form action="/api/add" method="POST" className="flex flex-col">
            <div className="grid grid-rows-[repeat(10,minmax(0,1fr))] grid-flow-col">
              <p className="bg-slate-800 p-1 text-slate-200">Player</p>
              <p className="bg-slate-500 p-1">City</p>
              <p className="bg-red-500 p-1">Military</p>
              <p className="bg-amber-500 p-1">Money</p>
              <p className="bg-cyan-500 p-1">Wonder</p>
              <p className="bg-blue-500 p-1">Blue</p>
              <p className="bg-yellow-500 p-1">Yellow</p>
              <p className="bg-emerald-500 p-1">Science</p>
              <p className="bg-violet-500 p-1">Guild</p>
              <p className="bg-black p-1 text-slate-200">Sum</p>
              {[...Array(count)].map((_, num) => (
                <Input key={num} count={num} />
              ))}
            </div>
            <button
              type="submit"
              className="bg-blue-500 rounded-lg mt-1 p-1 font-bold text-slate-200"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => router.push(pathname)}
              className="bg-blue-500 rounded-lg mt-1 p-1 font-bold text-slate-200"
            >
              Change players number
            </button>
          </form>
        ) : (
          <div className="flex flex-col">
            <div className="flex">
              <label htmlFor="count" className="text-lg font-bold p-1">
                How many players:
              </label>
              <input
                type="number"
                name="count"
                className="w-1/2 grow bg-sky-200 rounded-lg border-2 border-black p-1"
                onChange={(e) => setCount(parseInt(e.target.value))}
              />
            </div>
            <button
              type="button"
              onClick={() => router.push(`${pathname}?count=${count}`)}
              className="bg-blue-500 rounded-lg mt-1 p-1 font-bold text-slate-200"
            >
              Create
            </button>
          </div>
        )}
      </div>

      <datalist id="cities">
        <option value="Giza" />
        <option value="Rhodes" />
        <option value="Babylon" />
        <option value="Alexandria" />
        <option value="Halicarnassus" />
        <option value="Olympia" />
        <option value="Ephesus" />
      </datalist>
    </main>
  );
}
