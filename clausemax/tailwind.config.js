/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Example: Include all files in the 'src' directory
  ],
  theme: {
    extend: {
      colors: {
        primary: "#010202",
        nav: "#161616",
        buttonOrange:"#D69231",
        buttonBlack: "#2D2D2D",
        contact: "#2b2c2c",
        explore: "#072945",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'radial': 'radial-gradient(ellipse, var(--tw-gradient-stops))',
        'radial-at-t': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

