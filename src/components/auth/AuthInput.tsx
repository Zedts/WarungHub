"use client";

import { Icon } from "@iconify/react";
import { useTheme } from "../../context/ThemeContext";

type AuthInputProps = {
  type?: "text" | "email" | "password";
  placeholder: string;
  icon?: string;
  id?: string;
  className?: string;
};

export default function AuthInput({
  type = "text",
  placeholder,
  icon = "solar:letter-linear",
  id,
  className = "",
}: AuthInputProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const showIcon = icon && icon.trim().length > 0;

  return (
    <div
      className={`flex items-center gap-3 rounded-[14px] border px-4 py-3.5 transition-all duration-300 focus-within:-translate-y-px mb-3 ${
        isDark
          ? "border-neutral-700 bg-neutral-800/50 focus-within:border-[#4A7043] focus-within:bg-neutral-800 focus-within:shadow-[0_0_0_4px_rgba(74,112,67,0.2)]"
          : "border-[#e2e8f0] bg-[#f8fafc] focus-within:border-[#4A7043] focus-within:bg-white focus-within:shadow-[0_0_0_4px_rgba(74,112,67,0.1)]"
      } ${className}`}
    >
      {showIcon && (
        <Icon
          icon={icon}
          className={`text-lg shrink-0 transition-colors duration-500 ${
            isDark ? "text-gray-500" : "text-slate-400"
          }`}
          width={20}
        />
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`border-none bg-transparent outline-none w-full text-sm font-medium placeholder:font-normal transition-colors duration-500 ${
          isDark
            ? "text-gray-200 placeholder:text-gray-500"
            : "text-slate-700 placeholder:text-slate-400"
        }`}
      />
    </div>
  );
}
