module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightning: {
          50: "#fdfaf6",
          100: "#fcf4ed",
          200: "#ffecd2",
          300: "#f1d3b7",
          400: "#e7b280",
          500: "#dd914a",
          600: "#c78343",
          700: "#a66d38",
          800: "#85572c",
          900: "#6c4724",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
