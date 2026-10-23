import PrivacyPolicySection from "../components/PrivacyPolicySection";

const privacyPolicyData = {
  eyebrow: "AUREL CUSTOMER CARE",
  title: "Privacy Policy",
  description:
    "Your trust matters to us. Learn how we collect, use, store, and protect your personal information when you visit or shop with AUREL.",

  lastUpdated: "15 October 2026",

  introduction:
    "This Privacy Policy explains how AUREL handles personal information when you browse our website, make a purchase, contact us, or otherwise interact with our services. We aim to handle your information responsibly and transparently.",

  sections: [
    {
      id: "01",
      title: "Information We Collect",
      content:
        "We may collect information that you provide directly and certain information generated when you use our website.",
      details: [
        "Contact details such as your name, email address, phone number, and delivery address.",
        "Order information, purchased products, payment status, and transaction-related details. Payment card information may be processed securely by our payment providers.",
        "Account details and preferences you choose to share.",
        "Technical information such as device type, browser, IP address, and website usage data, where collected.",
      ],
    },
    {
      id: "02",
      title: "How We Use Your Information",
      content:
        "We use personal information for legitimate business purposes and as otherwise permitted by applicable law.",
      details: [
        "To process orders, arrange delivery, and manage returns or refunds.",
        "To respond to customer enquiries and provide support.",
        "To maintain website functionality, security, and performance.",
        "To detect fraud, prevent misuse, and meet legal obligations.",
        "To send marketing communications where permitted and subject to your preferences.",
      ],
    },
    {
      id: "03",
      title: "Cookies and Similar Technologies",
      content:
        "Our website may use cookies and similar technologies to support essential functions, remember preferences, understand website performance, and, where enabled, support advertising.",
      details: [
        "Essential cookies help the website and checkout operate.",
        "Analytics cookies may help us understand how visitors use our website.",
        "Advertising cookies may be used to measure campaigns or personalize advertising.",
        "You can manage available cookie preferences through our consent tools and browser settings.",
      ],
    },
    {
      id: "04",
      title: "Sharing Your Information",
      content:
        "We may share relevant information with trusted third parties when necessary to operate our business, fulfill your requests, or comply with the law.",
      details: [
        "E-commerce and website service providers.",
        "Payment processors, shipping companies, and order fulfillment partners.",
        "Analytics, customer support, and marketing providers where applicable.",
        "Government authorities or other parties when legally required or necessary to protect rights and safety.",
      ],
    },
    {
      id: "05",
      title: "Data Security and Retention",
      content:
        "We use reasonable safeguards designed to protect personal information against unauthorized access, loss, misuse, or disclosure. No method of transmission or storage can be guaranteed to be completely secure.",
      details: [
        "Information is retained only for as long as reasonably necessary for the purposes described in this policy, subject to legal and business requirements.",
        "Access to personal information should be limited to authorized parties who need it for their work.",
      ],
    },
    {
      id: "06",
      title: "Your Privacy Rights",
      content:
        "Depending on your location and applicable law, you may have rights regarding your personal information.",
      details: [
        "Request access to or a copy of certain information.",
        "Request correction or deletion where applicable.",
        "Object to or restrict certain processing where legally available.",
        "Withdraw consent where processing relies on consent.",
        "Unsubscribe from marketing emails using the link provided in those messages.",
      ],
    },
    {
      id: "07",
      title: "Third-Party Services",
      content:
        "Our website may contain links to third-party websites or use services operated by other organizations. Their privacy practices are governed by their own policies, which we encourage you to review.",
    },
    {
      id: "08",
      title: "Children's Privacy",
      content:
        "Our website is not intended to be used by children in circumstances where parental consent or other legal requirements apply. We do not knowingly collect children's personal information in violation of applicable law.",
    },
    {
      id: "09",
      title: "Policy Updates",
      content:
        "We may update this Privacy Policy to reflect changes in our practices, services, or legal requirements. The latest version will be published on this page with its updated date.",
    },
  ],

  contactTitle: "We're here to help.",
  contactDescription:
    "For questions about this Privacy Policy or a request concerning your personal information, contact our privacy team using the email address below.",
  contactEmail: "privacy@yourdomain.com",
};

export default function PrivacyPolicy() {
    return (
        <>
            <PrivacyPolicySection {...privacyPolicyData} />
        </>
    );
}
