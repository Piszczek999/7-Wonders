export default function Input({
  field,
  type,
}: {
  field: string;
  type: string;
}) {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7].map((num) => (
        <input
          id={`${field}${num}`}
          type={type}
          name={`player${num}`}
          className="border-l-2 border-black"
        />
      ))}
    </>
  );
}
