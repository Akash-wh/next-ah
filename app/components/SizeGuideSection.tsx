"use client";
import { useState } from "react";

interface SizeRow {
  size: string;
  eu: string;
  uk: string;
  us: string;
  bust: string;
  waist: string;
  hips: string;
}

interface MeasurementGuide {
  number: string;
  title: string;
  description: string;
}

interface SizeGuideProps {
  eyebrow: string;
  title: string;
  description: string;
  sizeRows: SizeRow[];
  measurementGuides: MeasurementGuide[];
  note: string;
}

export default function SizeGuide({
  eyebrow,
  title,
  description,
  sizeRows,
  measurementGuides,
  note,
}: SizeGuideProps) {
  const [unit, setUnit] = useState<"cm" | "in">("cm");

  const convertMeasurement = (value: string) => {
    if (value === "—") return value;

    const number = Number(value);

    if (Number.isNaN(number)) return value;

    return unit === "in" ? (number / 2.54).toFixed(1) : number.toString();
  };

  return (
    <section className="w-full bg-[#f7f5f1] px-5 py-8 text-[#292923] sm:px-5 sm:py-8 lg:px-10 lg:py-15">
      <div className="mx-auto max-w-7xl">
        {/* Page introduction */}
        <header className="mx-auto mb-12 max-w-180 text-center sm:mb-16">
          <p className="mb-5 text-[9px] uppercase tracking-wide text-[#85817b] sm:text-[10px]">
            {eyebrow}
          </p>

          <h1 className="font-serif text-[clamp(40px,5.5vw,66px)] font-normal leading-[1.08] tracking-[-0.03em]">
            {title}
          </h1>

          <p className="mx-auto mt-5 max-w-135 text-[12px] leading-[1.9] text-[#807c74] sm:text-sm">
            {description}
          </p>
        </header>

        {/* Size table heading and unit switch */}
        <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-[9px] uppercase tracking-wide text-[#85817b]">
              FIND YOUR FIT
            </p>

            <h2 className="font-serif text-[28px] font-normal sm:text-[32px]">
              Clothing size chart
            </h2>
          </div>

          <div
            className="flex w-fit items-center gap-1 border border-[#dedad1] p-1"
            aria-label="Measurement unit"
          >
            {(["cm", "in"] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setUnit(option)}
                aria-pressed={unit === option}
                className={`min-w-12 px-3 py-2 text-[10px] uppercase transition-colors ${
                  unit === option
                    ? "bg-[#292923] text-[#f7f5f1]"
                    : "text-[#807c74] hover:text-[#292923]"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive table */}
        <div className="overflow-x-auto border-y border-[#dedad1]">
          <table className="w-full min-w-162.5 border-collapse text-left">
            <thead>
              <tr className="border-b border-[#dedad1]">
                {[
                  "Size",
                  "EU",
                  "UK",
                  "US",
                  `Bust (${unit})`,
                  `Waist (${unit})`,
                  `Hips (${unit})`,
                ].map((heading) => (
                  <th
                    key={heading}
                    scope="col"
                    className="px-3 py-4 text-[9px] font-normal uppercase tracking-wide text-[#85817b] sm:px-4 sm:text-[10px]"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {sizeRows.map((row) => (
                <tr
                  key={row.size}
                  className="border-b border-[#e7e3db] last:border-b-0"
                >
                  <th
                    scope="row"
                    className="px-3 py-5 font-serif text-[15px] font-normal sm:px-4 sm:text-base"
                  >
                    {row.size}
                  </th>

                  {[row.eu, row.uk, row.us].map((value, index) => (
                    <td
                      key={`${row.size}-size-${index}`}
                      className="px-3 py-5 text-xs sm:px-4 sm:text-sm"
                    >
                      {value}
                    </td>
                  ))}

                  {[row.bust, row.waist, row.hips].map((value, index) => (
                    <td
                      key={`${row.size}-measurement-${index}`}
                      className="px-3 py-5 text-xs text-[#807c74] sm:px-4 sm:text-sm"
                    >
                      {convertMeasurement(value)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-[10px] leading-relaxed text-[#85817b]">
          {note}
        </p>

        {/* How to measure */}
        <div className="mt-16 sm:mt-20">
          <div className="mb-8">
            <p className="mb-3 text-[9px] uppercase tracking-wide text-[#85817b]">
              A LITTLE GUIDANCE
            </p>

            <h2 className="font-serif text-[32px] font-normal leading-tight sm:text-[40px]">
              How to measure yourself.
            </h2>

            <p className="mt-3 max-w-135 text-xs leading-[1.9] text-[#807c74] sm:text-sm">
              Use a soft measuring tape and keep it comfortably close to your
              body without pulling it tight.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-0 sm:grid-cols-3 sm:gap-6">
            {measurementGuides.map((guide) => (
              <article
                key={guide.number}
                className="border-t border-[#dedad1] py-5 sm:py-6"
              >
                <p className="mb-4 font-serif text-sm text-[#77765f]">
                  {guide.number}
                </p>

                <h3 className="mb-3 text-sm font-normal">{guide.title}</h3>

                <p className="text-xs leading-[1.9] text-[#807c74] sm:text-[13px]">
                  {guide.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
