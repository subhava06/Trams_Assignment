/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: "#E6F4E0",
        highlightGreen: "#B2E0C8",
        highlightPink: "#F7A8C4",
        highlightYellow: "#F5C842",
      },

      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },

      boxShadow: {
        soft: "0 10px 40px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
}