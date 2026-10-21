import Image, { type StaticImageData } from "next/image";

interface FashionHeroProps {
  chapter?: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  image?: StaticImageData | any;
  imageAlt?: any;
  collection?: string;
  slide?: string;
}

export default function FashionHero({
  chapter,
  title,
  description,
  buttonText,
  buttonLink,
  image,
  imageAlt,
  collection,
  slide,
}: FashionHeroProps) {
  return (
    <section className="grid min-h-150 w-full grid-cols-1 overflow-hidden bg-[#f7f5f1] md:h-[80vh] md:max-h-225 md:grid-cols-[42.4%_57.6%]">
      <div className="order-2 flex flex-col justify-between px-6 py-8 sm:px-10 md:order-1 md:px-[8%] lg:px-[11.2%]">
        <span className="text-[8px] tracking-wide text-[#85817b]">
          {chapter}
        </span>

        <div className="my-10 md:my-auto md:py-8">
          <h1 className="mb-5 whitespace-pre-line font-serif text-[clamp(46px,5.6vw,90px)] font-normal leading-[1.07] tracking-[-0.035em] text-[#282722]">
            {title}
          </h1>

          <p className="mb-6 max-w-70 text-xs leading-[1.9] text-[#7b7873]">
            {description}
          </p>

          <a
            href={buttonLink}
            className="group inline-flex min-h-10 items-center gap-6 bg-[#292923] px-5 text-[9px] text-white transition hover:bg-[#55544b]"
          >
            {buttonText}

            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-[8px] text-[#85817b]">{collection}</span>

          <span className="font-serif text-[13px] text-[#292923]">{slide}</span>
        </div>
      </div>

      <div className="relative order-1 h-[55vh] min-h-80 md:order-2 md:h-full">
        <Image
          src={image}
          alt={imageAlt}
          height={800}
          width={1200}
          className="object-cover"
        />
      </div>
    </section>
  );
}
