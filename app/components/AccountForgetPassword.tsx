"use client";
import { useState, type FormEvent } from "react";
import Link from "next/link";

interface ForgotPasswordProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  loginUrl?: string;
  registerUrl?: string;
  supportEmail?: string;
  onResetPassword?: (email: string) => void | Promise<void>;
}

export default function ForgotPassword({
  eyebrow = "ACCOUNT ASSISTANCE",
  title = "A fresh start.",
  description = "Forgot your password? Enter the email address associated with your AUREL account and we'll help you reset it.",
  loginUrl = "/account",
  registerUrl = "/account/register",
  supportEmail = "support@yourdomain.com",
  onResetPassword,
}: ForgotPasswordProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess(false);

    if (!onResetPassword) {
      setError(
        "Password recovery is not connected yet. Please connect your authentication service."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      await onResetPassword(email.trim());
      setSuccess(true);
    } catch {
      // Avoid exposing whether an email address has an account.
      setSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-[75vh] bg-[#f7f5f1] px-5 py-16 text-[#292923] sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Brand introduction */}
        <div className="mx-auto w-full max-w-lg lg:mx-0">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#646951] sm:text-xs">
            {eyebrow}
          </p>

          <h1 className="mt-5 font-serif text-4xl font-normal leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-md text-sm leading-7 text-[#807c74] sm:text-base sm:leading-8">
            {description}
          </p>

          <div className="mt-8 h-px w-16 bg-[#a7a795]" />

          <div className="mt-8">
            <p className="font-serif text-2xl leading-relaxed sm:text-3xl">
              Good things are worth coming back to.
            </p>

            <p className="mt-4 max-w-sm text-sm leading-7 text-[#807c74]">
              Follow a few simple steps to regain access to your account and
              continue your AUREL experience.
            </p>
          </div>
        </div>

        {/* Password recovery form */}
        <div className="mx-auto w-full max-w-lg border border-[#e1ddd4] bg-[#faf9f6] p-6 sm:p-9 lg:p-10">
          <div className="border-b border-[#e5e1d9] pb-6">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#dedbd1] text-xl text-[#646951]">
              ↗
            </div>

            <h2 className="font-serif text-2xl font-normal sm:text-3xl">
              Reset your password
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#807c74]">
              Enter your email below to request a password reset link.
            </p>
          </div>

          {success ? (
            <div
              role="status"
              aria-live="polite"
              className="mt-7 border border-[#cbd5c0] bg-[#f0f2e9] p-5"
            >
              <p className="font-serif text-xl text-[#4f6346]">
                Check your inbox.
              </p>

              <p className="mt-3 text-sm leading-7 text-[#646c5b]">
                If an account exists for that email address, you will receive
                instructions to reset your password. Please check your spam
                folder as well.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSuccess(false);
                  setError("");
                }}
                className="mt-5 text-xs underline underline-offset-4 hover:text-[#646951]"
              >
                Try another email address
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div>
                <label
                  htmlFor="forgot-email"
                  className="mb-2 block text-[11px] font-medium uppercase tracking-[0.15em]"
                >
                  Email address
                </label>

                <input
                  id="forgot-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  className="w-full border border-[#dedbd1] bg-transparent px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-[#aaa69c] focus:border-[#646951]"
                />
              </div>

              {error && (
                <p
                  role="alert"
                  className="border border-[#d8c2b9] bg-[#f8eeea] p-3 text-sm leading-6 text-[#884b3b]"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-3 bg-[#646951] px-6 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#4f5340] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending request..." : "Send reset link"}
                {!isSubmitting && <span aria-hidden="true">↗</span>}
              </button>

              <p className="text-center text-xs leading-6 text-[#807c74]">
                For your security, we won't disclose whether an email address
                is registered with us.
              </p>
            </form>
          )}

          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#e5e1d9]" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#aaa69c]">
              Remembered it?
            </span>
            <div className="h-px flex-1 bg-[#e5e1d9]" />
          </div>

          <Link href={loginUrl}
            className="flex w-full items-center justify-center border border-[#858873] px-6 py-4 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors hover:bg-[#eeece5]"
          >
            Back to sign in
          </Link>

          <p className="mt-7 text-center text-xs leading-6 text-[#807c74]">
            New to AUREL?{" "}
            <Link href={registerUrl}
              className="underline underline-offset-4 hover:text-[#292923]"
            >
              Create an account
            </Link>
          </p>

          <p className="mt-3 text-center text-xs leading-6 text-[#807c74]">
            Need help?{" "}
            <Link href={`mailto:${supportEmail}`}
              className="underline underline-offset-4 hover:text-[#292923]"
            >
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
