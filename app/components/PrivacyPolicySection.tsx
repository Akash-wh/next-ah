interface PrivacySection {
  id: string;
  title: string;
  content: string;
  details?: string[];
}

interface PrivacyPolicyProps {
  eyebrow: string;
  title: string;
  description: string;
  lastUpdated: string;
  introduction: string;
  sections: PrivacySection[];
  contactTitle: string;
  contactDescription: string;
  contactEmail: string;
}

export default function PrivacyPolicy({
  eyebrow,
  title,
  description,
  lastUpdated,
  introduction,
  sections,
  contactTitle,
  contactDescription,
  contactEmail,
}: PrivacyPolicyProps) {
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

      {/* Policy content */}
      <div className="border-y border-[#e5e1d9]">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-5 sm:py-8 lg:px-10 lg:py-15">
          <div className="mx-auto max-w-3xl">
            <div className="border-l-2 border-[#858873] pl-5 sm:pl-7">
              <h2 className="font-serif text-2xl font-normal sm:text-3xl">
                Your privacy matters
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#807c74] sm:text-base sm:leading-8">
                {introduction}
              </p>
            </div>

            <div className="mt-10 divide-y divide-[#e5e1d9] sm:mt-14">
              {sections.map((section) => (
                <article
                  key={section.id}
                  id={section.id}
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

                      {section.details && section.details.length > 0 && (
                        <ul className="mt-4 space-y-3">
                          {section.details.map((detail, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-3 text-sm leading-7 text-[#55554d]"
                            >
                              <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-[#858873]" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Contact */}
            <div className="mt-10 border border-[#dedbd1] px-5 py-8 sm:mt-14 sm:px-10 sm:py-12">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#646951]">
                Privacy enquiries
              </p>

              <h2 className="mt-4 font-serif text-2xl font-normal sm:text-3xl">
                {contactTitle}
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#807c74] sm:text-base sm:leading-8">
                {contactDescription}
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
