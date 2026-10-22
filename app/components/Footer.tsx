import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo: string;
  description: string[];
  columns: FooterColumn[];
  email: string;
  location: string;
  copyright: string;
  legalLinks: FooterLink[];
  locale: string;
}

export default function Footer({
  logo,
  description,
  columns,
  email,
  location,
  copyright,
  legalLinks,
  locale,
}: FooterProps) {
  return (
    <footer className="w-full bg-[#292923] text-[#f7f5f1]">
      <div className="mx-auto max-w-[1800px] px-6 pb-6 pt-12 sm:px-8 sm:pt-16 lg:px-[4.4%] lg:pt-[4.2rem]">

        {/* Main footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2.2fr_1.15fr_1.25fr_0.9fr] lg:gap-12">

          {/* Brand */}
          <div>
            <Link href="/"
              className="inline-block font-serif text-[48px] font-normal leading-none tracking-[-2px] sm:text-[58px]"
            >
              {logo}
            </Link>

            <div className="mt-7 space-y-1.5 text-[15px] leading-relaxed text-[#d0cec5] sm:text-[17px]">
              {description.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>

          {/* Navigation columns */}
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-5 text-[10px] font-normal uppercase tracking-wide text-[#d0cec5]">
                {column.title}
              </h3>

              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] text-[#f0eee8] transition-colors hover:text-white sm:text-sm"
                      >
                        {link.label}
                        <span className="ml-1.5 text-xs">↗</span>
                      </a>
                    ) : (
                      <Link href={link.href}
                        className="text-[13px] text-[#f0eee8] transition-colors hover:text-white sm:text-sm"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact information */}
          <div>
            <h3 className="mb-5 text-[10px] font-normal uppercase tracking-wide text-[#d0cec5]">
              FIND US
            </h3>

            <ul className="space-y-4 text-[13px] text-[#f0eee8] sm:text-sm">
              <li>
                <a
                  href={`mailto:${email}`}
                  className="transition-colors hover:text-white"
                >
                  {email}
                </a>
              </li>
              <li>{location}</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-[#55544d] pt-6 sm:mt-16">
          <div className="flex flex-col gap-5 text-[10px] text-[#d0cec5] sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <p>{copyright}</p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}

              <span>{locale}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
