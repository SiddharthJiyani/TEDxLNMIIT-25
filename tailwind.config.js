/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customDark: "#141414", // Custom dark background color
        bordorColor: "#3b3b3b", // Border color
      },
      fontFamily: {
        generalSans: [
          "GeneralSans-Regular",
          "GeneralSans-Extralight",
          "GeneralSans-Light",
          "GeneralSans-Medium",
          "GeneralSans-Semibold",
          "GeneralSans-Bold",
          "sans-serif",
        ],
      },
      screens: {
        xs: "480px",
        xxs: "360px",
        xxxs: "240px",
      },
      backgroundImage: {
        "heading-gradient": "linear-gradient(90deg, white, #e6e6e6)",
      },
    },
  },
  plugins: [],
};
