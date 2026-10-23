interface ShippingItem {
  number: string;
  title: string;
  description: string;
  details: string[];
}

interface ShippingReturnsProps {
  eyebrow: string;
  title: string;
  description: string;
  shippingTitle: string;
  shippingDescription: string;
  shippingItems: ShippingItem[];
  returnsTitle: string;
  returnsDescription: string;
  returnItems: ShippingItem[];
  note: string;
}

export default function ShippingReturns({
  eyebrow,
  title,
  description,
  shippingTitle,
  shippingDescription,
  shippingItems,
  returnsTitle,
  returnsDescription,
  returnItems,
  note,
}: ShippingReturnsProps) {
  const renderItems = (items: ShippingItem[]) => (
    <div className="divide-y divide-[#e5e1d9]">
      {items.map((item) => (
        <article key={item.number} className="py-6 sm:py-8">
          <div className="flex items-start gap-4 sm:gap-6">
            <span className="pt-1 text-xs tracking-[0.2em] text-[#858873]">
              {item.number}
            </span>

            <div className="min-w-0 flex-1">
              <h3 className="font-serif text-xl font-normal sm:text-2xl">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#807c74]">
                {item.description}
              </p>

              <ul className="mt-4 space-y-2">
                {item.details.map((detail, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm leading-6 text-[#55554d]"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#858873]" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      ))}
    </div>
  );

  return (
    <section className="bg-[#f7f5f1] text-[#292923]">
      {/* Page introduction */}
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

      {/* Shipping and returns sections */}
      <div className="border-y border-[#e5e1d9]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          {/* Shipping */}
          <div className="px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#646951]">
              DELIVERY
            </p>

            <h2 className="mt-4 font-serif text-3xl font-normal sm:text-4xl">
              {shippingTitle}
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#807c74]">
              {shippingDescription}
            </p>

            <div className="mt-6">
              {renderItems(shippingItems)}
            </div>
          </div>

          {/* Returns */}
          <div className="border-t border-[#e5e1d9] px-5 py-8 sm:px-5 sm:py-8 lg:border-l lg:border-t-0 lg:px-10 lg:py-15">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#646951]">
              RETURNS & EXCHANGES
            </p>

            <h2 className="mt-4 font-serif text-3xl font-normal sm:text-4xl">
              {returnsTitle}
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#807c74]">
              {returnsDescription}
            </p>

            <div className="mt-6">
              {renderItems(returnItems)}
            </div>
          </div>
        </div>
      </div>

      {/* Policy note */}
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-5 sm:py-8 lg:px-10 lg:py-15">
        <div className="mx-auto max-w-3xl border border-[#dedbd1] px-6 py-10 text-center sm:px-10 sm:py-12">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#646951]">
            Need assistance?
          </p>

          <p className="mx-auto mt-5 max-w-2xl font-serif text-2xl leading-relaxed sm:text-3xl">
            {note}
          </p>
        </div>
      </div>
    </section>
  );
}