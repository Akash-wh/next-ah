import Image, { type StaticImageData } from "next/image";

interface Product {
  id: number;
  image: StaticImageData | string;
  imageAlt: string;
  badge?: string;
  title: string;
  price: string;
  material: string;
  link: string;
}

interface FeaturedProductsProps {
  eyebrow: string;
  heading: string;
  shopLinkText: string;
  shopLink: string;
  products: Product[];
}

export default function FeaturedProducts({
  eyebrow,
  heading,
  shopLinkText,
  shopLink,
  products,
}: FeaturedProductsProps) {
  return (
    <section className="w-full bg-[#eae6da] px-5 py-8 text-[#292923] sm:px-8 sm:py-10 lg:px-[4.1%] lg:py-15">
      <div className="mx-auto max-w-[1800px]">
        {/* Section heading */}
        <div className="mb-7 flex items-end justify-between gap-4 sm:mb-8">
          <div>
            <p className="mb-3 text-[9px] uppercase tracking-wide text-[#85817b]">
              {eyebrow}
            </p>

            <h2 className="font-serif text-[clamp(30px,3.5vw,44px)] font-normal leading-tight tracking-[-0.03em]">
              {heading}
            </h2>
          </div>

          <a href={shopLink}
            className="group mb-1 hidden shrink-0 items-center gap-4 border-b border-[#85817b] pb-2 text-[11px] sm:inline-flex"
          >
            {shopLinkText}
            <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-7 sm:gap-x-5 md:grid-cols-4 lg:gap-x-5.5">
          {products.map((product) => (
            <article key={product.id} className="min-w-0">
              {/* Product image */}
              <div className="group relative aspect-[0.78/1] overflow-hidden bg-[#e0dbd0]">
                <a href={product.link}
                  aria-label={`View ${product.title}`}
                  className="block h-full w-full"
                >
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </a>

                {/* Product badge */}
                {product.badge && (
                  <span className="absolute left-3 top-3 bg-[#f7f5f1] px-3 py-2 text-[8px] uppercase tracking-wide">
                    {product.badge}
                  </span>
                )}

                {/* Wishlist button */}
                <button
                  type="button"
                  aria-label={`Add ${product.title} to wishlist`}
                  className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="19"
                    height="19"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    aria-hidden="true"
                  >
                    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
                  </svg>
                </button>
              </div>

              {/* Product information */}
              <div className="mt-3">
                <div className="flex items-start justify-between gap-2">
                  <a href={product.link}
                    className="text-[11px] leading-relaxed hover:underline sm:text-xs"
                  >
                    {product.title}
                  </a>

                  <span className="shrink-0 text-[11px] sm:text-xs">
                    {product.price}
                  </span>
                </div>

                <p className="mt-1.5 text-[10px] leading-relaxed text-[#85817b] sm:text-[11px]">
                  {product.material}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile shop link */}
        <div className="mt-8 flex justify-center sm:hidden">
          <a href={shopLink}
            className="inline-flex items-center gap-4 border-b border-[#85817b] pb-2 text-[11px]"
          >
            {shopLinkText}
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
