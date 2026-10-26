import ImageWithText from "../components/ImageWithText";
import CollectionGrid from "../components/CollectionProductsGrid";
import CareGuide from "../components/CareGuide";
import Newsletter from "../components/Newsletter";

import CollectionBanner from "../assets/CollectionBanner.png";
import LinenBlazer from "../assets/LinenBlazer.png";
import WideLegTrouser from "../assets/WideLegTrouser.png";
import SilkShirt from "../assets/SilkShirt.png";
import ColumnDress from "../assets/ColumnDress.png";
import RibTank from "../assets/RibTank.png";
import WrapSkirt from "../assets/WrapSkirt.png";
import FineKnit from "../assets/FineKnit.png";
import EverydayTote from "../assets/EverydayTote.png";

export const imageWithTextData = {
  eyebrow: "COLLECTION / SPRING–SUMMER 2026",
  title: "The art of ease.",
  description:
    "A study in softness, shape and everyday possibility. Eight considered pieces, designed to work beautifully together.",
  //   linkText: "Read our story",
  linkUrl: "/about",
  image: CollectionBanner,
  imageAlt: "Collection Banner Image",
  imagePosition: "right" as const,
};

export const collectionData = {
  eyebrow: "THE AUREL COLLECTION",
  title: "Considered essentials",
  description:
    "Thoughtfully chosen pieces, natural textures, and timeless silhouettes designed to become part of your everyday.",

  currency: "€",

  categories: [
    { label: "All pieces", value: "all" },
    { label: "Linen", value: "linen" },
    { label: "Tops & knitwear", value: "tops" },
    { label: "Trousers & skirts", value: "bottoms" },
    { label: "Dresses", value: "dresses" },
    { label: "Accessories", value: "accessories" },
  ],

  products: [
    {
      id: 1,
      title: "The Linen Blazer",
      subtitle: "European flax linen",
      price: 245,
      image: LinenBlazer,
      imageAlt: "Neutral tailored linen blazer outfit",
      category: "linen",
      sizes: ["XS", "S", "M", "L"],
      color: "Beige",
      material: "Linen",
      slug: "linen-blazer",
    },
    {
      id: 2,
      title: "The Wide-Leg Trouser",
      subtitle: "European flax linen",
      price: 165,
      image: WideLegTrouser,
      imageAlt: "Wide-leg neutral linen trousers",
      category: "bottoms",
      sizes: ["XS", "S", "M", "L", "XL"],
      color: "Beige",
      material: "Linen",
      slug: "wide-leg-trouser",
    },
    {
      id: 3,
      title: "The Silk Shirt",
      subtitle: "100% mulberry silk",
      price: 185,
      image: SilkShirt,
      imageAlt: "Ivory silk shirt styled with dark trousers",
      category: "tops",
      sizes: ["XS", "S", "M", "L"],
      color: "Ivory",
      material: "Silk",
      isNew: true,
      slug: "silk-shirt",
    },
    {
      id: 4,
      title: "The Column Dress",
      subtitle: "Organic cotton poplin",
      price: 210,
      image: ColumnDress,
      imageAlt: "Minimal black column dress",
      category: "dresses",
      sizes: ["XS", "S", "M", "L"],
      color: "Black",
      material: "Cotton",
      slug: "column-dress",
    },
    {
      id: 5,
      title: "The Rib Tank",
      subtitle: "Organic cotton rib",
      price: 65,
      image: RibTank,
      imageAlt: "Neutral ribbed tank top and trousers",
      category: "tops",
      sizes: ["XS", "S", "M", "L", "XL"],
      color: "Ivory",
      material: "Cotton",
      slug: "rib-tank",
    },
    {
      id: 6,
      title: "The Wrap Skirt",
      subtitle: "European flax linen",
      price: 145,
      image: WrapSkirt,
      imageAlt: "Olive linen wrap skirt with an ivory blouse",
      category: "bottoms",
      sizes: ["XS", "S", "M", "L"],
      color: "Olive",
      material: "Linen",
      slug: "wrap-skirt",
    },
    {
      id: 7,
      title: "The Fine Knit",
      subtitle: "Responsible merino wool",
      price: 195,
      image: FineKnit,
      imageAlt: "Neutral fine-knit sweater and ivory trousers",
      category: "tops",
      sizes: ["XS", "S", "M", "L"],
      color: "Taupe",
      material: "Wool",
      slug: "fine-knit",
    },
    {
      id: 8,
      title: "The Everyday Tote",
      subtitle: "Heavyweight organic canvas",
      price: 85,
      image: EverydayTote,
      imageAlt: "Natural canvas tote bag",
      category: "accessories",
      sizes: ["One size"],
      color: "Beige",
      material: "Canvas",
      slug: "everyday-tote",
    },
  ],
};

export const careContentData = {
  eyebrow: "WEAR WELL. KEEP LONGER.",
  title: "A little care goes a long way.",
  buttonText: "Explore our care guide",
  buttonLink: "/care-guide",
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


export default function Collections() {
  return (
    <>
        <ImageWithText {...imageWithTextData}/>
        <CollectionGrid {...collectionData}/>
        <CareGuide {...careContentData} />
        <Newsletter {...newsletterData}/>
    </>
  );
}
