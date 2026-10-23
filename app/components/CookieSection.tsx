interface CookieCategory {
  id: string;
  title: string;
  description: string;
  examples: string[];
  required?: boolean;
}

interface CookieSection {
  id: string;
  title: string;
  content: string;
}

interface CookiesPolicyProps {
  eyebrow: string;
  title: string;
  description: string;
  lastUpdated: string;
  introduction: string;
  categoriesTitle: string;
  categoriesDescription: string;
  categories: CookieCategory[];
  sections: CookieSection[];
  contactEmail: string;
}

export default function CookiesPolicy({
  eyebrow,
  title,
  description,
  lastUpdated,
  introduction,
  categoriesTitle,
  categoriesDescription,
  categories,
  sections,
  contactEmail,
}: CookiesPolicyProps) {
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

          <p className="mt-6 text-xs tracking-wide text-[#807c74]">
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      <div className="border-y border-[#e5e1d9]">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-5 sm:py-8 lg:px-10 lg:py-15">
          <div className="mx-auto max-w-3xl">
            {/* Introduction */}
            <div className="border-l-2 border-[#858873] pl-5 sm:pl-7">
              <h2 className="font-serif text-2xl font-normal sm:text-3xl">
                Understanding cookies
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#807c74] sm:text-base sm:leading-8">
                {introduction}
              </p>
            </div>

            {/* Cookie categories */}
            <div className="mt-12 sm:mt-16">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#646951]">
                COOKIE CATEGORIES
              </p>

              <h2 className="mt-4 font-serif text-3xl font-normal sm:text-4xl">
                {categoriesTitle}
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#807c74] sm:text-base sm:leading-8">
                {categoriesDescription}
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {categories.map((category) => (
                  <article
                    key={category.id}
                    className="flex flex-col border border-[#e1ddd4] p-5 sm:p-6"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-serif text-xl font-normal sm:text-2xl">
                        {category.title}
                      </h3>

                      {category.required && (
                        <span className="shrink-0 border border-[#d8d8ca] px-2 py-1 text-[9px] uppercase tracking-wider text-[#646951]">
                          Required
                        </span>
                      )}
                    </div>

                    <p className="mt-3 text-sm leading-7 text-[#807c74]">
                      {category.description}
                    </p>

                    <div className="mt-5 border-t border-[#e5e1d9] pt-4">
                      <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#646951]">
                        Examples
                      </p>

                      <ul className="mt-3 space-y-2">
                        {category.examples.map((example, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-sm leading-6 text-[#55554d]"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#858873]" />
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Additional policy sections */}
            <div className="mt-12 divide-y divide-[#e5e1d9] sm:mt-16">
              {sections.map((section) => (
                <article
                  key={section.id}
                  id={`cookies-${section.id}`}
                  className="scroll-mt-24 py-7 sm:py-9"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className="pt-1 text-xs tracking-[0.2em] text-[#858873]">
                      {section.id}
                    </span>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif text-xl font-normal sm:text-2xl">
                        {section.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-[#807c74] sm:text-base sm:leading-8">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Contact */}
            <div className="mt-10 border border-[#dedbd1] px-5 py-8 sm:mt-14 sm:px-10 sm:py-12">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#646951]">
                COOKIE ENQUIRIES
              </p>

              <h2 className="mt-4 font-serif text-2xl font-normal sm:text-3xl">
                Need more information?
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#807c74] sm:text-base sm:leading-8">
                If you have questions about how cookies are used on our website,
                contact our team.
              </p>

              <a
                href={`mailto:${contactEmail}`}
                className="mt-6 inline-flex max-w-full break-all border-b border-[#858873] pb-2 text-sm transition-colors hover:border-[#292923] hover:text-[#646951]"
              >
                {contactEmail}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
