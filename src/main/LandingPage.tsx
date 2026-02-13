"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import LandingNavbar from "../components/navigation/LandingNavbar";
import GlobeStatsSection from "../components/globe/GlobeStatsSection";
import AnimateOnScroll from "../components/animation/AnimateOnScroll";
import { useTheme } from "../context/ThemeContext";

export default function LandingPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      <div
        className={`absolute top-0 w-full h-screen -z-10 saturate-200 blur-lg bg-cover bg-center transition-opacity duration-500 ${
          isDark ? "invert opacity-20" : "invert-0 opacity-30"
        }`}
        style={{
          backgroundImage:
            "url(/Background/BG-Before.webp)",
          maskImage:
            "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
        }}
      />

      <LandingNavbar />

      <section className="overflow-hidden pt-32 pb-20 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div
              className={`inline-flex gap-2 text-xs font-semibold border rounded-full mb-8 pt-1.5 pr-4 pb-1.5 pl-4 gap-x-2 gap-y-2 items-center transition-colors duration-500 ${
                isDark
                  ? "text-[#5A9A7B] bg-gradient-to-r from-[#4A7043]/10 to-[#5A7B9A]/10 border-[#4A7043]/20"
                  : "text-[#4A7043] bg-gradient-to-r from-[#4A7043]/5 to-[#5A7B9A]/5 border-[#4A7043]/10"
              }`}
            >
              The #1 E-Commerce Platform
              <span className="relative inline-flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-gradient-to-r from-[#4A7043] to-[#5A7B9A] opacity-75 animate-ping"></span>
                <span className="relative inline-flex w-full h-full rounded-full bg-gradient-to-r from-[#4A7043] to-[#5A7B9A]"></span>
              </span>
            </div>
            <h1
              className={`text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] transition-colors duration-500 ${
                isDark ? "text-gray-100" : "text-[#1a1a1a]"
              }`}
            >
              Future of
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4A7043] to-[#5A7B9A]">
                Digital Commerce
              </span>
            </h1>
            <p
              className={`leading-relaxed text-lg font-normal max-w-lg mb-10 transition-colors duration-500 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Accelerate your business growth with our integrated ecosystem.
              Connect inventory, analyze performance, and expand your market reach
              globally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/login?mode=register"
                className="shadow-[#4A7043]/20 hover:shadow-2xl hover:shadow-[#4A7043]/30 hover:-translate-y-1 transition-all flex text-sm font-semibold text-white bg-gradient-to-r from-[#4A7043] to-[#5A7B9A] rounded-xl pt-4 pr-8 pb-4 pl-8 shadow-xl gap-x-2 gap-y-2 items-center justify-center"
              >
                <span>Start Scaling Now</span>
                <Icon icon="solar:arrow-right-linear" width={20} />
              </Link>
              <button
                className={`transition-all flex hover:shadow-2xl hover:shadow-[#4A7043]/30 hover:-translate-y-1 text-sm font-semibold border rounded-xl pt-4 pr-8 pb-4 pl-8 gap-x-2 gap-y-2 items-center justify-center ${
                  isDark
                    ? "text-gray-200 bg-neutral-800 border-neutral-700 hover:text-white hover:bg-neutral-700"
                    : "text-gray-600 bg-white border-gray-200 hover:text-[#4A7043] hover:bg-gray-50"
                }`}
              >
                <Icon icon="solar:play-circle-linear" width={20} />
                <span>View Demo</span>
              </button>
            </div>
          </div>

          <div className="relative h-[500px] w-full hidden lg:block">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#4A7043]/20 to-transparent rounded-full blur-3xl opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#5A7B9A]/20 to-transparent rounded-full blur-3xl opacity-60"></div>

            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[85%] backdrop-blur-xl rounded-2xl shadow-2xl border p-8 z-10 transition-all duration-500 ${
                isDark
                  ? "bg-neutral-800/80 shadow-neutral-900/50 border-neutral-700/50"
                  : "bg-white/80 shadow-gray-200/50 border-white/50"
              }`}
            >
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4A7043] to-[#5A7B9A] flex items-center justify-center shadow-lg shadow-[#4A7043]/20 text-white">
                    <Icon icon="solar:shop-2-bold" width={24} />
                  </div>
                  <div>
                    <div
                      className={`text-base font-bold transition-colors duration-500 ${
                        isDark ? "text-gray-100" : "text-gray-800"
                      }`}
                    >
                      WarungHub Enterprise
                    </div>
                    <div className="text-xs text-[#5A7B9A] font-medium tracking-wide">
                      VERIFIED MERCHANT
                    </div>
                  </div>
                </div>
                <div className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-green-50 text-white dark:bg-green-900/30 dark:text-white">
                  Active
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div
                  className={`p-4 rounded-xl border transition-colors duration-500 ${
                    isDark
                      ? "bg-neutral-900/50 border-neutral-700"
                      : "bg-gray-50 border-gray-100"
                  }`}
                >
                  <p
                    className={`text-xs mb-1 transition-colors duration-500 ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Total Revenue
                  </p>
                  <p className="text-xl font-bold text-[#4A7043]">$42,500</p>
                  <div
                    className={`mt-2 h-1.5 w-full rounded-full overflow-hidden ${
                      isDark ? "bg-neutral-800" : "bg-gray-200"
                    }`}
                  >
                    <div className="h-full w-[75%] bg-gradient-to-r from-[#4A7043] to-[#5A7B9A] rounded-full"></div>
                  </div>
                </div>
                <div
                  className={`p-4 rounded-xl border transition-colors duration-500 ${
                    isDark
                      ? "bg-neutral-900/50 border-neutral-700"
                      : "bg-gray-50 border-gray-100"
                  }`}
                >
                  <p
                    className={`text-xs mb-1 transition-colors duration-500 ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Active Listings
                  </p>
                  <p
                    className={`text-xl font-bold transition-colors duration-500 ${
                      isDark ? "text-gray-100" : "text-gray-800"
                    }`}
                  >
                    1,240
                  </p>
                </div>
                <div
                  className={`p-4 rounded-xl border transition-colors duration-500 ${
                    isDark
                      ? "bg-neutral-900/50 border-neutral-700"
                      : "bg-gray-50 border-gray-100"
                  }`}
                >
                  <p
                    className={`text-xs mb-1 transition-colors duration-500 ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Growth
                  </p>
                  <p className="text-xl font-bold text-[#5A7B9A]">+24.5%</p>
                </div>
              </div>
              <div className="space-y-4">
                <div
                  className={`flex items-center gap-4 p-3 rounded-xl transition-colors cursor-pointer group ${
                    isDark ? "hover:bg-neutral-900/50" : "hover:bg-gray-50"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center group-hover:shadow-sm transition-colors duration-500 ${
                      isDark
                        ? "bg-neutral-900/50 text-gray-500 group-hover:bg-neutral-800"
                        : "bg-gray-100 text-gray-400 group-hover:bg-white"
                    }`}
                  >
                    <Icon icon="solar:box-linear" width={20} />
                  </div>
                  <div className="flex-1">
                    <div
                      className={`text-sm font-semibold transition-colors duration-500 ${
                        isDark ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      Premium Coffee Blend
                    </div>
                    <div
                      className={`text-xs transition-colors duration-500 ${
                        isDark ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      Export Quality
                    </div>
                  </div>
                  <div
                    className={`text-sm font-bold transition-colors duration-500 ${
                      isDark ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    $12,400
                  </div>
                </div>
                <div
                  className={`flex items-center gap-4 p-3 rounded-xl transition-colors cursor-pointer group ${
                    isDark ? "hover:bg-neutral-900/50" : "hover:bg-gray-50"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center group-hover:shadow-sm transition-colors duration-500 ${
                      isDark
                        ? "bg-neutral-900/50 text-gray-500 group-hover:bg-neutral-800"
                        : "bg-gray-100 text-gray-400 group-hover:bg-white"
                    }`}
                  >
                    <Icon icon="solar:tag-linear" width={20} />
                  </div>
                  <div className="flex-1">
                    <div
                      className={`text-sm font-semibold transition-colors duration-500 ${
                        isDark ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      Artisan Textiles
                    </div>
                    <div
                      className={`text-xs transition-colors duration-500 ${
                        isDark ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      Limited Edition
                    </div>
                  </div>
                  <div
                    className={`text-sm font-bold transition-colors duration-500 ${
                      isDark ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    $8,250
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimateOnScroll delay={150}>
        <section id="benefits" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2
              className={`text-4xl font-bold tracking-tight mb-4 transition-colors duration-500 ${
                isDark ? "text-gray-100" : "text-[#1a1a1a]"
              }`}
            >
              Enterprise-Grade Ecosystem
            </h2>
            <p
              className={`text-lg transition-colors duration-500 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Comprehensive tools designed to accelerate digital transformation
              for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              className={`p-8 rounded-2xl border shadow-sm hover:shadow-xl hover:shadow-[#4A7043]/5 transition-all duration-300 group ${
                isDark
                  ? "bg-neutral-800/50 border-neutral-700"
                  : "bg-white border-gray-100"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-2xl border text-[#4A7043] flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 ${
                  isDark
                    ? "bg-neutral-900/50 border-neutral-700 shadow-neutral-900"
                    : "bg-white border-gray-100 shadow-gray-100"
                }`}
              >
                <Icon icon="solar:shop-2-linear" width={28} height={28} />
              </div>
              <h3
                className={`text-xl font-bold mb-3 transition-colors duration-500 ${
                  isDark ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Instant Store Deployment
              </h3>
              <p
                className={`leading-relaxed transition-colors duration-500 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Launch your digital storefront in minutes with our automated
                onboarding process. No coding required.
              </p>
            </div>

            <div
              className={`p-8 rounded-2xl border shadow-sm hover:shadow-xl hover:shadow-[#4A7043]/5 transition-all duration-300 group ${
                isDark
                  ? "bg-neutral-800/50 border-neutral-700"
                  : "bg-white border-gray-100"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-2xl border text-[#5A7B9A] flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 ${
                  isDark
                    ? "bg-neutral-900/50 border-neutral-700 shadow-neutral-900"
                    : "bg-white border-gray-100 shadow-gray-100"
                }`}
              >
                <Icon icon="solar:pie-chart-2-bold-duotone" width={28} />
              </div>
              <h3
                className={`text-xl font-bold mb-3 transition-colors duration-500 ${
                  isDark ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Advanced Analytics
              </h3>
              <p
                className={`leading-relaxed transition-colors duration-500 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Gain deep insights into sales performance, inventory turnover,
                profit management, and customer behavior in real-time.
              </p>
            </div>

            <div
              className={`p-8 rounded-2xl border shadow-sm hover:shadow-xl hover:shadow-[#4A7043]/5 transition-all duration-300 group ${
                isDark
                  ? "bg-neutral-800/50 border-neutral-700"
                  : "bg-white border-gray-100"
              }`}
            >
              <div
                className={`flex group-hover:scale-110 transition-transform duration-300 text-[#4A7043] w-14 h-14 border rounded-2xl mb-6 shadow-lg items-center justify-center ${
                  isDark
                    ? "bg-neutral-900/50 border-neutral-700 shadow-neutral-900"
                    : "bg-white border-gray-100 shadow-gray-100"
                }`}
              >
                <Icon
                  icon="solar:shield-check-bold-duotone"
                  width={28}
                  height={28}
                  style={{ color: "rgb(74, 112, 67)" }}
                />
              </div>
              <h3
                className={`text-xl font-bold mb-3 transition-colors duration-500 ${
                  isDark ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Secure Infrastructure
              </h3>
              <p
                className={`leading-relaxed transition-colors duration-500 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Enterprise-level security with encrypted transactions and Escrow
                protection for complete peace of mind.
              </p>
            </div>
          </div>
        </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll delay={300}>
        <section
          id="marketplace"
          className={`py-24 border-y transition-colors duration-500 ${
            isDark
              ? "bg-neutral-900/30 border-neutral-800"
              : "bg-gray-50/30 border-gray-200"
          }`}
        >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2
                className={`text-3xl font-semibold tracking-tight mb-2 transition-colors duration-500 ${
                  isDark ? "text-gray-100" : "text-[#1a1a1a]"
                }`}
              >
                Premium Marketplace
              </h2>
              <p
                className={`transition-colors duration-500 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Explore curated products from top-tier verified vendors as a customer.
              </p>
            </div>
            <a
              href="#"
              className="text-[#4A7043] font-medium flex items-center gap-1 hover:gap-2 transition-all"
            >
              View All
              <Icon icon="solar:arrow-right-linear" width={16} />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div
              className={`group cursor-pointer p-4 rounded-2xl border hover:border-[#4A7043]/30 hover:shadow-xl transition-all duration-300 ${
                isDark
                  ? "bg-neutral-800/50 border-neutral-700 hover:shadow-neutral-900/50"
                  : "bg-white border-gray-100 hover:shadow-gray-200/50"
              }`}
            >
              <div
                className={`rounded-xl h-60 w-full mb-5 relative overflow-hidden group-hover:bg-[#F0F4F1] dark:group-hover:bg-neutral-700/30 transition-colors ${
                  isDark ? "bg-neutral-900/50" : "bg-gray-50"
                }`}
              >
                <div
                  className={`absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ${
                    isDark ? "text-gray-600" : "text-gray-300"
                  }`}
                >
                  <Icon icon="solar:armchair-2-linear" width={56} />
                </div>
              </div>
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs text-[#5A7B9A] font-bold tracking-wider uppercase">
                  Interior
                </span>
                <div
                  className={`flex items-center gap-1 text-xs font-bold transition-colors duration-500 ${
                    isDark ? "text-gray-200" : "text-gray-900"
                  }`}
                >
                  <Icon icon="solar:star-bold" width={12} className="text-[#D4AF37]" />
                  4.9
                </div>
              </div>
              <h3
                className={`font-bold text-lg mb-1 group-hover:text-[#4A7043] transition-colors ${
                  isDark ? "text-gray-200" : "text-gray-900"
                }`}
              >
                Artisan Teak Console
              </h3>
              <div
                className={`font-bold mb-3 transition-colors duration-500 ${
                  isDark ? "text-gray-200" : "text-gray-900"
                }`}
              >
                $125.00
              </div>
            </div>

            <div
              className={`group cursor-pointer p-4 rounded-2xl border hover:border-[#4A7043]/30 hover:shadow-xl transition-all duration-300 ${
                isDark
                  ? "bg-neutral-800/50 border-neutral-700 hover:shadow-neutral-900/50"
                  : "bg-white border-gray-100 hover:shadow-gray-200/50"
              }`}
            >
              <div
                className={`rounded-xl h-60 w-full mb-5 relative overflow-hidden group-hover:bg-[#F0F4F1] dark:group-hover:bg-neutral-700/30 transition-colors ${
                  isDark ? "bg-neutral-900/50" : "bg-gray-50"
                }`}
              >
                <div
                  className={`absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ${
                    isDark ? "text-gray-600" : "text-gray-300"
                  }`}
                >
                  <Icon icon="solar:t-shirt-linear" width={56} />
                </div>
              </div>
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs text-[#5A7B9A] font-bold tracking-wider uppercase">
                  Fashion
                </span>
                <div
                  className={`flex items-center gap-1 text-xs font-bold transition-colors duration-500 ${
                    isDark ? "text-gray-200" : "text-gray-900"
                  }`}
                >
                  <Icon icon="solar:star-bold" width={12} className="text-[#D4AF37]" />
                  5.0
                </div>
              </div>
              <h3
                className={`font-bold text-lg mb-1 group-hover:text-[#4A7043] transition-colors ${
                  isDark ? "text-gray-200" : "text-gray-900"
                }`}
              >
                Premium Woven Shirt
              </h3>
              <div
                className={`font-bold mb-3 transition-colors duration-500 ${
                  isDark ? "text-gray-200" : "text-gray-900"
                }`}
              >
                $45.00
              </div>
            </div>

            <div
              className={`group cursor-pointer p-4 rounded-2xl border hover:border-[#4A7043]/30 hover:shadow-xl transition-all duration-300 ${
                isDark
                  ? "bg-neutral-800/50 border-neutral-700 hover:shadow-neutral-900/50"
                  : "bg-white border-gray-100 hover:shadow-gray-200/50"
              }`}
            >
              <div
                className={`rounded-xl h-60 w-full mb-5 relative overflow-hidden group-hover:bg-[#F0F4F1] dark:group-hover:bg-neutral-700/30 transition-colors ${
                  isDark ? "bg-neutral-900/50" : "bg-gray-50"
                }`}
              >
                <div
                  className={`absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ${
                    isDark ? "text-gray-600" : "text-gray-300"
                  }`}
                >
                  <Icon icon="solar:cosmetic-linear" width={56} />
                </div>
              </div>
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs text-[#5A7B9A] font-bold tracking-wider uppercase">
                  Wellness
                </span>
                <div
                  className={`flex items-center gap-1 text-xs font-bold transition-colors duration-500 ${
                    isDark ? "text-gray-200" : "text-gray-900"
                  }`}
                >
                  <Icon icon="solar:star-bold" width={12} className="text-[#D4AF37]" />
                  4.8
                </div>
              </div>
              <h3
                className={`font-bold text-lg mb-1 group-hover:text-[#4A7043] transition-colors ${
                  isDark ? "text-gray-200" : "text-gray-900"
                }`}
              >
                Organic Facial Serum
              </h3>
              <div
                className={`font-bold mb-3 transition-colors duration-500 ${
                  isDark ? "text-gray-200" : "text-gray-900"
                }`}
              >
                $24.00
              </div>
            </div>

            <div
              className={`group cursor-pointer p-4 rounded-2xl border hover:border-[#4A7043]/30 hover:shadow-xl transition-all duration-300 ${
                isDark
                  ? "bg-neutral-800/50 border-neutral-700 hover:shadow-neutral-900/50"
                  : "bg-white border-gray-100 hover:shadow-gray-200/50"
              }`}
            >
              <div
                className={`rounded-xl h-60 w-full mb-5 relative overflow-hidden group-hover:bg-[#F0F4F1] dark:group-hover:bg-neutral-700/30 transition-colors ${
                  isDark ? "bg-neutral-900/50" : "bg-gray-50"
                }`}
              >
                <div
                  className={`absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ${
                    isDark ? "text-gray-600" : "text-gray-300"
                  }`}
                >
                  <Icon icon="solar:chef-hat-linear" width={56} />
                </div>
              </div>
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs text-[#5A7B9A] font-bold tracking-wider uppercase">
                  Culinary
                </span>
                <div
                  className={`flex items-center gap-1 text-xs font-bold transition-colors duration-500 ${
                    isDark ? "text-gray-200" : "text-gray-900"
                  }`}
                >
                  <Icon icon="solar:star-bold" width={12} className="text-[#D4AF37]" />
                  4.9
                </div>
              </div>
              <h3
                className={`font-bold text-lg mb-1 group-hover:text-[#4A7043] transition-colors ${
                  isDark ? "text-gray-200" : "text-gray-900"
                }`}
              >
                Gourmet Spices Set
              </h3>
              <div
                className={`font-bold mb-3 transition-colors duration-500 ${
                  isDark ? "text-gray-200" : "text-gray-900"
                }`}
              >
                $18.50
              </div>
            </div>
          </div>
        </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll delay={450}>
        <section id="how-it-works" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className={`text-3xl font-semibold tracking-tight mb-4 transition-colors duration-500 ${
                isDark ? "text-gray-100" : "text-[#1a1a1a]"
              }`}
            >
              Seamless Integration
            </h2>
            <p
              className={`transition-colors duration-500 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Four simple steps to digitize your operations.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-gradient-to-r from-[#4A7043]/10 via-[#4A7043]/40 to-[#4A7043]/10 -z-10"></div>

            <div className="relative flex flex-col items-center text-center">
              <div className="shadow-[#4A7043]/20 flex text-white bg-gradient-to-br from-[#4A7043] to-[#5A7B9A] w-16 h-16 rounded-2xl mb-6 shadow-xl items-center justify-center">
                <Icon icon="solar:user-plus-linear" width={32} />
              </div>
              <h3
                className={`font-semibold mb-2 transition-colors duration-500 ${
                  isDark ? "text-gray-100" : "text-gray-900"
                }`}
              >
                1. Create Account
              </h3>
              <p
                className={`text-sm px-4 transition-colors duration-500 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Enter your details to create a free WarungHub account.
              </p>
            </div>

            <div className="relative flex flex-col items-center text-center">
              <div
                className={`w-16 h-16 rounded-2xl border border-[#4A7043]/20 shadow-lg shadow-[#4A7043]/5 flex items-center justify-center text-[#4A7043] mb-6 transition-colors duration-500 ${
                  isDark ? "bg-neutral-800/50" : "bg-white"
                }`}
              >
                <Icon icon="solar:shop-2-linear" width={32} />
              </div>
              <h3
                className={`font-semibold mb-2 transition-colors duration-500 ${
                  isDark ? "text-gray-100" : "text-gray-900"
                }`}
              >
                2. Set Up Your Store
              </h3>
              <p
                className={`text-sm px-4 transition-colors duration-500 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Complete your store profile, logo, and business description.
              </p>
            </div>

            <div className="relative flex flex-col items-center text-center">
              <div
                className={`w-16 h-16 rounded-2xl border border-[#4A7043]/20 shadow-lg shadow-[#4A7043]/5 flex items-center justify-center text-[#4A7043] mb-6 transition-colors duration-500 ${
                  isDark ? "bg-neutral-800/50" : "bg-white"
                }`}
              >
                <Icon icon="solar:upload-track-linear" width={32} />
              </div>
              <h3
                className={`font-semibold mb-2 transition-colors duration-500 ${
                  isDark ? "text-gray-100" : "text-gray-900"
                }`}
              >
                3. Add Products
              </h3>
              <p
                className={`text-sm px-4 transition-colors duration-500 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Upload product photos, add prices and available stock.
              </p>
            </div>

            <div className="relative flex flex-col items-center text-center">
              <div
                className={`w-16 h-16 rounded-2xl border border-[#4A7043]/20 shadow-lg shadow-[#4A7043]/5 flex items-center justify-center text-[#4A7043] mb-6 transition-colors duration-500 ${
                  isDark ? "bg-neutral-800/50" : "bg-white"
                }`}
              >
                <Icon icon="solar:wallet-money-linear" width={32} />
              </div>
              <h3
                className={`font-semibold mb-2 transition-colors duration-500 ${
                  isDark ? "text-gray-100" : "text-gray-900"
                }`}
              >
                4. Start Selling
              </h3>
              <p
                className={`text-sm px-4 transition-colors duration-500 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Accept orders and ship products to customers across Indonesia.
              </p>
            </div>
          </div>
        </div>
        </section>
      </AnimateOnScroll>

      <GlobeStatsSection />

      <AnimateOnScroll delay={300}>
        <section
          className={`overflow-hidden pt-32 pr-6 pb-32 pl-6 relative bg-gradient-to-b transition-colors duration-500 ${
            isDark
              ? "from-neutral-900/60 via-[#4A7043]/10 to-[#5A7B9A]/10"
              : "from-gray-50/60 via-[#4A7043]/5 to-[#5A7B9A]/5"
          }`}
        >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-4xl md:text-5xl font-bold tracking-tight mb-6 transition-colors duration-500 ${
              isDark ? "text-gray-100" : "text-[#1a1a1a]"
            }`}
          >
            Ready to Scale Up?
          </h2>
          <p
            className={`text-xl mb-12 max-w-2xl mx-auto font-light transition-colors duration-500 ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Join thousands of forward-thinking businesses on WarungHub.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/login?mode=register"
              className="hover:shadow-2xl hover:shadow-[#4A7043]/30 hover:-translate-y-1 transition-all text-base font-bold text-white bg-gradient-to-r from-[#4A7043] to-[#5A7B9A] rounded-xl pt-5 pr-10 pb-5 pl-10 text-center"
            >
              Sign Up Now – Free!
            </Link>
            <button
              className={`hover:shadow-2xl hover:shadow-[#4A7043]/30 hover:-translate-y-1 transition-all flex gap-2 text-base font-bold border rounded-xl pt-5 pr-10 pb-5 pl-10 gap-x-2 gap-y-2 items-center justify-center ${
                isDark
                  ? "text-gray-200 bg-neutral-800 border-neutral-700 hover:bg-neutral-700"
                  : "text-gray-800 bg-white border-gray-200 hover:bg-gray-50"
              }`}
            >
              <Icon icon="solar:chat-round-dots-linear" width={20} />
              Chat with Our Team
            </button>
          </div>
          <p
            className={`mt-6 text-xs transition-colors duration-500 ${
              isDark ? "text-gray-500" : "text-gray-500"
            }`}
          >
            *No hidden fees. Commission only when products are sold.
          </p>
        </div>
        </section>
      </AnimateOnScroll>

      <footer
        className={`border-t pt-16 pb-8 transition-colors duration-500 ${
          isDark
            ? "bg-neutral-900/50 border-neutral-800"
            : "bg-white border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div
                className={`flex items-center gap-2 text-[#4A7043] mb-6 transition-colors duration-500`}
              >
                <Icon icon="solar:shop-2-linear" width={24} />
                <span className="text-lg font-semibold tracking-tight">
                  WarungHub
                </span>
              </div>
              <p
                className={`text-sm leading-relaxed mb-6 transition-colors duration-500 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                A trusted marketplace platform connecting Indonesian MSMEs with
                broader market opportunities.
              </p>
              <div
                className={`flex gap-4 transition-colors duration-500 ${
                  isDark ? "text-gray-500" : "text-gray-400"
                }`}
              >
                <a href="#" className="hover:text-[#4A7043] transition-colors">
                  <Icon icon="solar:camera-linear" width={20} />
                </a>
                <a href="#" className="hover:text-[#4A7043] transition-colors">
                  <Icon icon="solar:facebook-linear" width={20} />
                </a>
                <a href="#" className="hover:text-[#4A7043] transition-colors">
                  <Icon icon="solar:phone-linear" width={20} />
                </a>
              </div>
            </div>

            <div>
              <h4
                className={`font-semibold mb-6 transition-colors duration-500 ${
                  isDark ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Company
              </h4>
              <ul
                className={`space-y-4 text-sm transition-colors duration-500 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                <li>
                  <a href="#" className="hover:text-[#4A7043] transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#4A7043] transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#4A7043] transition-colors">
                    MSME Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#4A7043] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4
                className={`font-semibold mb-6 transition-colors duration-500 ${
                  isDark ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Support
              </h4>
              <ul
                className={`space-y-4 text-sm transition-colors duration-500 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                <li>
                  <a href="#" className="hover:text-[#4A7043] transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#4A7043] transition-colors">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#4A7043] transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#4A7043] transition-colors">
                    Seller Guide
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4
                className={`font-semibold mb-6 transition-colors duration-500 ${
                  isDark ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Contact Us
              </h4>
              <ul
                className={`space-y-4 text-sm transition-colors duration-500 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                <li className="flex items-center gap-3">
                  <Icon icon="solar:letter-linear" width={18} />
                  hello@warunghub.id
                </li>
                <li className="flex items-center gap-3">
                  <Icon icon="solar:phone-calling-linear" width={18} />
                  +62 812 3456 7890
                </li>
                <li className="flex items-start gap-3">
                  <Icon icon="solar:map-point-linear" width={18} className="mt-1" />
                  Jl. Sudirman No. 45, Jakarta Selatan, Indonesia
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs transition-colors duration-500 ${
              isDark
                ? "border-neutral-800 text-gray-500"
                : "border-gray-100 text-gray-400"
            }`}
          >
            <p>© 2026 WarungHub Indonesia. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a
                href="#"
                className={`transition-colors ${
                  isDark ? "hover:text-gray-300" : "hover:text-gray-600"
                }`}
              >
                Privacy
              </a>
              <a
                href="#"
                className={`transition-colors ${
                  isDark ? "hover:text-gray-300" : "hover:text-gray-600"
                }`}
              >
                Terms
              </a>
              <a
                href="#"
                className={`transition-colors ${
                  isDark ? "hover:text-gray-300" : "hover:text-gray-600"
                }`}
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
