import ImageWithText from "../components/ImageWithText";

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


export default function Collections() {
  return (
    <>
        <ImageWithText {...imageWithTextData}/>
    </>
  );
}
