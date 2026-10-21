import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 px-6 py-4">
      <nav className="flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          My Next App
        </Link>

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
