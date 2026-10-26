import { type StaticImageData } from "next/image";
import JournalBanner from "../assets/CollectionBanner.png";

import CapsuleWardrobe from "../assets/CapsuleWardrobe.png";
import FabricGuide from "../assets/FabricGuide.png";
import EverydayStyle from "../assets/EverydayStyle.png";
import GarmentCare from "../assets/GarmentCare.png";
import UnderstatedDetails from "../assets/Detailing.png";
import PersonalStyle from "../assets/PersonalStyle.png";

export interface BlogContentSection {
  heading?: string;
  paragraphs: string[];
  quote?: string;
}

export interface BlogPost {
  id: string;
  categories: string[];
  title: string;
  excerpt: string;
  image: StaticImageData | string;
  imageAlt: string;
  date: string;
  readTime: string;
  slug: string;
  content: BlogContentSection[];
}

export const featuredPost: BlogPost = {
  id: "featured",
  categories: ["Style Notes"],
  title: "The art of building a timeless wardrobe",
  excerpt:
    "Discover how thoughtful essentials, versatile silhouettes, and considered choices can help you create a wardrobe that feels distinctly your own.",
  image: JournalBanner,
  imageAlt: "Neutral-toned clothing arranged in a minimalist wardrobe",
  date: "16 October 2026",
  readTime: "5 min read",
  slug: "/journal/timeless-wardrobe",
  content: [
    {
      heading: "Start with the essentials",
      paragraphs: [
        "A timeless wardrobe begins with pieces that feel natural to wear and easy to combine. Rather than following every passing trend, focus on clothing that reflects your personal style.",
        "Consider the colours, silhouettes, and fabrics you return to most often. These familiar foundations make everyday dressing simpler and more intentional.",
      ],
    },
    {
      heading: "Choose quality and versatility",
      paragraphs: [
        "Look for considered details, comfortable fits, and materials suited to how you live. Versatile pieces can move between occasions without losing their character.",
        "Building a wardrobe gradually also gives you time to understand what you truly need and appreciate the clothes you already own.",
      ],
      quote:
        "A considered wardrobe is built around what you love to wear.",
    },
    {
      heading: "Make it personal",
      paragraphs: [
        "Personal style does not need to be complicated. Start with what feels right, experiment thoughtfully, and allow your wardrobe to evolve over time.",
      ],
    },
  ],
};

