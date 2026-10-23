import ShippingReturns from "../components/ShippingReturnSection";

const shippingReturnsData = {
  eyebrow: "AUREL CUSTOMER CARE",
  title: "Shipping & Returns",
  description:
    "From the moment you place your order to the moment it arrives, we want every part of your AUREL experience to feel effortless.",

  shippingTitle: "Shipping & Delivery",
  shippingDescription:
    "Every order is prepared with care. Find the details you need to understand our delivery process.",

  shippingItems: [
    {
      number: "01",
      title: "Order Processing",
      description:
        "Orders are prepared for dispatch after confirmation.",
      details: [
        "Processing times may vary during busy periods.",
        "Orders are subject to payment and address verification.",
      ],
    },
    {
      number: "02",
      title: "Delivery Timelines",
      description:
        "Delivery estimates depend on your location and shipping method.",
      details: [
        "Estimated delivery dates are provided at checkout when available.",
        "Unexpected courier or weather delays may affect delivery.",
      ],
    },
    {
      number: "03",
      title: "Tracking Your Order",
      description:
        "Stay informed as your order makes its way to you.",
      details: [
        "Tracking details will be shared when available.",
        "Check your tracking link for the latest delivery updates.",
      ],
    },
    {
      number: "04",
      title: "Shipping Charges",
      description:
        "Shipping costs are calculated according to your order and destination.",
      details: [
        "Applicable charges are displayed at checkout.",
        "Any available free-shipping offers are subject to their terms.",
      ],
    },
  ],

  returnsTitle: "Returns & Exchanges",
  returnsDescription:
    "If something isn't quite right, review the steps and conditions that apply to your order.",

  returnItems: [
    {
      number: "01",
      title: "Return Eligibility",
      description:
        "Items must meet the return conditions stated in our official policy.",
      details: [
        "Items should be unworn, unused, and in their original condition.",
        "Original tags and packaging should be retained where applicable.",
        "Certain products may be excluded from returns for hygiene or other reasons.",
      ],
    },
    {
      number: "02",
      title: "Requesting a Return",
      description:
        "Contact our customer care team to start a return or exchange request.",
      details: [
        "Provide your order number and reason for the request.",
        "Wait for return instructions before sending an item back.",
      ],
    },
    {
      number: "03",
      title: "Refunds",
      description:
        "Approved refunds are processed according to the applicable policy.",
      details: [
        "Refund processing times may vary by payment provider.",
        "Shipping fees and deductions, if applicable, follow the published policy.",
      ],
    },
    {
      number: "04",
      title: "Damaged or Incorrect Items",
      description:
        "Please contact us promptly if your order arrives damaged or incorrect.",
      details: [
        "Include your order number and clear photos of the issue.",
        "Our team will review the details and advise on the next steps.",
      ],
    },
  ],

  note:
    "Have a question about your order? Our customer care team is here to help you find the right solution.",
};

export default function ShippingAndReturns() {
    return (
        <>
            <ShippingReturns {...shippingReturnsData} />
        </>
    );  
}