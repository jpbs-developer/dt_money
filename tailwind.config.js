/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'green-100': "#00B37E",
        'green-200': "#00875F",
        'green-300': "#015F43",
        "gray-100": "#121214",
        "gray-200": "#202024",
        "gray-300": "#29292E",
        "gray-400": "#323238",
        "gray-500": "#7C7C8A",
        "gray-600": "#C4C4CC",
        "gray-700": "#E1E1E6",
        "red-100": "#F75A68",
        "red-200": "#AA2834",
      },
    },
  },
  plugins: [],
};
