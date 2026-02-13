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
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-2xl">
            <div
              className={`h-8 w-48 rounded-full transition-colors duration-500 ${
                isDark ? "bg-neutral-800" : "bg-slate-200"
              }`}
            />
            <div
              className={`h-16 w-full rounded-2xl transition-colors duration-500 ${
                isDark ? "bg-neutral-800" : "bg-slate-200"
              }`}
            />
            <div
              className={`h-16 w-4/5 rounded-2xl transition-colors duration-500 ${
                isDark ? "bg-neutral-800" : "bg-slate-200"
              }`}
            />
            <div className="space-y-2">
              <div
                className={`h-4 w-full rounded transition-colors duration-500 ${
                  isDark ? "bg-neutral-800" : "bg-slate-200"
                }`}
              />
              <div
                className={`h-4 w-3/4 rounded transition-colors duration-500 ${
                  isDark ? "bg-neutral-800" : "bg-slate-200"
                }`}
              />
            </div>
            <div className="flex gap-4">
              <div
                className={`h-12 w-40 rounded-xl transition-colors duration-500 ${
                  isDark ? "bg-neutral-800" : "bg-slate-200"
                }`}
              />
              <div
                className={`h-12 w-32 rounded-xl transition-colors duration-500 ${
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
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <div
              className={`h-10 w-96 rounded-xl mx-auto transition-colors duration-500 ${
                isDark ? "bg-neutral-800" : "bg-slate-200"
              }`}
            />
            <div
              className={`h-4 w-64 rounded mx-auto transition-colors duration-500 ${
                isDark ? "bg-neutral-800" : "bg-slate-200"
              }`}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`p-8 rounded-2xl border space-y-4 transition-colors duration-500 ${
                  isDark
                    ? "bg-neutral-800/50 border-neutral-700"
                    : "bg-white border-gray-100"
                }`}
              >
                <div
                  className={`h-14 w-14 rounded-2xl transition-colors duration-500 ${
                    isDark ? "bg-neutral-900/50" : "bg-slate-200"
                  }`}
                />
                <div
                  className={`h-6 w-48 rounded transition-colors duration-500 ${
                    isDark ? "bg-neutral-900/50" : "bg-slate-200"
                  }`}
                />
                <div className="space-y-2">
                  <div
                    className={`h-3 w-full rounded transition-colors duration-500 ${
                      isDark ? "bg-neutral-900/50" : "bg-slate-200"
                    }`}
                  />
                  <div
                    className={`h-3 w-5/6 rounded transition-colors duration-500 ${
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
        className={`py-24 border-y transition-colors duration-500 ${
          isDark
            ? "bg-neutral-900/30 border-neutral-800"
            : "bg-gray-50/30 border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-2">
              <div className={`h-8 w-64 rounded-xl ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
              <div className={`h-4 w-48 rounded ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
            </div>
            <div className={`h-6 w-20 rounded ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`p-4 rounded-2xl border space-y-4 transition-colors duration-500 ${
                  isDark ? "bg-neutral-800/50 border-neutral-700" : "bg-white border-gray-100"
                }`}
              >
                <div className={`h-60 w-full rounded-xl ${isDark ? "bg-neutral-900/50" : "bg-slate-200"}`} />
                <div className={`h-4 w-20 rounded ${isDark ? "bg-neutral-900/50" : "bg-slate-200"}`} />
                <div className={`h-5 w-32 rounded ${isDark ? "bg-neutral-900/50" : "bg-slate-200"}`} />
                <div className={`h-6 w-24 rounded-lg ${isDark ? "bg-neutral-900/50" : "bg-slate-200"}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section Skeleton */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-2">
            <div className={`h-8 w-56 rounded-xl mx-auto ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
            <div className={`h-4 w-64 rounded mx-auto ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-4">
                <div className={`h-16 w-16 rounded-2xl ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
                <div className={`h-5 w-32 rounded ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
                <div className={`h-3 w-full rounded ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
                <div className={`h-3 w-4/5 rounded ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Globe Stats Section Skeleton */}
      <div
        className={`h-[500px] md:h-[600px] bg-gradient-to-b relative overflow-hidden transition-colors duration-500 ${
          isDark
            ? "from-neutral-900 via-neutral-900/20 to-neutral-900/60"
            : "from-white via-gray-50/20 to-gray-50/60"
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`h-[400px] w-[400px] rounded-full ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 px-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl border space-y-2 backdrop-blur-md ${
                  isDark ? "bg-neutral-800/80 border-neutral-700/50" : "bg-white/80 border-gray-200/50"
                }`}
              >
                <div className={`h-10 w-24 rounded mx-auto ${isDark ? "bg-neutral-700" : "bg-slate-200"}`} />
                <div className={`h-4 w-full rounded ${isDark ? "bg-neutral-700" : "bg-slate-200"}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section Skeleton */}
      <div
        className={`py-32 bg-gradient-to-b transition-colors duration-500 ${
          isDark
            ? "from-neutral-900/60 via-[#4A7043]/10 to-[#5A7B9A]/10"
            : "from-gray-50/60 via-[#4A7043]/5 to-[#5A7B9A]/5"
        }`}
      >
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <div className={`h-12 w-96 rounded-2xl mx-auto ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
          <div className={`h-6 w-[500px] rounded-xl mx-auto ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
          <div className="flex justify-center gap-4">
            <div className={`h-12 w-36 rounded-xl ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
            <div className={`h-12 w-40 rounded-xl ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
          </div>
        </div>
      </div>

      {/* Footer Skeleton */}
      <div
        className={`border-t pt-16 pb-8 transition-colors duration-500 ${
          isDark
            ? "bg-neutral-900/50 border-neutral-800"
            : "bg-white border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-4">
                <div className={`h-6 w-32 rounded ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
                {[1, 2, 3, 4].map((j) => (
                  <div key={j} className={`h-4 w-24 rounded ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
                ))}
              </div>
            ))}
          </div>
          <div className={`border-t pt-8 ${isDark ? "border-neutral-800" : "border-gray-100"}`}>
            <div className={`h-4 w-48 rounded mx-auto ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
