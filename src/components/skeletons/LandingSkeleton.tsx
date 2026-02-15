"use client";

import { useTheme } from "../../context/ThemeContext";

export default function LandingSkeleton() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen animate-pulse transition-colors duration-500 ${
        isDark ? "bg-neutral-900" : "bg-[#FAFAFA]"
      }`}
    >
      {/* Navbar Skeleton */}
      <div
        className={`fixed top-0 w-full z-50 backdrop-blur-sm border-b transition-colors duration-500 ${
          isDark
            ? "bg-neutral-900/80 border-neutral-800"
            : "bg-white/80 border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div
            className={`h-8 w-32 rounded-lg transition-colors duration-500 ${
              isDark ? "bg-neutral-800" : "bg-slate-200"
            }`}
          />
          <div className="hidden md:flex gap-8">
            <div
              className={`h-4 w-16 rounded transition-colors duration-500 ${
                isDark ? "bg-neutral-800" : "bg-slate-200"
              }`}
            />
            <div
              className={`h-4 w-16 rounded transition-colors duration-500 ${
                isDark ? "bg-neutral-800" : "bg-slate-200"
              }`}
            />
            <div
              className={`h-4 w-20 rounded transition-colors duration-500 ${
                isDark ? "bg-neutral-800" : "bg-slate-200"
              }`}
            />
            <div
              className={`h-4 w-24 rounded transition-colors duration-500 ${
                isDark ? "bg-neutral-800" : "bg-slate-200"
              }`}
            />
          </div>
          <div className="flex gap-3">
            <div
              className={`hidden md:block h-10 w-24 rounded-xl transition-colors duration-500 ${
                isDark ? "bg-neutral-800" : "bg-slate-200"
              }`}
            />
            <div
              className={`h-10 w-28 rounded-xl transition-colors duration-500 ${
                isDark ? "bg-neutral-800" : "bg-slate-200"
              }`}
            />
          </div>
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <div className="pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6 max-w-2xl">
            <div
              className={`h-6 md:h-8 w-40 md:w-48 rounded-full transition-colors duration-500 ${
                isDark ? "bg-neutral-800" : "bg-slate-200"
              }`}
            />
            <div
              className={`h-12 md:h-16 w-full rounded-xl md:rounded-2xl transition-colors duration-500 ${
                isDark ? "bg-neutral-800" : "bg-slate-200"
              }`}
            />
            <div
              className={`h-12 md:h-16 w-4/5 rounded-xl md:rounded-2xl transition-colors duration-500 ${
                isDark ? "bg-neutral-800" : "bg-slate-200"
              }`}
            />
            <div className="space-y-2">
              <div
                className={`h-3 md:h-4 w-full rounded transition-colors duration-500 ${
                  isDark ? "bg-neutral-800" : "bg-slate-200"
                }`}
              />
              <div
                className={`h-3 md:h-4 w-3/4 rounded transition-colors duration-500 ${
                  isDark ? "bg-neutral-800" : "bg-slate-200"
                }`}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <div
                className={`h-11 md:h-12 w-full sm:w-40 rounded-xl transition-colors duration-500 ${
                  isDark ? "bg-neutral-800" : "bg-slate-200"
                }`}
              />
              <div
                className={`h-11 md:h-12 w-full sm:w-32 rounded-xl transition-colors duration-500 ${
                  isDark ? "bg-neutral-800" : "bg-slate-200"
                }`}
              />
            </div>
          </div>
          <div
            className={`hidden lg:block h-[500px] rounded-2xl transition-colors duration-500 ${
              isDark ? "bg-neutral-800" : "bg-slate-200"
            }`}
          />
        </div>
      </div>

      {/* Benefits Section Skeleton */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4">
            <div
              className={`h-8 md:h-10 w-64 md:w-96 rounded-xl mx-auto transition-colors duration-500 ${
                isDark ? "bg-neutral-800" : "bg-slate-200"
              }`}
            />
            <div
              className={`h-3 md:h-4 w-48 md:w-64 rounded mx-auto transition-colors duration-500 ${
                isDark ? "bg-neutral-800" : "bg-slate-200"
              }`}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`p-6 md:p-8 rounded-xl md:rounded-2xl border space-y-3 md:space-y-4 transition-colors duration-500 ${
                  isDark
                    ? "bg-neutral-800/50 border-neutral-700"
                    : "bg-white border-gray-100"
                }`}
              >
                <div
                  className={`h-12 md:h-14 w-12 md:w-14 rounded-xl md:rounded-2xl transition-colors duration-500 ${
                    isDark ? "bg-neutral-900/50" : "bg-slate-200"
                  }`}
                />
                <div
                  className={`h-5 md:h-6 w-40 md:w-48 rounded transition-colors duration-500 ${
                    isDark ? "bg-neutral-900/50" : "bg-slate-200"
                  }`}
                />
                <div className="space-y-2">
                  <div
                    className={`h-2.5 md:h-3 w-full rounded transition-colors duration-500 ${
                      isDark ? "bg-neutral-900/50" : "bg-slate-200"
                    }`}
                  />
                  <div
                    className={`h-2.5 md:h-3 w-5/6 rounded transition-colors duration-500 ${
                      isDark ? "bg-neutral-900/50" : "bg-slate-200"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marketplace Section Skeleton */}
      <div
        className={`py-16 md:py-24 border-y transition-colors duration-500 ${
          isDark
            ? "bg-neutral-900/30 border-neutral-800"
            : "bg-gray-50/30 border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8 md:mb-12">
            <div className="space-y-2">
              <div className={`h-7 md:h-8 w-52 md:w-64 rounded-xl ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
              <div className={`h-3 md:h-4 w-40 md:w-48 rounded ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
            </div>
            <div className={`h-5 md:h-6 w-16 md:w-20 rounded ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`p-3 md:p-4 rounded-xl md:rounded-2xl border space-y-3 md:space-y-4 transition-colors duration-500 ${
                  isDark ? "bg-neutral-800/50 border-neutral-700" : "bg-white border-gray-100"
                }`}
              >
                <div className={`h-48 md:h-60 w-full rounded-lg md:rounded-xl ${isDark ? "bg-neutral-900/50" : "bg-slate-200"}`} />
                <div className={`h-3 md:h-4 w-16 md:w-20 rounded ${isDark ? "bg-neutral-900/50" : "bg-slate-200"}`} />
                <div className={`h-4 md:h-5 w-28 md:w-32 rounded ${isDark ? "bg-neutral-900/50" : "bg-slate-200"}`} />
                <div className={`h-5 md:h-6 w-20 md:w-24 rounded-lg ${isDark ? "bg-neutral-900/50" : "bg-slate-200"}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section Skeleton */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16 space-y-2">
            <div className={`h-7 md:h-8 w-48 md:w-56 rounded-xl mx-auto ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
            <div className={`h-3 md:h-4 w-52 md:w-64 rounded mx-auto ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-3 md:space-y-4">
                <div className={`h-14 md:h-16 w-14 md:w-16 rounded-xl md:rounded-2xl ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
                <div className={`h-4 md:h-5 w-28 md:w-32 rounded ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
                <div className={`h-2.5 md:h-3 w-full rounded ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
                <div className={`h-2.5 md:h-3 w-4/5 rounded ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Globe Stats Section Skeleton */}
      <div
        className={`h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-to-b relative overflow-hidden transition-colors duration-500 ${
          isDark
            ? "from-neutral-900 via-neutral-900/20 to-neutral-900/60"
            : "from-white via-gray-50/20 to-gray-50/60"
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`h-[280px] w-[280px] md:h-[400px] md:w-[400px] rounded-full ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8 px-4 md:px-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`p-4 md:p-6 rounded-xl md:rounded-2xl border space-y-2 backdrop-blur-md ${
                  isDark ? "bg-neutral-800/80 border-neutral-700/50" : "bg-white/80 border-gray-200/50"
                }`}
              >
                <div className={`h-8 md:h-10 w-20 md:w-24 rounded mx-auto ${isDark ? "bg-neutral-700" : "bg-slate-200"}`} />
                <div className={`h-3 md:h-4 w-full rounded ${isDark ? "bg-neutral-700" : "bg-slate-200"}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section Skeleton */}
      <div
        className={`py-20 md:py-32 bg-gradient-to-b transition-colors duration-500 ${
          isDark
            ? "from-neutral-900/60 via-[#4A7043]/10 to-[#5A7B9A]/10"
            : "from-gray-50/60 via-[#4A7043]/5 to-[#5A7B9A]/5"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center space-y-6 md:space-y-8">
          <div className={`h-10 md:h-12 w-72 md:w-96 max-w-full rounded-xl md:rounded-2xl mx-auto ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
          <div className={`h-5 md:h-6 w-80 md:w-[500px] max-w-full rounded-lg md:rounded-xl mx-auto ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <div className={`h-11 md:h-12 w-full sm:w-36 rounded-xl ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
            <div className={`h-11 md:h-12 w-full sm:w-40 rounded-xl ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
          </div>
        </div>
      </div>

      {/* Footer Skeleton */}
      <div
        className={`border-t pt-12 md:pt-16 pb-6 md:pb-8 transition-colors duration-500 ${
          isDark
            ? "bg-neutral-900/50 border-neutral-800"
            : "bg-white border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-3 md:space-y-4">
                <div className={`h-5 md:h-6 w-28 md:w-32 rounded ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
                {[1, 2, 3, 4].map((j) => (
                  <div key={j} className={`h-3 md:h-4 w-20 md:w-24 rounded ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
                ))}
              </div>
            ))}
          </div>
          <div className={`border-t pt-6 md:pt-8 ${isDark ? "border-neutral-800" : "border-gray-100"}`}>
            <div className={`h-3 md:h-4 w-40 md:w-48 rounded mx-auto ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
