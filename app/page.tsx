import Image from "next/image";
import HeroBanner from "./components/HomeBanner";
import RichText from "./components/RichText";
import ImageCards from "./components/ImageCards";
import FeaturedProducts from "./components/FeaturedProducts";

import Fashion from "./assets/Fashion.png";
import Linen from  "./assets/Linen.png";
import Everyday from "./assets/Everyday.png";
import LinenBlazer from "./assets/LinenBlazer.png";
import WideLegTrouser from "./assets/WideLegTrouser.png";
import SilkShirt from "./assets/SilkShirt.png";
import ColumnDress from "./assets/ColumnDress.png";

const richTextData = {
  eyebrow: "A WARDROBE, NOT A MOMENT",
  title:
    "We believe the pieces you reach for every day should be the ones you keep for years.",
  linkText: "The Aurel way",
  linkUrl: "/about",
};

const imageCardsData = {
  heading: "A season of possibility.",
  label: "THE SEASONAL EDITS",
  cards: [
    {
      image: Linen,
      imageAlt: "Model wearing a neutral linen outfit outdoors",
      title: "The linen edit",
      description: "Light on the skin. Lighter on the earth.",
      linkText: "Explore",
      linkUrl: "/collections/linen",
    },
    {
      image: Everyday,
      imageAlt: "Model wearing a black dress in a sunlit courtyard",
      title: "Everyday, considered",
      description: "The foundations of a lasting wardrobe.",
      linkText: "Explore",
      linkUrl: "/collections/tops",
    },
  ],
};

const featuredProductsData = {
  eyebrow: "WELL-LOVED, FOR A REASON",
  heading: "The enduring essentials.",
  shopLinkText: "Shop all pieces",
  shopLink: "/collections",
  products: [
    {
      id: 1,
      image: LinenBlazer,
      imageAlt: "Model wearing a beige linen blazer and trousers",
      title: "The Linen Blazer",
      price: "€245",
      material: "European flax linen",
      link: "/products/linen-blazer",
    },
    {
      id: 2,
      image: WideLegTrouser,
      imageAlt: "Model wearing neutral wide-leg trousers",
      title: "The Wide-Leg Trouser",
      price: "€165",
      material: "European flax linen",
      link: "/products/wide-leg-trouser",
    },
    {
      id: 3,
      image: SilkShirt,
      imageAlt: "Model wearing an ivory silk shirt",
      title: "The Silk Shirt",
      price: "€185",
      material: "100% mulberry silk",
      link: "/products/silk-shirt",
    },
    {
      id: 4,
      image: ColumnDress,
      imageAlt: "Model wearing a black column dress",
      title: "The Column Dress",
      price: "€210",
      material: "Organic cotton poplin",
      link: "/products/column-dress",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <HeroBanner
        chapter=""
        title="FASHION FORWARD"
        description="Discover the latest trends and styles that define modern fashion."
        buttonText="Explore Collection"
        buttonLink="/collections/tops"
        image={Fashion}
        imageAlt="Fashion Forward"
        collection=""
        slide=""
      />
      <RichText {...richTextData} />
      <ImageCards {...imageCardsData} />
      <FeaturedProducts {...featuredProductsData} />
    </>
  );
}
