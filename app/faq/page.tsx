import FAQSection from "../components/FAQ";

const faqData = {
  eyebrow: "FREQUENTLY ASKED QUESTIONS",
  title: "A few things you\nmight wonder.",
  description:
    "Everything you need to know about our pieces, delivery, returns and the little details that matter.",

  categories: ["Orders & Delivery", "Returns", "Products & Sizing", "Care"],

  faqs: [
    {
      id: 1,
      category: "Orders & Delivery",
      question: "Where do you ship?",
      answer:
        "We ship across Europe and to selected international destinations. Delivery options and costs are shown at checkout.",
    },
    {
      id: 2,
      category: "Orders & Delivery",
      question: "How long will my order take?",
      answer:
        "Orders are carefully prepared before dispatch. Delivery times depend on your destination and the shipping method selected at checkout.",
    },
    {
      id: 3,
      category: "Returns",
      question: "Can I return a piece?",
      answer:
        "Unworn pieces can be returned within 30 days of delivery, subject to our returns policy. Contact our team for assistance.",
    },
    {
      id: 4,
      category: "Products & Sizing",
      question: "How do I find my size?",
      answer:
        "Consult the size guide on each product page. If you need help, share your measurements with our team for personalised advice.",
    },
    {
      id: 5,
      category: "Care",
      question: "How should I care for linen?",
      answer:
        "Follow the care instructions on your garment. Gentle washing, avoiding excessive heat and allowing garments to air-dry can help preserve the fabric.",
    },
    {
      id: 6,
      category: "Products & Sizing",
      question: "What materials do you use?",
      answer:
        "We prioritise considered materials such as European flax linen, organic cotton and responsibly sourced wool, depending on the piece.",
    },
  ],
};

export default function Faq() {
  return (
    <>
      <FAQSection {...faqData} />
    </>
  );
}
