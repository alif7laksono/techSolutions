/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        subheading: ["Roboto", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
      backgroundColor: {
        primary: "#F5F5F5",
        secondary: "#FFFFFF",
      },
      textColor: {
        primary: "#333333",
        hover: "#007BFF",
      },
      colors: {
        button1: "#007BFF",
        button2: "#6C757D",
      },

      colors: {
        button1: "#007BFF",
        button2: "#6C757D",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
        slideInLeft: "slideInLeft 2s ease-in-out",
        slideInRight: "slideInRight 2s ease-in-out",
        slideDown: "slideDown 2s ease-in-out",
      },
    },
  },
  plugins: [],
};
