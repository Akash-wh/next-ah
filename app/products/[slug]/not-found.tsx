
import Link from "next/link";

export default function ProductNotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center bg-[#f7f5f1] px-5 text-center text-[#292923]">
      <p className="text-xs uppercase tracking-widest text-[#85817b]">
        404 — Product not found
      </p>

      <h1 className="mt-4 font-serif text-4xl">
        This piece could not be found.
      </h1>

      <p className="mt-4 text-sm text-[#807c74]">
        The product may have been removed or the URL may be incorrect.
      </p>

      <Link
        href="/collections"
        className="mt-8 border-b border-[#292923] pb-2 text-xs"
      >
        Explore the collection
      </Link>
    </main>
  );
}
