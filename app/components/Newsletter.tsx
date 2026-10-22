
"use client";

import { useState, type FormEvent } from "react";

interface NewsletterProps {
  eyebrow: string;
  title: string;
  description: string;
  placeholder: string;
  privacyText: string;
  buttonLabel: string;
}

export default function Newsletter({
  eyebrow,
  title,
  description,
  placeholder,
  privacyText,
  buttonLabel,
}: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) return;

    setMessage("Thank you for subscribing.");
    setEmail("");
  };

  return (
    <section className="w-full border-b border-[#c9c3b7] bg-[#eae6da] px-5 py-8 text-[#292923] sm:px-8 sm:py-10 lg:px-[4.1%] lg:py-14">
      <div className="mx-auto grid max-w-[1800px] grid-cols-1 items-center gap-9 md:grid-cols-[1.7fr_1fr] md:gap-12 lg:grid-cols-[2fr_1fr] lg:gap-16">
        <div>
          <p className="mb-3 text-[9px] uppercase tracking-wide text-[#85817b]">
            {eyebrow}
          </p>

          <h2 className="mb-3 font-serif text-[clamp(32px,3.1vw,42px)] font-normal leading-tight tracking-[-0.03em]">
            {title}
          </h2>

          <p className="text-[13px] leading-relaxed text-[#807c74] sm:text-sm">
            {description}
          </p>
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex items-center border-b border-[#77736d] transition-colors focus-within:border-[#292923]">
              <input
                type="email"
                required
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setMessage("");
                }}
                placeholder={placeholder}
                aria-label={placeholder}
                className="min-w-0 flex-1 bg-transparent py-3 text-xs text-[#292923] outline-none placeholder:text-[#85817b] sm:text-sm"
              />

              <button
                type="submit"
                aria-label={buttonLabel}
                className="group flex h-10 w-9 shrink-0 items-center justify-center"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="19"
                  height="19"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M4 12H20M13 5L20 12L13 19" />
                </svg>
              </button>
            </div>

            <p className="mt-3 text-[9px] leading-relaxed text-[#85817b] sm:text-[10px]">
              {privacyText}
            </p>

            {message && (
              <p role="status" className="mt-3 text-xs text-[#4d6045]">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
