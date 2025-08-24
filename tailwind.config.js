module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { atl: { primary: "#0ea5e9", dark: "#0b3954", accent: "#22c55e" } },
      boxShadow: { soft: "0 10px 30px rgba(2, 6, 23, 0.08)" }
    }
  },
  plugins: []
};
