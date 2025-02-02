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
        amsterdam: ['"Amsterdam Four_ttf"', "sans-serif"], // Add Amsterdam Four font here
        bigshouldersdisplay: ['"Big Shoulders Display"', "sans-serif"],
        Audrey: ["Audrey-Regular", "Audrey-Bold", "sans-serif"],
        // amsterdam: ["Amsterdam", "sans-serif"],
        kaushan: ["Kaushan Script", "cursive"],
      },

      // fontFamily: {},

      // fontFamily: {},

      // fontFamily: {
      //   // Add this line
      // },
      screens: {
        xs: "480px",
        xxs: "360px",
        xxxs: "240px",
      },
      backgroundImage: {
        "heading-gradient": "linear-gradient(90deg, white, #e6e6e6)",
        "radial-black-darkred-red":
          "radial-gradient(circle, black, darkred, red)",
      },
      animation: {
        floating: "floating 2.6s infinite linear",
      },
      keyframes: {
        floating: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(10px)" },
        },
      },
    },
  },
  plugins: [],
};
