/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        atlGold: "#C9A646",
        atlNavy: "#0D1C2E"
      },
      boxShadow: {
        soft: "0 12px 30px rgba(13,28,46,0.12)",
        glow: "0 0 0 4px rgba(201,166,70,0.2)"
      }
    }
  },
  plugins: []
};
