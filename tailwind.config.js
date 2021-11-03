module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        ripple: {
          "0%, 100%": { transform: "scale(2)" },
        },
        animation: {
          ripple: "ripple 1s ease-in-out",
        },
      },
    },
  },
  mode: "jit",
  fontFamily: {
    sans: ["Cairo"],
    serif: ["Cairo"],
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-rtl")],
};
