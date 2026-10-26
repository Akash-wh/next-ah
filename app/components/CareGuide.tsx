

interface CareContentProps {
  eyebrow: string;
  title: string;
  buttonText: string;
  buttonLink: string;
}

export default function CareContent({
  eyebrow,
  title,
  buttonText,
  buttonLink,
}: CareContentProps) {
  return (
    <section className="w-full bg-[#646951] px-6 py-10 text-[#f7f5f1] sm:px-8 sm:py-12 lg:px-[4.3%] lg:py-11">
      <div className="mx-auto flex max-w-[1800px] flex-col items-start justify-between gap-7 sm:gap-8 md:flex-row md:items-center md:gap-10">
        {/* Text content */}
        <div className="min-w-0">
          <p className="mb-4 text-[10px] font-normal uppercase tracking-wide text-[#deded3] sm:mb-3">
            {eyebrow}
          </p>

          <h2 className="font-serif text-[clamp(30px,3.5vw,46px)] font-normal leading-tight tracking-tight">
            {title}
          </h2>
        </div>

        {/* Care guide link */}
        <a href={buttonLink}
          className="group inline-flex shrink-0 items-center gap-5 border-b border-[#d6d7ca] pb-2 text-[12px] transition-colors duration-300 hover:border-white sm:text-sm"
        >
          <span>{buttonText}</span>

          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
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
