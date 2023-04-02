/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        brand: {
          50: "#FDEDE8",
          100: "#FBDED5",
          200: "#F9CBBD",
          300: "#F7B9A6",
          400: "#F6AA93",
          500: "#F4987C",
          600: "#F28564",
          700: "#F07651",
          800: "#EE643A",
          900: "#EC5324",
          950: "#7F260B",
        },
        accent: colors.slate,
      },
      fontFamily: {
        display: ["var(--font-roboto)", ...fontFamily.sans],
        sans: ["var(--font-archivo)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
}
