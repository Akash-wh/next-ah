import CookiesPolicy from "../components/CookieSection";

const cookiesPolicyData = {
  eyebrow: "AUREL CUSTOMER CARE",
  title: "Cookie Policy",
  description:
    "We use cookies and similar technologies to help create a smoother, more thoughtful shopping experience. Here's how they work on our website.",

  lastUpdated: "15 October 2026",

  introduction:
    "Cookies are small text files that websites may store on your device. They can help remember your preferences, maintain shopping cart functionality, understand website performance, and support marketing activities where enabled. The technologies used depend on the features and services active on our website.",

  categoriesTitle: "The cookies we use",
  categoriesDescription:
    "Cookies may serve different purposes. The categories below describe common uses; the actual cookies on your website depend on your Shopify configuration and installed apps.",

  categories: [
    {
      id: "essential",
      title: "Essential Cookies",
      required: true,
      description:
        "These support core website functions, security, checkout, and shopping cart features.",
      examples: [
        "Shopping cart and checkout sessions",
        "Security and fraud prevention",
        "Remembering essential website preferences",
      ],
    },
    {
      id: "preferences",
      title: "Preference Cookies",
      description:
        "These help remember choices you make to improve your browsing experience.",
      examples: [
        "Language or regional preferences",
        "Selected website settings",
        "Previously chosen preferences",
      ],
    },
    {
      id: "analytics",
      title: "Analytics Cookies",
      description:
        "Where enabled, these help us understand how visitors use the website so we can improve performance and usability.",
      examples: [
        "Page visits and browsing activity",
        "Website performance measurement",
        "Aggregated visitor statistics",
      ],
    },
    {
      id: "marketing",
      title: "Marketing Cookies",
      description:
        "Where enabled and permitted, these may help measure advertising campaigns or deliver more relevant advertisements.",
      examples: [
        "Advertising campaign measurement",
        "Ad interaction tracking",
        "Advertising personalization",
      ],
    },
  ],

  sections: [
    {
      id: "01",
      title: "How We Use Cookies",
      content:
        "We may use cookies to operate the online store, maintain cart and checkout functionality, remember permitted preferences, measure website performance, and support marketing services. Non-essential cookies should be used according to the consent requirements that apply to your visitors.",
    },
    {
      id: "02",
      title: "Third-Party Cookies",
      content:
        "Some cookies may be set by third-party services integrated into our website, such as analytics providers, advertising platforms, payment services, or embedded content. These providers may process information under their own privacy policies and settings.",
    },
    {
      id: "03",
      title: "Managing Your Preferences",
      content:
        "Where a cookie consent tool is available, you can use it to accept, reject, or customize non-essential cookies. You can also manage cookies through your browser settings. Blocking certain cookies may affect website features, including parts of the shopping or checkout experience.",
    },
    {
      id: "04",
      title: "Cookie Duration",
      content:
        "Some cookies are session-based and expire when you close your browser. Others remain on your device for a set period or until you delete them. The duration depends on the cookie's purpose and the service that sets it.",
    },
    {
      id: "05",
      title: "Updates to This Policy",
      content:
        "We may update this Cookie Policy when our website, services, or legal requirements change. Any revised version will be published on this page with an updated date.",
    },
  ],

  contactEmail: "privacy@yourdomain.com",
};

export default function Cookies() {
  return (
    <>
      <CookiesPolicy {...cookiesPolicyData} />
    </>
  );
}