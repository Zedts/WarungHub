"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";

export default function MarketplaceNavbar() {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const { logout } = useAuth();
  const isDark = theme === "dark";
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    setTimeout(() => router.push("/login"), 500);
  };

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl rounded-full border shadow-2xl backdrop-blur-xl transition-all duration-500 ${
        isDark
          ? "bg-neutral-900/95 border-neutral-700/50 shadow-neutral-900/50"
          : "bg-white/95 border-white/50 shadow-gray-200/50"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center justify-center h-14 shrink-0">
          <Image
            src={isDark ? "/W-F-Logo.png" : "/Full-Logo.png"}
            alt="WarungHub"
            width={150}
            height={60}
            className="h-[60px] w-auto object-contain transition-opacity duration-500"
            priority
          />
        </div>

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

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Cart */}
          <button
            onClick={() => toast.info("Coming Soon")}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 relative ${
              isDark ? "hover:bg-neutral-800" : "hover:bg-gray-100"
            }`}
            aria-label="Shopping cart"
          >
            <Icon
              icon="solar:cart-large-2-bold"
              width={20}
              className={isDark ? "text-white" : "text-slate-800"}
            />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-[#4A7043] to-[#5A7B9A] text-white text-xs rounded-full flex items-center justify-center font-bold">
              0
            </span>
          </button>

          {/* Profile */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 ${
                isDark ? "hover:bg-neutral-800" : "hover:bg-gray-100"
              }`}
              aria-label="Profile menu"
            >
              <Icon
                icon="solar:user-circle-bold"
                width={24}
                className={isDark ? "text-white" : "text-slate-800"}
              />
            </button>

            {/* Profile Dropdown */}
            {showProfileMenu && (
              <div
                className={`absolute right-0 mt-2 w-48 rounded-2xl border shadow-xl backdrop-blur-xl transition-all duration-300 ${
                  isDark
                    ? "bg-neutral-800/95 border-neutral-700"
                    : "bg-white/95 border-gray-200"
                }`}
              >
                <button
                  onClick={() => toast.info("Coming Soon")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-t-2xl transition-colors ${
                    isDark ? "hover:bg-neutral-700" : "hover:bg-gray-50"
                  }`}
                >
                  <Icon icon="solar:user-linear" width={18} />
                  <span className="text-sm font-medium">Profile</span>
                </button>
                <button
                  onClick={() => toast.info("Coming Soon")}
                  className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${
                    isDark ? "hover:bg-neutral-700" : "hover:bg-gray-50"
                  }`}
                >
                  <Icon icon="solar:settings-linear" width={18} />
                  <span className="text-sm font-medium">Settings</span>
                </button>
                <button
                  onClick={handleLogout}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-b-2xl transition-colors text-red-500 ${
                    isDark ? "hover:bg-neutral-700" : "hover:bg-gray-50"
                  }`}
                >
                  <Icon icon="solar:logout-2-linear" width={18} />
                  <span className="text-sm font-medium">Logout</span>
                </button>
              </div>
            )}
          </div>

          {/* My Warung Button */}
          <button
            onClick={() => router.push("/dashboard")}
            className="px-4 py-2 bg-gradient-to-r from-[#4A7043] to-[#5A7B9A] text-white rounded-full font-semibold shadow-lg shadow-[#4A7043]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2"
          >
            <Icon icon="solar:shop-bold" width={18} />
            <span className="hidden lg:inline text-sm">My Warung</span>
          </button>

          {/* Divider */}
          <div className={`h-8 w-px transition-colors duration-500 ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />

          {/* Theme Toggle */}
          <button
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
      </div>
    </nav>
  );
}
