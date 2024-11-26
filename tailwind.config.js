/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#007bff",
        "secondary-orange": "#ff7f00",
        "accent-teal": "#00b8d9",
        "light-blue1": "#80c7ff",
        "light-blue2": "#a7d8ff",
        "powder-blue": "#b0e0e6",
        "Royal-blue": "#4169e1",
        "Secondary-lite": "#fcede6",
        "Secondary-orange-lite": "#ff9934",
        "off-white": "#f6f6f6"
      },
      fontFamily: {
        "Inter": ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}

