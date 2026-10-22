
"use client";

import { useState, type FormEvent } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

interface ContactFormProps {
  eyebrow: string;
  title: string;
  description: string;
  image: StaticImageData | string;
  imageAlt: string;
  email: string;
  workingHours: string[];
  studioLabel: string;
  studioAddress: string[];
  appointmentNote: string;
  appointmentText: string;
  appointmentLink: string;
  pressEmail: string;
  wholesaleEmail: string;
  formTitle: string;
  topics: string[];
  privacyText: string;
  submitText: string;
}

export interface ContactData {
  firstName: string;
  lastName: string;
  email: string;
  topic: string;
  orderNumber: string;
  message: string;
  consent: boolean;
}

const initialForm: ContactData = {
  firstName: "",
  lastName: "",
  email: "",
  topic: "",
  orderNumber: "",
  message: "",
  consent: false,
};

export default function ContactForm({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  email,
  workingHours,
  studioLabel,
  studioAddress,
  appointmentNote,
  appointmentText,
  appointmentLink,
  pressEmail,
  wholesaleEmail,
  formTitle,
  topics,
  privacyText,
  submitText,
}: ContactFormProps) {
  const [form, setForm] = useState<ContactData>(initialForm);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");
  const [submitting, setSubmitting] = useState(false);

  const updateField = (
    field: keyof ContactData,
    value: string | boolean
  ) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));

    setStatus("");
    setStatusType("");
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (submitting) return;

    setSubmitting(true);
    setStatus("");
    setStatusType("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Failed to submit contact form"
        );
      }

      setStatus("Thank you. Your message has been received.");
      setStatusType("success");
      setForm({ ...initialForm });
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
      setStatusType("error");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "mt-2 min-h-[38px] w-full border border-[#dedad1] bg-transparent px-3 py-2 text-[11px] text-[#292923] outline-none transition-colors placeholder:text-[#89857d] focus:border-[#77736d]";

  const labelClass = "block text-[9px] text-[#292923]";

  return (
    <section className="w-full bg-[#f7f5f1] px-5 py-10 text-[#292923] sm:px-8 sm:py-14 lg:px-[4.3%] lg:py-16">
      <div className="mx-auto max-w-[1600px]">

        {/* Page heading */}
        <div className="mb-10 grid grid-cols-1 gap-5 md:mb-12 md:grid-cols-[1.5fr_0.7fr] md:items-end lg:mb-14">
          <div>
            <p className="mb-5 text-[9px] uppercase tracking-wide text-[#85817b]">
              {eyebrow}
            </p>

            <h1 className="max-w-162.5 whitespace-pre-line font-serif text-[clamp(38px,5vw,58px)] font-normal leading-[1.04] tracking-[-0.03em]">
              {title}
            </h1>
          </div>

          <p className="max-w-72.5 text-[11px] leading-[1.8] text-[#807c74] md:justify-self-end md:text-xs">
            {description}
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-[7%]">

          {/* Contact information */}
          <aside className="min-w-0">

            <div className="relative aspect-[1.55/1] overflow-hidden bg-[#e5dfd4]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            {/* Client care */}
            <div className="mt-5">
              <p className="mb-2 text-[8px] uppercase tracking-wide text-[#85817b]">
                CLIENT CARE
              </p>

              <a
                href={`mailto:${email}`}
                className="font-serif text-[23px] hover:underline sm:text-[25px]"
              >
                {email}
              </a>

              <div className="mt-2 space-y-1 text-[10px] leading-relaxed text-[#807c74] sm:text-[11px]">
                {workingHours.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>

            {/* Studio information */}
            <div className="mt-6">
              <p className="mb-3 text-[8px] uppercase tracking-wide text-[#85817b]">
                {studioLabel}
              </p>

              <div className="space-y-1 text-[10px] leading-relaxed text-[#292923]">
                {studioAddress.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>

              <p className="mt-3 text-[9px] text-[#85817b]">
                {appointmentNote}
              </p>

              <Link
                href={appointmentLink}
                className="group mt-2 inline-flex items-center gap-3 border-b border-[#85817b] pb-1 text-[10px] hover:border-[#292923]"
              >
                {appointmentText}

                <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </Link>
            </div>

            {/* Press and wholesale */}
            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-[#e3dfd6] pt-5">

              <div>
                <p className="mb-2 text-[8px] uppercase tracking-wide text-[#85817b]">
                  PRESS & COLLABORATIONS
                </p>

                <a
                  href={`mailto:${pressEmail}`}
                  className="wrap-break-word text-[10px] hover:underline"
                >
                  {pressEmail}
                </a>
              </div>

              <div>
                <p className="mb-2 text-[8px] uppercase tracking-wide text-[#85817b]">
                  WHOLESALE
                </p>

                <a
                  href={`mailto:${wholesaleEmail}`}
                  className="wrap-break-word text-[10px] hover:underline"
                >
                  {wholesaleEmail}
                </a>
              </div>
            </div>
          </aside>

          {/* Contact form */}
          <div className="min-w-0">
            <h2 className="font-serif text-[26px] font-normal leading-tight sm:text-[28px]">
              {formTitle}
            </h2>

            <p className="mb-6 mt-2 text-[9px] text-[#85817b]">
              Fields marked with an asterisk are required.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* First and last name */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                <label className={labelClass}>
                  First name *
                  <input
                    type="text"
                    autoComplete="given-name"
                    required
                    value={form.firstName}
                    onChange={(e) =>
                      updateField("firstName", e.target.value)
                    }
                    placeholder="Your first name"
                    className={inputClass}
                  />
                </label>

                <label className={labelClass}>
                  Last name *
                  <input
                    type="text"
                    autoComplete="family-name"
                    required
                    value={form.lastName}
                    onChange={(e) =>
                      updateField("lastName", e.target.value)
                    }
                    placeholder="Your last name"
                    className={inputClass}
                  />
                </label>
              </div>

              {/* Email */}
              <label className={labelClass}>
                Email address *
                <input
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    updateField("email", e.target.value)
                  }
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </label>

              {/* Topic */}
              <label className={labelClass}>
                What's on your mind? *
                <select
                  required
                  value={form.topic}
                  onChange={(e) =>
                    updateField("topic", e.target.value)
                  }
                  className={`${inputClass} ${
                    form.topic ? "" : "text-[#89857d]"
                  }`}
                >
                  <option value="" disabled>
                    Select a topic
                  </option>

                  {topics.map((topic) => (
                    <option
                      key={topic}
                      value={topic}
                      className="text-[#292923]"
                    >
                      {topic}
                    </option>
                  ))}
                </select>
              </label>

              {/* Order number */}
              <label className={labelClass}>
                Order number (optional)
                <input
                  type="text"
                  value={form.orderNumber}
                  onChange={(e) =>
                    updateField("orderNumber", e.target.value)
                  }
                  placeholder="e.g. AU-10428"
                  className={inputClass}
                />
              </label>

              {/* Message */}
              <label className={labelClass}>
                Your message *
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    updateField("message", e.target.value)
                  }
                  placeholder="Tell us a little more..."
                  className={`${inputClass} min-h-27.5 resize-y`}
                />
              </label>

              {/* Consent */}
              <label className="flex cursor-pointer items-start gap-2 text-[9px] leading-relaxed text-[#807c74]">
                <input
                  type="checkbox"
                  required
                  checked={form.consent}
                  onChange={(e) =>
                    updateField("consent", e.target.checked)
                  }
                  className="mt-0.5 h-3 w-3 shrink-0 accent-[#292923]"
                />

                <span>{privacyText}</span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="group inline-flex min-h-9.5 items-center justify-between gap-8 bg-[#292923] px-5 text-[9px] text-white transition-colors hover:bg-[#49483f] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "SENDING..." : submitText}

                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>

              {/* Form status */}
              {status && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`text-[11px] ${
                    statusType === "error"
                      ? "text-red-600"
                      : "text-[#626951]"
                  }`}
                >
                  {status}
                </p>
              )}

              <p className="text-[9px] text-[#85817b]">
                A real person, a thoughtful reply. Always.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
