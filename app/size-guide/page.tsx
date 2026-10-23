import SizeGuideSection from "../components/SizeGuideSection";

const sizeGuideData = {
  eyebrow: "AUREL SIZE GUIDE",
  title: "A fit that feels like you.",
  description:
    "Our pieces are designed to feel comfortable, considered and easy to wear. Use this guide to help find your usual fit.",

  sizeRows: [
    {
      size: "XS",
      eu: "34",
      uk: "6",
      us: "2",
      bust: "80",
      waist: "64",
      hips: "88",
    },
    {
      size: "S",
      eu: "36",
      uk: "8",
      us: "4",
      bust: "84",
      waist: "68",
      hips: "92",
    },
    {
      size: "M",
      eu: "38",
      uk: "10",
      us: "6",
      bust: "88",
      waist: "72",
      hips: "96",
    },
    {
      size: "L",
      eu: "40",
      uk: "12",
      us: "8",
      bust: "94",
      waist: "78",
      hips: "102",
    },
    {
      size: "XL",
      eu: "42",
      uk: "14",
      us: "10",
      bust: "100",
      waist: "84",
      hips: "108",
    },
  ],

  measurementGuides: [
    {
      number: "01",
      title: "Bust",
      description:
        "Measure around the fullest part of your bust, keeping the tape level across your back.",
    },
    {
      number: "02",
      title: "Waist",
      description:
        "Measure around your natural waist, keeping the tape comfortably close without tightening.",
    },
    {
      number: "03",
      title: "Hips",
      description:
        "Measure around the fullest part of your hips while standing naturally with your feet together.",
    },
  ],

  note:
    "Measurements refer to body measurements, not garment dimensions. If you fall between sizes, consult the individual product description or contact us for advice.",
};

export default function SizeGuide() {
    return (
        <>
            <SizeGuideSection {...sizeGuideData} />
        </>
    );
}