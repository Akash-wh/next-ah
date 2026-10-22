"use client";
import { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

interface FAQSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  categories: string[];
  faqs: FAQItem[];
}

export default function FAQSection({
  eyebrow,
  title,
  description,
  categories,
  faqs,
}: FAQSectionProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openItem, setOpenItem] = useState<number | null>(null);

  const filteredFAQs =
    activeCategory === "All"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  const toggleFAQ = (id: number) => {
    setOpenItem((previous) => (previous === id ? null : id));
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setOpenItem(null);
  };

  return (
    <section className="w-full bg-[#f7f5f1] px-5 py-12 text-[#292923] sm:px-8 sm:py-16 lg:px-[8%] lg:py-20">
      <div className="mx-auto max-w-275">
        {/* Page heading */}
        <header className="mb-10 text-center sm:mb-14">
          <p className="mb-5 text-[9px] uppercase tracking-wide text-[#85817b] sm:text-[10px]">
            {eyebrow}
          </p>

          <h1 className="whitespace-pre-line font-serif text-[clamp(38px,5.5vw,66px)] font-normal leading-[1.08] tracking-[-0.03em]">
            {title}
          </h1>

          <p className="mx-auto mt-5 max-w-140 text-[12px] leading-[1.9] text-[#807c74] sm:text-sm">
            {description}
          </p>
        </header>

        {/* Category filters */}
        <div className="mb-8 flex gap-5 overflow-x-auto border-b border-[#dedad1] pb-3 sm:justify-center sm:gap-8">
          {["All", ...categories].map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryChange(category)}
              aria-pressed={activeCategory === category}
              className={`shrink-0 border-b pb-2 text-[11px] transition-colors duration-200 ${
                activeCategory === category
                  ? "border-[#292923] text-[#292923]"
                  : "border-transparent text-[#85817b] hover:text-[#292923]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ accordion */}
        <div>
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => {
              const isOpen = openItem === faq.id;

              return (
                <article
                  key={faq.id}
                  className="border-b border-[#dedad1]"
                >
                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    className="flex w-full items-center justify-between gap-5 py-5 text-left sm:py-6"
                  >
                    <span className="flex min-w-0 items-start gap-4">
                      <span className="shrink-0 pt-0.5 font-serif text-[12px] text-[#85817b]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-[13px] leading-relaxed sm:text-[15px]">
                        {faq.question}
                      </span>
                    </span>

                    {/* Plus / close icon */}
                    <svg
                      viewBox="0 0 24 24"
                      width="17"
                      height="17"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      aria-hidden="true"
                      className={`shrink-0 transition-transform duration-300 ease-in-out ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      <path d="M12 5V19M5 12H19" />
                    </svg>
                  </button>

                  {/* Smoothly expanding answer */}
                  <div
                    id={`faq-answer-${faq.id}`}
                    aria-hidden={!isOpen}
                    inert={!isOpen}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="max-w-190 whitespace-pre-line pb-6 pl-9 pr-7 text-[12px] leading-[1.9] text-[#807c74] sm:pl-10 sm:pr-12 sm:text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })
          ) : (
            <p className="py-10 text-center text-sm text-[#807c74]">
              No questions in this category yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
