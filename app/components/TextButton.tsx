interface TextWithButtonProps {
  eyebrow: string;
  title: string;
  buttonText: string;
  buttonLink: string;
}

export default function TextWithButton({
  eyebrow,
  title,
  buttonText,
  buttonLink,
}: TextWithButtonProps) {
  return (
    <section className="flex w-full items-center justify-center bg-[#646951] px-5 py-16 text-center text-[#f7f5f1] sm:px-8 sm:py-20 md:min-h-90 md:py-24 lg:min-h-99.5">
      <div className="mx-auto w-full max-w-312.5">
        {/* Eyebrow */}
        <p className="mb-7 text-[9px] font-normal uppercase tracking-wide text-[#deded3] sm:mb-8 sm:text-[10px]">
          {eyebrow}
        </p>

        {/* Main text */}
        <h2 className="mx-auto max-w-287.5 whitespace-pre-line font-serif text-[clamp(32px,5vw,58px)] font-normal leading-[1.12] tracking-tight">
          {title}
        </h2>

        {/* CTA button */}
        <a
          href={buttonLink}
          className="group mx-auto mt-7 inline-flex items-center gap-5 border-b border-[#d6d7ca] pb-2 text-[11px] text-[#f7f5f1] transition-colors duration-300 hover:border-white sm:mt-8 sm:text-xs"
        >
          <span>{buttonText}</span>

          <svg
            viewBox="0 0 24 24"
            width="14"
            height="14"
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
