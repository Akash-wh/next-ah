import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: " Next App",
  description: "Generate the next app by AH",
};

const headerData = {
  logo: "AUREL",
  logoLink: "/",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Collection", href: "/collections" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  language: "EN / EUR",
  cartCount: 0,
  accountLink: "/account",
  cartLink: "/cart",
  searchLink: "/search",
};

const footerData = {
  logo: "AUREL",

  description: [
    "Fewer pieces. More possibility.",
    "A considered wardrobe, made to stay.",
  ],

  columns: [
    {
      title: "EXPLORE",
      links: [
        { label: "Collection", href: "/collections" },
        { label: "Our story", href: "/about" },
        { label: "The journal", href: "/journal" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "CLIENT CARE",
      links: [
        { label: "Shipping & returns", href: "/shipping-returns" },
        { label: "Size guide", href: "/size-guide" },
        { label: "Care guide", href: "/care-guide" },
        { label: "FAQs", href: "/faq" },
      ],
    },
  ],

  email: "hello@aurel.studio",
  location: "Paris, France",

  copyright: "© 2026 Aurel Studio. Made with intention.",

  legalLinks: [
    { label: "Privacy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms-conditions" },
    { label: "Cookies", href: "/cookies" },
  ],

  locale: "France / EUR",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="main-body">
        <Header {...headerData} />
        {children}
        <Footer {...footerData} />
      </body>
    </html>
  );
}
