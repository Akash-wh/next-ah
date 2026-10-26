"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  label: string;
  href: string;
}

interface HeaderProps {
  logo: string;
  logoLink: string;
  navLinks: NavLink[];
  language: string;
  cartCount: number;
  accountLink: string;
  cartLink: string;
  searchLink: string;
}

function HeaderContent({
  logo,
  logoLink,
  navLinks,
  language,
  cartCount,
  accountLink,
  cartLink,
  searchLink,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="relative z-50 w-full border-b border-[#d3d3d3] bg-[#f7f5f1] text-[#292923]">
      <div className="relative flex h-18 items-center justify-between px-5 sm:px-8 lg:px-14">
        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-9 w-9 items-center justify-center md:hidden"
        >
          {menuOpen ? (
            <span className="text-2xl">×</span>
          ) : (
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              aria-hidden="true"
            >
              <path d="M3 7H21M3 12H21M3 17H21" />
            </svg>
          )}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 md:flex lg:gap-7">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`border-b pb-1 text-[11px] transition-colors ${
                  active
                    ? "border-[#292923] text-[#292923]"
                    : "border-transparent text-[#77736d] hover:border-[#292923] hover:text-[#292923]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Center logo */}
        <Link
          href={logoLink}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[32px] font-normal leading-none tracking-[-1.5px] sm:text-[36px]"
        >
          {logo}
        </Link>

        {/* Right actions */}
        <div className="ml-auto flex items-center gap-3 sm:gap-5 lg:gap-7">
          <span className="hidden text-[10px] text-[#77736d] sm:block">
            {language}
          </span>

          <Link
            href={searchLink}
            aria-label="Search"
            className="flex h-8 w-5 items-center justify-center"
          >
            <svg
              viewBox="0 0 24 24"
              width="17"
              height="17"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <circle cx="10.8" cy="10.8" r="6.8" />
              <path d="M16 16L21 21" />
            </svg>
          </Link>

          <Link
            href={accountLink}
            aria-label="Account"
            className="hidden h-8 w-5 items-center justify-center sm:flex"
          >
            <svg
              viewBox="0 0 24 24"
              width="17"
              height="17"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <circle cx="12" cy="7.5" r="3.5" />
              <path d="M5 21V18.5A7 7 0 0 1 19 18.5V21" />
            </svg>
          </Link>

          <Link
            href={cartLink}
            aria-label={`Shopping bag, ${cartCount} items`}
            className="flex items-center gap-2"
          >
            <svg
              viewBox="0 0 24 24"
              width="17"
              height="17"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <rect x="4" y="7" width="16" height="14" rx="1.5" />
              <path d="M9 9V6A3 3 0 0 1 15 6V9" />
            </svg>

            <span className="hidden text-[10px] sm:inline">({cartCount})</span>
          </Link>
        </div>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav className="absolute left-0 top-full flex w-full flex-col border-t border-[#e8e4dd] bg-[#f7f5f1] px-6 py-4 shadow-sm md:hidden">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={`border-b border-[#e8e4dd] py-4 text-xs last:border-0 ${
                  active ? "font-medium text-[#292923]" : "text-[#77736d]"
                }`}
              >
                {link.label}

                {active && (
                  <span className="ml-2 inline-block h-1 w-1 rounded-full bg-[#292923]" />
                )}
              </Link>
            );
          })}

          <Link
            href={accountLink}
            onClick={() => setMenuOpen(false)}
            className="py-4 text-xs text-[#555149]"
          >
            My Account
          </Link>

          <span className="py-2 text-[10px] text-[#77736d]">{language}</span>
        </nav>
      )}
    </header>
  );
}

export default function Header(props: HeaderProps) {
  return (
    <Suspense
      fallback={
        <header
          aria-hidden="true"
          className="h-18 w-full border-b border-[#d3d3d3] bg-[#f7f5f1]"
        />
      }
    >
      <HeaderContent {...props} />
    </Suspense>
  );
}
