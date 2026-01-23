/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkText: '#1d1d1f',
        premium: {
          dark: "#0f172a", // Slate 900
          light: "#f8fafc", // Slate 50
          accent: "#0ea5e9", // Sky 500
          text: "#334155", // Slate 700
          subtext: "#64748b", // Slate 500
          card: "#ffffff",
        },
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
