"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";
import { useTheme } from "../../context/ThemeContext";

type DashboardNavbarProps = {
  onMobileMenuToggle: () => void;
  sidebarCollapsed: boolean;
};

export default function DashboardNavbar({ onMobileMenuToggle, sidebarCollapsed }: DashboardNavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <nav
      className={`fixed top-0 right-0 h-20 border-b backdrop-blur-xl flex items-center justify-between px-6 transition-all duration-300 z-30 left-0 md:left-20 ${
        !sidebarCollapsed ? "md:left-64" : ""
      } ${
        isDark
          ? "bg-neutral-900/95 border-neutral-700/50"
          : "bg-white/95 border-gray-200/50"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        {/* Mobile Menu Button */}
        <button
          onClick={onMobileMenuToggle}
          className={`md:hidden w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
            isDark ? "hover:bg-neutral-800" : "hover:bg-gray-100"
          }`}
          aria-label="Toggle sidebar menu"
        >
          <Icon
            icon="solar:hamburger-menu-bold"
            width={24}
            className={isDark ? "text-white" : "text-slate-800"}
          />
        </button>

        <div className="flex items-center justify-center h-14">
          {/* Mobile Logo */}
          <Image
            src={isDark ? "/W-S-Logo.png" : "/S-Logo.png"}
            alt="WarungHub"
            width={45}
            height={45}
            className="h-[45px] w-auto object-contain transition-opacity duration-500 sm:hidden"
            priority
          />
          {/* Desktop Logo */}
          <Image
            src={isDark ? "/W-F-Logo.png" : "/F-Logo.png"}
            alt="WarungHub"
            width={140}
            height={55}
            className="h-[55px] w-auto object-contain transition-opacity duration-500 hidden sm:block"
            priority
          />
        </div>
        <div className={`hidden sm:block h-6 w-px ${isDark ? "bg-neutral-700" : "bg-gray-200"}`} />
        <span
          className={`hidden sm:block text-sm font-medium transition-colors duration-500 ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Dashboard
        </span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        {/* Notifications */}
        <button
          onClick={() => toast.info("Coming Soon")}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 relative ${
            isDark ? "hover:bg-neutral-800" : "hover:bg-gray-100"
          }`}
          aria-label="Notifications"
        >
          <Icon
            icon="solar:bell-bold"
            width={20}
            className={isDark ? "text-white" : "text-slate-800"}
          />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 ${
            isDark ? "hover:bg-neutral-800" : "hover:bg-gray-100"
          }`}
          aria-label="Toggle theme"
        >
          <Icon
            icon={isDark ? "solar:sun-bold" : "solar:moon-bold"}
            width={20}
            className={isDark ? "text-white" : "text-slate-800"}
          />
        </button>
      </div>
    </nav>
  );
}
