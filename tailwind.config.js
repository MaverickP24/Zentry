/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          zentry: ["zentry", "sans-serif"],
          general: ["general", "sans-serif"],
          circularWeb: ["circular-web", "sans-serif"],
          robertMedium: ["robert-medium", "sans-serif"],
          robertRegular: ["robert-regular", "sans-serif"],
        },
        colors: {
          blue: {
            50: "#DFDFF0",
            75: "#dfdff2",
            100: "#F0F2FA",
            200: "#010101",
            300: "#4FB7DD",
          },
          violet: {
            300: "#8e983f",
          },
          yellow: {
            100: "#8e983f",
            300: "#edff66",
          },
        },
      },
    },
    plugins: [],
  };
  