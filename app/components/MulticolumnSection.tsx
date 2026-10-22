import Image, { type StaticImageData } from "next/image";


interface Column {
  number: string;
  title: string;
  description: string;
  image?: StaticImageData | any;
  imageAlt?: any;
}

interface MultiColumnImageTextProps {
  heading: string;
  label: string;
  columns: Column[];
  footerText?: string;
}

export default function MultiColumnImageText({
  heading,
  label,
  columns,
  footerText,
}: MultiColumnImageTextProps) {
  return (
    <section className="w-full bg-[#eae6da] px-5 py-12 text-[#292923] sm:px-8 sm:py-16 lg:px-[4.3%] lg:py-14">
      <div className="mx-auto max-w-[1800px]">
        {/* Section heading */}
        <div className="mb-8 flex items-end justify-between gap-4 sm:mb-10">
          <h2 className="font-serif text-[clamp(30px,3.5vw,46px)] font-normal leading-tight tracking-[-0.03em]">
            {heading}
          </h2>

          <span className="mb-1 shrink-0 text-[8px] uppercase tracking-wide text-[#77736d] sm:text-[9px]">
            {label}
          </span>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {columns.map((column) => (
            <article key={column.number} className="min-w-0">
              {/* Image */}
              <div className="group aspect-[1.38/1] overflow-hidden bg-[#d8d0c1]">
                <Image
                  src={column.image}
                  alt={column.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>

              {/* Text */}
              <div className="mt-4 sm:mt-5">
                <h3 className="font-serif text-[clamp(22px,2.2vw,29px)] font-normal leading-tight tracking-[-0.02em]">
                  <span>{column.number} / </span>
                  {column.title}
                </h3>

                <p className="mt-4 max-w-110 text-[13px] leading-[1.9] text-[#807c74] sm:mt-5 sm:text-sm">
                  {column.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Footer note */}
        {footerText && (
          <p className="mt-9 text-[10px] leading-relaxed text-[#807c74] sm:mt-10">
            {footerText}
          </p>
        )}
      </div>
    </section>
  );
}
