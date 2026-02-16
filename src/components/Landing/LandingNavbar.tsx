"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";

const NAV_ITEMS = [
  { label: "Features", href: "#benefits" },
  { label: "Marketplace", href: "#marketplace" },
  { label: "How It Works", href: "#how-it-works" },
];

export default function LandingNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();
  const { isAuthenticated } = useAuth();
  const isDark = theme === "dark";

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!mounted) {
    return (
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
        <div className="relative flex h-16 px-6 items-center justify-between rounded-full border transition-all duration-500 shadow-lg bg-white/85 backdrop-blur-xl border-gray-200/50 shadow-gray-200/50">
          <a href="#" className="flex items-center justify-center h-16">
            {/* Mobile Logo */}
            <Image
              src="/S-Logo.png"
              alt="WarungHub"
              width={50}
              height={50}
              className="h-[50px] w-auto object-contain md:hidden"
              priority
            />
            {/* Desktop Logo */}
            <Image
              src="/F-Logo.png"
              alt="WarungHub"
              width={188}
              height={75}
              className="h-[75px] w-auto object-contain hidden md:block"
              priority
            />
          </a>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3 opacity-0">
              <div className="h-10 w-20 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div
        className={`relative flex h-16 px-6 items-center justify-between rounded-full border transition-all duration-500 shadow-lg ${
          isDark
            ? "bg-neutral-900/95 backdrop-blur-md border-neutral-700/50 shadow-neutral-900/50"
            : "bg-white/85 backdrop-blur-xl border-gray-200/50 shadow-gray-200/50"
        }`}
      >
        <a href="#" className="flex items-center justify-center h-16">
          {/* Mobile Logo */}
          <Image
            src={isDark ? "/W-S-Logo.png" : "/S-Logo.png"}
            alt="WarungHub"
            width={50}
            height={50}
            className="h-[50px] w-auto object-contain transition-opacity duration-500 md:hidden"
            priority
          />
          {/* Desktop Logo */}
          <Image
            src={isDark ? "/W-F-Logo.png" : "/F-Logo.png"}
            alt="WarungHub"
            width={188}
            height={75}
            className="h-[75px] w-auto object-contain transition-opacity duration-500 hidden md:block"
            priority
          />
        </a>

        <div
          className={`hidden md:flex items-center gap-8 text-sm font-medium transition-colors duration-500 ${
            isDark ? "text-gray-200" : "text-gray-600"
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`transition-colors duration-300 ${
                isDark ? "hover:text-white" : "hover:text-[#4A7043]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
            {isAuthenticated ? (
              <Link
                href="/marketplace"
                className="bg-gradient-to-r from-[#4A7043] to-[#5A7B9A] text-sm font-semibold px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-[#4A7043]/30 hover:-translate-y-0.5 transition-all duration-300 text-white flex items-center gap-2"
              >
                <Icon icon="solar:shop-2-bold" width={18} />
                Go to Market
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  className={`text-sm font-medium transition-colors duration-500 ${
                    isDark
                      ? "text-gray-200 hover:text-white"
                      : "text-[#4A7043] hover:text-[#5A7B9A]"
                  }`}
                >
                  Sign In
                </Link>
                <Link
                  href="/login?mode=register"
                  className="bg-gradient-to-r from-[#4A7043] to-[#5A7B9A] text-sm font-semibold px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-[#4A7043]/30 hover:-translate-y-0.5 transition-all duration-300 text-white"
                >
                  Get Started
                </Link>
              </>
            )}
            
            <div className={`h-8 w-px transition-colors duration-500 ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
            
            <button
              type="button"
              onClick={toggleTheme}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                isDark
                  ? "border-neutral-600 bg-neutral-800/50 hover:bg-neutral-700"
                  : "border-gray-200 bg-white/80 hover:bg-gray-50"
              }`}
              aria-label="Toggle theme"
            >
              <Icon
                icon={isDark ? "solar:sun-bold" : "solar:moon-bold"}
                width={20}
                className={isDark ? "text-white" : "text-black"}
              />
            </button>
          </div>

          <button
            type="button"
            onClick={handleToggle}
            className={`md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border shadow-sm transition-all duration-500 ${
              isDark
                ? "border-neutral-600 bg-neutral-800/80 text-gray-200 hover:text-white hover:bg-neutral-700"
                : "border-gray-200 bg-white/80 text-gray-600 hover:text-[#4A7043] hover:bg-gray-50"
            }`}
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

          {/* Divider - Mobile */}
          <div className={`md:hidden h-8 w-px transition-colors duration-500 ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />

          <button
            type="button"
            onClick={toggleTheme}
            className={`md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
              isDark
                ? "border-neutral-600 bg-neutral-800/80 hover:bg-neutral-700"
                : "border-gray-200 bg-white/80 hover:bg-gray-50"
            }`}
            aria-label="Toggle theme"
          >
            <Icon
              icon={isDark ? "solar:sun-bold" : "solar:moon-bold"}
              width={20}
              className={isDark ? "text-white" : "text-black"}
            />
          </button>
        </div>

        {isOpen && (
          <div
            className={`absolute top-full right-0 mt-3 w-56 rounded-2xl border shadow-xl backdrop-blur transition-all duration-500 ${
              isDark
                ? "bg-neutral-800/95 border-neutral-600/50"
                : "bg-white/95 border-gray-100"
            }`}
          >
            <div
              className={`flex flex-col p-4 text-sm font-medium transition-colors duration-500 ${
                isDark ? "text-gray-200" : "text-gray-700"
              }`}
            >
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleClose}
                  className={`rounded-xl px-3 py-2 transition ${
                    isDark
                      ? "hover:bg-neutral-700/50 hover:text-white"
                      : "hover:bg-gray-50 hover:text-[#4A7043]"
                  }`}
                >
                  {item.label}
                </a>
              ))}

              <div
                className={`my-2 h-px w-full transition-colors duration-500 ${
                  isDark ? "bg-neutral-600" : "bg-gray-200"
                }`}
              />
              {isAuthenticated ? (
                <Link
                  href="/marketplace"
                  onClick={handleClose}
                  className="rounded-xl px-3 py-2 font-semibold text-white bg-gradient-to-r from-[#4A7043] to-[#5A7B9A] shadow-sm transition hover:shadow-md flex items-center gap-2"
                >
                  <Icon icon="solar:shop-2-bold" width={18} />
                  Go to Market
                </Link>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={handleClose}
                    className={`rounded-xl px-3 py-2 transition ${
                      isDark
                        ? "text-gray-200 hover:bg-neutral-700/50 hover:text-white"
                        : "text-[#4A7043] hover:bg-gray-50"
                    }`}
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
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

