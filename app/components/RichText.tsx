// import { Link } from "react-router-dom";

interface RichTextProps {
  eyebrow: string;
  title: string;
  linkText: string;
  linkUrl: string;
}

export default function RichText({
  eyebrow,
  title,
  linkText,
  linkUrl,
}: RichTextProps) {
  return (
    <section className="w-full bg-[#f7f5f1] px-5 py-8 text-center sm:px-8 sm:py-10 md:py-12 lg:py-15">
      <div className="mx-auto max-w-5xl">
        {/* Eyebrow */}
        <p className="mb-6 text-[9px] font-normal uppercase tracking-[0.04em] text-[#85817b] sm:mb-7 sm:text-[10px]">
          {eyebrow}
        </p>

        {/* Main heading */}
        <h2 className="mx-auto max-w-4xl whitespace-pre-line font-serif text-[clamp(30px,4vw,48px)] font-normal leading-[1.16] tracking-tight text-[#292923]">
          {title}
        </h2>

        {/* Underlined link */}
        <a href={linkUrl}
          className="group mx-auto mt-7 inline-flex items-center gap-4 border-b border-[#85817b] pb-2 text-[11px] text-[#292923] transition-colors hover:border-[#292923] sm:mt-8"
        >
          <span>{linkText}</span>

          <svg
            viewBox="0 0 24 24"
            width="13"
            height="13"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          >
            <path d="M7 17L17 7M8 7H17V16" />
          </svg>
        </a>
      </div>
    </section>
  );
}
