"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Icon } from "@iconify/react";
import { AuthInput, AuthSocialButton, AuthToggleCapsule } from "../components/auth";
import { useTheme } from "../context/ThemeContext";

const BACKGROUND_IMAGE =
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/884dca69-4cd6-4c60-a150-c149e26556c2_3840w.webp";
const OVERLAY_IMAGE =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop";

type AuthMode = "login" | "register";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { theme, toggleTheme, mounted } = useTheme();
  const isDark = theme === "dark";
  const mode: AuthMode =
    searchParams.get("mode") === "register" ? "register" : "login";

  const toggleAuth = (target: AuthMode) => {
    router.push(target === "register" ? "/login?mode=register" : "/login");
  };

  const isRegister = mode === "register";

  if (!mounted) {
    return (
      <div className="min-h-screen flex justify-center items-center overflow-x-hidden bg-[#f1f5f9]">
        <div className="fixed inset-0 -z-10 bg-cover bg-center saturate-[1.5] blur-xl opacity-40" style={{ backgroundImage: `url('${BACKGROUND_IMAGE}')` }} />
        <button type="button" onClick={() => router.push("/")} className="absolute left-6 top-6 z-[300] inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold shadow-lg backdrop-blur bg-white/90 text-slate-700"><Icon icon="solar:home-smile-bold" width={18} /><span className="hidden md:inline">Back</span></button>
        <button type="button" className="absolute right-6 top-6 z-[300] inline-flex h-12 w-12 items-center justify-center rounded-full border shadow-lg backdrop-blur bg-white/85 border-gray-200/50"><Icon icon="solar:sun-bold" width={20} className="text-black" /></button>
        <div className="auth-container"><div className="absolute top-8 left-1/2 -translate-x-1/2 h-12 w-64 bg-white rounded-full animate-pulse" /></div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen flex justify-center items-center overflow-x-hidden transition-colors duration-500 ${
        isDark ? "bg-neutral-900" : "bg-[#f1f5f9]"
      }`}
    >
      <div
        className={`fixed inset-0 -z-10 bg-cover bg-center saturate-[1.5] blur-xl transition-opacity duration-500 ${
          isDark ? "opacity-20 invert" : "opacity-40"
        }`}
        style={{ backgroundImage: `url('${BACKGROUND_IMAGE}')` }}
      />

      <button
        type="button"
        onClick={() => router.push("/")}
        className={`absolute left-6 top-6 z-[300] inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold shadow-lg backdrop-blur transition hover:-translate-y-0.5 ${
          isDark
            ? "bg-neutral-800/90 text-gray-200 shadow-neutral-900/30 hover:bg-neutral-700"
            : "bg-white/90 text-slate-700 shadow-slate-900/10 hover:bg-white"
        }`}
        aria-label="Back to home"
      >
        <Icon icon="solar:home-smile-bold" width={18} />
        <span className="hidden md:inline">Back</span>
      </button>

      <button
        type="button"
        onClick={toggleTheme}
        className={`absolute right-6 top-6 z-[300] inline-flex h-12 w-12 items-center justify-center rounded-full border shadow-lg backdrop-blur transition-all duration-500 ${
          isDark
            ? "bg-neutral-900/95 backdrop-blur-md border-neutral-700/50 shadow-neutral-900/50"
            : "bg-white/85 backdrop-blur-xl border-gray-200/50 shadow-gray-200/50"
        }`}
        aria-label="Toggle theme"
      >
        <Icon
          icon={isDark ? "solar:sun-bold" : "solar:moon-bold"}
          width={20}
          className={isDark ? "text-white" : "text-black"}
        />
      </button>

      <div
        className={`auth-container ${isRegister ? "right-panel-active" : ""} ${
          isDark ? "dark" : ""
        }`}
      >
        <AuthToggleCapsule mode={mode} onModeChange={toggleAuth} />

        <div className="auth-form-container auth-sign-up-container">
          <form className="w-full max-w-sm flex flex-col items-center mt-12">
            <div
              className={`mb-4 p-3 rounded-2xl shadow-sm transition-colors duration-500 ${
                isDark
                  ? "bg-green-900/30 text-green-400"
                  : "bg-green-50 text-[#4A7043]"
              }`}
            >
              <Icon icon="solar:user-plus-bold" width={28} />
            </div>
            <h1
              className={`text-2xl font-bold mb-0.5 transition-colors duration-500 ${
                isDark ? "text-gray-100" : "text-slate-800"
              }`}
            >
              Buat Akun Bisnis
            </h1>
            <p
              className={`text-sm mb-6 transition-colors duration-500 ${
                isDark ? "text-gray-400" : "text-slate-500"
              }`}
            >
              Mulai jualan online dalam hitungan menit.
            </p>

            <div className="flex gap-3 w-full">
              <AuthInput placeholder="Nama Depan" icon="" className="flex-1" />
              <AuthInput placeholder="Nama Belakang" icon="" className="flex-1" />
            </div>
            <AuthInput
              type="email"
              placeholder="Email Bisnis"
              icon="solar:letter-linear"
            />
            <AuthInput
              type="password"
              placeholder="Buat Password"
              icon="solar:lock-password-linear"
            />

            <div className="flex items-start gap-2 w-full mb-6 mt-1 px-1">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 rounded border-gray-300 text-[#4A7043] focus:ring-[#4A7043] dark:border-neutral-600 dark:bg-neutral-800"
              />
              <label
                htmlFor="terms"
                className={`text-xs text-left cursor-pointer transition-colors duration-500 ${
                  isDark ? "text-gray-400" : "text-slate-500"
                }`}
              >
                Saya menyetujui{" "}
                <span className="text-[#4A7043] font-semibold">
                  Syarat & Ketentuan
                </span>{" "}
                serta{" "}
                <span className="text-[#4A7043] font-semibold">
                  Kebijakan Privasi
                </span>
                .
              </label>
            </div>

            <button
              type="button"
              className="w-full py-3.5 bg-gradient-to-r from-[#4A7043] to-[#5A7B9A] text-white rounded-xl font-bold shadow-lg shadow-[#4A7043]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all mb-6"
            >
              Daftar Sekarang
            </button>

            <div className="relative w-full mb-6">
              <div className="absolute inset-0 flex items-center">
                <div
                  className={`w-full border-t transition-colors duration-500 ${
                    isDark ? "border-neutral-700" : "border-gray-200"
                  }`}
                />
              </div>
              <div className="relative flex justify-center">
                <span
                  className={`px-3 text-[10px] font-bold uppercase tracking-wider transition-colors duration-500 ${
                    isDark
                      ? "bg-neutral-900 text-gray-500"
                      : "bg-white text-gray-400"
                  }`}
                >
                  Atau daftar dengan
                </span>
              </div>
            </div>

            <AuthSocialButton label="Daftar dengan Google" />
          </form>
        </div>

        <div className="auth-form-container auth-sign-in-container">
          <form className="w-full max-w-sm flex flex-col items-center mt-8">
            <div className="mb-8 flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4A7043] to-[#5A7B9A] flex items-center justify-center text-white shadow-lg shadow-[#4A7043]/20">
                <Icon icon="solar:shop-2-bold" width={20} />
              </div>
              <span
                className={`text-xl font-bold tracking-tight transition-colors duration-500 ${
                  isDark ? "text-gray-100" : "text-slate-800"
                }`}
              >
                WarungHub
              </span>
            </div>

            <h1
              className={`text-3xl font-bold mb-1 transition-colors duration-500 ${
                isDark ? "text-gray-100" : "text-slate-800"
              }`}
            >
              Selamat Datang
            </h1>
            <p
              className={`mb-8 transition-colors duration-500 ${
                isDark ? "text-gray-400" : "text-slate-500"
              }`}
            >
              Masuk untuk mengelola toko Anda.
            </p>

            <AuthInput
              type="email"
              placeholder="Email Address"
              icon="solar:letter-linear"
            />
            <AuthInput
              type="password"
              placeholder="Password"
              icon="solar:lock-password-linear"
            />

            <div className="w-full text-center mb-6 px-1">
              <a
                href="#"
                className="text-xs font-semibold text-[#5A7B9A] hover:text-[#4A7043] transition-colors"
              >
                Lupa Password?
              </a>
            </div>

            <button
              type="button"
              className="w-full py-3.5 bg-gradient-to-r from-[#4A7043] to-[#5A7B9A] text-white rounded-xl font-bold shadow-lg shadow-[#4A7043]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all mb-8"
            >
              Masuk Akun
            </button>

            <div className="relative w-full mb-6">
              <div className="absolute inset-0 flex items-center">
                <div
                  className={`w-full border-t transition-colors duration-500 ${
                    isDark ? "border-neutral-700" : "border-gray-200"
                  }`}
                />
              </div>
              <div className="relative flex justify-center">
                <span
                  className={`px-3 text-[10px] font-bold uppercase tracking-wider transition-colors duration-500 ${
                    isDark
                      ? "bg-neutral-900 text-gray-500"
                      : "bg-white text-gray-400"
                  }`}
                >
                  Atau masuk dengan
                </span>
              </div>
            </div>

            <AuthSocialButton label="Masuk dengan Google" />
          </form>
        </div>

        <div className="auth-overlay-container">
          <div className="auth-overlay">
            <div className="absolute inset-0 w-full h-full">
              <img
                src={OVERLAY_IMAGE}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#4A7043]/90 to-[#5A7B9A]/80 mix-blend-multiply" />
            </div>

            <div className="auth-overlay-panel auth-overlay-left">
              <div className="relative z-10 w-full max-w-xs">
                <div className="auth-glass-card auth-floating p-6 mb-8 text-left border-t border-white/40">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                        <Icon icon="solar:shop-2-bold" width={16} />
                      </div>
                      <p className="m-0 text-white font-bold text-xs">
                        WarungHub Pro
                      </p>
                    </div>
                    <span className="text-[10px] bg-green-500/30 text-white px-2 py-0.5 rounded border border-green-400/30 font-semibold">
                      Verified
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1 text-white">Rp 45.2Jt</h3>
                  <p className="m-0 text-white/70 text-xs font-medium">
                    Total Pendapatan Bulan Ini
                  </p>
                  <div className="flex items-end gap-1.5 mt-5 h-12 opacity-80">
                    <div className="w-1/5 bg-white h-[40%] rounded-t-sm opacity-50" />
                    <div className="w-1/5 bg-white h-[70%] rounded-t-sm opacity-70" />
                    <div className="w-1/5 bg-white h-[50%] rounded-t-sm opacity-60" />
                    <div className="w-1/5 bg-white h-[100%] rounded-t-sm shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                    <div className="w-1/5 bg-white h-[80%] rounded-t-sm opacity-80" />
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-2 text-white">
                  Sudah Punya Akun?
                </h2>
                <p className="text-white/80 mb-8 font-light text-sm leading-relaxed">
                  Kembali masuk untuk mengelola pesanan dan memantau performa
                  toko Anda.
                </p>
                <button
                  type="button"
                  onClick={() => toggleAuth("login")}
                  className="px-8 py-3 border border-white text-white rounded-xl font-semibold hover:bg-white hover:text-[#4A7043] transition-all duration-300 transform hover:-translate-y-1"
                >
                  Masuk Sekarang
                </button>
              </div>
            </div>

            <div className="auth-overlay-panel auth-overlay-right">
              <div className="relative z-10 w-full max-w-xs">
                <div className="absolute -top-24 left-1/2 -translate-x-1/2">
                  <div className="auth-glass-card auth-floating-delayed p-4 flex items-center gap-3 w-56 border-l border-white/40">
                    <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center text-white shadow-lg shadow-green-500/30 shrink-0">
                      <Icon icon="solar:bag-check-bold" width={20} />
                    </div>
                    <div className="text-left">
                      <p className="m-0 text-white font-bold text-sm">
                        Pesanan Baru!
                      </p>
                      <p className="m-0 text-white/80 text-[10px] mt-0.5">
                        2 item • Rp 150.000
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-3 text-white">
                  Belum Bergabung?
                </h2>
                <p className="text-white/80 mb-8 font-light text-sm leading-relaxed">
                  Daftarkan UMKM Anda sekarang dan jangkau jutaan pelanggan
                  potensial di seluruh Indonesia.
                </p>

                <div className="grid grid-cols-2 gap-3 text-left mb-8">
                  <div className="bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-md hover:bg-white/20 transition-colors cursor-default">
                    <Icon
                      icon="solar:rocket-2-bold-duotone"
                      className="text-3xl mb-3 text-green-300"
                      width={28}
                    />
                    <p className="m-0 text-white font-bold text-sm">Cepat</p>
                    <p className="m-0 text-white/60 text-[10px] mt-1">
                      Setup 5 menit
                    </p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-md hover:bg-white/20 transition-colors cursor-default">
                    <Icon
                      icon="solar:shield-check-bold-duotone"
                      className="text-3xl mb-3 text-blue-300"
                      width={28}
                    />
                    <p className="m-0 text-white font-bold text-sm">Aman</p>
                    <p className="m-0 text-white/60 text-[10px] mt-1">
                      Verifikasi data
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => toggleAuth("register")}
                  className="px-8 py-3 bg-white text-[#4A7043] rounded-xl font-bold hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300 transform hover:-translate-y-1"
                >
                  Daftar Gratis
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
