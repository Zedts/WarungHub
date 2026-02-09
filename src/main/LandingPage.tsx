"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

// --- CONSTANTS & DATA ---
const NAV_LINKS = [
  { href: "#benefits", label: "Fitur" },
  { href: "#marketplace", label: "Marketplace" },
  { href: "#cara-kerja", label: "Cara Kerja" },
];

const FEATURES = [
  {
    icon: "solar:shop-2-linear",
    colorClass: "text-primary",
    title: "Instant Store Deployment",
    desc: "Launch your digital storefront in minutes with our automated onboarding process. No coding required.",
  },
  {
    icon: "solar:pie-chart-2-bold-duotone",
    colorClass: "text-secondary",
    title: "Advanced Analytics",
    desc: "Gain deep insights into sales performance, inventory turnover, profit management, and customer behavior.",
  },
  {
    icon: "solar:shield-check-bold-duotone",
    colorClass: "text-primary",
    title: "Secure Infrastructure",
    desc: "Enterprise-level security with encrypted transactions and Escrow protection for complete peace of mind.",
  },
];

const PRODUCTS = [
  {
    category: "Interior",
    title: "Artisan Teak Console",
    price: "$125.00",
    rating: "4.9",
    icon: "solar:armchair-2-linear",
  },
  {
    category: "Fashion",
    title: "Premium Woven Shirt",
    price: "$45.00",
    rating: "5.0",
    icon: "solar:t-shirt-linear",
  },
  {
    category: "Wellness",
    title: "Organic Facial Serum",
    price: "$24.00",
    rating: "4.8",
    icon: "solar:cosmetic-linear",
  },
  {
    category: "Culinary",
    title: "Gourmet Spices Set",
    price: "$18.50",
    rating: "4.9",
    icon: "solar:chef-hat-linear",
  },
];

const STEPS = [
  {
    title: "1. Daftar Akun",
    desc: "Isi data diri Anda untuk membuat akun WarungHub gratis.",
    icon: "solar:user-plus-linear",
    variant: "primary",
  },
  {
    title: "2. Buat Warung",
    desc: "Lengkapi profil toko, logo, dan deskripsi usaha Anda.",
    icon: "solar:shop-2-linear",
    variant: "default",
  },
  {
    title: "3. Upload Produk",
    desc: "Foto produk Anda, tambahkan harga dan stok yang tersedia.",
    icon: "solar:upload-track-linear",
    variant: "default",
  },
  {
    title: "4. Mulai Jual",
    desc: "Terima pesanan dan kirim produk ke pelanggan di seluruh Indonesia.",
    icon: "solar:wallet-money-linear",
    variant: "default",
  },
];

const STATS = [
  { value: "1,250+", label: "Penjual Aktif" },
  { value: "10rb+", label: "Total Produk" },
  { value: "100rb+", label: "Transaksi Sukses" },
  {
    value: "4.8",
    label: "Rating Rata-rata",
    isRating: true,
  },
];

// --- SUB-COMPONENTS ---

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="text-center max-w-2xl mx-auto mb-16">
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1a1a1a] mb-4">
      {title}
    </h2>
    <p className="text-gray-500 text-lg">{subtitle}</p>
  </div>
);

const FeatureCard = ({ item }: { item: typeof FEATURES[0] }) => (
  <div className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
    <div className={`w-14 h-14 rounded-2xl border border-gray-100 bg-white shadow-lg shadow-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${item.colorClass}`}>
      <Icon icon={item.icon} width="28" height="28" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
    <p className="text-gray-500 leading-relaxed">{item.desc}</p>
  </div>
);

const ProductCard = ({ product }: { product: typeof PRODUCTS[0] }) => (
  <div className="group cursor-pointer p-4 rounded-2xl border border-gray-100 bg-white hover:border-primary/30 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
    <div className="rounded-xl h-60 w-full mb-5 relative overflow-hidden bg-gray-50 group-hover:bg-[#F0F4F1] transition-colors">
      <div className="absolute inset-0 flex items-center justify-center text-gray-300 group-hover:scale-105 transition-transform duration-700">
        <Icon icon={product.icon} width="56" />
      </div>
    </div>
    <div className="flex justify-between items-start mb-2">
      <span className="text-xs text-secondary font-bold tracking-wider uppercase">
        {product.category}
      </span>
      <div className="flex items-center gap-1 text-xs font-bold text-gray-900">
        <Icon icon="solar:star-bold" width="12" className="text-[#D4AF37]" />
        {product.rating}
      </div>
    </div>
    <h3 className="font-bold text-lg mb-1 text-gray-900 group-hover:text-primary transition-colors">
      {product.title}
    </h3>
    <div className="font-bold mb-3 text-gray-900">{product.price}</div>
  </div>
);

