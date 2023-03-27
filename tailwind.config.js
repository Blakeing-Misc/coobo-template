/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0053A3",
        secondary: "#dd9933",
      },
      fontFamily: {
        display: ["var(--font-roboto)", ...fontFamily.sans],
        sans: ["var(--font-archivo)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
}
