"use client";
import { useMemo, useState } from "react";
import Image, { type StaticImageData } from "next/image";
// import { Link } from "react-router-dom";

interface CollectionProduct {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  image: StaticImageData | string;
  imageAlt: string;
  category: string;
  sizes: string[];
  color: string;
  material: string;
  isNew?: boolean;
  slug: string;
}

interface CollectionCategory {
  label: string;
  value: string;
}

interface CollectionGridProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  currency?: string;
  categories: CollectionCategory[];
  products: CollectionProduct[];
}

export default function CollectionGrid({
  eyebrow,
  title,
  description,
  currency = "€",
  categories,
  products,
}: CollectionGridProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [openFilter, setOpenFilter] = useState("");

  const sizes = useMemo(
    () => [...new Set(products.flatMap((product) => product.sizes))].sort(),
    [products],
  );

  const colors = useMemo(
    () => [...new Set(products.map((product) => product.color))].sort(),
    [products],
  );

  const materials = useMemo(
    () => [...new Set(products.map((product) => product.material))].sort(),
    [products],
  );

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const categoryMatch =
        activeCategory === "all" || product.category === activeCategory;

      const sizeMatch = !selectedSize || product.sizes.includes(selectedSize);

      const colorMatch = !selectedColor || product.color === selectedColor;

      const materialMatch =
        !selectedMaterial || product.material === selectedMaterial;

      let priceMatch = true;

      if (selectedPrice === "under-100") {
        priceMatch = product.price < 100;
      } else if (selectedPrice === "100-200") {
        priceMatch = product.price >= 100 && product.price <= 200;
      } else if (selectedPrice === "over-200") {
        priceMatch = product.price > 200;
      }

      return (
        categoryMatch && sizeMatch && colorMatch && materialMatch && priceMatch
      );
    });

    if (sortBy === "price-low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === "title") {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [
    products,
    activeCategory,
    selectedSize,
    selectedColor,
    selectedMaterial,
    selectedPrice,
    sortBy,
  ]);

  const resetFilters = () => {
    setSelectedSize("");
    setSelectedColor("");
    setSelectedMaterial("");
    setSelectedPrice("");
    setActiveCategory("all");
    setSortBy("featured");
    setOpenFilter("");
  };

  const activeFilterCount = [
    selectedSize,
    selectedColor,
    selectedMaterial,
    selectedPrice,
  ].filter(Boolean).length;

  const filterOptions = [
    {
      label: "Size",
      value: selectedSize,
      options: sizes.map((size) => ({ label: size, value: size })),
      onChange: setSelectedSize,
    },
    {
      label: "Color",
      value: selectedColor,
      options: colors.map((color) => ({ label: color, value: color })),
      onChange: setSelectedColor,
    },
    {
      label: "Material",
      value: selectedMaterial,
      options: materials.map((material) => ({
        label: material,
        value: material,
      })),
      onChange: setSelectedMaterial,
    },
    {
      label: "Price",
      value: selectedPrice,
      options: [
        { label: `Under ${currency}100`, value: "under-100" },
        { label: `${currency}100–${currency}200`, value: "100-200" },
        { label: `Over ${currency}200`, value: "over-200" },
      ],
      onChange: setSelectedPrice,
    },
  ];

  return (
    <section className="bg-[#f7f5f1] text-[#292923]">
      <div className="mx-auto px-4 py-8 sm:px-6 sm:py-8 lg:px-10 lg:py-15">
        {/* Optional collection heading */}
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-2xl sm:mb-12">
            {eyebrow && (
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-[#646951] sm:text-xs">
                {eyebrow}
              </p>
            )}

            {title && (
              <h1 className="font-serif text-4xl font-normal tracking-tight sm:text-5xl lg:text-6xl">
                {title}
              </h1>
            )}

            {description && (
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#807c74] sm:text-base">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Category tabs */}
        <div className="flex gap-6 overflow-x-auto border-b border-[#dedbd1] scrollbarnone sm:gap-8 [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => {
            const isActive = activeCategory === category.value;

            return (
              <button
                key={category.value}
                type="button"
                onClick={() => setActiveCategory(category.value)}
                className={`shrink-0 border-b pb-3 text-[11px] transition-colors sm:text-xs ${
                  isActive
                    ? "border-[#292923] text-[#292923]"
                    : "border-transparent text-[#807c74] hover:text-[#292923]"
                }`}
              >
                {category.label}
                {isActive && (
                  <span className="ml-1">({filteredProducts.length})</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Filters and sorting */}
        <div className="flex flex-col gap-4 py-5 sm:py-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {filterOptions.map((filter) => (
              <div key={filter.label} className="relative">
                <button
                  type="button"
                  aria-expanded={openFilter === filter.label}
                  onClick={() =>
                    setOpenFilter((current) =>
                      current === filter.label ? "" : filter.label,
                    )
                  }
                  className={`inline-flex min-w-19 items-center justify-between gap-3 border px-3 py-2.5 text-[11px] transition-colors sm:min-w-23.5 sm:px-4 ${
                    filter.value
                      ? "border-[#858873] bg-[#eeece5]"
                      : "border-[#dedbd1] hover:border-[#a7a795]"
                  }`}
                >
                  <span>{filter.value || filter.label}</span>
                  <span className="text-[10px]">⌄</span>
                </button>

                {openFilter === filter.label && (
                  <div className="absolute left-0 top-full z-20 mt-2 max-h-64 min-w-44 overflow-y-auto border border-[#dedbd1] bg-[#f7f5f1] py-2 shadow-lg">
                    <button
                      type="button"
                      onClick={() => {
                        filter.onChange("");
                        setOpenFilter("");
                      }}
                      className="w-full px-4 py-2.5 text-left text-xs text-[#807c74] hover:bg-[#eeece5]"
                    >
                      All {filter.label.toLowerCase()}
                    </button>

                    {filter.options.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => {
                          filter.onChange(option.value);
                          setOpenFilter("");
                        }}
                        className={`w-full px-4 py-2.5 text-left text-xs hover:bg-[#eeece5] ${
                          filter.value === option.value
                            ? "text-[#646951]"
                            : "text-[#292923]"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {activeFilterCount > 0 && (
              <button
                type="button"
                onClick={resetFilters}
                className="px-2 py-2 text-[10px] underline underline-offset-4 text-[#807c74] hover:text-[#292923]"
              >
                Clear ({activeFilterCount})
              </button>
            )}
          </div>

          <div className="flex items-center justify-between gap-4 lg:justify-end">
            <p className="text-[10px] text-[#807c74] sm:text-xs">
              {filteredProducts.length} considered{" "}
              {filteredProducts.length === 1 ? "piece" : "pieces"}
            </p>

            <label className="flex items-center gap-2 text-[11px] sm:text-xs">
              <span className="shrink-0">Sort by:</span>
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="max-w-35 cursor-pointer bg-transparent py-2 outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
                <option value="title">Alphabetically</option>
              </select>
            </label>
          </div>
        </div>

        {/* Product grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-12">
            {filteredProducts.map((product) => (
              <article key={product.id} className="group min-w-0">
                <a href={`/products/${product.slug}`}
                  className="relative block overflow-hidden bg-[#eeece5]"
                >
                  <div className="aspect-3/4 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>

                  {product.isNew && (
                    <span className="absolute left-2 top-2 bg-[#f7f5f1] px-2 py-1 text-[9px] uppercase tracking-wider sm:left-3 sm:top-3 sm:px-3">
                      New
                    </span>
                  )}
                </a>

                <div className="mt-3 flex items-start justify-between gap-2">
                  <h2 className="min-w-0 text-[11px] leading-5 sm:text-xs">
                    <a href={`/products/${product.slug}`}
                      className="hover:text-[#646951]"
                    >
                      {product.title}
                    </a>
                  </h2>

                  <span className="shrink-0 text-[11px] sm:text-xs">
                    {currency}
                    {product.price}
                  </span>
                </div>

                <p className="mt-1 text-[9px] leading-4 text-[#807c74] sm:text-[10px]">
                  {product.subtitle}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center sm:py-28">
            <h2 className="font-serif text-2xl sm:text-3xl">No pieces found</h2>
            <p className="mt-3 text-sm text-[#807c74]">
              Try adjusting your filters to discover more pieces.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-6 border-b border-[#858873] pb-2 text-xs uppercase tracking-[0.15em]"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