// --- MAIN PAGE COMPONENT ---

export default function LandingPage() {
  return (
    <>
      <div 
        className="absolute top-0 w-full h-screen -z-10 bg-cover bg-center opacity-30 saturate-200 blur-lg"
        style={{
          backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/884dca69-4cd6-4c60-a150-c149e26556c2_3840w.webp")',
          maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-gray-200/50 transition-all duration-300">
        <div className="flex h-16 max-w-7xl mx-auto px-6 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-primary">
            <Icon icon="solar:shop-2-linear" width="28" strokeWidth="1.5" />
            <span className="text-lg font-semibold tracking-tight text-gradient-primary">
              WarungHub
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button className="text-sm font-medium text-primary hidden sm:block px-4 py-2 hover:bg-primary/5 rounded-full transition-colors">
              Masuk
            </button>
            <button className="bg-gradient-to-r from-primary to-secondary text-sm font-semibold px-6 py-2.5 rounded-full text-white hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="overflow-hidden pt-32 pb-20 relative">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary bg-primary/5 border border-primary/10 rounded-full mb-8 px-4 py-1.5">
                The #1 E-Commerce Platform
                <span className="relative inline-flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-gradient-to-r from-primary to-secondary opacity-75 animate-ping"></span>
                  <span className="relative inline-flex w-full h-full rounded-full bg-gradient-to-r from-primary to-secondary"></span>
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-[#1a1a1a] mb-6 leading-[1.1]">
                Future of <br />
                <span className="text-gradient-primary">Digital E-Commerce</span>
              </h1>
              
              <p className="leading-relaxed text-lg font-normal text-gray-500 max-w-lg mb-10">
                Accelerate your business growth with our integrated ecosystem. 
                Connect inventory, analyze performance, and expand your market reach globally.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-primary to-secondary rounded-xl px-8 py-4 shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 transition-all">
                  Start Scaling Now
                  <Icon icon="solar:arrow-right-linear" width="20" strokeWidth="2" />
                </button>
                <button className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-600 bg-white border border-gray-200 rounded-xl px-8 py-4 hover:bg-gray-50 hover:text-primary hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all">
                  <Icon icon="solar:play-circle-linear" width="20" strokeWidth="2" />
                  View Demo
                </button>
              </div>
            </div>

            {/* Right Visual (Dashboard Card) */}
            <div className="relative h-[500px] w-full hidden lg:block">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-secondary/20 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none" />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[85%] bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl shadow-gray-200/50 border border-white/50 p-8 z-10">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20 text-white">
                      <Icon icon="solar:shop-2-bold" width="24" />
                    </div>
                    <div>
                      <div className="text-base font-bold text-gray-800">WarungHub Enterprise</div>
                      <div className="text-xs text-secondary font-medium tracking-wide">VERIFIED MERCHANT</div>
                    </div>
                  </div>
                  <div className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-green-50 text-green-700">
                    Active
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="p-4 rounded-xl border bg-gray-50 border-gray-100">
                    <p className="text-xs text-gray-500 mb-1">Total Revenue</p>
                    <p className="text-xl font-bold text-primary">$42,500</p>
                    <div className="mt-2 h-1.5 w-full rounded-full overflow-hidden bg-gray-200">
                      <div className="h-full w-[75%] bg-gradient-to-r from-primary to-secondary rounded-full" />
                    </div>
                  </div>
                  <div className="p-4 rounded-xl border bg-gray-50 border-gray-100">
                    <p className="text-xs text-gray-500 mb-1">Active Listings</p>
                    <p className="text-xl font-bold text-gray-800">1,240</p>
                  </div>
                  <div className="p-4 rounded-xl border bg-gray-50 border-gray-100">
                    <p className="text-xs text-gray-500 mb-1">Growth</p>
                    <p className="text-xl font-bold text-secondary">+24.5%</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { name: 'Premium Coffee Blend', sub: 'Export Quality', price: '$12,400', icon: 'solar:box-linear' },
                    { name: 'Artisan Textiles', sub: 'Limited Edition', price: '$8,250', icon: 'solar:tag-linear' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-3 rounded-xl transition-colors cursor-pointer group hover:bg-gray-50">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-100 text-gray-400 group-hover:bg-white group-hover:shadow-sm">
                        <Icon icon={item.icon} width="20" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-800">{item.name}</div>
                        <div className="text-xs text-gray-400">{item.sub}</div>
                      </div>
                      <div className="text-sm font-bold text-gray-800">{item.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader 
              title="Enterprise-Grade Ecosystem" 
              subtitle="Comprehensive tools designed to accelerate digital transformation for modern businesses."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((feature, idx) => (
                <FeatureCard key={idx} item={feature} />
              ))}
            </div>
          </div>
        </section>

        {/* Marketplace Section */}
        <section id="marketplace" className="py-24 border-y bg-gray-50/30 border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-[#1a1a1a] mb-2">
                  Premium Marketplace
                </h2>
                <p className="text-gray-600">
                  Explore curated products from top-tier verified vendors as a customer.
                </p>
              </div>
              <Link href="#" className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
                Lihat Semua
                <Icon icon="solar:arrow-right-linear" width="16" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {PRODUCTS.map((product, idx) => (
                <ProductCard key={idx} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="cara-kerja" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader 
              title="Seamless Integration" 
              subtitle="Four simple steps to digitize your operations."
            />

            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Connector Line */}
              <div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 -z-10" />

              {STEPS.map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl ${
                    step.variant === 'primary' 
                      ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-primary/20' 
                      : 'bg-white border border-primary/20 text-primary shadow-primary/5'
                  }`}>
                    <Icon icon={step.icon} width="32" strokeWidth="1.5" />
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-sm px-4 text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-gradient-to-r from-primary to-secondary relative overflow-hidden text-white">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 0%, transparent 20%), radial-gradient(circle at 80% 50%, white 0%, transparent 20%)' }} />
          
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
              {STATS.map((stat, idx) => (
                <div key={idx} className="p-4">
                  <div className="text-4xl md:text-5xl font-semibold mb-2 tracking-tight flex items-center justify-center gap-1">
                    {stat.value}
                    {stat.isRating && (
                      <span className="text-2xl text-[#D4AF37]">
                        <Icon icon="solar:star-bold" />
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-medium text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="overflow-hidden py-32 relative px-6">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 -z-10" />
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1a1a1a] mb-6">
              Ready to Scale Up?
            </h2>
            <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto font-light">
              Join thousands of forward-thinking businesses on WarungHub.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="text-base font-bold text-white bg-gradient-to-r from-primary to-secondary rounded-xl py-5 px-10 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 transition-all">
                Daftar Sekarang – Gratis!
              </button>
              <button className="flex items-center justify-center gap-2 text-base font-bold text-gray-800 bg-white border border-gray-200 rounded-xl py-5 px-10 hover:bg-gray-50 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 transition-all">
                <Icon icon="solar:chat-round-dots-linear" width="20" />
                Chat dengan Tim Kami
              </button>
            </div>
            <p className="mt-6 text-xs text-gray-500">
              *Tidak ada biaya tersembunyi. Komisi hanya saat produk terjual.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t pt-16 pb-8 bg-white border-gray-200 text-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 text-primary mb-6">
                <Icon icon="solar:shop-2-linear" width="24" strokeWidth="1.5" />
                <span className="text-lg font-semibold tracking-tight">WarungHub</span>
              </div>
              <p className="text-gray-500 leading-relaxed mb-6">
                Platform marketplace terpercaya yang menghubungkan UMKM Indonesia dengan peluang pasar yang lebih luas.
              </p>
              <div className="flex gap-4 text-gray-400">
                {['camera-linear', 'facebook-linear', 'phone-linear'].map((icon) => (
                  <Link key={icon} href="#" className="hover:text-primary transition-colors">
                    <Icon icon={`solar:${icon}`} width="20" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-gray-900">Perusahaan</h4>
              <ul className="space-y-4 text-gray-500">
                {['Tentang Kami', 'Karir', 'Blog UMKM', 'Kontak'].map((item) => (
                  <li key={item}><Link href="#" className="hover:text-primary transition-colors">{item}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-gray-900">Bantuan</h4>
              <ul className="space-y-4 text-gray-500">
                {['Pusat Bantuan', 'Syarat & Ketentuan', 'Kebijakan Privasi', 'Panduan Penjual'].map((item) => (
                  <li key={item}><Link href="#" className="hover:text-primary transition-colors">{item}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-gray-900">Hubungi Kami</h4>
              <ul className="space-y-4 text-gray-500">
                <li className="flex items-center gap-3">
                  <Icon icon="solar:letter-linear" width="18" /> hello@warunghub.id
                </li>
                <li className="flex items-center gap-3">
                  <Icon icon="solar:phone-calling-linear" width="18" /> +62 812 3456 7890
                </li>
                <li className="flex items-start gap-3">
                  <Icon icon="solar:map-point-linear" width="18" className="mt-1" /> 
                  Jl. Sudirman No. 45, Jakarta Selatan
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs border-gray-100 text-gray-400">
            <p>© 2026 WarungHub Indonesia. Hak Cipta Dilindungi.</p>
            <div className="flex gap-6">
              {['Privacy', 'Terms', 'Cookies'].map((item) => (
                <Link key={item} href="#" className="hover:text-gray-600">{item}</Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}