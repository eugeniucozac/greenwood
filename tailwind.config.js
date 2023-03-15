/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        screens: {
          xl: "1180px",
        },
      },
      colors: {
        blue: "#0073BB",
        darkBlue: "#0B2F50",
        grey: "#666",
        black: "#212529",
        lightGrey: "#ccc",
        lighterGrey: "#DBE3EA",
      },
    },
  },
  plugins: [],
};
