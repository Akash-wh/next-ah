interface CareItem {
  number: string;
  title: string;
  description: string;
  tips: string[];
  icon: string;
}

interface CareGuideProps {
  eyebrow: string;
  title: string;
  description: string;
  careItems: CareItem[];
  note: string;
}

export default function CareGuide({
  eyebrow,
  title,
  description,
  careItems,
  note,
}: CareGuideProps) {
  return (
    <section className="bg-[#f7f5f1] text-[#292923]">
      {/* Hero */}
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-5 sm:py-8 lg:px-10 lg:py-15">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-[#646951] sm:text-xs">
            {eyebrow}
          </p>

          <h1 className="font-serif text-4xl font-normal leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            {title}
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#807c74] sm:text-base sm:leading-8">
            {description}
          </p>

          <div className="mx-auto mt-8 h-px w-16 bg-[#a7a795]" />
        </div>
      </div>

      {/* Care cards */}
      <div className="border-y border-[#e5e1d9]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {careItems.map((item, index) => (
            <article
              key={item.number}
              className={`group p-6 sm:p-8 lg:p-10 ${
                index !== 0 ? "border-t border-[#e5e1d9] sm:border-t-0" : ""
              } ${
                index % 2 !== 0 && index !== 3
                  ? "sm:border-l sm:border-[#e5e1d9]"
                  : ""
              } ${index >= 2 ? "lg:border-t lg:border-[#e5e1d9]" : ""} ${
                index % 3 !== 0 && index !== 3
                  ? "lg:border-l lg:border-[#e5e1d9]"
                  : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="text-xs tracking-[0.2em] text-[#8c8a7c]">
                  {item.number}
                </span>

                <span
                  aria-hidden="true"
                  className="text-2xl text-[#646951] transition-transform duration-300 group-hover:scale-110"
                >
                  {item.icon}
                </span>
              </div>

              <h2 className="mt-8 font-serif text-2xl font-normal sm:text-3xl">
                {item.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#807c74]">
                {item.description}
              </p>

              <ul className="mt-6 space-y-3">
                {item.tips.map((tip, tipIndex) => (
                  <li
                    key={tipIndex}
                    className="flex items-start gap-3 text-sm leading-6 text-[#55554d]"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#858873]" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      {/* Closing note */}
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-5 sm:py-8 lg:px-10 lg:py-15">
        <div className="mx-auto max-w-3xl border border-[#dedbd1] px-6 py-10 text-center sm:px-12 sm:py-14">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#646951]">
            A little care goes a long way
          </p>

          <p className="mx-auto mt-5 max-w-2xl font-serif text-2xl leading-relaxed sm:text-3xl">
            {note}
          </p>
        </div>
      </div>
    </section>
  );
}
