/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      fontFamily:{
        cinzel: ["Cinzel", "serif"],
        sans: ["Nunito Sans", "sans-serif"],
        courier: ["Courier Prime", "monospace"],
        // mukta:["Mukta", "sans-serif"],
        dm: ["DM Serif Display", "serif"],
      },
    },
  },
      colors: {
        background: "#15302d",
        vgreen: "#1b4541",
        tBlack: "#1d1d1f"
      },

      fontSize: {
        base: "1.0625rem",
      },
  plugins: [],
};
