import ContactForm from "../components/ContactForm";
import FaqQuestions from "../components/Questions";
import Newsletter from "../components/Newsletter";

import ContactImage from "../assets/ContactForm.png";

const contactData = {
  eyebrow: "WE'RE HERE FOR YOU",
  title: "A conversation\nstarts with hello.",
  description:
    "A question about a piece, a little styling advice or an idea to share. We'd love to hear from you.",

  image: ContactImage,
  imageAlt: "The Aurel fashion studio in Paris",

  email: "hello@aurel.studio",
  workingHours: [
    "Monday–Friday, 10:00–18:00 CET",
    "We usually reply within two working days.",
  ],

  studioLabel: "OUR PARIS STUDIO",
  studioAddress: ["18 rue du Sentier", "75002 Paris, France"],

  appointmentNote: "Visits and fittings by appointment.",
  appointmentText: "Arrange a studio visit",
  appointmentLink: "/pages/studio-visit",

  pressEmail: "press@aurel.studio",
  wholesaleEmail: "partners@aurel.studio",

  formTitle: "Leave us a note.",

  topics: [
    "Orders & delivery",
    "Returns & exchanges",
    "Product information",
    "Sizing & styling",
    "Press & collaborations",
    "Wholesale",
    "Other",
  ],

  privacyText:
    "I agree to the Privacy Policy and consent to Aurel using my details to respond to this message.",

  submitText: "SEND MESSAGE",
};

const faqData = {
  heading: "A few things you might wonder.",
  buttonText: "All FAQs",
  buttonLink: "/faq",

  cards: [
    {
      id: 1,
      title: "Where do you ship?",
      description:
        "We ship across Europe and to selected international destinations. EU delivery is complimentary on orders over €150.",
    },
    {
      id: 2,
      title: "Can I return a piece?",
      description:
        "Of course. Unworn pieces can be returned within 30 days of delivery. Email us and we’ll guide you through the next steps.",
    },
    {
      id: 3,
      title: "Need a hand with sizing?",
      description:
        "Send us your measurements and the piece you have in mind. We’re happy to help you find a fit that feels right.",
    },
  ],
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

export default function ContactPage() {
  return (
    <>
      <ContactForm {...contactData} />
      <FaqQuestions {...faqData}/>
      <Newsletter {...newsletterData} />
    </>
  );
  
  

}
