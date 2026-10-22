import Image, { type StaticImageData } from "next/image";

interface ImageWithTextProps {
  eyebrow: string;
  title: string;
  description: string;
  linkText?: string;
  linkUrl: string;
  image?: StaticImageData | any;
  imageAlt? : any;
  imagePosition?: "left" | "right";
}

export default function ImageWithText({
  eyebrow,
  title,
  description,
  linkText,
  linkUrl,
  image,
  imageAlt,
  imagePosition = "left",
}: ImageWithTextProps) {
  return (
    <section className="w-full bg-[#f7f5f1] text-[#292923]">
      <div className="grid grid-cols-1 md:min-h-130 md:grid-cols-2">
        {/* Image */}
        <div
          className={`relative h-90 overflow-hidden sm:h-115 md:h-full md:min-h-130 ${
            imagePosition === "right" ? "md:order-2" : "md:order-1"
          }`}
        >
          <Image
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>

        {/* Text content */}
        <div
          className={`flex items-center px-6 py-10 sm:px-12 sm:py-16 lg:px-[11%] lg:py-20 ${
            imagePosition === "right" ? "md:order-1 bg-[#D9D5CB]" : "md:order-2"
          }`}
        >
          <div className="mx-auto w-full ">
            <p className="mb-7 text-[9px] font-normal uppercase tracking-wide text-[#85817b]">
              {eyebrow}
            </p>

            <h2 className="mb-7 whitespace-pre-line font-serif text-[clamp(36px,4vw,52px)] font-normal leading-[1.08] tracking-[-0.03em] text-[#292923]">
              {title}
            </h2>

            <p className="mb-6 max-w-117.5 text-[13px] leading-[1.8] text-[#807c74] sm:text-sm">
              {description}
            </p>

            {linkText && (
              <a href={linkUrl}
                className="group inline-flex items-center gap-4 border-b border-[#85817b] pb-2 text-[11px] text-[#292923] transition-colors hover:border-[#292923]"
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
