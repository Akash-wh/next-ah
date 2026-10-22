interface ContentCard {
  id: number;
  title: string;
  description: string;
  link?: string;
}

interface ContentCardsProps {
  heading: string;
  buttonText: string;
  buttonLink: string;
  cards: ContentCard[];
}

export default function ContentCards({
  heading,
  buttonText,
  buttonLink,
  cards,
}: ContentCardsProps) {
  return (
    <section className="w-full bg-[#eae6da] px-5 py-12 text-[#292923] sm:px-8 sm:py-16 lg:px-[4.2%] lg:py-14">
      <div className="mx-auto max-w-[1800px]">
        {/* Section heading */}
        <div className="mb-9 flex items-start justify-between gap-5 sm:mb-10 sm:items-center">
          <h2 className="font-serif text-[clamp(30px,4vw,48px)] font-normal leading-tight tracking-[-0.03em]">
            {heading}
          </h2>

          <a href={buttonLink}
            className="group mt-2 inline-flex shrink-0 items-center gap-4 border-b border-[#85817b] pb-2 text-[10px] transition-colors hover:border-[#292923] sm:mt-0 sm:text-xs"
          >
            {buttonText}

            <svg
              viewBox="0 0 24 24"
              width="15"
              height="15"
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

        {/* Content cards */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
          {cards.map((card) => (
            <article
              key={card.id}
              className="border-t border-[#d8d2c6] pt-5"
            >
              <h3 className="text-[14px] font-normal leading-relaxed sm:text-base">
                {card.title}
              </h3>

              <p className="mt-5 text-[14px] leading-[1.7] text-[#807c74] sm:text-[16px] sm:leading-[1.75]">
                {card.description}
              </p>

              {card.link && (
                <a href={card.link}
                  className="mt-4 inline-flex items-center gap-2 border-b border-[#85817b] pb-1 text-[11px] hover:border-[#292923]"
                >
                  Read more <span>↗</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
