"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Features", href: "#benefits" },
  { label: "Marketplace", href: "#marketplace" },
  { label: "How It Works", href: "#how-it-works" },
];

export default function LandingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b transition-all duration-300 border-gray-200/50">
      <div className="relative flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
        <a href="#" className="flex items-center justify-center h-24">
          <img
            src="/Full-Logo.png"
            alt="WarungHub"
            className="h-full w-auto object-contain"
          />
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[#4A7043] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login" className="text-sm font-medium text-[#4A7043]">
              Sign In
            </Link>
            <Link
              href="/login?mode=register"
              className="bg-gradient-to-r from-[#4A7043] to-[#5A7B9A] text-sm font-semibold px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-[#4A7043]/30 hover:-translate-y-0.5 transition-all duration-300 text-white"
            >
              Get Started
            </Link>
          </div>
          <button
            type="button"
            onClick={handleToggle}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-gray-600 shadow-sm transition hover:text-[#4A7043]"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-full rounded-full bg-current transition-transform duration-300 ${
                  isOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-full rounded-full bg-current transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-full rounded-full bg-current transition-transform duration-300 ${
                  isOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-full right-6 mt-3 w-56 rounded-2xl border border-gray-100 bg-white/95 shadow-xl backdrop-blur">
            <div className="flex flex-col p-4 text-sm font-medium text-gray-700">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleClose}
                  className="rounded-xl px-3 py-2 transition hover:bg-gray-50 hover:text-[#4A7043]"
                >
                  {item.label}
                </a>
              ))}
              <div className="my-2 h-px w-full bg-gray-200" />
              <Link
                href="/login"
                onClick={handleClose}
                className="rounded-xl px-3 py-2 text-[#4A7043] transition hover:bg-gray-50"
              >
                Sign In
              </Link>
              <Link
                href="/login?mode=register"
                onClick={handleClose}
                className="rounded-xl px-3 py-2 font-semibold text-white bg-gradient-to-r from-[#4A7043] to-[#5A7B9A] shadow-sm transition hover:shadow-md"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
