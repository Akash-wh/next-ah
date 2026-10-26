
import CollectionBanner from "../assets/CollectionBanner.png";
import { products } from "./products";
import { type StaticImageData } from "next/image";


export interface CollectionInfo {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  category: string;
  banner: StaticImageData | string;
}

export const collections: CollectionInfo[] = [
  {
    slug: "linen",
    title: "The Linen Collection",
    eyebrow: "Natural fibres, considered forms",
    description:
      "Discover breathable linen essentials, designed with timeless silhouettes and thoughtful details.",
    category: "linen",
    banner: CollectionBanner,
  },
  {
    slug: "tops",
    title: "Tops & Knitwear",
    eyebrow: "Everyday essentials",
    description:
      "Considered shirts, fine knits and everyday layers made to wear season after season.",
    category: "tops",
    banner: CollectionBanner,
  },
  {
    slug: "bottoms",
    title: "Trousers & Skirts",
    eyebrow: "Effortless silhouettes",
    description:
      "Relaxed trousers and versatile skirts in timeless fabrics.",
    category: "bottoms",
    banner: CollectionBanner,
  },
  {
    slug: "dresses",
    title: "Dresses",
    eyebrow: "Understated elegance",
    description:
      "Simple, considered silhouettes designed for everyday dressing.",
    category: "dresses",
    banner: CollectionBanner,
  },
  {
    slug: "accessories",
    title: "Accessories",
    eyebrow: "The finishing touches",
    description:
      "Thoughtful everyday accessories that complement your wardrobe.",
    category: "accessories",
    banner: CollectionBanner,
  },
];

export const getCollectionBySlug = (slug: string) =>
  collections.find((collection) => collection.slug === slug);

export const getProductsByCollection = (slug: string) => {
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    return [];
  }

  return products.filter(
    (product) => product.category === collection.category
  );
};
