/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        green: "#00875F",
        "black-100": "#29292E",
        "black-200": "#121214",
        "gray-100": "#C4C4CC",
        "gray-200": "#E1E1E6",
      },
    },
  },
  plugins: [],
};
