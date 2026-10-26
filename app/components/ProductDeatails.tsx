"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";

type ProductImage = StaticImageData | string;

export interface ProductDetailsProps {
  id?: string | number;
  title: string;
  eyebrow?: string;
  price: number;
  currency?: string;
  description: string;
  images: ProductImage[];
  imageAlt: string;
  sizes: string[];
  initialSize?: string;
  stockMessage?: string;
  details?: string[];
  fitDetails?: string[];
  careDetails?: string[];
  shippingDetails?: string[];
}

export default function ProductDetails({
  id,
  title,
  eyebrow = "The Signature Collection",
  price,
  currency = "€",
  description,
  images,
  imageAlt,
  sizes,
  initialSize = "M",
  stockMessage = "In stock — ready to find its place in your wardrobe",
  details = [],
  fitDetails = [],
  careDetails = [],
  shippingDetails = [],
}: ProductDetailsProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(
    sizes.includes(initialSize) ? initialSize : (sizes[0] ?? "")
  );
  const [saved, setSaved] = useState(false);
  const [cartMessage, setCartMessage] = useState("");
  const [openSections, setOpenSections] = useState<string[]>(["details"]);

  const sections = [
    { id: "details", title: "Details & composition", content: details },
    { id: "fit", title: "Fit & measurements", content: fitDetails },
    { id: "care", title: "Care & longevity", content: careDetails },
    {
      id: "shipping",
      title: "Shipping & returns",
      content: shippingDetails,
    },
  ];

  const toggleSection = (sectionId: string) => {
    setOpenSections((current) =>
      current.includes(sectionId)
        ? current.filter((item) => item !== sectionId)
        : [...current, sectionId]
    );
  };

  const handleAddToBag = () => {
    if (!selectedSize) {
      setCartMessage("Please select a size first.");
      return;
    }

    const item = {
      id: id ?? title,
      title,
      price,
      currency,
      size: selectedSize,
      quantity: 1,
    };

    // Notify a cart component elsewhere in the application.
    window.dispatchEvent(
      new CustomEvent("aurel:add-to-cart", {
        detail: item,
      })
    );

    setCartMessage(`${title}, size ${selectedSize}, added to your bag.`);
  };

  const handleSave = () => {
    setSaved((current) => !current);
  };

  const showNextImage = () => {
    setActiveImage((current) =>
      images.length > 0 ? (current + 1) % images.length : 0
    );
  };

  return (
    <section className="min-h-screen bg-[#f7f5f1] text-[#292923]">
      <div className="mx-auto max-w-[1800px] px-4 py-8 sm:px-6 lg:px-10 lg:py-15">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1.55fr)_minmax(360px,1fr)] lg:gap-10 xl:gap-14">
          {/* Product image gallery */}
          <div className="min-w-0">
            <div className="relative aspect-4/5 overflow-hidden bg-[#eeece5]">
              {images.length > 0 ? (
                <Image
                  src={images[activeImage]}
                  alt={`${imageAlt} — image ${activeImage + 1}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-[#807c74]">
                  No product image available
                </div>
              )}

              {images.length > 0 && (
                <>
                  <span className="absolute bottom-4 left-4 bg-[#f7f5f1]/90 px-3 py-2 text-[10px] tracking-wide">
                    {String(activeImage + 1).padStart(2, "0")} /{" "}
                    {String(images.length).padStart(2, "0")}
                  </span>

                  {images.length > 1 && (
                    <button
                      type="button"
                      aria-label="Show next product image"
                      onClick={showNextImage}
                      className="absolute bottom-4 right-4 flex size-9 items-center justify-center bg-[#f7f5f1]/90 text-lg transition hover:bg-white"
                    >
                      ↗
                    </button>
                  )}
                </>
              )}
            </div>

            {/* Supporting images */}
            {images.length > 1 && (
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                {images.map((image, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={`View product image ${index + 1}`}
                    aria-pressed={activeImage === index}
                    className={`relative aspect-[1.1/0.85] overflow-hidden bg-[#eeece5] ${
                      activeImage === index
                        ? "ring-1 ring-[#646951]"
                        : ""
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${imageAlt} detail ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 45vw, 20vw"
                      className="object-cover transition duration-500 hover:scale-[1.03]"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product information */}
          <div className="min-w-0 lg:sticky lg:top-8">
            <p className="text-[9px] uppercase tracking-[0.16em] text-[#807c74] sm:text-[10px]">
              {eyebrow}
            </p>

            <h1 className="mt-3 font-serif text-3xl font-normal leading-tight sm:text-4xl xl:text-5xl">
              {title}
            </h1>

            <div className="mt-3 flex items-center gap-2 text-sm">
              <span>
                {currency}
                {price.toLocaleString("en-US")}
              </span>
              <span className="text-[10px] text-[#807c74]">
                / VAT included
              </span>
            </div>

            <p className="mt-5 max-w-lg text-xs leading-6 text-[#807c74] sm:text-sm sm:leading-7">
              {description}
            </p>

            {/* Size selector */}
            <div className="mt-6">
              <div className="mb-3 flex items-center justify-between text-[10px]">
                <span>
                  Size:{" "}
                  <strong className="font-medium">
                    {selectedSize || "Select a size"}
                  </strong>
                </span>

                <button
                  type="button"
                  onClick={() => toggleSection("size-guide")}
                  aria-expanded={openSections.includes("size-guide")}
                  className="underline underline-offset-4"
                >
                  Size guide
                </button>
              </div>

              <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    aria-pressed={selectedSize === size}
                    onClick={() => {
                      setSelectedSize(size);
                      setCartMessage("");
                    }}
                    className={`flex min-h-11 items-center justify-center border text-[10px] transition-colors ${
                      selectedSize === size
                        ? "border-[#292923] bg-[#292923] text-white"
                        : "border-[#dedbd1] hover:border-[#292923]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <p className="mt-3 text-[9px] leading-5 text-[#807c74]">
                Relaxed fit. Model is 178 cm and wears size S.
              </p>

              {openSections.includes("size-guide") && (
                <div className="mt-3 border border-[#dedbd1] p-4">
                  <p className="text-xs font-medium">Size guide</p>
                  <p className="mt-2 text-xs leading-6 text-[#807c74]">
                    Choose your usual size for a relaxed fit. For exact
                    garment measurements, add your size chart here.
                  </p>
                  <button
                    type="button"
                    onClick={() => toggleSection("size-guide")}
                    className="mt-2 text-xs underline"
                  >
                    Close size guide
                  </button>
                </div>
              )}
            </div>

            {/* Availability */}
            <p className="mt-5 flex items-center gap-2 text-[10px] text-[#646951]">
              <span className="size-1.5 rounded-full bg-[#646951]" />
              {stockMessage}
            </p>

            {/* Add to bag */}
            <button
              type="button"
              onClick={handleAddToBag}
              disabled={sizes.length === 0}
              className="mt-4 flex min-h-12 w-full items-center justify-center gap-4 bg-[#292923] px-5 py-4 text-[10px] uppercase tracking-wide text-white transition hover:bg-[#646951] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Add to bag — {currency}
              {price.toLocaleString("en-US")}
              <span aria-hidden="true" className="text-base">
                →
              </span>
            </button>

            {cartMessage && (
              <p role="status" aria-live="polite" className="mt-3 text-xs text-[#646951]">
                {cartMessage}
              </p>
            )}

            {/* Save for later */}
            <button
              type="button"
              onClick={handleSave}
              aria-pressed={saved}
              className="mt-3 flex min-h-9 w-full items-center justify-center gap-2 text-[10px] transition hover:text-[#646951]"
            >
              <span className="text-base" aria-hidden="true">
                {saved ? "♥" : "♡"}
              </span>
              {saved ? "Saved for later" : "Save for later"}
            </button>

            {/* Shipping note */}
            <div className="mt-5 space-y-2 bg-[#eae6dc] px-4 py-4 text-[10px] leading-4">
              <p>Complimentary EU shipping on this piece.</p>
              <p>Dispatches in 1–2 business days.</p>
              <p>Thoughtful packaging. Easy 30-day returns.</p>
            </div>

            {/* Accordion information */}
            <div className="mt-6">
              {sections.map((section) => {
                const isOpen = openSections.includes(section.id);

                return (
                  <div
                    key={section.id}
                    className="border-t border-[#dedbd1] last:border-b"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => toggleSection(section.id)}
                      className="flex min-h-12 w-full items-center justify-between gap-4 py-3 text-left text-[10px]"
                    >
                      <span>{section.title}</span>
                      <span className="text-sm">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="space-y-1.5 pb-5 text-[10px] leading-5 text-[#807c74]">
                        {section.content.length > 0 ? (
                          section.content.map((item, index) => (
                            <p key={`${section.id}-${index}`}>{item}</p>
                          ))
                        ) : (
                          <p>Product information coming soon.</p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}