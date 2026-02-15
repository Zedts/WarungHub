"use client";

import { useTheme } from "../../context/ThemeContext";

export default function MarketplaceSkeleton() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDark ? "bg-neutral-900" : "bg-[#f1f5f9]"
      }`}
    >
      {/* Background */}
      <div
        className={`fixed top-0 w-full h-screen -z-10 saturate-200 brightness-105 scale-110 blur-lg bg-cover bg-center transition-opacity duration-500 ${
          isDark ? "invert opacity-25" : "invert-0 opacity-35"
        }`}
        style={{
          backgroundImage: "url(/Background/BG-After.jpg)",
          maskImage:
            "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
        }}
      />

      {/* Navbar Skeleton */}
      <div className="fixed top-3 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[96%] md:w-[95%] max-w-6xl">
        <div
          className={`h-14 md:h-16 rounded-full backdrop-blur-xl border animate-pulse ${
            isDark
              ? "bg-neutral-900/60 border-neutral-700/50"
              : "bg-white/60 border-gray-200/50"
          }`}
        >
          <div className="flex items-center justify-between h-full px-4 md:px-6">
            <div className={`h-7 w-20 md:h-8 md:w-28 rounded-lg ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
            <div className={`hidden sm:block h-8 md:h-9 flex-1 max-w-xs mx-3 md:mx-4 rounded-full ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
            <div className="flex gap-1.5 md:gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`h-8 w-8 md:h-9 md:w-9 rounded-full ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-3 md:px-4 pt-24 md:pt-28 pb-12 md:pb-20 space-y-6 md:space-y-10">
        {/* Hero Banner Skeleton */}
        <div
          className={`h-[200px] md:h-[280px] lg:h-[360px] rounded-2xl md:rounded-3xl animate-pulse ${
            isDark ? "bg-neutral-800/50" : "bg-gray-200/80"
          }`}
        >
          <div className="h-full flex flex-col justify-center px-4 md:px-8 lg:px-16 max-w-2xl space-y-2 md:space-y-4">
            <div className={`h-4 md:h-5 w-16 md:w-20 rounded-full ${isDark ? "bg-neutral-700" : "bg-gray-300"}`} />
            <div className={`h-7 md:h-10 w-48 md:w-72 rounded-lg md:rounded-xl ${isDark ? "bg-neutral-700" : "bg-gray-300"}`} />
            <div className={`h-3 md:h-4 w-40 md:w-64 rounded-lg ${isDark ? "bg-neutral-700" : "bg-gray-300"}`} />
            <div className={`h-8 md:h-10 w-28 md:w-36 rounded-full ${isDark ? "bg-neutral-700" : "bg-gray-300"}`} />
          </div>
        </div>

        {/* Flash Sale Skeleton */}
        <div className="bg-gradient-to-r from-[#4A7043]/30 to-[#5A7B9A]/30 rounded-xl md:rounded-2xl p-4 md:p-6 animate-pulse">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-4 mb-4 md:mb-6">
            <div className={`h-5 md:h-6 w-28 md:w-32 rounded-lg ${isDark ? "bg-white/10" : "bg-white/40"}`} />
            <div className="flex gap-1.5 md:gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-5 md:h-6 w-7 md:w-8 rounded bg-white/20" />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`rounded-lg md:rounded-xl p-2.5 md:p-3 ${isDark ? "bg-neutral-900/50" : "bg-white/60"}`}>
                <div className={`h-28 md:h-32 rounded-lg mb-2 md:mb-3 ${isDark ? "bg-neutral-700/50" : "bg-gray-200"}`} />
                <div className="space-y-1.5 md:space-y-2">
                  <div className={`h-3 md:h-4 rounded w-4/5 ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
                  <div className={`h-2.5 md:h-3 rounded w-1/2 ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
                  <div className={`h-1 md:h-1.5 rounded-full w-full ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Title + Categories */}
        <section>
          <div className={`h-5 md:h-6 w-44 md:w-52 rounded-lg mb-4 md:mb-6 animate-pulse ${isDark ? "bg-neutral-800/50" : "bg-gray-200/80"}`} />

          <div className="flex gap-2 md:gap-3 mb-6 md:mb-8 overflow-x-auto pb-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className={`h-9 md:h-10 rounded-full animate-pulse shrink-0 ${
                  isDark ? "bg-neutral-800/50" : "bg-white/50"
                }`}
                style={{ width: `${70 + i * 10}px` }}
              />
            ))}
          </div>

          {/* Product Grid — 5 columns like actual page */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <div
                key={i}
                className={`rounded-lg md:rounded-xl border backdrop-blur-xl animate-pulse p-2.5 md:p-3 ${
                  isDark ? "bg-neutral-800/50 border-neutral-700/50" : "bg-white/70 border-gray-200/50"
                }`}
              >
                <div className={`h-32 md:h-40 rounded-lg mb-2 md:mb-3 ${isDark ? "bg-neutral-700/50" : "bg-gray-200/80"}`} />
                <div className="space-y-1.5 md:space-y-2">
                  <div className={`h-3 md:h-4 rounded w-4/5 ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
                  <div className={`h-3 md:h-4 rounded w-1/2 ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
                  <div className={`h-2.5 md:h-3 rounded w-2/3 ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
                  <div className={`h-2.5 md:h-3 rounded w-1/3 ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
