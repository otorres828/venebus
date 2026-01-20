/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#17a1cf",
        "accent-coral": "#FF6A47",
        "background-light": "#fbfaf9",
        "background-dark": "#1a1f23",
        "card-light": "#ffffff",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
