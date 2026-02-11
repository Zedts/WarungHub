"use client";

import { useTheme } from "../../context/ThemeContext";

type AuthToggleCapsuleProps = {
  mode: "login" | "register";
  onModeChange: (mode: "login" | "register") => void;
};

export default function AuthToggleCapsule({
  mode,
  onModeChange,
}: AuthToggleCapsuleProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const isRegister = mode === "register";

  return (
    <div
      className={`absolute top-[30px] left-1/2 -translate-x-1/2 py-1.5 px-1.5 rounded-[50px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] z-[200] flex gap-1.5 w-[260px] h-[54px] md:w-[260px] md:top-[30px] max-md:w-[220px] max-md:top-5 transition-colors duration-500 ${
        isDark ? "bg-neutral-800" : "bg-white"
      }`}
    >
      <div
        className={`absolute top-1.5 left-1.5 w-[125px] h-11 bg-gradient-to-r from-[#4A7043] to-[#5A7B9A] rounded-[40px] transition-all duration-[0.6s] ease-in-out z-[1] max-md:w-[105px] ${
          isRegister ? "translate-x-[125px] max-md:translate-x-[105px]" : ""
        }`}
      />
      <button
        type="button"
        onClick={() => onModeChange("login")}
        className={`flex-1 border-none bg-transparent font-semibold text-sm cursor-pointer z-[2] rounded-[40px] transition-colors duration-[0.6s] flex items-center justify-center tracking-wide ${
          !isRegister
            ? "text-white"
            : isDark
            ? "text-gray-500"
            : "text-slate-400"
        }`}
      >
        Masuk
      </button>
      <button
        type="button"
        onClick={() => onModeChange("register")}
        className={`flex-1 border-none bg-transparent font-semibold text-sm cursor-pointer z-[2] rounded-[40px] transition-colors duration-[0.6s] flex items-center justify-center tracking-wide ${
          isRegister
            ? "text-white"
            : isDark
            ? "text-gray-500"
            : "text-slate-400"
        }`}
      >
        Daftar
      </button>
    </div>
  );
}
