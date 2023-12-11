import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-4 p-2 bg-blue-500 text-white">
      <Link href={"/"}>Home</Link>
      <Link href={"/new-game"}>New Game</Link>
    </nav>
  );
}
