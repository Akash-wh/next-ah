
import Image, { type StaticImageData } from "next/image";


interface ImageWithTextProps {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image: StaticImageData | string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  signature?: string;
  designation?: string;
  linkText?: string;
  linkUrl?: string;
}

export default function ImageWithText({
  eyebrow,
  title,
  paragraphs,
  image,
  imageAlt,
  imagePosition = "right",
  signature,
  designation,
  linkText,
  linkUrl = "/",
}: ImageWithTextProps) {
  const imageFirst = imagePosition === "left";

  return (
    <section className="w-full bg-[#f7f5f1] px-5 py-10 text-[#292923] sm:px-8 sm:py-14 lg:px-[4.5%] lg:py-16">
      <div
        className={`mx-auto grid max-w-[1800px] grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-16 ${
          imageFirst ? "" : ""
        }`}
      >
        {/* Image */}
        <div
          className={`relative order-1 aspect-4/3 w-full overflow-hidden bg-[#e8e2d9] md:aspect-[1.06/1] ${
            imageFirst ? "md:order-1" : "md:order-2"
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
          className={`order-2 flex items-center ${
            imageFirst ? "md:order-2" : "md:order-1"
          }`}
        >
          <div className="w-full py-2 md:py-6 lg:px-2">
            <p className="mb-6 text-[9px] font-normal uppercase tracking-wide text-[#85817b]">
              {eyebrow}
            </p>

            <h2 className="mb-7 max-w-130 whitespace-pre-line font-serif text-[clamp(36px,4.2vw,58px)] font-normal leading-[1.08] tracking-[-0.03em]">
              {title}
            </h2>

            <div className="max-w-135 space-y-5 text-[13px] leading-[1.9] text-[#807c74] sm:text-sm">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {signature && (
              <p className="mt-7 font-serif text-[27px] italic leading-tight">
                {signature}
              </p>
            )}

            {designation && (
              <p className="mt-6 text-[9px] uppercase tracking-wide text-[#85817b]">
                {designation}
              </p>
            )}

            {linkText && (
              <a href={linkUrl}
                className="group mt-7 inline-flex items-center gap-4 border-b border-[#85817b] pb-2 text-[11px] text-[#292923] transition-colors hover:border-[#292923]"
              >
                {linkText}
                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
