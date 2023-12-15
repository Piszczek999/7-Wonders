import { ChangeEvent, useEffect, useState } from "react";

export default function Input({ count }: { count: number }) {
  const [militaryInput, setMilitaryInput] = useState(0);
  const [moneyInput, setMoneyInput] = useState(0);
  const [wonderInput, setWonderInput] = useState(0);
  const [blueInput, setBlueInput] = useState(0);
  const [yellowInput, setYellowInput] = useState(0);
  const [scienceInput, setScienceInput] = useState(0);
  const [guildInput, setGuildInput] = useState(0);
  const [sum, setSum] = useState(0);

  const handleInputChange =
    (inputSetter: React.Dispatch<React.SetStateAction<number>>) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value);
      inputSetter(isNaN(value) ? 0 : value);
    };

  useEffect(() => {
    setSum(
      militaryInput +
        moneyInput +
        wonderInput +
        blueInput +
        yellowInput +
        scienceInput +
        guildInput
    );
  }, [
    militaryInput,
    moneyInput,
    wonderInput,
    blueInput,
    yellowInput,
    scienceInput,
    guildInput,
  ]);

  return (
    <>
      <input
        type="text"
        name={`player${count}`}
        autoComplete="off"
        className="bg-slate-700 border-l-2 border-black text-slate-200"
      />
      <input
        list="cities"
        name={`city${count}`}
        autoComplete="off"
        className="bg-slate-400 border-l-2 border-black"
      />
      <input
        type="number"
        name={`military${count}`}
        autoComplete="off"
        className="bg-red-400 border-l-2 border-black text-center"
        onChange={handleInputChange(setMilitaryInput)}
      />
      <input
        type="number"
        name={`money${count}`}
        autoComplete="off"
        className="bg-amber-400 border-l-2 border-black text-center"
        onChange={handleInputChange(setMoneyInput)}
      />
      <input
        type="number"
        name={`wonder${count}`}
        autoComplete="off"
        className="bg-cyan-400 border-l-2 border-black text-center"
        onChange={handleInputChange(setWonderInput)}
      />
      <input
        type="number"
        name={`blue${count}`}
        autoComplete="off"
        className="bg-blue-400 border-l-2 border-black text-center"
        onChange={handleInputChange(setBlueInput)}
      />
      <input
        type="number"
        name={`yellow${count}`}
        autoComplete="off"
        className="bg-yellow-400 border-l-2 border-black text-center"
        onChange={handleInputChange(setYellowInput)}
      />
      <input
        type="number"
        name={`science${count}`}
        autoComplete="off"
        className="bg-emerald-400 border-l-2 border-black text-center"
        onChange={handleInputChange(setScienceInput)}
      />
      <input
        type="number"
        name={`guild${count}`}
        autoComplete="off"
        className="bg-violet-400 border-l-2 border-black text-center"
        onChange={handleInputChange(setGuildInput)}
      />
      <input
        type="number"
        name={`sum${count}`}
        autoComplete="off"
        value={sum}
        className="bg-slate-800 border-l-2 border-black text-slate-200 text-center"
        readOnly
      />
    </>
  );
}
