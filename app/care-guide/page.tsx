import CareGuideSection from "../components/CareGuideSection";

const careGuideData = {
  eyebrow: "THE AUREL CARE GUIDE",
  title: "Made to be loved. Made to last.",
  description:
    "Thoughtful care keeps your favourite pieces looking beautiful. Follow these simple rituals to preserve their feel, fit, and finish.",
  careItems: [
    {
      number: "01",
      title: "Washing",
      icon: "✳",
      description:
        "Treat every piece gently to help preserve its colour, shape, and texture.",
      tips: [
        "Always check the garment care label first.",
        "Use a gentle cycle and cold water when suitable.",
        "Wash similar colours together.",
        "Turn garments inside out before washing.",
      ],
    },
    {
      number: "02",
      title: "Drying",
      icon: "☼",
      description:
        "Gentle drying helps your garments maintain their original fit.",
      tips: [
        "Air-dry whenever the care label allows.",
        "Keep delicate pieces away from direct sunlight.",
        "Reshape knitwear while damp and dry flat.",
        "Avoid high heat unless the label permits it.",
      ],
    },
    {
      number: "03",
      title: "Storage",
      icon: "⌂",
      description:
        "Give each piece the right space so it stays fresh between wears.",
      tips: [
        "Store garments in a clean, dry wardrobe.",
        "Fold knitwear instead of hanging it.",
        "Use suitable hangers for structured garments.",
        "Make sure clothes are fully dry before storing.",
      ],
    },
    {
      number: "04",
      title: "Ironing",
      icon: "〰",
      description:
        "A little attention to temperature can help protect delicate fabrics.",
      tips: [
        "Check the recommended ironing temperature.",
        "Iron inside out when appropriate.",
        "Use a pressing cloth for delicate fabrics.",
        "Steam only when suitable for the material.",
      ],
    },
    {
      number: "05",
      title: "Stain Care",
      icon: "✧",
      description:
        "Act promptly and gently to prevent stains from setting into fabric.",
      tips: [
        "Blot spills gently instead of rubbing.",
        "Test cleaning products on a hidden area.",
        "Avoid harsh chemicals on delicate fabrics.",
        "Seek professional cleaning when necessary.",
      ],
    },
    {
      number: "06",
      title: "Fabric Care",
      icon: "❋",
      description:
        "Different materials need different routines to stay at their best.",
      tips: [
        "Follow specific instructions for wool and silk.",
        "Avoid unnecessary washing between wears.",
        "Use a fabric brush where suitable.",
        "Follow the care label for every garment.",
      ],
    },
  ],
  note: "The best care starts with knowing your fabric. Always follow the care label attached to your AUREL garment.",
};

export default function CareGuide() {
  return (
    <>
      <CareGuideSection {...careGuideData} />
    </>
  );
}
