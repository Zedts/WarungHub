import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Web",
  description: "Created By Zedt",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.bunny.net/css?family=poppins:300,400,500,600,700&display=swap"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
