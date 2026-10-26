
import { Suspense } from "react";
import { notFound } from "next/navigation";

import ImageWithText from "../../components/ImageWithText";
import CareGuide from "../../components/CareGuide";
import Newsletter from "../../components/Newsletter";
import CollectionGrid from "@/app/components/CollectionProductsGrid";

import {
  collections,
  getCollectionBySlug,
  getProductsByCollection,
} from "@/app/data/collections";

import {
  imageWithTextData,
  careContentData,
} from "@/app/collections/page";

interface CollectionPageProps {
  params: Promise<{ slug: string }>;
}

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

export function generateStaticParams() {
  return collections.map((collection) => ({
    slug: collection.slug,
  }));
}

async function CollectionContent({ params }: CollectionPageProps) {
  const { slug } = await params;

  const collection = getCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  const categoryProducts = getProductsByCollection(slug);

  const individualCollectionData = {
    eyebrow: collection.eyebrow,
    title: collection.title,
    description: collection.description,
    categories: [{ label: "All pieces", value: "all" }],
    products: categoryProducts,
  };

  return (
    <>
      <ImageWithText {...imageWithTextData} />

      <CollectionGrid {...individualCollectionData} />

      <CareGuide {...careContentData} />

      <Newsletter {...newsletterData} />
    </>
  );
}

export default function IndividualCollection({
  params,
}: CollectionPageProps) {
  return (
    <Suspense
      fallback={
        <div
          className="min-h-screen bg-[#f7f5f1]"
          aria-label="Loading collection"
        />
      }
    >
      <CollectionContent params={params} />
    </Suspense>
  );
}
