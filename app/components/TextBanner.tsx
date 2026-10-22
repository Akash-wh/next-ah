import Image, { type StaticImageData } from "next/image";

interface TextBannerProps {
  eyebrow: string;
  title: string;
  description: string;
  image: StaticImageData | string;
  imageAlt: string;
}

export default function TextBanner({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: TextBannerProps) {
  return (
    <section className="w-full bg-[#f7f5f1] text-[#292923]">
      {/* Text content */}
      <div className="flex flex-col items-center px-5 pb-12 pt-10 text-center sm:px-8 sm:pb-14 sm:pt-14 md:pb-16 md:pt-16 lg:pb-13.5 lg:pt-4">
        <p className="mb-6 text-[9px] font-normal uppercase tracking-wide text-[#85817b] sm:mb-7">
          {eyebrow}
        </p>

        <h1 className="mb-6 max-w-5xl whitespace-pre-line font-serif text-[clamp(38px,6vw,72px)] font-normal leading-[1.03] tracking-[-0.035em] sm:mb-7">
          {title}
        </h1>

        <p className="max-w-140 text-[12px] leading-[1.8] text-[#807c74] sm:text-[13px] md:text-sm">
          {description}
        </p>
      </div>

      {/* Full-width image */}
      <div className="relative h-70 w-full overflow-hidden sm:h-90 md:h-105 lg:h-[min(40vw,520px)]">
        <Image
          src={image}
          alt={imageAlt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>
    </section>
  );
}
