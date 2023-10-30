/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480x",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily:{
        leagueSpartan:['League Spartan', 'sans-serid']
      },
      colors: {
        desaturatedDarkCyan: "hsl(180, 29%, 50%)",
        lightGrayishCyan: "hsl(180, 52%, 96%)",
        lightGrayishCyan2: "hsl(180, 31%, 95%)",
        darkGrayishCyan: "hsl(180, 8%, 52%)",
        veryDarkGreyishCyan: "hsl(180, 14%, 20%)",
      },
    },
  },
  plugins: [],
};
