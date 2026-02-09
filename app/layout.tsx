import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WarungHub – Hubungkan Toko, Produk, dan Peluang UMKM!",
  description: "Platform marketplace terpercaya yang menghubungkan UMKM Indonesia dengan peluang pasar yang lebih luas.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-[#4A7043] selection:text-white">
        {children}
      </body>
    </html>
  );
}
