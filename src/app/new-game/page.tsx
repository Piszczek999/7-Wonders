"use client";
import InputCity from "./InputCity";
import Input from "./Input";

export default function Page() {
  return (
    <main>
      <div className="max-w-lg mx-auto">
        <form action={"/api/add"} method="POST" className="flex flex-col">
          <div className="flex flex-col rounded-lg overflow-hidden">
            <div className="grid grid-cols-8 bg-slate-700 text-white">
              <p className="bg-slate-800 p-1">Nazwa</p>
              <Input field="player" type="text" />
            </div>
            <div className="grid grid-cols-8 bg-slate-300">
              <p className="bg-slate-400 p-1">Miasto</p>
              <InputCity />
            </div>
            <div className="grid grid-cols-8 bg-red-300">
              <p className="bg-red-400 p-1">Wojna</p>
              <Input field="military" type="number" />
            </div>
            <div className="grid grid-cols-8 bg-yellow-300">
              <p className="bg-yellow-400 p-1">Złoto</p>
              <Input field="money" type="number" />
            </div>
            <div className="grid grid-cols-8 bg-orange-300">
              <p className="bg-orange-400 p-1">Cuda</p>
              <Input field="wonder" type="number" />
            </div>
            <div className="grid grid-cols-8 bg-blue-300">
              <p className="bg-blue-400 p-1">Cywilne</p>
              <Input field="blue" type="number" />
            </div>
            <div className="grid grid-cols-8 bg-yellow-300">
              <p className="bg-yellow-400 p-1">Żółte</p>
              <Input field="yellow" type="number" />
            </div>
            <div className="grid grid-cols-8 bg-green-300">
              <p className="bg-green-400 p-1">Nauka</p>
              <Input field="science" type="number" />
            </div>
            <div className="grid grid-cols-8 bg-violet-300">
              <p className="bg-violet-400 p-1">Gildia</p>
              <Input field="guild" type="number" />
            </div>
          </div>
          <button type="submit" className="bg-blue-500 rounded-lg mt-1">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
