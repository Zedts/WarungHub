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
        className={`absolute left-6 top-6 z-[300] h-10 w-24 rounded-xl transition-colors duration-500 ${
          isDark ? "bg-neutral-800" : "bg-slate-200"
        }`}
      />

      {/* Theme Toggle Skeleton */}
      <div
        className={`absolute right-6 top-6 z-[300] h-12 w-12 rounded-full border transition-colors duration-500 ${
          isDark ? "bg-neutral-900/95 border-neutral-700/50" : "bg-white/85 border-gray-200/50"
        }`}
      />

      {/* Auth Container */}
      <div
        className={`auth-container ${isDark ? "dark" : ""}`}
      >
        {/* Toggle Capsule Skeleton */}
        <div className="absolute top-[30px] left-1/2 -translate-x-1/2 z-[200]">
          <div
            className={`h-[54px] w-[260px] rounded-[50px] transition-colors duration-500 ${
              isDark ? "bg-neutral-800" : "bg-slate-200"
            }`}
          />
        </div>

        {/* Left Form Section */}
        <div className="auth-form-container auth-sign-in-container">
          <div className="w-full max-w-sm flex flex-col items-center mt-8">
            {/* Logo + Brand */}
            <div className="mb-8 flex items-center gap-2">
              <div className={`w-10 h-10 rounded-xl ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
              <div className={`h-6 w-28 rounded-lg ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
            </div>

            {/* Title */}
            <div className={`h-8 w-48 rounded-lg mb-1 ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
            <div className={`h-4 w-52 rounded mb-8 ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />

            {/* Email Input */}
            <div className={`h-[52px] w-full rounded-[14px] mb-3 ${isDark ? "bg-neutral-800/50 border border-neutral-700" : "bg-[#f8fafc] border border-[#e2e8f0]"}`} />
            {/* Password Input */}
            <div className={`h-[52px] w-full rounded-[14px] mb-3 ${isDark ? "bg-neutral-800/50 border border-neutral-700" : "bg-[#f8fafc] border border-[#e2e8f0]"}`} />

            {/* Forgot Password */}
            <div className={`h-3 w-28 rounded mb-6 mx-auto ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />

            {/* Submit Button */}
            <div className="h-[52px] w-full rounded-xl bg-gradient-to-r from-[#4A7043]/30 to-[#5A7B9A]/30 mb-8" />

            {/* Divider */}
            <div className="relative w-full mb-6">
              <div className={`h-px w-full ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 ${isDark ? "bg-neutral-900" : "bg-white"}`}>
                <div className={`h-3 w-20 rounded ${isDark ? "bg-neutral-800" : "bg-slate-200"}`} />
              </div>
            </div>

            {/* Social Button */}
            <div className={`h-[46px] w-full rounded-[14px] ${isDark ? "bg-neutral-800/50 border border-neutral-700" : "border border-[#e2e8f0]"}`} />
          </div>
        </div>

        {/* Right Overlay Section */}
        <div className="auth-overlay-container">
          <div className="auth-overlay">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#4A7043]/90 to-[#5A7B9A]/80" />

            <div className="auth-overlay-panel auth-overlay-right">
              <div className="relative z-10 w-full max-w-xs space-y-6">
                {/* Glass Card */}
                <div className="auth-glass-card auth-floating p-4 flex items-center gap-3 w-56 mx-auto border-l border-white/40">
                  <div className="w-10 h-10 rounded-xl bg-white/15 shrink-0" />
                  <div className="space-y-1.5">
                    <div className="h-3 w-24 bg-white/20 rounded" />
                    <div className="h-2 w-20 bg-white/10 rounded" />
                  </div>
                </div>

                {/* Title */}
                <div className="h-8 w-52 bg-white/20 rounded-xl mx-auto" />
                {/* Description */}
                <div className="space-y-2">
                  <div className="h-3 w-full bg-white/10 rounded" />
                  <div className="h-3 w-5/6 bg-white/10 rounded mx-auto" />
                </div>

                {/* 2-col Info Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {[1, 2].map((i) => (
                    <div key={i} className="bg-white/10 p-4 rounded-2xl border border-white/10">
                      <div className="h-7 w-7 bg-white/15 rounded-lg mb-3" />
                      <div className="h-4 w-14 bg-white/15 rounded mb-1" />
                      <div className="h-2 w-20 bg-white/10 rounded" />
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="h-12 w-36 bg-white/20 rounded-xl mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
