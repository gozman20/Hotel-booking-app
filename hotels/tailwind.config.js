/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Gilda Display",
      secondary: "Barlow",
      tertiary: "Barlow Condensed",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "320px",
      // ss: "620px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: {
          DEFAULT: "#a37d4c",
          hover: "#967142",
        },
      },
      backgroundImage: {
        room: "url('./assets/room.jpg')",
      },
    },
  },
  plugins: [],
};
