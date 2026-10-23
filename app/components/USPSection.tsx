interface USPItem {
  number: string;
  title: string;
  description: string;
}

interface USPSectionProps {
  items: USPItem[];
}

export default function USPSection({ items }: USPSectionProps) {
  return (
    <section className="w-full bg-[#f7f5f1] px-6 py-8 text-[#292923] sm:px-10 sm:py-10 lg:px-[4.5%] lg:py-12">
      <div className="mx-auto grid max-w-[1800px] grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-12">
        {items.map((item) => (
          <article
            key={item.number}
            className="flex items-center gap-5 sm:gap-6 justify-normal lg:justify-center"
          >
            {/* Number */}
            <span className="shrink-0 font-serif text-[16px] font-normal text-[#62634d]">
              {item.number}
            </span>

            {/* Text */}
            <div className="min-w-0">
              <h3 className="mb-1 text-[12px] font-normal leading-relaxed text-[#292923] sm:text-[13px]">
                {item.title}
              </h3>

              <p className="text-[10px] leading-relaxed text-[#807c74] sm:text-[11px]">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