export const blogPosts: BlogPost[] = [
  {
    id: "01",
    categories: ["Style Notes"],
    title: "Less, but better: the capsule wardrobe",
    excerpt:
      "A practical approach to choosing fewer pieces that work beautifully together.",
    image: CapsuleWardrobe,
    imageAlt: "Minimal neutral wardrobe essentials",
    date: "12 October 2026",
    readTime: "4 min read",
    slug: "/journal/capsule-wardrobe",
    content: [
      {
        heading: "What is a capsule wardrobe?",
        paragraphs: [
          "A capsule wardrobe is a thoughtful collection of versatile pieces that work together effortlessly. Instead of filling your wardrobe with items you rarely wear, choose essentials that complement one another.",
          "The goal is to make getting dressed easier while making room for the pieces you genuinely enjoy wearing.",
        ],
      },
      {
        heading: "Build around your everyday life",
        paragraphs: [
          "Begin with the clothes you reach for most often. Consider your daily routine, preferred colours, and the silhouettes that make you feel comfortable and confident.",
          "Choose pieces that can be styled in different ways. A well-cut trouser, a simple shirt, and a versatile layer can form the foundation of many outfits.",
        ],
        quote:
          "Less choice can create more possibilities when every piece has a purpose.",
      },
      {
        heading: "Buy with intention",
        paragraphs: [
          "Before adding something new, consider how it will work with what you already own. Thoughtful purchases help create a wardrobe that feels cohesive rather than crowded.",
          "Over time, a capsule wardrobe becomes a personal collection of dependable favourites that reflect your style.",
        ],
      },
    ],
  },
  {
    id: "02",
    categories: ["Fabric & Form", "Care & Craft"],
    title: "Getting to know your fabrics",
    excerpt:
      "Explore texture, drape, and the details that influence how a garment feels.",
    image: FabricGuide,
    imageAlt: "Close-up of natural fabric textures",
    date: "08 October 2026",
    readTime: "6 min read",
    slug: "/journal/fabric-guide",
    content: [
      {
        heading: "Why fabric matters",
        paragraphs: [
          "Fabric shapes how a garment feels, moves, and sits on the body. The same silhouette can look entirely different depending on its texture, weight, and drape.",
          "Understanding materials helps you choose clothing that suits your personal style and the way you live.",
        ],
      },
      {
        heading: "Explore texture and drape",
        paragraphs: [
          "Some fabrics create a soft, flowing silhouette, while others hold their shape and offer a more structured finish. Texture adds depth to even the simplest outfit.",
          "When choosing a garment, consider how the fabric feels against your skin and how it behaves when you move.",
        ],
        quote:
          "The beauty of a garment begins with the material that gives it life.",
      },
      {
        heading: "Care for your materials",
        paragraphs: [
          "Different fabrics benefit from different care routines. Check the garment's care label and follow the recommended washing, drying, and storage instructions.",
          "A little attention can help preserve the texture, fit, and appearance of the pieces you love.",
        ],
      },
    ],
  },
  {
    id: "03",
    categories: ["Everyday Living"],
    title: "A slower approach to getting dressed",
    excerpt:
      "Create a daily dressing ritual that feels personal, simple, and effortless.",
    image: EverydayStyle,
    imageAlt: "Minimal everyday outfit in soft natural light",
    date: "04 October 2026",
    readTime: "3 min read",
    slug: "/journal/everyday-style",
    content: [
      {
        heading: "Make space for the everyday",
        paragraphs: [
          "Getting dressed can be more than another task in a busy morning. Taking a moment to choose what feels right can turn a daily routine into a small act of self-expression.",
          "You do not need an elaborate wardrobe or a complicated routine. A few dependable pieces can make the process feel calmer and more enjoyable.",
        ],
      },
      {
        heading: "Find your own rhythm",
        paragraphs: [
          "Prepare a few favourite combinations, pay attention to the weather, and choose pieces that suit the day ahead. These simple habits can reduce unnecessary decisions.",
          "Allow yourself to repeat outfits, experiment with familiar pieces, and appreciate the comfort of clothing that feels like you.",
        ],
        quote:
          "Everyday style is found in the details that make you feel at ease.",
      },
      {
        heading: "Enjoy the process",
        paragraphs: [
          "A slower approach is about choosing with intention rather than rushing to follow expectations. Let your personal style develop naturally, one day at a time.",
        ],
      },
    ],
  },
  {
    id: "04",
    categories: ["Care & Craft", "Fabric & Form"],
    title: "Making your favourite pieces last",
    excerpt:
      "Small, considered care habits can help preserve your clothing over time.",
    image: GarmentCare,
    imageAlt: "Carefully folded garments in neutral colours",
    date: "29 September 2026",
    readTime: "5 min read",
    slug: "/journal/garment-care",
    content: [
      {
        heading: "Care begins with attention",
        paragraphs: [
          "The pieces we wear often can become the most meaningful parts of our wardrobes. Looking after them helps maintain their appearance and allows us to enjoy them for longer.",
          "Start by reading garment care labels carefully. The right approach depends on the fabric, construction, and finish of each item.",
        ],
      },
      {
        heading: "Build simple care habits",
        paragraphs: [
          "Air out garments when appropriate, treat stains according to the care instructions, and avoid unnecessary washing when suitable for the fabric.",
          "Fold knitwear to help maintain its shape, hang suitable garments on supportive hangers, and store seasonal pieces in a clean, dry place.",
        ],
        quote:
          "Looking after what you own is part of choosing it thoughtfully.",
      },
      {
        heading: "Repair, refresh, and rewear",
        paragraphs: [
          "A loose button or a small seam issue does not have to mean the end of a favourite garment. Simple repairs can help extend its useful life.",
          "With consistent care and thoughtful storage, everyday essentials can remain part of your wardrobe season after season.",
        ],
      },
    ],
  },
  {
    id: "05",
    categories: ["Style Notes"],
    title: "The beauty of understated details",
    excerpt:
      "Discover how subtle shapes, finishes, and proportions can transform an outfit.",
    image: UnderstatedDetails,
    imageAlt: "Close-up of refined clothing details",
    date: "24 September 2026",
    readTime: "4 min read",
    slug: "/journal/understated-details",
    content: [
      {
        heading: "The details make the difference",
        paragraphs: [
          "Sometimes the most memorable elements of an outfit are the quietest. A considered neckline, a beautiful button, or a carefully finished seam can bring character to a simple design.",
          "These details contribute to how a garment looks, feels, and wears over time.",
        ],
      },
      {
        heading: "Pay attention to proportion",
        paragraphs: [
          "The relationship between different shapes can transform an outfit. Pairing a relaxed silhouette with a more structured piece creates balance without making the look feel overly styled.",
          "Small adjustments to sleeve length, trouser proportions, or the way a shirt is tucked can change the overall impression.",
        ],
        quote:
          "Understated style leaves room for the details to speak.",
      },
      {
        heading: "Keep it considered",
        paragraphs: [
          "You do not need to add more to make an outfit feel complete. Sometimes the most effective choice is to let one thoughtful detail stand out against a simple foundation.",
        ],
      },
    ],
  },
  {
    id: "06",
    categories: ["Everyday Living"],
    title: "Finding your personal style",
    excerpt:
      "Build confidence in what you wear by discovering the shapes and colours you love.",
    image: PersonalStyle,
    imageAlt: "Elegant neutral outfit styled for everyday wear",
    date: "19 September 2026",
    readTime: "4 min read",
    slug: "/journal/personal-style",
    content: [
      {
        heading: "Start with what feels right",
        paragraphs: [
          "Personal style develops through experience. Notice the outfits you feel most comfortable in, the colours you naturally gravitate towards, and the pieces you reach for repeatedly.",
          "These preferences offer useful clues about what belongs in your wardrobe, regardless of what happens to be trending.",
        ],
      },
      {
        heading: "Experiment without pressure",
        paragraphs: [
          "Try different silhouettes, combine familiar pieces in new ways, and pay attention to how each choice makes you feel. You do not have to commit to every experiment.",
          "Keep what works for you and let go of the idea that your wardrobe must follow a single set of rules.",
        ],
        quote:
          "Personal style is not about dressing like someone else. It is about feeling like yourself.",
      },
      {
        heading: "Let your style evolve",
        paragraphs: [
          "Your preferences may change as your life and routines change. Give yourself permission to revisit old favourites, discover new details, and build a wardrobe that reflects who you are today.",
        ],
      },
    ],
  },
];

export const allBlogPosts: BlogPost[] = [
  featuredPost,
  ...blogPosts,
];

export const getBlogPostBySlug = (slug: string) =>
  allBlogPosts.find(
    (post) => post.slug.split("/").pop() === slug
  );