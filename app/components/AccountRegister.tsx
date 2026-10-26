"use client";
import { useState, type FormEvent } from "react";
import Link from "next/link";

interface AccountRegisterProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  loginUrl?: string;
  supportEmail?: string;
  onRegister?: (data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    marketingConsent: boolean;
  }) => void | Promise<void>;
}

export default function AccountRegister({
  eyebrow = "JOIN AUREL",
  title = "Create your account.",
  description = "A more personal shopping experience starts here. Create an account to keep your orders and details together.",
  loginUrl = "/account",
  supportEmail = "support@yourdomain.com",
  onRegister,
}: AccountRegisterProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("Your password must contain at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Your passwords do not match. Please try again.");
      return;
    }

    if (!onRegister) {
      setError(
        "Registration is not connected yet. Please connect your authentication service.",
      );
      return;
    }

    setIsSubmitting(true);

    try {
      await onRegister({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        password,
        marketingConsent,
      });
    } catch {
      setError(
        "We couldn't create your account. Please check your details and try again.",
      );
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

          <div className="mt-8 space-y-4">
            {[
              "Keep your orders in one place",
              "Manage your personal details",
              "Enjoy a smoother checkout experience",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#c9c8b9] text-[10px] text-[#646951]">
                  ✓
                </span>
                <p className="text-sm text-[#64645c]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Registration form */}
        <div className="mx-auto w-full max-w-lg border border-[#e1ddd4] bg-[#faf9f6] p-6 sm:p-9 lg:p-10">
          <div className="border-b border-[#e5e1d9] pb-6">
            <h2 className="font-serif text-2xl font-normal sm:text-3xl">
              Create an account
            </h2>

            <p className="mt-2 text-sm leading-6 text-[#807c74]">
              Fill in your details to get started.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-7 space-y-5">
            {/* First and last name */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="register-first-name"
                  className="mb-2 block text-[11px] font-medium uppercase tracking-[0.15em]"
                >
                  First name
                </label>

                <input
                  id="register-first-name"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  required
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  placeholder="First name"
                  className="w-full border border-[#dedbd1] bg-transparent px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-[#aaa69c] focus:border-[#646951]"
                />
              </div>

              <div>
                <label
                  htmlFor="register-last-name"
                  className="mb-2 block text-[11px] font-medium uppercase tracking-[0.15em]"
                >
                  Last name
                </label>

                <input
                  id="register-last-name"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  required
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  placeholder="Last name"
                  className="w-full border border-[#dedbd1] bg-transparent px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-[#aaa69c] focus:border-[#646951]"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="register-email"
                className="mb-2 block text-[11px] font-medium uppercase tracking-[0.15em]"
              >
                Email address
              </label>

              <input
                id="register-email"
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

            {/* Password */}
            <div>
              <label
                htmlFor="register-password"
                className="mb-2 block text-[11px] font-medium uppercase tracking-[0.15em]"
              >
                Password
              </label>

              <div className="flex border border-[#dedbd1] focus-within:border-[#646951]">
                <input
                  id="register-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  minLength={8}
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="At least 8 characters"
                  className="min-w-0 flex-1 bg-transparent px-4 py-3.5 text-sm outline-none placeholder:text-[#aaa69c]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="shrink-0 px-4 text-xs text-[#646951] hover:text-[#292923]"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Confirm password */}
            <div>
              <label
                htmlFor="register-confirm-password"
                className="mb-2 block text-[11px] font-medium uppercase tracking-[0.15em]"
              >
                Confirm password
              </label>

              <div className="flex border border-[#dedbd1] focus-within:border-[#646951]">
                <input
                  id="register-confirm-password"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  placeholder="Re-enter your password"
                  className="min-w-0 flex-1 bg-transparent px-4 py-3.5 text-sm outline-none placeholder:text-[#aaa69c]"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((value) => !value)}
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                  className="shrink-0 px-4 text-xs text-[#646951] hover:text-[#292923]"
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Optional marketing consent */}
            <label className="flex cursor-pointer items-start gap-3 py-1">
              <input
                type="checkbox"
                checked={marketingConsent}
                onChange={(event) => setMarketingConsent(event.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 accent-[#646951]"
              />

              <span className="text-xs leading-6 text-[#807c74]">
                I'd like to receive occasional AUREL updates, new arrivals, and
                selected offers by email. I can unsubscribe at any time.
              </span>
            </label>

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
              {isSubmitting ? "Creating account..." : "Create account"}
              {!isSubmitting && <span aria-hidden="true">↗</span>}
            </button>
          </form>

          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#e5e1d9]" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#aaa69c]">
              Already a member?
            </span>
            <div className="h-px flex-1 bg-[#e5e1d9]" />
          </div>

          <Link
            href={loginUrl}
            className="flex w-full items-center justify-center border border-[#858873] px-6 py-4 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors hover:bg-[#eeece5]"
          >
            Sign in
          </Link>

          <p className="mt-7 text-center text-xs leading-6 text-[#807c74]">
            Need assistance?{" "}
            <a
              href={`mailto:${supportEmail}`}
              className="underline underline-offset-4 hover:text-[#292923]"
            >
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
