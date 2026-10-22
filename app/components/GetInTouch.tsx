// import { Link } from "react-router-dom";

interface GetInTouchProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function GetInTouch({
  title,
  description,
  buttonText,
  buttonLink,
}: GetInTouchProps) {
  return (
    <section className="w-full bg-[#f7f5f1] px-6 py-8 text-[#292923] sm:px-8 sm:py-8 lg:px-[4.1%] lg:py-14">
      <div className="mx-auto flex max-w-[1800px] flex-col items-start justify-between gap-8 sm:gap-9 md:flex-row md:items-center md:gap-10">
        {/* Text content */}
        <div className="max-w-3xl">
          <h2 className="font-serif text-[clamp(30px,3.2vw,42px)] font-normal leading-tight tracking-tight">
            {title}
          </h2>

          <p className="mt-4 text-[13px] leading-relaxed text-[#807c74] sm:text-base">
            {description}
          </p>
        </div>

        {/* CTA button */}
        <a href={buttonLink}
          className="group inline-flex min-h-14.5 w-full shrink-0 items-center justify-between gap-8 border border-[#292923] px-6 text-[10px] font-normal tracking-wide transition-colors duration-300 hover:bg-[#292923] hover:text-[#f7f5f1] sm:w-50 sm:px-7"
        >
          <span>{buttonText}</span>

          <svg
            viewBox="0 0 24 24"
            width="17"
            height="17"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M4 12H20M13 5L20 12L13 19" />
          </svg>
        </a>
      </div>
    </section>
  );
}
