"use client";

import { useTheme } from "../../context/ThemeContext";

export default function DashboardSkeleton() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen flex transition-colors duration-500 ${
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

      {/* Sidebar Skeleton */}
      <div
        className={`w-64 min-h-screen border-r backdrop-blur-xl p-4 animate-pulse shrink-0 ${
          isDark ? "bg-neutral-900/80 border-neutral-700/50" : "bg-white/80 border-gray-200/50"
        }`}
      >
        {/* Back to Marketplace */}
        <div className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-6 ${isDark ? "bg-neutral-800/30" : "bg-gray-100/50"}`}>
          <div className={`h-5 w-5 rounded ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
          <div className={`h-4 w-24 rounded ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
        </div>

        {/* Menu Items */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className={`h-11 rounded-xl mb-2 ${
              i === 1
                ? "bg-gradient-to-r from-[#4A7043]/20 to-[#5A7B9A]/20"
                : isDark ? "bg-neutral-700/30" : "bg-gray-200/30"
            }`}
          />
        ))}

        {/* Settings */}
        <div className={`mt-4 pt-4 border-t ${isDark ? "border-neutral-700" : "border-gray-200"}`}>
          <div className={`h-11 rounded-xl ${isDark ? "bg-neutral-700/30" : "bg-gray-200/30"}`} />
        </div>

        {/* Profile & Logout at bottom */}
        <div className={`mt-auto pt-8 border-t ${isDark ? "border-neutral-700" : "border-gray-200"}`}>
          <div className={`p-3 rounded-xl mb-2 ${isDark ? "bg-neutral-800/50" : "bg-gray-50"}`}>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
              <div className="flex-1 space-y-2">
                <div className={`h-3 w-20 rounded ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
                <div className={`h-2 w-28 rounded ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
              </div>
            </div>
          </div>
          <div className={`h-11 rounded-xl ${isDark ? "bg-neutral-700/30" : "bg-gray-200/30"}`} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Navbar Skeleton */}
        <div
          className={`h-20 border-b backdrop-blur-xl px-6 flex items-center justify-between animate-pulse ${
            isDark ? "bg-neutral-900/80 border-neutral-700/50" : "bg-white/80 border-gray-200/50"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className={`h-10 w-32 rounded-xl ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
            <div className={`h-6 w-px ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
            <div className={`h-4 w-20 rounded ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
          </div>
          <div className="flex gap-2">
            {[1, 2].map((i) => (
              <div key={i} className={`h-9 w-9 rounded-full ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
            ))}
          </div>
        </div>

        <div className="p-8 animate-pulse">
          {/* KPIs — 4 columns like actual */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl border backdrop-blur-xl ${
                  isDark ? "bg-neutral-800/50 border-neutral-700" : "bg-white/80 border-gray-200"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`h-12 w-12 rounded-xl ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
                  <div className={`h-6 w-14 rounded-lg ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
                </div>
                <div className={`h-8 w-28 rounded-lg mb-1 ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
                <div className={`h-3 w-24 rounded ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
              </div>
            ))}
          </div>

          {/* Charts Row — 2/3 + 1/3 like actual */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Revenue Chart (col-span-2) */}
            <div
              className={`lg:col-span-2 p-6 rounded-2xl border backdrop-blur-xl ${
                isDark ? "bg-neutral-800/50 border-neutral-700" : "bg-white/80 border-gray-200"
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="space-y-2">
                  <div className={`h-5 w-40 rounded-lg ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
                  <div className={`h-3 w-56 rounded ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
                </div>
                <div className={`h-9 w-32 rounded-xl ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
              </div>
              <div className={`h-64 rounded-xl ${isDark ? "bg-neutral-700/30" : "bg-gray-100/60"}`} />
            </div>

            {/* Donut Chart */}
            <div
              className={`p-6 rounded-2xl border backdrop-blur-xl flex flex-col ${
                isDark ? "bg-neutral-800/50 border-neutral-700" : "bg-white/80 border-gray-200"
              }`}
            >
              <div className={`h-5 w-36 rounded-lg mb-6 ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
              <div className="flex-1 flex items-center justify-center">
                <div className={`w-48 h-48 rounded-full ${isDark ? "bg-neutral-700/50" : "bg-gray-200/80"}`} />
              </div>
              <div className="mt-6 space-y-2.5">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${isDark ? "bg-neutral-600" : "bg-gray-300"}`} />
                      <div className={`h-3 rounded ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} style={{ width: `${60 + i * 10}px` }} />
                    </div>
                    <div className={`h-3 w-8 rounded ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Products */}
          <div
            className={`p-6 rounded-2xl border backdrop-blur-xl mb-8 ${
              isDark ? "bg-neutral-800/50 border-neutral-700" : "bg-white/80 border-gray-200"
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <div className={`h-5 w-32 rounded-lg ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
              <div className={`h-4 w-16 rounded ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 p-4 rounded-xl ${
                    isDark ? "bg-neutral-700/20" : "bg-gray-50/50"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
                  <div className="flex-1 space-y-2">
                    <div className={`h-3 w-3/4 rounded ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
                    <div className={`h-2 w-1/2 rounded ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
                  </div>
                  <div className={`h-4 w-10 rounded ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Recent Orders Table */}
          <div
            className={`p-6 rounded-2xl border backdrop-blur-xl ${
              isDark ? "bg-neutral-800/50 border-neutral-700" : "bg-white/80 border-gray-200"
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <div className={`h-5 w-36 rounded-lg ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
              <div className={`h-4 w-16 rounded ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
            </div>
            {/* Table header */}
            <div className={`flex gap-4 py-3 px-4 border-b ${isDark ? "border-neutral-700" : "border-gray-200"}`}>
              {[60, 100, 80, 70, 70].map((w, i) => (
                <div key={i} className={`h-3 rounded ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} style={{ width: `${w}px` }} />
              ))}
            </div>
            {/* Table rows */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`flex items-center gap-4 py-4 px-4 border-b ${isDark ? "border-neutral-700/50" : "border-gray-100"}`}>
                <div className={`h-3 w-16 rounded ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
                <div className={`h-3 w-28 rounded ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
                <div className={`h-3 w-20 rounded ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
                <div className={`h-5 w-20 rounded-full ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
                <div className={`h-3 w-20 rounded ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
