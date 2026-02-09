import { Icon } from "@iconify/react";

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
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full py-3 px-4 border border-[#e2e8f0] rounded-[14px] bg-white text-slate-600 font-semibold text-sm flex items-center justify-center gap-2.5 transition-all duration-200 hover:bg-[#f8fafc] hover:border-slate-300 hover:-translate-y-px cursor-pointer"
    >
      <Icon icon="devicon:google" width={18} />
      {label}
    </button>
  );
}
