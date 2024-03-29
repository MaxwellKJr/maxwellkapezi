const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00FFA5",
        secondary: "#003120",
      },
      backgroundImage: {
        "hero-img": "url('/img/maxwell.jpg')",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        baskerville: ["Libre Baskerville"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
