import Image, { type StaticImageData } from "next/image";
import type { CollectionProduct } from "../data/products";

interface RecommendedProductsProps {
  products: CollectionProduct[];
  title?: string;
  eyebrow?: string;
  description?: string;
  currency?: string;
  limit?: number;
  excludeProductId?: number;
}

export default function RecommendedProducts({
  products,
  title = "Considered for you",
  eyebrow = "YOU MAY ALSO LIKE",
  description = "Discover more pieces to complement your wardrobe.",
  currency = "€",
  limit = 4,
  excludeProductId,
}: RecommendedProductsProps) {
  const recommendedProducts = products
    .filter((product) => product.id !== excludeProductId)
    .slice(0, limit);

  if (recommendedProducts.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#f7f5f1] px-4 py-12 text-[#292923] sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1800px]">
        {/* Section heading */}
        <div className="mb-7 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#646951] sm:text-[10px]">
              {eyebrow}
            </p>

            <h2 className="mt-3 font-serif text-3xl font-normal sm:text-4xl lg:text-5xl">
              {title}
            </h2>
          </div>

          <p className="max-w-sm text-xs leading-6 text-[#807c74] sm:text-sm">
            {description}
          </p>
        </div>

        {/* Responsive product grid */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-6">
          {recommendedProducts.map((product) => (
            <article key={product.id} className="group min-w-0">
              <a href={product.slug}
                className="relative block overflow-hidden bg-[#eeece5]"
              >
                <div className="aspect-3/4 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>

                {product.isNew && (
                  <span className="absolute left-2 top-2 bg-[#f7f5f1] px-2 py-1 text-[8px] uppercase tracking-wider sm:left-3 sm:top-3 sm:text-[9px]">
                    New
                  </span>
                )}
              </a>

              <div className="mt-3 flex items-start justify-between gap-2">
                <a href={product.slug}
                  className="min-w-0 text-[11px] leading-5 transition-colors hover:text-[#646951] sm:text-xs"
                >
                  {product.title}
                </a>

                <span className="shrink-0 text-[11px] sm:text-xs">
                  {currency}
                  {product.price.toLocaleString("en-US")}
                </span>
              </div>

              <p className="mt-1 text-[9px] leading-4 text-[#807c74] sm:text-[10px]">
                {product.subtitle}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
