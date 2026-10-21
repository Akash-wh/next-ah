import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          Welcome to My Next App
        </h1>
        <p className="mt-4 text-gray-600">
          Built with Next.js, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </main>
  );
}