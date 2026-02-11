"use client";

import { useTheme } from "../../context/ThemeContext";

export default function LoginSkeleton() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen flex justify-center items-center animate-pulse transition-colors duration-500 ${
        isDark ? "bg-neutral-900" : "bg-[#f1f5f9]"
      }`}
    >
      {/* Background Blur */}
      <div
        className={`fixed inset-0 -z-10 blur-xl opacity-40 transition-colors duration-500 ${
          isDark ? "bg-neutral-950" : "bg-slate-200"
        }`}
      />

      {/* Back Button Skeleton */}
      <div
        className={`absolute left-6 top-6 z-[300] h-10 w-24 rounded-xl transition-colors duration-500 ${
          isDark ? "bg-neutral-800" : "bg-slate-200"
        }`}
      />

      {/* Auth Container Skeleton */}
      <div
        className={`relative w-full max-w-[1100px] min-h-[750px] rounded-[30px] shadow-2xl overflow-hidden mx-6 transition-colors duration-500 ${
          isDark ? "bg-neutral-900" : "bg-white"
        }`}
      >
        {/* Toggle Capsule */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-50">
          <div
            className={`h-12 w-64 rounded-full transition-colors duration-500 ${
              isDark ? "bg-neutral-800" : "bg-slate-200"
            }`}
          />
        </div>

        {/* Left Form Section */}
        <div className="absolute top-0 left-0 w-1/2 h-full flex flex-col items-center justify-center p-12">
          <div className="space-y-6 w-full max-w-sm">
            <div className="flex flex-col items-center space-y-3 mb-8">
              <div
                className={`h-14 w-14 rounded-2xl transition-colors duration-500 ${
                  isDark ? "bg-neutral-800" : "bg-slate-200"
                }`}
              />
              <div
                className={`h-7 w-48 rounded-lg transition-colors duration-500 ${
                  isDark ? "bg-neutral-800" : "bg-slate-200"
                }`}
              />
              <div
                className={`h-4 w-64 rounded transition-colors duration-500 ${
                  isDark ? "bg-neutral-800" : "bg-slate-200"
                }`}
              />
            </div>

            <div className="space-y-4">
              <div
                className={`h-12 w-full rounded-xl transition-colors duration-500 ${
                  isDark ? "bg-neutral-800" : "bg-slate-200"
                }`}
              />
              <div
                className={`h-12 w-full rounded-xl transition-colors duration-500 ${
                  isDark ? "bg-neutral-800" : "bg-slate-200"
                }`}
              />
              <div className="flex items-center gap-2">
                <div
                  className={`h-4 w-4 rounded transition-colors duration-500 ${
                    isDark ? "bg-neutral-800" : "bg-slate-200"
                  }`}
                />
                <div
                  className={`h-3 w-full rounded transition-colors duration-500 ${
                    isDark ? "bg-neutral-800" : "bg-slate-200"
                  }`}
                />
              </div>
              <div
                className={`h-12 w-full rounded-xl transition-colors duration-500 ${
                  isDark ? "bg-neutral-800" : "bg-slate-200"
                }`}
              />
            </div>

            <div className="relative">
              <div
                className={`h-px w-full transition-colors duration-500 ${
                  isDark ? "bg-neutral-800" : "bg-slate-200"
                }`}
              />
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-20 flex items-center justify-center transition-colors duration-500 ${
                  isDark ? "bg-neutral-900" : "bg-white"
                }`}
              >
                <div
                  className={`h-3 w-16 rounded transition-colors duration-500 ${
                    isDark ? "bg-neutral-800" : "bg-slate-200"
                  }`}
                />
              </div>
            </div>

            <div
              className={`h-11 w-full rounded-xl transition-colors duration-500 ${
                isDark ? "bg-neutral-800" : "bg-slate-200"
              }`}
            />
          </div>
        </div>

        {/* Right Overlay Section */}
        <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden">
          <div className="relative w-full h-full bg-gradient-to-br from-[#4A7043] to-[#5A7B9A] p-12 flex flex-col justify-center items-center text-center">
            <div className="space-y-6 max-w-md">
              <div className="h-10 w-64 bg-white/20 rounded-xl mx-auto" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-white/10 rounded" />
                <div className="h-4 w-5/6 bg-white/10 rounded mx-auto" />
                <div className="h-4 w-4/6 bg-white/10 rounded mx-auto" />
              </div>
              <div className="grid grid-cols-3 gap-4 pt-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex flex-col items-center space-y-2">
                    <div className="h-10 w-10 bg-white/10 rounded-xl" />
                    <div className="h-3 w-16 bg-white/10 rounded" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View - Full Form */}
      <div className="md:hidden w-full h-full flex items-center justify-center p-6">
        <div className="w-full max-w-sm space-y-6 bg-white rounded-3xl p-8 shadow-2xl">
          <div className="flex flex-col items-center space-y-3 mb-8">
            <div className="h-14 w-14 bg-slate-200 rounded-2xl" />
            <div className="h-7 w-48 bg-slate-200 rounded-lg" />
            <div className="h-4 w-64 bg-slate-200 rounded" />
          </div>

          <div className="space-y-4">
            <div className="h-12 w-full bg-slate-200 rounded-xl" />
            <div className="h-12 w-full bg-slate-200 rounded-xl" />
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 bg-slate-200 rounded" />
              <div className="h-3 w-full bg-slate-200 rounded" />
            </div>
            <div className="h-12 w-full bg-slate-200 rounded-xl" />
          </div>

          <div className="relative">
            <div className="h-px w-full bg-slate-200" />
          </div>

          <div className="h-11 w-full bg-slate-200 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
