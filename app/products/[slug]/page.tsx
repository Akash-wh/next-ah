import { Suspense } from "react";
import { notFound } from "next/navigation";

import ProductDetails from "@/app/components/ProductDeatails";
import ImageWithText from "../../components/ImageWithText";
import Newsletter from "../../components/Newsletter";
import ProductBanner from "../../assets/ProductBanner.png";
import { products } from "../../data/products";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug.replace(/^\/products\//, "").replace(/\/$/, ""),
  }));
}

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

const imageWithTextData = {
  eyebrow: "KNOW WHAT YOU WEAR",
  title: "Beautiful by nature.",
  description:
    "Linen begins with flax. Ours is grown in Europe and woven for a softness that only gets better with time. Breathable, resilient and naturally individual — just like you.",
  linkText: "Our materials & makers",
  linkUrl: "/about",
  image: ProductBanner,
  imageAlt: "Always know what you wear.",
  imagePosition: "right" as const,
};

const newsletterData = {
  eyebrow: "LETTERS FROM AUREL",
  title: "A quieter kind of inbox.",
  description:
    "New chapters, thoughtful stories and first access to our collections.",
  placeholder: "Your email address",
  privacyText:
    "By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.",
  buttonLabel: "Subscribe to newsletter",
};

async function ProductContent({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = products.find((item) => {
    const storedSlug = item.slug
      .replace(/^\/products\//, "")
      .replace(/\/$/, "");

    return storedSlug === slug;
  });

  if (!product) {
    notFound();
  }

  return (
    <>
      <ProductDetails
        id={product.id}
        title={product.title}
        eyebrow="The Signature Collection"
        price={product.price}
        currency="€"
        description={product.subtitle}
        images={[product.image]}
        imageAlt={product.imageAlt}
        sizes={product.sizes}
        initialSize={product.sizes[0]}
        details={[
          product.subtitle,
          `Colour: ${product.color}`,
          `Material: ${product.material}`,
        ]}
      />

      <ImageWithText {...imageWithTextData} />

      <Newsletter {...newsletterData} />
    </>
  );
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <Suspense
      fallback={
        <div
          className="min-h-screen bg-[#f7f5f1]"
          aria-label="Loading product"
        />
      }
    >
      <ProductContent params={params} />
    </Suspense>
  );
}
