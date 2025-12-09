/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // Test Define Semua
    "./**/*.{js,ts,jsx,tsx,mdx}",
    "!./node_modules", // Exclude node_modules agar tidak warning :D
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
