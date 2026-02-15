"use client";

import { useTheme } from "../../context/ThemeContext";

export default function LoginSkeleton() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen flex justify-center items-center overflow-x-hidden animate-pulse transition-colors duration-500 ${
        isDark ? "bg-neutral-900" : "bg-[#f1f5f9]"
      }`}
    >
      {/* Back Button Skeleton */}
      <div
        className={`absolute left-3 md:left-6 top-3 md:top-6 z-[300] h-9 md:h-10 w-20 md:w-24 rounded-lg md:rounded-xl transition-colors duration-500 ${
          isDark ? "bg-neutral-800" : "bg-slate-200"
        }`}
      />

      {/* Theme Toggle Skeleton */}
      <div
        className={`absolute right-3 md:right-6 top-3 md:top-6 z-[300] h-10 md:h-12 w-10 md:w-12 rounded-full border transition-colors duration-500 ${
          isDark ? "bg-neutral-900/95 border-neutral-700/50" : "bg-white/85 border-gray-200/50"
        }`}
      />

      {/* Auth Container */}
      <div
        className={`auth-container ${isDark ? "dark" : ""}`}
      >
        {/* Toggle Capsule Skeleton */}
        <div className="absolute top-[20px] md:top-[30px] left-1/2 -translate-x-1/2 z-[200]">
          <div
            className={`h-[48px] md:h-[54px] w-[240px] md:w-[260px] rounded-[50px] transition-colors duration-500 ${
              isDark ? "bg-neutral-800" : "bg-slate-200"
            }`}
          />
        </div>

        {/* Left Form Section */}
        <div className="auth-form-container auth-sign-in-container">
          <div className="w-full max-w-sm flex flex-col items-center mt-4 md:mt-8 px-4 md:px-0">
            {/* Logo + Brand */}
            <div className="mb-6 md:mb-8 flex items-center gap-2">
              <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
              <div className={`h-5 md:h-6 w-24 md:w-28 rounded-lg ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
            </div>

            {/* Title */}
            <div className={`h-7 md:h-8 w-40 md:w-48 rounded-lg mb-1 ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
            <div className={`h-3 md:h-4 w-44 md:w-52 rounded mb-6 md:mb-8 ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />

            {/* Email Input */}
            <div className={`h-[48px] md:h-[52px] w-full rounded-[12px] md:rounded-[14px] mb-3 ${isDark ? "bg-neutral-800/50 border border-neutral-700" : "bg-[#f8fafc] border border-[#e2e8f0]"}`} />
            {/* Password Input */}
            <div className={`h-[48px] md:h-[52px] w-full rounded-[12px] md:rounded-[14px] mb-3 ${isDark ? "bg-neutral-800/50 border border-neutral-700" : "bg-[#f8fafc] border border-[#e2e8f0]"}`} />

            {/* Forgot Password */}
            <div className={`h-3 w-24 md:w-28 rounded mb-5 md:mb-6 mx-auto ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />

            {/* Submit Button */}
            <div className="h-[48px] md:h-[52px] w-full rounded-lg md:rounded-xl bg-gradient-to-r from-[#4A7043]/30 to-[#5A7B9A]/30 mb-6 md:mb-8" />

            {/* Divider */}
            <div className="relative w-full mb-5 md:mb-6">
              <div className={`h-px w-full ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 md:px-3 ${isDark ? "bg-neutral-900" : "bg-white"}`}>
                <div className={`h-3 w-16 md:w-20 rounded ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
              </div>
            </div>

            {/* Social Button */}
            <div className={`h-[42px] md:h-[46px] w-full rounded-[12px] md:rounded-[14px] ${isDark ? "bg-neutral-800/50 border border-neutral-700" : "border border-[#e2e8f0]"}`} />
          </div>
        </div>

        {/* Right Overlay Section */}
        <div className="auth-overlay-container">
          <div className="auth-overlay">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#4A7043]/90 to-[#5A7B9A]/80" />

            <div className="auth-overlay-panel auth-overlay-right">
              <div className="relative z-10 w-full max-w-xs space-y-4 md:space-y-6 px-4 md:px-0">
                {/* Glass Card */}
                <div className="auth-glass-card auth-floating p-3 md:p-4 flex items-center gap-2 md:gap-3 w-48 md:w-56 mx-auto border-l border-white/40">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-white/15 shrink-0" />
                  <div className="space-y-1 md:space-y-1.5">
                    <div className="h-2.5 md:h-3 w-20 md:w-24 bg-white/20 rounded" />
                    <div className="h-2 w-16 md:w-20 bg-white/10 rounded" />
                  </div>
                </div>

                {/* Title */}
                <div className="h-7 md:h-8 w-44 md:w-52 bg-white/20 rounded-lg md:rounded-xl mx-auto" />
                {/* Description */}
                <div className="space-y-1.5 md:space-y-2">
                  <div className="h-2.5 md:h-3 w-full bg-white/10 rounded" />
                  <div className="h-2.5 md:h-3 w-5/6 bg-white/10 rounded mx-auto" />
                </div>

                {/* 2-col Info Grid */}
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  {[1, 2].map((i) => (
                    <div key={i} className="bg-white/10 p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/10">
                      <div className="h-6 md:h-7 w-6 md:w-7 bg-white/15 rounded-md md:rounded-lg mb-2 md:mb-3" />
                      <div className="h-3 md:h-4 w-12 md:w-14 bg-white/15 rounded mb-1" />
                      <div className="h-1.5 md:h-2 w-16 md:w-20 bg-white/10 rounded" />
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="h-10 md:h-12 w-32 md:w-36 bg-white/20 rounded-lg md:rounded-xl mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
