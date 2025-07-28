// @type {import('tailwindcss').Config} 
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
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
        primary: "#F6A64F",
        secondary: "#b56141",
        background: "#FFFCF8",
        white: "#FBFBFB",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #f4a44f, #ac573f)",
      },
    },
  },
  plugins: [],
};
