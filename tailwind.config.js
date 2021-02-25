module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", "Helvetica", "sans-serif"],
      },
      colors: {
        primary: "#EC1F27",
        secondary: "#7F7C84",
        dark: "#101010",
        section: "#F8F8F8",
        white: "#ffffff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
