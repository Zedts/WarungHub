"use client";

import { Icon } from "@iconify/react";
import { useTheme } from "../../context/ThemeContext";

type AuthSocialButtonProps = {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function AuthSocialButton({
  label,
  onClick,
  type = "button",
}: AuthSocialButtonProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full py-3 px-4 border rounded-[14px] font-semibold text-sm flex items-center justify-center gap-2.5 transition-all duration-200 hover:-translate-y-px cursor-pointer ${
        isDark
          ? "border-neutral-700 bg-neutral-800/50 text-gray-200 hover:bg-neutral-800 hover:border-neutral-600"
          : "border-[#e2e8f0] bg-white text-slate-600 hover:bg-[#f8fafc] hover:border-slate-300"
      }`}
    >
      <Icon icon="devicon:google" width={18} />
      {label}
    </button>
  );
}
