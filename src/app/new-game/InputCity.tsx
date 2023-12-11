export default function InputCity() {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7].map((num) => (
        <input
          key={num}
          id={`city${num}`}
          list="cities"
          name={`city${num}`}
          className="border-l-2 border-black"
        />
      ))}

      <datalist id="cities">
        <option value="Giza" />
        <option value="Rhodes" />
        <option value="Babylon" />
        <option value="Alexandria" />
        <option value="Halicarnassus" />
        <option value="Olympia" />
        <option value="Ephesus" />
      </datalist>
    </>
  );
}
