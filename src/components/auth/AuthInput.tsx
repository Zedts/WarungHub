import { Icon } from "@iconify/react";

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
  const showIcon = icon && icon.trim().length > 0;

  return (
    <div
      className={`flex items-center gap-3 rounded-[14px] border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3.5 transition-all duration-300 focus-within:border-[#4A7043] focus-within:bg-white focus-within:shadow-[0_0_0_4px_rgba(74,112,67,0.1)] focus-within:-translate-y-px mb-3 ${className}`}
    >
      {showIcon && (
        <Icon
          icon={icon}
          className="text-slate-400 text-lg shrink-0"
          width={20}
        />
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="border-none bg-transparent outline-none w-full text-sm text-slate-700 font-medium placeholder:text-slate-400 placeholder:font-normal"
      />
    </div>
  );
}
