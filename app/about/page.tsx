import TextBanner from "../components/TextBanner";
import FounderSection from "../components/FounderSection";
import MultiColumnSection from "../components/MulticolumnSection";
import TextWithButton from "../components/TextButton";
import GetInTouch from "../components/GetInTouch";
import Newsletter from "../components/Newsletter";

import StudioBanner from "../assets/StudioBanner.png";
import Founder from "../assets/Founder.png";
import HonestMaterial from "../assets/HonestMaterial.png";
import HandCrafted from "../assets/HandCrafted.png";
import LongLife from "../assets/LongLife.png";

const textBannerData = {
  eyebrow: "OUR STORY / EST. PARIS, 2020",
  title: "A little less noise.\nA little more meaning.",
  description:
    "We make clothes for living, not for keeping up. Thoughtful pieces that leave room for the person wearing them.",
  image: StudioBanner,
  imageAlt: "Aurel fashion studio with natural fabrics and garments",
};

const founderData = {
  eyebrow: "THE BEGINNING",
  title: "It started with\none good shirt.",
  paragraphs: [
    "In 2020, designer Camille Laurent began Aurel with a simple question: what if we made fewer things, and made them better? A single linen shirt became a small collection of pieces to live in.",
    "Today, we are an independent studio in Paris, working with a close circle of European makers. We design slowly, choose our materials carefully and leave trends at the door. Every piece is an invitation to build a wardrobe that feels like you.",
  ],
  image: Founder,
  imageAlt: "Founder working in the Aurel fashion studio",
  imagePosition: "right" as const,
  signature: "Camille Laurent",
  designation: "FOUNDER & CREATIVE DIRECTOR",
};

const commitmentsData = {
  heading: "The things we won’t compromise.",
  label: "OUR COMMITMENTS",

  columns: [
    {
      number: "01",
      title: "Honest materials",
      description:
        "European flax linen, organic cotton and responsible wool. We seek natural fibers with character, comfort and a lighter footprint.",
      image: HonestMaterial,
      imageAlt: "Natural linen fabrics folded on a worktable",
    },
    {
      number: "02",
      title: "Human hands",
      description:
        "Made in small batches with family-run workshops in Portugal. We know our partners by name, and return to them season after season.",
      image: HandCrafted,
      imageAlt: "Artisan carefully cutting fabric in a workshop",
    },
    {
      number: "03",
      title: "A longer life",
      description:
        "Timeless shapes, considered construction and practical care advice. We design for the next chapter, not just the next occasion.",
      image: LongLife,
      imageAlt: "Timeless linen shirt hanging in a warm studio",
    },
  ],

  footerText:
    "We’re a small studio, not a perfect one. We share our progress openly and keep choosing better, one decision at a time.",
};

const textButtonData = {
  eyebrow: "A NOTE FROM CAMILLE",
  title:
    "“The most beautiful thing a piece of clothing can become is part of your life.”",
  buttonText: "Discover the collection",
  buttonLink: "/collections",
};

const getInTouchData = {
  title: "Let’s start a conversation.",
  description:
    "Questions, ideas, or just a hello. Our studio door is always open.",
  buttonText: "GET IN TOUCH",
  buttonLink: "/contact",
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

export default function AboutPage() {
  return (
    <>
      <TextBanner {...textBannerData} />
      <FounderSection {...founderData} />
      <MultiColumnSection {...commitmentsData} />
      <TextWithButton {...textButtonData} />
      <GetInTouch {...getInTouchData} />
      <Newsletter {...newsletterData} />
    </>
  );
}
