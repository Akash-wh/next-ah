
import type { StaticImageData } from "next/image";

import LinenBlazer from "../assets/LinenBlazer.png";
import WideLegTrouser from "../assets/WideLegTrouser.png";
import SilkShirt from "../assets/SilkShirt.png";
import ColumnDress from "../assets/ColumnDress.png";
import RibTank from "../assets/RibTank.png";
import WrapSkirt from "../assets/WrapSkirt.png";
import FineKnit from "../assets/FineKnit.png";
import EverydayTote from "../assets/EverydayTote.png";

export interface CollectionProduct {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  image: StaticImageData;
  imageAlt: string;
  category: string;
  sizes: string[];
  color: string;
  material: string;
  isNew?: boolean;
  slug: string;
}

export const products: CollectionProduct[] = [
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
];
