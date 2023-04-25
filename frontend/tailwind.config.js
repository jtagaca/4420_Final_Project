/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#353d43",
          100: "#d7d8d9",
          200: "#aeb1b4",
          300: "#868b8e",
          400: "#5d6469",
          500: "#353d43",
          600: "#2a3136",
          700: "#202528",
          800: "#15181b",
          900: "#0b0c0d",
          navbar: "rgba(42, 49, 54, 0.5)",
        },
      },
    },
  },
  plugins: [],
};
