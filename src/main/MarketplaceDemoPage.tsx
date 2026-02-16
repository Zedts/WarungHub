"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";
import { useTheme } from "../context/ThemeContext";
import MarketplaceDemoNavbar from "../components/marketplace/MarketplaceDemoNavbar";
import { mockProducts, categories } from "../lib/products";

export default function MarketplaceDemoPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = useMemo(() => {
    return selectedCategory === "all"
      ? mockProducts
      : mockProducts.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const flashSaleProducts = useMemo(
    () => mockProducts.filter((p) => p.originalPrice),
    []
  );

  return (
    <>
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

      <MarketplaceDemoNavbar />

      <main className="max-w-7xl mx-auto px-4 pt-28 pb-20 space-y-10">
        {/* Hero Banner */}
        <div className="relative h-[280px] md:h-[360px] rounded-3xl overflow-hidden group">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#1a1a1a]/80 via-[#1a1a1a]/40 to-transparent" />
          <Image
            src="https://plus.unsplash.com/premium_photo-1699025726754-8da11fa3fb58?q=80&w=1371&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Marketplace Hero"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            unoptimized
            priority
          />
          <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-16 max-w-2xl">
            <span className="inline-block px-3 py-1 bg-[#D4AF37] text-white text-xs font-bold rounded-full w-fit mb-4 uppercase tracking-wider">
              Featured
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
              Support Local,{" "}
              <span className="text-[#86efac]">Shop Smart</span>
            </h1>
            <p className="text-gray-200 text-sm md:text-base mb-8 max-w-md font-light">
              Discover authentic Indonesian products from verified UMKM sellers.
              Quality craftsmanship, delivered nationwide.
            </p>
            <button
              onClick={() => toast.info("Coming Soon")}
              className="bg-white text-[#4A7043] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors w-fit flex items-center gap-2 shadow-lg"
            >
              Explore Now
              <Icon icon="solar:arrow-right-linear" width={20} />
            </button>
          </div>
        </div>

        {/* Flash Sale Section */}
        {flashSaleProducts.length > 0 && (
          <section className="bg-gradient-to-r from-[#4A7043] to-[#5A7B9A] rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4" />

            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 relative z-10">
              <div className="flex items-center gap-4">
                <h2 className="text-xl font-bold text-white italic flex items-center gap-2">
                  <Icon icon="solar:fire-bold" width={24} className="text-orange-300" />
                  FLASH SALE
                </h2>
                <div className="flex gap-2">
                  <div className="bg-white text-[#4A7043] text-xs font-bold px-2 py-1 rounded">
                    02
                  </div>
                  <span className="text-white font-bold">:</span>
                  <div className="bg-white text-[#4A7043] text-xs font-bold px-2 py-1 rounded">
                    15
                  </div>
                  <span className="text-white font-bold">:</span>
                  <div className="bg-white text-[#4A7043] text-xs font-bold px-2 py-1 rounded">
                    40
                  </div>
                </div>
              </div>
              <button
                onClick={() => toast.info("Coming Soon")}
                className="text-white/80 text-sm hover:text-white mt-2 md:mt-0 flex items-center gap-1 transition-colors"
              >
                View All{" "}
                <Icon icon="solar:alt-arrow-right-linear" width={16} />
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 relative z-10">
              {flashSaleProducts.map((product) => {
                const discount = Math.round(
                  ((product.originalPrice! - product.price) /
                    product.originalPrice!) *
                    100
                );
                const soldPercent = Math.min(
                  Math.round(
                    (product.sold / (product.sold + product.stock)) * 100
                  ),
                  100
                );

                return (
                  <div
                    key={`flash-${product.id}`}
                    className="bg-white dark:bg-neutral-900 rounded-xl p-3 hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
                  >
                    <div className="relative h-32 bg-gray-100 dark:bg-neutral-800 rounded-lg mb-3 overflow-hidden">
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded z-10">
                        -{discount}%
                      </div>
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                        unoptimized
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {product.name}
                      </h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-[#4A7043] dark:text-[#6aa560] font-bold text-sm">
                          Rp{product.price.toLocaleString("id-ID")}
                        </span>
                        <span className="text-gray-400 text-xs line-through">
                          Rp{product.originalPrice!.toLocaleString("id-ID")}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full mt-2">
                        <div
                          className="bg-red-500 h-1.5 rounded-full transition-all"
                          style={{ width: `${soldPercent}%` }}
                        />
                      </div>
                      <p className="text-[10px] text-gray-500">
                        {product.stock} remaining
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Category Filter + Products */}
        <section>
          <h2
            className={`text-lg font-semibold mb-6 transition-colors duration-500 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Explore Categories
          </h2>

          <div className="flex gap-3 mb-8 overflow-x-auto pt-2 pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm whitespace-nowrap transition-all hover:-translate-y-0.5 ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-[#4A7043] to-[#5A7B9A] text-white shadow-lg shadow-[#4A7043]/20"
                    : isDark
                    ? "bg-neutral-800/50 border border-neutral-700 text-gray-300 hover:bg-neutral-700"
                    : "bg-white/80 border border-gray-200 text-gray-700 hover:bg-white"
                }`}
              >
                <Icon icon={cat.icon} width={18} />
                {cat.name}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`group rounded-xl p-3 backdrop-blur-xl border transition-all duration-300 hover:shadow-lg cursor-pointer ${
                  isDark
                    ? "bg-neutral-800/50 border-neutral-700/50 hover:bg-neutral-800"
                    : "bg-white/70 border-gray-200/50 hover:bg-white"
                }`}
              >
                {/* Product Image */}
                <div className="relative h-40 rounded-lg mb-3 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    unoptimized
                  />
                  {product.originalPrice && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                      SALE
                    </div>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toast.success("Added to favorites");
                    }}
                    className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-xl transition-all opacity-0 group-hover:opacity-100 ${
                      isDark ? "bg-neutral-800/80" : "bg-white/80"
                    }`}
                  >
                    <Icon
                      icon="solar:heart-linear"
                      width={16}
                      className="text-red-500"
                    />
                  </button>
                </div>

                {/* Product Info */}
                <h3
                  className={`text-sm font-medium line-clamp-2 min-h-[40px] transition-colors duration-500 ${
                    isDark ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  {product.name}
                </h3>

                <div className="mt-2 space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[#4A7043] dark:text-[#6aa560] font-bold">
                      Rp{product.price.toLocaleString("id-ID")}
                    </span>
                    {product.originalPrice && (
                      <span className="text-gray-400 text-xs line-through">
                        Rp{product.originalPrice.toLocaleString("id-ID")}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Icon
                      icon="solar:star-bold"
                      width={12}
                      className="text-[#D4AF37]"
                    />
                    <span>{product.rating}</span>
                    <span
                      className={`w-px h-3 mx-1 ${
                        isDark ? "bg-gray-600" : "bg-gray-300"
                      }`}
                    />
                    <span>
                      {product.sold >= 1000
                        ? `${(product.sold / 1000).toFixed(0)}k+`
                        : product.sold}{" "}
                      sold
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-[10px] text-gray-400 mt-2">
                    <Icon icon="solar:shop-linear" width={12} />
                    <span>{product.seller}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <Icon
                icon="solar:box-minimalistic-bold-duotone"
                width={64}
                className={`mx-auto mb-4 ${
                  isDark ? "text-gray-700" : "text-gray-300"
                }`}
              />
              <p
                className={`text-lg font-medium ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                No products found in this category
              </p>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
