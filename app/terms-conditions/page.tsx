import TermsAndConditionsSection from "../components/TermAndConditionSection";

const termsConditionsData = {
  eyebrow: "AUREL CUSTOMER CARE",
  title: "Terms & Conditions",
  description:
    "Please take a moment to understand the terms that apply when browsing our website, placing an order, and shopping with AUREL.",

  lastUpdated: "15 October 2026",

  introduction:
    "These Terms & Conditions govern your access to and use of the AUREL website and related services. By using our website or placing an order, you agree to these terms, subject to applicable law. If you do not agree, please discontinue use of the website.",

  sections: [
    {
      id: "01",
      title: "Use of Our Website",
      content:
        "You agree to use our website lawfully and in a way that does not interfere with its operation or other users' experience.",
      details: [
        "You must not use the website for fraudulent, unlawful, or harmful activities.",
        "You must not attempt to gain unauthorized access to our systems or data.",
        "Website content may not be copied, reproduced, or exploited commercially without appropriate permission.",
      ],
    },
    {
      id: "02",
      title: "Products and Descriptions",
      content:
        "We aim to present our products, colours, sizes, materials, and descriptions as accurately as possible.",
      details: [
        "Colours may appear differently depending on your screen and device.",
        "Product descriptions and availability may be updated from time to time.",
        "If you have a question about a product, please contact us before ordering.",
      ],
    },
    {
      id: "03",
      title: "Orders and Acceptance",
      content:
        "Submitting an order is a request to purchase the selected products. An order confirmation does not necessarily mean that the order has been finally accepted or dispatched.",
      details: [
        "Orders are subject to product availability and payment verification.",
        "We may contact you to clarify order or delivery information.",
        "If an order cannot be fulfilled, we will notify you and arrange any applicable refund.",
      ],
    },
    {
      id: "04",
      title: "Pricing and Payment",
      content:
        "Product prices, applicable taxes, shipping charges, and available payment methods are shown during the shopping process.",
      details: [
        "The total payable amount will be presented before you complete checkout.",
        "Promotional offers may have additional eligibility conditions and expiry dates.",
        "Payment processing may be handled by third-party payment providers under their applicable terms.",
      ],
    },
    {
      id: "05",
      title: "Shipping and Delivery",
      content:
        "Delivery estimates are provided for guidance and may vary depending on the destination, courier service, and circumstances beyond our control.",
      details: [
        "Please provide accurate delivery and contact information.",
        "Shipping fees and delivery terms are explained in our Shipping & Returns Policy.",
        "Contact customer care if your order is delayed, missing, or delivered incorrectly.",
      ],
    },
    {
      id: "06",
      title: "Returns, Exchanges and Refunds",
      content:
        "Returns, exchanges, and refunds are handled according to our published Shipping & Returns Policy and applicable consumer protection laws.",
      details: [
        "Eligibility, time limits, and product exclusions may apply.",
        "Please follow the return instructions provided by our customer care team.",
        "Nothing in these terms is intended to remove rights that cannot legally be excluded.",
      ],
    },
    {
      id: "07",
      title: "Intellectual Property",
      content:
        "Unless otherwise stated, the website and its content, including text, photographs, graphics, branding, logos, and design elements, are owned by or licensed to AUREL and may be protected by intellectual property laws.",
      details: [
        "You may view website content for personal, non-commercial use.",
        "You must obtain permission before reproducing or commercially using protected content, except where permitted by law.",
      ],
    },
    {
      id: "08",
      title: "Third-Party Services and Links",
      content:
        "Our website may use third-party services or link to external websites. We do not control independent third-party websites and are not responsible for their content or policies, subject to applicable law.",
    },
    {
      id: "09",
      title: "Limitation of Liability",
      content:
        "To the extent permitted by applicable law, AUREL will not be responsible for indirect or consequential losses arising from website use. Nothing in these terms excludes or limits liability where such exclusion or limitation is prohibited by law.",
    },
    {
      id: "10",
      title: "Privacy",
      content:
        "Our handling of personal information is explained in our Privacy Policy. By using our website, you acknowledge that you have had the opportunity to review that policy.",
    },
    {
      id: "11",
      title: "Changes to These Terms",
      content:
        "We may update these terms when our services, business practices, or legal obligations change. The updated version will be published on this page with a revised date. Changes will apply as permitted by applicable law.",
    },
    {
      id: "12",
      title: "Governing Law",
      content:
        "These terms are subject to the laws applicable to the transaction and the parties, without removing any mandatory rights or protections available to consumers under applicable law. Add your business's appropriate jurisdiction-specific wording before publishing.",
    },
  ],

  contactTitle: "Questions about these terms?",
  contactDescription:
    "If you need clarification about an order or these Terms & Conditions, contact our customer care team.",
  contactEmail: "support@yourdomain.com",
};

export default function TermsAndConditions() {
  return (
    <>
      <TermsAndConditionsSection {...termsConditionsData} />
    </>
  );
}
