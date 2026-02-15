"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useTheme } from "../../context/ThemeContext";

export default function MarketplaceDemoNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();
  const isDark = theme === "dark";

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!mounted) {
    return (
      <nav className="fixed z-50 top-0 left-0 right-0 w-full md:top-6 md:left-1/2 md:-translate-x-1/2 md:w-[95%] md:max-w-6xl">
        <div className="relative flex px-6 py-3 items-center justify-between border transition-all duration-500 shadow-2xl bg-white/85 backdrop-blur-xl border-gray-200/50 shadow-gray-200/50 md:rounded-full">
          <Link href="/" className="flex items-center justify-center h-14">
            {/* Mobile Logo */}
            <Image
              src="/S-Logo.png"
              alt="WarungHub"
              width={45}
              height={45}
              className="h-[45px] w-auto object-contain md:hidden"
              priority
            />
            {/* Desktop Logo */}
            <Image
              src="/F-Logo.png"
              alt="WarungHub"
              width={150}
              height={60}
              className="h-[60px] w-auto object-contain hidden md:block"
              priority
            />
          </Link>
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
    <nav className="fixed z-50 top-0 left-0 right-0 w-full md:top-6 md:left-1/2 md:-translate-x-1/2 md:w-[95%] md:max-w-6xl">
      <div
        className={`relative flex px-6 py-3 items-center justify-between border transition-all duration-500 shadow-2xl md:rounded-full ${
          isDark
            ? "bg-neutral-900/95 backdrop-blur-md border-neutral-700/50 shadow-neutral-900/50"
            : "bg-white/85 backdrop-blur-xl border-gray-200/50 shadow-gray-200/50"
        }`}
      >
        <Link href="/" className="flex items-center justify-center h-14 flex-shrink-0">
          {/* Mobile Logo */}
          <Image
            src={isDark ? "/W-S-Logo.png" : "/S-Logo.png"}
            alt="WarungHub"
            width={45}
            height={45}
            className="h-[45px] w-auto object-contain transition-opacity duration-500 md:hidden"
            priority
          />
          {/* Desktop Logo */}
          <Image
            src={isDark ? "/W-F-Logo.png" : "/F-Logo.png"}
            alt="WarungHub"
            width={150}
            height={60}
            className="h-[60px] w-auto object-contain transition-opacity duration-500 hidden md:block"
            priority
          />
        </Link>

        {/* Search Bar */}
        <div className="flex-1 min-w-0 mx-3 sm:mx-6">
          <div
            className={`flex items-center gap-2 sm:gap-3 rounded-full border px-3 sm:px-4 py-2 transition-all duration-300 ${
              isDark
                ? "border-neutral-700 bg-neutral-800/50 focus-within:border-[#4A7043]"
                : "border-gray-200 bg-gray-50 focus-within:border-[#4A7043]"
            }`}
          >
            <Icon
              icon="solar:magnifer-linear"
              className={`shrink-0 ${isDark ? "text-gray-500" : "text-gray-400"}`}
              width={18}
            />
            <input
              type="text"
              placeholder="Search products..."
              className={`bg-transparent outline-none w-full text-sm ${
                isDark
                  ? "text-gray-200 placeholder:text-gray-500"
                  : "text-slate-700 placeholder:text-gray-400"
              }`}
            />
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="hidden md:flex items-center gap-3">
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
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
