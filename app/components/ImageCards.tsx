import Image, { type StaticImageData } from "next/image";

interface ImageCard {
  image: StaticImageData | string;
  imageAlt: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

interface ImageCardsProps {
  heading: string;
  label: string;
  cards: ImageCard[];
}

export default function ImageCards({ heading, label, cards }: ImageCardsProps) {
  return (
    <section className="w-full bg-[#f7f5f1] px-5 py-8 text-[#292923] sm:px-8 sm:py-10 lg:px-[4.3%] lg:py-15">
      <div className="mx-auto max-w-[1800px]">
        {/* Section Header */}
        <div className="mb-7 flex items-center justify-between gap-4 sm:mb-8 lg:mb-7">
          <h2 className="font-serif text-[clamp(30px,3.3vw,44px)] font-normal leading-tight tracking-[-0.03em]">
            {heading}
          </h2>

          <span className="shrink-0 text-[8px] uppercase tracking-wide text-[#77736d] sm:text-[9px]">
            {label}
          </span>
        </div>

        {/* Image Cards */}
        <div className="grid grid-cols-1 gap-8 sm:gap-6 md:grid-cols-2 md:gap-5.5">
          {cards.map((card, index) => (
            <article key={`${card.title}-${index}`} className="min-w-0">
              {/* Image */}
              <a
                href={card.linkUrl}
                aria-label={`Explore ${card.title}`}
                className="group relative block aspect-[1.2/1] overflow-hidden bg-[#e8e2d9] sm:aspect-1.25/1"
              >
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  loading={index < 2 ? "eager" : "lazy"}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </a>

              {/* Card Content */}
              <div className="mt-4 flex items-start justify-between gap-4 sm:mt-5">
                <div className="min-w-0">
                  <h3 className="font-serif text-[25px] font-normal leading-tight tracking-[-0.02em] sm:text-[28px] lg:text-[29px]">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-[12px] leading-relaxed text-[#807c74] sm:text-[13px]">
                    {card.description}
                  </p>
                </div>

                <a
                  href={card.linkUrl}
                  className="group mt-1 inline-flex shrink-0 items-center gap-3 border-b border-[#85817b] pb-2 text-[10px] text-[#292923] transition-colors hover:border-[#292923] sm:mt-2"
                >
                  {card.linkText}

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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
