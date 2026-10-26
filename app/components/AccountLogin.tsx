"use client";
import { useState, type FormEvent } from "react";
import Link from "next/link";

interface AccountLoginProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  loginUrl?: string;
  forgotPasswordUrl?: string;
  registerUrl?: string;
  supportEmail?: string;
  onLogin?: (credentials: {
    email: string;
    password: string;
    rememberMe: boolean;
  }) => void | Promise<void>;
}

export default function AccountLogin({
  eyebrow = "WELCOME BACK",
  title = "Your AUREL account.",
  description = "Sign in to access your orders, manage your details, and enjoy a more personal shopping experience.",
  loginUrl,
  forgotPasswordUrl = "/account/forgot-password",
  registerUrl = "/account/register",
  supportEmail = "support@yourdomain.com",
  onLogin,
}: AccountLoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Please enter your email address and password.");
      return;
    }

    if (onLogin) {
      setIsSubmitting(true);

      try {
        await onLogin({
          email: email.trim(),
          password,
          rememberMe,
        });
      } catch {
        setError("We couldn't sign you in. Please check your details and try again.");
      } finally {
        setIsSubmitting(false);
      }

      return;
    }

    if (loginUrl) {
      const form = event.currentTarget;
      form.action = loginUrl;
      form.method = "post";
      form.submit();
      return;
    }

    setError(
      "Login is not connected yet. Please connect your authentication service."
    );
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
              "Keep track of your orders",
              "Save your details for a smoother checkout",
              "Keep your favourite pieces close",
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

        {/* Login form */}
        <div className="mx-auto w-full max-w-lg border border-[#e1ddd4] bg-[#faf9f6] p-6 sm:p-9 lg:p-10">
          <div className="border-b border-[#e5e1d9] pb-6">
            <h2 className="font-serif text-2xl font-normal sm:text-3xl">
              Sign in
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#807c74]">
              Enter your details below to access your account.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-7 space-y-5">
            <div>
              <label
                htmlFor="account-email"
                className="mb-2 block text-[11px] font-medium uppercase tracking-[0.15em]"
              >
                Email address
              </label>

              <input
                id="account-email"
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

            <div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <label
                  htmlFor="account-password"
                  className="text-[11px] font-medium uppercase tracking-[0.15em]"
                >
                  Password
                </label>

                <Link href={forgotPasswordUrl}
                  className="text-xs text-[#646951] underline underline-offset-4 transition-colors hover:text-[#292923]"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="flex border border-[#dedbd1] focus-within:border-[#646951]">
                <input
                  id="account-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
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

            <label className="flex cursor-pointer items-center gap-3 py-1">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(event) => setRememberMe(event.target.checked)}
                className="h-4 w-4 accent-[#646951]"
              />
              <span className="text-sm text-[#64645c]">
                Remember me
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
              {isSubmitting ? "Signing in..." : "Sign in"}
              {!isSubmitting && <span aria-hidden="true">↗</span>}
            </button>
          </form>

          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#e5e1d9]" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#aaa69c]">
              New to AUREL?
            </span>
            <div className="h-px flex-1 bg-[#e5e1d9]" />
          </div>

          <Link href={registerUrl}
            className="flex w-full items-center justify-center border border-[#858873] px-6 py-4 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors hover:bg-[#eeece5]"
          >
            Create an account
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
