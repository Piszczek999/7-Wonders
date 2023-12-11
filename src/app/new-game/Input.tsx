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
          key={num}
          id={`${field}${num}`}
          type={type}
          name={`${field}${num}`}
          autoComplete="false"
          className="border-l-2 border-black"
        />
      ))}
    </>
  );
}
